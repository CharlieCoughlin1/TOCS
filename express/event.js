const express = require('express');
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
const router = express.Router();

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

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

router.options('/event', (req, res) => {
  res.set(corsHeaders);
  return res.status(204).end();
});

router.post('/event', async (req, res) => {
  const body = req.body;
  if (!body || typeof body !== 'object') {
    return res.status(400).json({ ok: false, error: 'Invalid payload' });
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
    const { data, error } = await supabase
      .from('lsh_calculator_events')
      .insert(row)
      .select('id')
      .single();

    if (error) {
      const status = error.message.includes('row-level security') ? 401 : 500;
      return res.status(status).json({ ok: false, error: error.message });
    }

    return res.status(200).json({ ok: true, id: data.id });
  } catch (e) {
    return res.status(500).json({ ok: false, error: e.message });
  }
});

module.exports = router;
