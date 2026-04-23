// LabShine Lead Capture — Netlify Serverless Function
// POST /api/lead  (rewrites to /.netlify/functions/lead via netlify.toml)
//
// ENV VARS required in Netlify dashboard:
//   SENDGRID_API_KEY   — your SendGrid key
//   NOTION_TOKEN       — your Notion integration token
//   NOTION_LEADS_DB    — Notion CRM database ID
//   ADRIAN_EMAIL       — email to notify (default: labshinedetailing@icloud.com)

const https = require('https');

const SENDGRID_KEY  = process.env.SENDGRID_API_KEY  || '';
const NOTION_TOKEN  = process.env.NOTION_TOKEN       || '';
const NOTION_DB     = process.env.NOTION_LEADS_DB    || 'ccabe196-26d7-4a84-a397-024e2f907696';
const ADRIAN_EMAIL  = process.env.ADRIAN_EMAIL       || 'labshinedetailing@icloud.com';
const FROM_CUSTOMER = 'info@labshineauto.com';
const FROM_INTERNAL = 'labshinedetailing@icloud.com';

// ─── HTTP helper ──────────────────────────────────────────────────────────────
function apiPost(hostname, path, headers, body) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify(body);
    const req = https.request({
      hostname, path, method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(payload), ...headers }
    }, res => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    });
    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

// ─── SendGrid ─────────────────────────────────────────────────────────────────
async function sendEmail({ to, toName, fromEmail, fromName, subject, html }) {
  if (!SENDGRID_KEY) return { success: false, reason: 'no_key' };
  try {
    const r = await apiPost('api.sendgrid.com', '/v3/mail/send',
      { Authorization: `Bearer ${SENDGRID_KEY}` },
      {
        personalizations: [{ to: [{ email: to, name: toName || '' }] }],
        from: { email: fromEmail, name: fromName || 'LabShine Auto Detailing' },
        subject,
        content: [{ type: 'text/html', value: html }]
      }
    );
    return { success: r.status === 202, status: r.status };
  } catch (e) {
    return { success: false, error: e.message };
  }
}

// ─── Notion CRM ───────────────────────────────────────────────────────────────
async function pushToNotion({ leadId, name, phone, email, vehicle, service, zip, source }) {
  if (!NOTION_TOKEN) return { success: false, reason: 'no_token' };

  const serviceMap = {
    'full detail': 'Full Detail', 'interior only': 'Interior Only',
    'exterior only': 'Exterior Only', 'ceramic coating': 'Ceramic Coating'
  };
  const notionService = serviceMap[(service || '').toLowerCase()] || null;

  const props = {
    'Name':    { title: [{ text: { content: name } }] },
    'Phone':   { phone_number: phone },
    'Source':  { select: { name: source || 'website' } },
    'Status':  { select: { name: 'New' } },
    'Lead ID': { rich_text: [{ text: { content: leadId } }] },
    'Notes':   { rich_text: [{ text: { content: `Vehicle: ${vehicle || '—'}\nZIP: ${zip || '—'}` } }] },
  };
  if (email) props['Email'] = { email };
  if (notionService) props['Service'] = { select: { name: notionService } };

  try {
    const r = await apiPost('api.notion.com', '/v1/pages',
      {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28'
      },
      { parent: { database_id: NOTION_DB }, properties: props }
    );
    const parsed = JSON.parse(r.body);
    return { success: r.status === 200, id: parsed.id };
  } catch (e) {
    return { success: false, error: e.message };
  }
}

