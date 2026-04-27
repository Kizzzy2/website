// LabShine — CRM Data API (read-only, for Base44 and external dashboards)
// GET /.netlify/functions/crm-data
// Returns leads, pipeline counts, recent activity from Notion
//
// Query params:
//   ?type=leads    — all leads (default)
//   ?type=pipeline — pipeline stage counts
//   ?type=activity — recent agent activity
//   ?status=New    — filter by status
//   ?limit=50      — max records (default 50)

const https = require('https');

const NOTION_TOKEN   = process.env.NOTION_TOKEN   || '';
const LEADS_DB       = process.env.NOTION_LEADS_DB || 'ccabe196-26d7-4a84-a397-024e2f907696';
const ACTIVITY_DB    = process.env.NOTION_ACTIVITY_DB || '00261681-7931-4f7f-b2e8-48942f6f5b2d';

function notionPost(path, body) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify(body);
    const req = https.request({
      hostname: 'api.notion.com', path, method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    }, res => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => resolve({ status: res.statusCode, body: JSON.parse(data) }));
    });
    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

function mapLead(page) {
  const p = page.properties || {};
  const get = (key, type) => {
    const prop = p[key];
    if (!prop) return null;
    switch (type) {
      case 'title':   return prop.title?.[0]?.plain_text || null;
      case 'text':    return prop.rich_text?.[0]?.plain_text || null;
      case 'phone':   return prop.phone_number || null;
      case 'email':   return prop.email || null;
      case 'select':  return prop.select?.name || null;
      case 'check':   return prop.checkbox || false;
      case 'number':  return prop.number || null;
      case 'date':    return prop.date?.start || null;
      default:        return null;
    }
  };
  return {
    id:           page.id,
    name:         get('Customer Name', 'title'),
    phone:        get('Phone', 'phone'),
    email:        get('Email', 'email'),
    vehicle:      get('Vehicle', 'text'),
    service:      get('Service', 'select'),
    status:       get('Status', 'select'),
    source:       get('Source', 'select'),
    zip:          get('ZIP', 'text'),
    leadId:       get('Lead ID', 'text'),
    depositPaid:  get('Deposit Paid', 'check'),
    notes:        get('Notes', 'text'),
    utmSource:    get('UTM Source', 'text'),
    utmCampaign:  get('UTM Campaign', 'text'),
    framerPage:   get('Framer Page', 'text'),
    createdAt:    page.created_time,
  };
}

function mapActivity(page) {
  const p = page.properties || {};
  return {
    id:       page.id,
    agent:    p['Agent']?.title?.[0]?.plain_text || null,
    action:   p['Action']?.rich_text?.[0]?.plain_text || null,
    leadId:   p['Lead ID']?.rich_text?.[0]?.plain_text || null,
    status:   p['Status']?.select?.name || null,
    summary:  p['Result Summary']?.rich_text?.[0]?.plain_text || null,
    createdAt: page.created_time,
  };
}

exports.handler = async (event) => {
  const cors = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-API-Key'
  };

  if (event.httpMethod === 'OPTIONS') return { statusCode: 204, headers: cors, body: '' };

  if (!NOTION_TOKEN) {
    return { statusCode: 500, headers: cors, body: JSON.stringify({ error: 'NOTION_TOKEN not set' }) };
  }

  const params = event.queryStringParameters || {};
  const type   = params.type   || 'leads';
  const limit  = Math.min(parseInt(params.limit || '50'), 100);
  const status = params.status || null;

  try {
    if (type === 'pipeline') {
      // Aggregate leads by status
      const r = await notionPost(`/v1/databases/${LEADS_DB}/query`, { page_size: 100 });
      const leads = (r.body.results || []).map(mapLead);
      const pipeline = {};
      const stages = ['New','Contacted','Quoted','Deposit Paid','Booked','Completed','Ghosted'];
      stages.forEach(s => pipeline[s] = 0);
      leads.forEach(l => { if (l.status && pipeline[l.status] !== undefined) pipeline[l.status]++; });
      return {
        statusCode: 200, headers: { ...cors, 'Content-Type': 'application/json' },
        body: JSON.stringify({ pipeline, total: leads.length, updatedAt: new Date().toISOString() })
      };
    }

    if (type === 'activity') {
      const r = await notionPost(`/v1/databases/${ACTIVITY_DB}/query`, {
        sorts: [{ timestamp: 'created_time', direction: 'descending' }],
        page_size: limit
      });
      const items = (r.body.results || []).map(mapActivity);
      return {
        statusCode: 200, headers: { ...cors, 'Content-Type': 'application/json' },
        body: JSON.stringify({ activity: items, count: items.length })
      };
    }

    // Default: leads
    const query = {
      sorts: [{ timestamp: 'created_time', direction: 'descending' }],
      page_size: limit
    };
    if (status) {
      query.filter = { property: 'Status', select: { equals: status } };
    }

    const r = await notionPost(`/v1/databases/${LEADS_DB}/query`, query);
    const leads = (r.body.results || []).map(mapLead);

    return {
      statusCode: 200, headers: { ...cors, 'Content-Type': 'application/json' },
      body: JSON.stringify({ leads, count: leads.length, updatedAt: new Date().toISOString() })
    };

  } catch (e) {
    return {
      statusCode: 500, headers: { ...cors, 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: e.message })
    };
  }
};
