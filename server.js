const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static('docs'));

function toNull(v) {
  return v === '' || v === undefined ? null : v;
}

const numericFields = [
  'workstation_density_m2',
  'hybrid_factor',
  'hybrid_occupancy',
  'calc_seq',
  'staff_input',
  'space_required_sqft',
  'workstations_required',
  'annual_cost',
  'cost_per_workstation_annual',
  'cost_per_workstation_monthly',
  'budget_value',
];

const booleanFields = ['marketing_opt_in', 'is_lead'];

const stringFields = [
  'page_url',
  'page_referrer',
  'user_agent',
  'session_id',
  'userid',
  'calc_type',
  'building_age',
  'budget_type',
  'location1',
  'location2',
  'company',
  'contact_name',
  'contact_email',
  'contact_phone',
];

const allowedFields = [...numericFields, ...booleanFields, ...stringFields];

const DATA_DIR = path.join(__dirname, 'data');
// Path for storing calculator leads in a CSV for easy retrieval
const CSV_PATH = path.join(DATA_DIR, 'LSH_Calculator_Leads.csv');
const csvHeaders = ['created_at', 'event_ts', ...allowedFields];

fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(CSV_PATH)) {
  fs.writeFileSync(CSV_PATH, csvHeaders.join(',') + '\n', { mode: 0o600 });
}

app.post('/api/event', async (req, res) => {
  const body = req.body;
  if (!body || typeof body !== 'object') {
    return res.status(400).json({ error: 'Invalid payload' });
  }

  const row = {};

  const createdAt = new Date();
  row.created_at = createdAt.toISOString();
  if (body.ts) {
    const ts = new Date(body.ts);
    if (!isNaN(ts.getTime())) {
      row.event_ts = ts.toISOString();
    }
  }

  for (const key of allowedFields) {
    const v = body[key];
    if (v === undefined) continue;
    if (numericFields.includes(key)) {
      const num = Number(v);
      row[key] = Number.isFinite(num) ? num : null;
    } else if (booleanFields.includes(key)) {
      row[key] = v === true || v === 'true';
    } else {
      row[key] = toNull(v);
    }
  }

  const record = csvHeaders
    .map((h) => {
      const v = row[h];
      if (v === undefined || v === null) return '';
      return '"' + String(v).replace(/"/g, '""') + '"';
    })
    .join(',');

  try {
    await fs.promises.appendFile(CSV_PATH, record + '\n');
    return res.status(200).json({ success: true });
  } catch (e) {
    console.error('CSV append error:', e);
    return res.status(500).json({ error: 'Write failed' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '127.0.0.1', () => {
  console.log(`Server listening on http://127.0.0.1:${PORT}`);
});
