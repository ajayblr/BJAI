/**
 * Placeholder image helpers.
 *
 * - `picsum(seed, w, h)` returns a deterministic, always-available stock photo.
 * - `avatar(seed, size)` returns a deterministic placeholder portrait.
 *
 * To use real BJAI photos later, replace the returned URL strings in the
 * data files (events.ts, members.ts, gallery.ts, etc.) with paths to real
 * images placed in /public.
 */

export function picsum(seed: string, width = 1200, height = 800): string {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${width}/${height}`;
}

export function avatar(seed: string, size = 400): string {
  return `https://i.pravatar.cc/${size}?u=${encodeURIComponent(seed)}`;
}
