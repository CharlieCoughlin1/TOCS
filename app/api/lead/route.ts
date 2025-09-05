import { NextRequest } from 'next/server';
import { supabase } from '@/lib/supabase-server';
import { cors, isAllowedOrigin } from '@/lib/cors';
import { sanitizeLead } from '@/lib/sanitize';

export async function OPTIONS(req: NextRequest) {
  return new Response(null, { headers: cors(req) });
}

async function rateLimit(row: Record<string, any>) {
  if (!row.session_id || row.calc_seq === undefined) return false;
  const { data } = await supabase
    .from('calc_events')
    .select('ts')
    .eq('session_id', row.session_id)
    .eq('calc_seq', row.calc_seq)
    .order('ts', { ascending: false })
    .limit(1)
    .single();
  if (!data) return false;
  return Date.now() - new Date(data.ts).getTime() < 300;
}

export async function POST(req: NextRequest) {
  if (!isAllowedOrigin(req)) {
    return new Response('forbidden', { status: 403, headers: cors(req) });
  }

  const payload = await req.json().catch(() => null);
  if (!payload) {
    return new Response('bad request', { status: 400, headers: cors(req) });
  }

  const nowIso = new Date().toISOString();
  const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0]?.trim() || '';

  const rows = Array.isArray(payload) ? payload : [payload];
  const cleanRows = rows.map((r: any) => {
    const row = sanitizeLead(r);
    row.ts = row.ts || nowIso;
    row.ip = ip;
    return row;
  });

  for (const row of cleanRows) {
    if (await rateLimit(row)) {
      return new Response('too many requests', { status: 429, headers: cors(req) });
    }
  }

  const { error } = await supabase.from('calc_events').insert(cleanRows);
  if (error) {
    return new Response('server error', { status: 500, headers: cors(req) });
  }
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json', ...cors(req) },
  });
}
