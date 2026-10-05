// Best-effort, per-server-instance limiter for the public form endpoints.
// Serverless instances do not share memory, so this slows down a single
// noisy client rather than guaranteeing a global limit.
const hits = new Map<string, number[]>();

export function rateLimited(key: string, max: number, windowMs: number): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > max;
}

export function clientIp(req: Request): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

// Remembers recently completed submission ids so a retried request is not
// sent to the CRM twice. Same per-instance caveat as above.
const seen = new Map<string, number>();
const TTL_MS = 10 * 60 * 1000;

export function wasHandled(id: string): boolean {
  const now = Date.now();
  for (const [k, t] of seen) if (now - t > TTL_MS) seen.delete(k);
  return seen.has(id);
}

/** Call only after a submission succeeded, so a failed attempt can be retried. */
export function markHandled(id: string): void {
  seen.set(id, Date.now());
}
