import { NextRequest } from 'next/server';

export const ALLOWED_ORIGINS = [
  'https://example.com',
  'https://www.example.com',
  'http://localhost:3000',
];

export function isAllowedOrigin(req: NextRequest): boolean {
  const origin = req.headers.get('origin');
  if (!origin) return true;
  return ALLOWED_ORIGINS.includes(origin);
}

export function cors(req: NextRequest): Record<string, string> {
  const origin = req.headers.get('origin');
  const headers: Record<string, string> = {
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    headers['Access-Control-Allow-Origin'] = origin;
  }
  return headers;
}
