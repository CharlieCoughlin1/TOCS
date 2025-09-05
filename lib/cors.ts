import type { NextRequest } from 'next/server';

export const allowedOrigins = [
  'https://example.com',
  'https://www.example.com',
  'http://localhost:3000',
];

export function isAllowedOrigin(req: NextRequest | Request): boolean {
  const origin = req.headers.get('origin');
  return origin ? allowedOrigins.includes(origin) : false;
}

export function cors(req: Request): Record<string, string> {
  const origin = req.headers.get('origin');
  const headers: Record<string, string> = {
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
  if (origin && allowedOrigins.includes(origin)) {
    headers['Access-Control-Allow-Origin'] = origin;
  }
  return headers;
}
