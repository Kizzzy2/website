// LabShine — Closer Agent
// POST /.netlify/functions/closer
// Triggered by: lead webhook, manual calls
// Actions: SMS via Twilio, confirmation email via SendGrid, logs to Notion
//
// ENV VARS:
//   TWILIO_SID / TWILIO_TOKEN / TWILIO_FROM
//   SENDGRID_API_KEY
//   NOTION_TOKEN / NOTION_ACTIVITY_DB
//   ADRIAN_EMAIL

const https = require('https');

const TWILIO_SID    = process.env.TWILIO_SID    || '';
const TWILIO_TOKEN  = process.env.TWILIO_TOKEN  || '';
const TWILIO_FROM   = process.env.TWILIO_FROM   || '';
const SENDGRID_KEY  = process.env.SENDGRID_API_KEY || '';
const NOTION_TOKEN  = process.env.NOTION_TOKEN  || '';
const ACTIVITY_DB   = process.env.NOTION_ACTIVITY_DB || '';
const ADRIAN_PHONE  = process.env.ADRIAN_PHONE  || '';
const ADRIAN_EMAIL  = process.env.ADRIAN_EMAIL  || 'labshinedetailing@icloud.com';
const FROM_EMAIL    = 'info@labshineauto.com';

const SQUARE_LINKS = {
  'full detail sedan': 'https://square.link/u/LCpvdkjL',
  'full detail suv':   'https://square.link/u/QtFCLohH',
  'interior':          'https://square.link/u/6AyCpTlm',
  'exterior':          'https://square.link/u/PunCOLYk',
  'ceramic':           'https://square.link/u/SIgbTkz1',
  'default':           'https://square.link/u/LCpvdkjL',
};

function getSquareLink(service, vehicle) {
  if (!service) return SQUARE_LINKS.default;
  const s = service.toLowerCase();
  const v = (vehicle || '').toLowerCase();
  if (s.includes('full') && (v.includes('suv') || v.includes('truck'))) return SQUARE_LINKS['full detail suv'];
  if (s.includes('interior')) return SQUARE_LINKS.interior;
  if (s.includes('exterior')) return SQUARE_LINKS.exterior;
  if (s.includes('ceramic'))  return SQUARE_LINKS.ceramic;
  return SQUARE_LINKS['full detail sedan'];
}

