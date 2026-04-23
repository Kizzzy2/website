// LabShine — Unified Lead Capture Webhook
// POST /api/lead
// Sources: LabShine site, Framer pages, blog CTAs, manual
//
// ENV VARS (set in Netlify dashboard):
//   SENDGRID_API_KEY   — SendGrid key
//   NOTION_TOKEN       — Notion integration token
//   NOTION_LEADS_DB    — CRM database ID
//   ADRIAN_EMAIL       — notification email
//   TWILIO_SID / TWILIO_TOKEN / TWILIO_FROM  — optional SMS
//   CLOSER_WEBHOOK     — URL of closer function (auto-set to same domain)

const https = require('https');

const SENDGRID_KEY  = process.env.SENDGRID_API_KEY  || '';
const NOTION_TOKEN  = process.env.NOTION_TOKEN       || '';
const NOTION_DB     = process.env.NOTION_LEADS_DB    || 'ccabe196-26d7-4a84-a397-024e2f907696';
const ADRIAN_EMAIL  = process.env.ADRIAN_EMAIL       || 'labshinedetailing@icloud.com';
const FROM_EMAIL    = 'info@labshineauto.com';

// Square deposit links by service
const SQUARE_LINKS = {
  'full detail sedan': 'https://square.link/u/LCpvdkjL',
  'full detail suv':   'https://square.link/u/QtFCLohH',
  'interior only':     'https://square.link/u/6AyCpTlm',
  'interior detail':   'https://square.link/u/6AyCpTlm',
  'exterior only':     'https://square.link/u/PunCOLYk',
  'exterior detail':   'https://square.link/u/PunCOLYk',
  'ceramic coating':   'https://square.link/u/SIgbTkz1',
  'full detail':       'https://square.link/u/LCpvdkjL', // default sedan
};

