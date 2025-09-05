import { NextRequest } from 'next/server';
import { supabase } from '@/lib/supabase-server';
import { cors, isAllowedOrigin } from '@/lib/cors';
import { sanitizeEvent } from '@/lib/sanitize';

export async function OPTIONS(req: NextRequest) {
  if (!isAllowedOrigin(req)) {
    return new Response('forbidden', { status: 403, headers: cors(req) });
  }
  return new Response(null, { status: 204, headers: cors(req) });
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
  const ip = (req.headers.get('x-forwarded-for') || '')
    .split(',')[0]
    .trim() || req.ip || '';

  const rows = Array.isArray(payload) ? payload : [payload];
  const cleanRows = rows.map((r: any) => {
    const row = sanitizeEvent(r);
    row.ts = row.ts || nowIso;
    row.ip = ip;
    row.is_lead = true;
    return row;
  });

  for (const row of cleanRows) {
    if (row.session_id && row.calc_seq !== undefined) {
      const { data, error } = await supabase
        .from('calc_events')
        .select('ts')
        .eq('session_id', row.session_id)
        .eq('calc_seq', row.calc_seq)
        .order('ts', { ascending: false })
        .limit(1);
      if (error) {
        return new Response('server error', { status: 500, headers: cors(req) });
      }
      if (data && data.length) {
        const lastTs = new Date(data[0].ts).getTime();
        const curTs = new Date(row.ts).getTime();
        if (curTs - lastTs < 300) {
          return new Response('too many requests', { status: 429, headers: cors(req) });
        }
      }
    }
  }

  const { error } = await supabase.from('calc_events').insert(cleanRows);
  if (error) {
    return new Response('server error', { status: 500, headers: cors(req) });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { ...cors(req), 'Content-Type': 'application/json' },
  });
}
