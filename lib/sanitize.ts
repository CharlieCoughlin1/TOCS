export const allowlistFields = [
  'ts',
  'page_url',
  'page_referrer',
  'user_agent',
  'ip',
  'session_id',
  'calc_seq',
  'calc_type',
  'building_age',
  'workstation_density_m2',
  'hybrid_factor',
  'hybrid_occupancy',
  'budget_type',
  'location1',
  'location2',
  'staff_input',
  'budget_value',
  'space_required_sqft',
  'workstations_required',
  'annual_cost',
  'cost_per_workstation_annual',
  'cost_per_workstation_monthly',
  'company',
  'contact_name',
  'contact_email',
  'contact_phone',
  'marketing_opt_in',
  'is_lead',
];

const numericFields = [
  'workstation_density_m2',
  'hybrid_factor',
  'hybrid_occupancy',
  'budget_value',
  'annual_cost',
  'cost_per_workstation_annual',
  'cost_per_workstation_monthly',
];

const integerFields = [
  'calc_seq',
  'space_required_sqft',
  'workstations_required',
  'staff_input',
];

const booleanFields = ['marketing_opt_in', 'is_lead'];

function toNumber(v: any): number | undefined {
  const num = Number(String(v).replace(/,/g, ''));
  return Number.isFinite(num) ? num : undefined;
}

function toInteger(v: any): number | undefined {
  const num = parseInt(String(v).replace(/,/g, ''), 10);
  return Number.isFinite(num) ? num : undefined;
}

function cleanString(v: string): string {
  const cleaned = v.replace(/[<>\n\r]/g, '').trim();
  return cleaned.length > 2048 ? cleaned.slice(0, 2048) : cleaned;
}

export function sanitizeEvent(obj: any): Record<string, any> {
  const row: Record<string, any> = {};
  if (!obj || typeof obj !== 'object') return row;

  for (const field of allowlistFields) {
    let v = obj[field];
    if (v === undefined || v === null) continue;
    if (typeof v === 'string') v = cleanString(v);

    if (numericFields.includes(field)) {
      const num = toNumber(v);
      if (num !== undefined) row[field] = num;
      continue;
    }
    if (integerFields.includes(field)) {
      const num = toInteger(v);
      if (num !== undefined) row[field] = num;
      continue;
    }
    if (booleanFields.includes(field)) {
      row[field] = v === true || v === 'true';
      continue;
    }
    row[field] = v;
  }

  if (row.calc_type && !['people', 'budget'].includes(row.calc_type)) {
    delete row.calc_type;
  }
  if (row.building_age && !['New', '20'].includes(row.building_age)) {
    delete row.building_age;
  }
  if (row.contact_email) {
    const email = row.contact_email as string;
    const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!re.test(email)) row.contact_email = '';
  }

  if (row.is_lead === undefined) row.is_lead = false;

  if (obj.ts) {
    const ts = new Date(obj.ts);
    if (!isNaN(ts.getTime())) row.ts = ts.toISOString();
  }
  if (!row.ts) row.ts = new Date().toISOString();

  return row;
}
