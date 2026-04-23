// LabShine — Commander Agent
// GET /.netlify/functions/commander  (Netlify scheduled function — every 5 min)
// Also callable manually via POST for immediate check
//
// Actions:
//   - Checks Agent Activity log for failures in last 15 min
//   - Sends alert if failures found
//   - Writes heartbeat to Agent Activity
//
// ENV VARS:
//   NOTION_TOKEN / NOTION_ACTIVITY_DB
//   SENDGRID_API_KEY
//   TWILIO_SID / TWILIO_TOKEN / TWILIO_FROM
//   ADRIAN_EMAIL / ADRIAN_PHONE

const https = require('https');

const NOTION_TOKEN = process.env.NOTION_TOKEN || '';
const ACTIVITY_DB  = process.env.NOTION_ACTIVITY_DB || '';
const SENDGRID_KEY = process.env.SENDGRID_API_KEY || '';
const TWILIO_SID   = process.env.TWILIO_SID || '';
const TWILIO_TOKEN = process.env.TWILIO_TOKEN || '';
const TWILIO_FROM  = process.env.TWILIO_FROM || '';
const ADRIAN_EMAIL = process.env.ADRIAN_EMAIL || 'labshinedetailing@icloud.com';
const ADRIAN_PHONE = process.env.ADRIAN_PHONE || '';
const FROM_EMAIL   = 'info@labshineauto.com';

function httpRequest(options, body) {
  return new Promise((resolve, reject) => {
    const payload = body ? (typeof body === 'string' ? body : JSON.stringify(body)) : '';
    const req = https.request(options, res => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    });
    req.on('error', reject);
    if (payload) req.write(payload);
    req.end();
  });
}

async function queryActivityDB(since) {
  if (!NOTION_TOKEN || !ACTIVITY_DB) return [];
  try {
    const r = await httpRequest({
      hostname: 'api.notion.com',
      path: `/v1/databases/${ACTIVITY_DB}/query`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(JSON.stringify({
          filter: {
            and: [
              { property: 'Success', checkbox: { equals: false } },
              { timestamp: 'created_time', created_time: { after: since } }
            ]
          },
          page_size: 20
        }))
      }
    }, {
      filter: {
        and: [
          { property: 'Success', checkbox: { equals: false } },
          { timestamp: 'created_time', created_time: { after: since } }
        ]
      },
      page_size: 20
    });
    const parsed = JSON.parse(r.body);
    return parsed.results || [];
  } catch (e) {
    return [];
  }
}

async function writeHeartbeat() {
  if (!NOTION_TOKEN || !ACTIVITY_DB) return;
  const ts = new Date().toISOString();
  try {
    await httpRequest({
      hostname: 'api.notion.com',
      path: '/v1/pages',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json'
      }
    }, JSON.stringify({
      parent: { database_id: ACTIVITY_DB },
      properties: {
        'Name':    { title: [{ text: { content: `commander: heartbeat ${ts}` } }] },
        'Agent':   { rich_text: [{ text: { content: 'commander' } }] },
        'Action':  { rich_text: [{ text: { content: 'heartbeat' } }] },
        'Success': { checkbox: true },
        'Notes':   { rich_text: [{ text: { content: `Scheduled check at ${ts}` } }] },
      }
    }));
  } catch (_) {}
}

async function sendAlert(failures) {
  const count = failures.length;
  const names = failures.map(f => {
    const props = f.properties || {};
    const action = props['Action']?.rich_text?.[0]?.plain_text || 'unknown';
    const agent  = props['Agent']?.rich_text?.[0]?.plain_text  || 'unknown';
    return `${agent}: ${action}`;
  }).join('\n');

  // SMS alert
  if (TWILIO_SID && TWILIO_TOKEN && TWILIO_FROM && ADRIAN_PHONE) {
    const smsBody = `LabShine Alert: ${count} agent failure(s) in last 15 min.\n${names.substring(0, 200)}`;
    const phone = ADRIAN_PHONE.replace(/\D/g,'');
    const e164  = phone.startsWith('1') ? `+${phone}` : `+1${phone}`;
    const body  = `To=${encodeURIComponent(e164)}&From=${encodeURIComponent(TWILIO_FROM)}&Body=${encodeURIComponent(smsBody)}`;
    try {
      await httpRequest({
        hostname: 'api.twilio.com',
        path: `/2010-04-01/Accounts/${TWILIO_SID}/Messages.json`,
        method: 'POST',
        headers: {
          'Authorization': `Basic ${Buffer.from(`${TWILIO_SID}:${TWILIO_TOKEN}`).toString('base64')}`,
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(body)
        }
      }, body);
    } catch (_) {}
  }

  // Email alert
  if (SENDGRID_KEY) {
    const emailBody = JSON.stringify({
      personalizations: [{ to: [{ email: ADRIAN_EMAIL }] }],
      from: { email: FROM_EMAIL, name: 'LabShine Commander' },
      subject: `⚠️ LabShine: ${count} agent failure(s) detected`,
      content: [{ type: 'text/html', value: `<div style="font-family:monospace;padding:20px;background:#0a0a0a;color:#fff;">
        <h2 style="color:#f59e0b">⚠️ ${count} Agent Failure(s) — Last 15 Minutes</h2>
        <pre style="color:#ccc;background:#111;padding:12px">${names}</pre>
        <p style="color:#888">Check Notion Agent Activity DB for details.</p>
      </div>` }]
    });
    try {
      await httpRequest({
        hostname: 'api.sendgrid.com',
        path: '/v3/mail/send',
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${SENDGRID_KEY}`,
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(emailBody)
        }
      }, emailBody);
    } catch (_) {}
  }
}

exports.handler = async (event) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };

  if (event.httpMethod === 'OPTIONS') return { statusCode: 204, headers: corsHeaders, body: '' };

  const since   = new Date(Date.now() - 15 * 60 * 1000).toISOString();
  const failures = await queryActivityDB(since);

  if (failures.length > 0) {
    await sendAlert(failures);
  }

  await writeHeartbeat();

  return {
    statusCode: 200,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      success: true,
      checked_since: since,
      failures_found: failures.length,
      alerted: failures.length > 0,
      heartbeat: new Date().toISOString()
    })
  };
};
