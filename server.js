const express = require('express');
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL =
  process.env.SUPABASE_URL || 'https://gtjyewrhtzvhghfthati.supabase.co';
const SUPABASE_SERVICE_ROLE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0anlld3JodHp2aGdoZnRoYXRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY4OTQwNzQsImV4cCI6MjA3MjQ3MDA3NH0.M08J92PDe-V3_8fF_D7J-gWvXa0itaB5PoREIVp73wg';

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

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
];

const allowedFields = [...numericFields, ...booleanFields, ...stringFields];

app.post('/api/event', async (req, res) => {
  const body = req.body;
  if (!body || typeof body !== 'object') {
    return res.status(400).json({ error: 'Invalid payload' });
  }

  const row = {};

  let createdAt = new Date();
  if (body.ts) {
    const ts = new Date(body.ts);
    if (!isNaN(ts.getTime())) {
      createdAt = ts;
      row.event_ts = ts.toISOString();
    }
  }
  row.created_at = createdAt.toISOString();

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

  try {
    const { error } = await supabase
      .from('lsh_calculator_events')
      .insert(row);
    if (error) {
      console.error('Supabase insert error:', error);
      return res.status(500).json({ error: 'Database insert failed' });
    }
    return res.status(200).json({ success: true });
  } catch (e) {
    console.error('Network/insert error:', e);
    return res.status(500).json({ error: 'Database insert failed' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
