/** Small color helpers for building agent-tinted gradients and glows. */

function clamp(n: number): number {
  return Math.max(0, Math.min(255, Math.round(n)));
}

function parseHex(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  const full =
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  return [r, g, b];
}

/** Mix a hex color toward white (amount 0–1). */
export function lighten(hex: string, amount: number): string {
  const [r, g, b] = parseHex(hex);
  const mix = (c: number) => clamp(c + (255 - c) * amount);
  return `rgb(${mix(r)}, ${mix(g)}, ${mix(b)})`;
}

/** Mix a hex color toward black (amount 0–1). */
export function darken(hex: string, amount: number): string {
  const [r, g, b] = parseHex(hex);
  const mix = (c: number) => clamp(c * (1 - amount));
  return `rgb(${mix(r)}, ${mix(g)}, ${mix(b)})`;
}

/** rgba() string from a hex color and alpha. */
export function alpha(hex: string, a: number): string {
  const [r, g, b] = parseHex(hex);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}