// ─── Handler ──────────────────────────────────────────────────────────────────
exports.handler = async (event) => {
  const origin = event.headers.origin || event.headers.Origin || '';
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: corsHeaders, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: corsHeaders, body: 'Method not allowed' };
  }

  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch {
    return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: 'Invalid JSON' }) };
  }

  const { name, phone, email, vehicle, service, zip, source,
          utm_source, utm_campaign } = body;

  if (!name || !phone) {
    return {
      statusCode: 400, headers: corsHeaders,
      body: JSON.stringify({ success: false, error: 'name and phone required' })
    };
  }

  const leadId = `web_${Date.now()}`;
  const firstName = name.split(' ')[0];
  const sourceTag = source || utm_source || 'website';
  const result = { leadId, notion: {}, customerEmail: {}, adrianEmail: {} };

  // 1. Push to Notion CRM
  result.notion = await pushToNotion({ leadId, name, phone, email, vehicle, service, zip, source: sourceTag });

  // 2. Customer confirmation email
  if (email) {
    result.customerEmail = await sendEmail({
      to: email, toName: name,
      fromEmail: FROM_CUSTOMER, fromName: 'LabShine Auto Detailing',
      subject: 'LabShine Auto Detailing — We got your request!',
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;background:#0a0a0a;color:#fff;padding:40px;">
        <div style="font-size:28px;font-weight:900;letter-spacing:4px;margin-bottom:8px">LAB<span style="color:#00c8f0">SHINE</span></div>
        <p style="color:rgba(255,255,255,0.8)">Hey ${firstName},</p>
        <p style="color:rgba(255,255,255,0.8)">Thanks for reaching out! We received your request for <strong>${service || 'auto detailing'}</strong> and we're putting together your custom quote now.</p>
        <p style="color:rgba(255,255,255,0.8)">We'll follow up shortly. In the meantime, call or text us at <strong>(346) 452-9991</strong>.</p>
        <div style="margin:24px 0;padding:16px;background:rgba(0,200,240,0.08);border:1px solid rgba(0,200,240,0.2);">
          <div style="color:#00c8f0;font-weight:bold;margin-bottom:8px">Your Request</div>
          <div style="color:rgba(255,255,255,0.7)">Service: <strong style="color:#fff">${service || '—'}</strong></div>
          <div style="color:rgba(255,255,255,0.7)">Vehicle: <strong style="color:#fff">${vehicle || '—'}</strong></div>
          ${zip ? `<div style="color:rgba(255,255,255,0.7)">Area: <strong style="color:#fff">${zip}</strong></div>` : ''}
        </div>
        <hr style="border-color:rgba(255,255,255,0.1);margin:24px 0"/>
        <p style="color:rgba(255,255,255,0.3);font-size:12px">LabShine Auto Detailing · Houston TX · labshineautodetailing.com</p>
      </div>`
    });
  }

  // 3. Adrian notification
  result.adrianEmail = await sendEmail({
    to: ADRIAN_EMAIL, toName: 'Adrian',
    fromEmail: FROM_INTERNAL, fromName: 'LabShine Auto Detailing',
    subject: `🔥 New Lead: ${name} — ${service || 'inquiry'} (${sourceTag})`,
    html: `<div style="font-family:Arial,sans-serif;max-width:600px;background:#0a0a0a;color:#fff;padding:32px;">
      <div style="font-size:24px;font-weight:900;color:#00c8f0;margin-bottom:16px">🔥 NEW LEAD</div>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="color:rgba(255,255,255,0.5);padding:6px 0;width:120px">Name</td><td style="color:#fff;font-weight:bold">${name}</td></tr>
        <tr><td style="color:rgba(255,255,255,0.5);padding:6px 0">Phone</td><td style="color:#00c8f0;font-weight:bold">${phone}</td></tr>
        ${email ? `<tr><td style="color:rgba(255,255,255,0.5);padding:6px 0">Email</td><td>${email}</td></tr>` : ''}
        <tr><td style="color:rgba(255,255,255,0.5);padding:6px 0">Vehicle</td><td>${vehicle || '—'}</td></tr>
        <tr><td style="color:rgba(255,255,255,0.5);padding:6px 0">Service</td><td style="color:#f59e0b;font-weight:bold">${service || '—'}</td></tr>
        <tr><td style="color:rgba(255,255,255,0.5);padding:6px 0">ZIP</td><td>${zip || '—'}</td></tr>
        <tr><td style="color:rgba(255,255,255,0.5);padding:6px 0">Source</td><td>${sourceTag}</td></tr>
        ${utm_campaign ? `<tr><td style="color:rgba(255,255,255,0.5);padding:6px 0">Campaign</td><td>${utm_campaign}</td></tr>` : ''}
        <tr><td style="color:rgba(255,255,255,0.5);padding:6px 0">Lead ID</td><td style="font-size:11px;color:rgba(255,255,255,0.3)">${leadId}</td></tr>
      </table>
      <div style="margin-top:24px;padding:16px;background:rgba(245,158,11,0.08);border:1px solid rgba(245,158,11,0.3);">
        <div style="color:#f59e0b;font-weight:bold">Action Required</div>
        <div style="color:rgba(255,255,255,0.8);margin-top:4px">Call or text ${name} at <strong>${phone}</strong> within 60 minutes.</div>
      </div>
    </div>`
  });

  return {
    statusCode: 200,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      success: true, leadId,
      notion: result.notion.success,
      customerEmail: result.customerEmail.success || false,
      adrianEmail: result.adrianEmail.success,
      message: `Lead ${leadId} received.`
    })
  };
};