// ─── HTTP helper ──────────────────────────────────────────────────────────────
function httpPost(hostname, path, headers, body, encoding = 'json') {
  return new Promise((resolve, reject) => {
    const payload = encoding === 'form'
      ? Object.entries(body).map(([k,v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join('&')
      : JSON.stringify(body);
    const contentType = encoding === 'form' ? 'application/x-www-form-urlencoded' : 'application/json';
    const req = https.request({
      hostname, path, method: 'POST',
      headers: { 'Content-Type': contentType, 'Content-Length': Buffer.byteLength(payload), ...headers }
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

// ─── Twilio SMS ───────────────────────────────────────────────────────────────
async function sendSMS(to, message) {
  if (!TWILIO_SID || !TWILIO_TOKEN || !TWILIO_FROM || !to) {
    return { success: false, reason: 'twilio_not_configured' };
  }
  // Clean phone number
  const phone = to.replace(/\D/g, '');
  const e164 = phone.startsWith('1') ? `+${phone}` : `+1${phone}`;
  try {
    const r = await httpPost(
      'api.twilio.com',
      `/2010-04-01/Accounts/${TWILIO_SID}/Messages.json`,
      { Authorization: `Basic ${Buffer.from(`${TWILIO_SID}:${TWILIO_TOKEN}`).toString('base64')}` },
      { To: e164, From: TWILIO_FROM, Body: message },
      'form'
    );
    const parsed = JSON.parse(r.body);
    return { success: r.status >= 200 && r.status < 300, sid: parsed.sid, error: parsed.message };
  } catch (e) {
    return { success: false, error: e.message };
  }
}

// ─── SendGrid ─────────────────────────────────────────────────────────────────
async function sendEmail({ to, toName, subject, html }) {
  if (!SENDGRID_KEY) return { success: false, reason: 'no_key' };
  try {
    const r = await httpPost('api.sendgrid.com', '/v3/mail/send',
      { Authorization: `Bearer ${SENDGRID_KEY}` },
      {
        personalizations: [{ to: [{ email: to, name: toName || '' }] }],
        from: { email: FROM_EMAIL, name: 'LabShine Auto Detailing' },
        subject,
        content: [{ type: 'text/html', value: html }]
      }
    );
    return { success: r.status === 202 };
  } catch (e) {
    return { success: false, error: e.message };
  }
}

// ─── Notion Activity Log ──────────────────────────────────────────────────────
async function logActivity({ agent, action, leadId, success, notes }) {
  if (!NOTION_TOKEN || !ACTIVITY_DB) return;
  try {
    await httpPost('api.notion.com', '/v1/pages',
      { Authorization: `Bearer ${NOTION_TOKEN}`, 'Notion-Version': '2022-06-28' },
      {
        parent: { database_id: ACTIVITY_DB },
        properties: {
          'Agent':          { title: [{ text: { content: agent } }] },
          'Action':         { rich_text: [{ text: { content: action } }] },
          'Lead ID':        { rich_text: [{ text: { content: leadId || '' } }] },
          'Status':         { select: { name: success ? 'Success' : 'Failed' } },
          'Result Summary': { rich_text: [{ text: { content: notes || '' } }] },
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
  try { body = JSON.parse(event.body || '{}'); }
  catch { return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: 'Invalid JSON' }) }; }

  const { leadId, name, phone, email, vehicle, service, zip, source } = body;
  if (!name || !phone) {
    return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: 'name and phone required' }) };
  }

  const firstName  = name.split(' ')[0];
  const squareLink = getSquareLink(service, vehicle);
  const results    = {};

  // 1. SMS to lead
  const smsBody = `Hey ${firstName}! This is LabShine Auto Detailing in Houston. We got your request for ${service || 'auto detailing'} and we'd love to lock you in. Ready to book? Pay your 20% deposit here: ${squareLink}  Questions? Call/text (346) 452-9991.`;
  results.sms = await sendSMS(phone, smsBody);

  // 2. Qualifier email to lead (if email provided)
  if (email) {
    results.email = await sendEmail({
      to: email, toName: name,
      subject: `${firstName}, your LabShine quote is ready`,
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;background:#0a0a0a;color:#fff;padding:40px;">
        <div style="font-size:28px;font-weight:900;letter-spacing:4px;margin-bottom:16px">LAB<span style="color:#00c8f0">SHINE</span></div>
        <p style="color:rgba(255,255,255,0.9)">Hey ${firstName},</p>
        <p style="color:rgba(255,255,255,0.8)">We reviewed your request and have availability for your <strong>${service || 'detail'}</strong>. Here's how to lock in your slot:</p>
        <ol style="color:rgba(255,255,255,0.7);line-height:2">
          <li>Pay a 20% deposit via Square (link below)</li>
          <li>We confirm your appointment within the hour</li>
          <li>We come to you — driveway, garage, or office</li>
        </ol>
        <div style="margin:24px 0;text-align:center">
          <a href="${squareLink}" style="display:inline-block;background:#00c8f0;color:#000;font-weight:900;padding:16px 32px;text-decoration:none;letter-spacing:3px;font-size:14px">BOOK NOW — PAY DEPOSIT →</a>
        </div>
        <p style="color:rgba(255,255,255,0.5);font-size:13px">Questions? Call or text <strong style="color:#fff">(346) 452-9991</strong> anytime.</p>
        <hr style="border-color:rgba(255,255,255,0.1);margin:24px 0"/>
        <p style="color:rgba(255,255,255,0.3);font-size:11px">LabShine Auto Detailing · Houston TX · info@labshineauto.com</p>
      </div>`
    });
  }

  // 3. Alert Adrian if SMS failed
  if (!results.sms.success) {
    await sendEmail({
      to: ADRIAN_EMAIL, toName: 'Adrian',
      subject: `⚠️ SMS failed for lead ${name} — ${phone}`,
      html: `<p>Closer agent SMS failed for <strong>${name}</strong> (${phone}).</p><p>Error: ${results.sms.error || 'unknown'}</p><p>Lead ID: ${leadId}</p><p>Service: ${service}</p>`
    });
  }

  // 4. Log to Notion
  const smsOk   = results.sms.success;
  const emailOk = results.email?.success || false;
  await logActivity({
    agent: 'closer',
    action: `contacted ${name} — sms:${smsOk} email:${emailOk}`,
    leadId,
    success: smsOk || emailOk,
    notes: `service:${service||'?'} source:${source||'?'} sms_error:${results.sms.error||'none'}`
  });

  return {
    statusCode: 200,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    body: JSON.stringify({ success: true, sms: smsOk, email: emailOk, leadId })
  };
};
