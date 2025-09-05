const allowlistFields = [
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

const numericFields = new Set([
  'workstation_density_m2',
  'hybrid_factor',
  'hybrid_occupancy',
  'budget_value',
  'annual_cost',
  'cost_per_workstation_annual',
  'cost_per_workstation_monthly',
]);

const integerFields = new Set([
  'calc_seq',
  'space_required_sqft',
  'workstations_required',
  'staff_input',
]);

function toNumber(value: any): number | undefined {
  if (value === null || value === undefined || value === '') return undefined;
  if (typeof value === 'string') value = value.replace(/,/g, '');
  const num = Number(value);
  return Number.isFinite(num) ? num : undefined;
}

function sanitizeString(value: any): string | undefined {
  if (value === null || value === undefined) return undefined;
  const str = String(value).trim().slice(0, 2000);
  return str;
}

export function sanitizeBase(obj: Record<string, any>): Record<string, any> {
  const clean: Record<string, any> = {};
  for (const key of allowlistFields) {
    const value = obj[key];
    if (value === undefined || value === null) continue;
    if (numericFields.has(key)) {
      const num = toNumber(value);
      if (num !== undefined) clean[key] = num;
      continue;
    }
    if (integerFields.has(key)) {
      const num = toNumber(value);
      if (num !== undefined) clean[key] = Math.trunc(num);
      continue;
    }
    if (key === 'marketing_opt_in' || key === 'is_lead') {
      clean[key] = Boolean(value);
      continue;
    }
    if (key === 'calc_type') {
      const s = sanitizeString(value);
      if (s === 'people' || s === 'budget') clean[key] = s;
      continue;
    }
    if (key === 'building_age') {
      const s = sanitizeString(value);
      if (s === 'New' || s === '20') clean[key] = s;
      continue;
    }
    const str = sanitizeString(value);
    if (str !== undefined) clean[key] = str;
  }
  if (clean.is_lead === undefined) clean.is_lead = false;
  return clean;
}

function stripDanger(str: string): string {
  return str.replace(/[<>"'`;]/g, '');
}

export function sanitizeEvent(obj: Record<string, any>): Record<string, any> {
  const row = sanitizeBase(obj);
  row.company = '';
  row.contact_name = '';
  row.contact_email = '';
  row.contact_phone = '';
  row.marketing_opt_in = false;
  row.is_lead = false;
  return row;
}

export function sanitizeLead(obj: Record<string, any>): Record<string, any> {
  const row = sanitizeBase(obj);
  row.is_lead = true;
  row.company = stripDanger(row.company || '');
  row.contact_name = stripDanger(row.contact_name || '');
  if (row.contact_email) {
    const email = stripDanger(row.contact_email).replace(/[^\w@.+-]/g, '');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    row.contact_email = emailRegex.test(email) ? email : '';
  } else {
    row.contact_email = '';
  }
  row.contact_phone = row.contact_phone
    ? row.contact_phone.replace(/[^\d+()\-\s]/g, '')
    : '';
  row.marketing_opt_in = Boolean(row.marketing_opt_in);
  return row;
}

export { allowlistFields };