function getSquareLink(service, vehicle) {
  if (!service) return 'https://square.link/u/LCpvdkjL';
  const s = service.toLowerCase();
  const v = (vehicle || '').toLowerCase();
  if (s.includes('full') && (v.includes('suv') || v.includes('truck'))) return SQUARE_LINKS['full detail suv'];
  for (const [key, url] of Object.entries(SQUARE_LINKS)) {
    if (s.includes(key.replace(' sedan','').replace(' suv',''))) return url;
  }
  return 'https://square.link/u/LCpvdkjL';
}

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
async function sendEmail({ to, toName, subject, html }) {
  if (!SENDGRID_KEY) return { success: false, reason: 'no_key' };
  try {
    const r = await apiPost('api.sendgrid.com', '/v3/mail/send',
      { Authorization: `Bearer ${SENDGRID_KEY}` },
      {
        personalizations: [{ to: [{ email: to, name: toName || '' }] }],
        from: { email: FROM_EMAIL, name: 'LabShine Auto Detailing' },
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
async function pushToNotion(lead) {
  if (!NOTION_TOKEN) return { success: false, reason: 'no_token' };
  const { leadId, name, phone, email, vehicle, service, zip, source,
          utm_source, utm_campaign, framer_page } = lead;

  const serviceOptions = ['Full Detail','Interior Only','Exterior Only','Ceramic Coating','Paint Correction','Fleet'];
  const notionService = serviceOptions.find(s => (service||'').toLowerCase().includes(s.toLowerCase())) || null;

  const props = {
    'Customer Name': { title: [{ text: { content: name } }] },
    'Phone':         { phone_number: phone },
    'Source':        { select: { name: (source || 'website').substring(0, 100) } },
    'Status':        { select: { name: 'New' } },
    'Lead ID':       { rich_text: [{ text: { content: leadId } }] },
    'Notes':         { rich_text: [{ text: { content: `Vehicle: ${vehicle || '—'}\nZIP: ${zip || '—'}` } }] },
  };
  if (email)        props['Email']        = { email };
  if (vehicle)      props['Vehicle']      = { rich_text: [{ text: { content: vehicle } }] };
  if (zip)          props['ZIP']          = { rich_text: [{ text: { content: zip } }] };
  if (notionService) props['Service']     = { select: { name: notionService } };
  if (utm_source)   props['UTM Source']   = { rich_text: [{ text: { content: utm_source } }] };
  if (utm_campaign) props['UTM Campaign'] = { rich_text: [{ text: { content: utm_campaign } }] };
  if (framer_page)  props['Framer Page']  = { rich_text: [{ text: { content: framer_page } }] };
  if (source && source.startsWith('framer')) props['Booking Source'] = { select: { name: 'Framer' } };

  try {
    const r = await apiPost('api.notion.com', '/v1/pages',
      { Authorization: `Bearer ${NOTION_TOKEN}`, 'Notion-Version': '2022-06-28' },
      { parent: { database_id: NOTION_DB }, properties: props }
    );
    const parsed = JSON.parse(r.body);
    return { success: r.status === 200, id: parsed.id };
  } catch (e) {
    return { success: false, error: e.message };
  }
}

// ─── Log to Notion Agent Activity ─────────────────────────────────────────────
async function logActivity(action, leadId, success) {
  const ACTIVITY_DB = process.env.NOTION_ACTIVITY_DB;
  if (!NOTION_TOKEN || !ACTIVITY_DB) return;
  try {
    await apiPost('api.notion.com', '/v1/pages',
      { Authorization: `Bearer ${NOTION_TOKEN}`, 'Notion-Version': '2022-06-28' },
      {
        parent: { database_id: ACTIVITY_DB },
        properties: {
          'Name':      { title: [{ text: { content: `lead-webhook: ${action}` } }] },
          'Agent':     { rich_text: [{ text: { content: 'lead-webhook' } }] },
          'Action':    { rich_text: [{ text: { content: action } }] },
          'Lead ID':   { rich_text: [{ text: { content: leadId } }] },
          'Success':   { checkbox: success },
        }
      }
    );
  } catch (_) {}
}

// ─── Handler ──────────────────────────────────────────────────────────────────
exports.handler = async (event) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };

  if (event.httpMethod === 'OPTIONS') return { statusCode: 204, headers: corsHeaders, body: '' };
  if (event.httpMethod !== 'POST')    return { statusCode: 405, headers: corsHeaders, body: 'Method not allowed' };

  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch {
    return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: 'Invalid JSON' }) };
  }

  const { name, phone, email, vehicle, service, zip,
          source, utm_source, utm_campaign, framer_page } = body;

  if (!name || !phone) {
    return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ success: false, error: 'name and phone required' }) };
  }

  const leadId    = `web_${Date.now()}`;
  const firstName = name.split(' ')[0];
  const sourceTag = source || utm_source || 'website';
  const squareLink = getSquareLink(service, vehicle);
  const result    = {};

  // 1. Push to Notion CRM (non-blocking — return 200 even if Notion is slow)
  result.notion = await pushToNotion({ leadId, name, phone, email, vehicle, service, zip, source: sourceTag, utm_source, utm_campaign, framer_page });

  // 2. Customer confirmation email
  if (email) {
    result.customerEmail = await sendEmail({
      to: email, toName: name,
      subject: 'LabShine Auto Detailing — We got your request!',
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;background:#0a0a0a;color:#fff;padding:40px;">
        <div style="font-size:28px;font-weight:900;letter-spacing:4px;margin-bottom:8px">LAB<span style="color:#00c8f0">SHINE</span></div>
        <p style="color:rgba(255,255,255,0.8)">Hey ${firstName},</p>
        <p style="color:rgba(255,255,255,0.8)">Thanks for reaching out! We received your request for <strong>${service || 'auto detailing'}</strong> and we're putting together your custom quote now.</p>
        <p style="color:rgba(255,255,255,0.8)">We'll follow up shortly. In the meantime, call or text us at <strong>(346) 452-9991</strong>.</p>
        <div style="margin:24px 0;padding:16px;background:rgba(0,200,240,0.08);border:1px solid rgba(0,200,240,0.2);">
          <div style="color:#00c8f0;font-weight:bold;margin-bottom:8px">Ready to lock in your slot?</div>
          <p style="color:rgba(255,255,255,0.7);margin:0 0 12px">Pay a 20% deposit via Square to secure your appointment:</p>
          <a href="${squareLink}" style="display:inline-block;background:#00c8f0;color:#000;font-weight:900;padding:12px 24px;text-decoration:none;letter-spacing:2px;font-size:13px">PAY DEPOSIT →</a>
        </div>
        <div style="color:rgba(255,255,255,0.4);margin-top:8px;font-size:12px">
          Service: ${service || '—'} | Vehicle: ${vehicle || '—'}${zip ? ` | Area: ${zip}` : ''}
        </div>
        <hr style="border-color:rgba(255,255,255,0.1);margin:24px 0"/>
        <p style="color:rgba(255,255,255,0.3);font-size:12px">LabShine Auto Detailing · Houston TX · (346) 452-9991 · info@labshineauto.com</p>
      </div>`
    });
  }

  // 3. Adrian notification
  result.adrianEmail = await sendEmail({
    to: ADRIAN_EMAIL, toName: 'Adrian',
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
      </table>
      <div style="margin-top:24px;padding:16px;background:rgba(245,158,11,0.08);border:1px solid rgba(245,158,11,0.3);">
        <div style="color:#f59e0b;font-weight:bold">Action Required</div>
        <div style="color:rgba(255,255,255,0.8);margin-top:4px">Call/text ${name} at <strong>${phone}</strong> within 60 minutes.</div>
      </div>
    </div>`
  });

  await logActivity('new_lead_received', leadId, result.notion.success || false);

  return {
    statusCode: 200,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      success: true, leadId,
      notion: result.notion.success || false,
      customerEmail: result.customerEmail?.success || false,
      adrianEmail: result.adrianEmail?.success || false,
    })
  };
};
