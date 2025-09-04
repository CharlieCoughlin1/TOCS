import 'server-only';
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_URL as string;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY as string;

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

function toNull(v: any) {
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

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders });
}

export async function POST(req: NextRequest) {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    return NextResponse.json(
      { ok: false, error: 'Server misconfigured' },
      { status: 500, headers: corsHeaders }
    );
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid JSON' },
      { status: 400, headers: corsHeaders }
    );
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json(
      { ok: false, error: 'Invalid payload' },
      { status: 400, headers: corsHeaders }
    );
  }

  const row: any = {};

  // Timestamp handling
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
    if (v === undefined) continue; // ignore unknown
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
      return NextResponse.json(
        { ok: false, error: error.message },
        { status, headers: corsHeaders }
      );
    }

    return NextResponse.json(
      { ok: true, id: data.id },
      { status: 200, headers: corsHeaders }
    );
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e.message ?? 'Unexpected error' },
      { status: 500, headers: corsHeaders }
    );
  }
}
