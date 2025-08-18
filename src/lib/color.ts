import * as culori from 'culori';
import { formatters } from '@/lib/formatters';

// Canonical internal space: OKLCH
// All parsing normalizes to OKLCH for stability and modernity

export function parseColor(input: string): culori.Color {
  // Try all supported formats
  const parsed = culori.parse(input);
  if (!parsed) throw new Error('Unrecognized color format');
  // Convert to OKLCH
  const oklch = culori.oklch(parsed);
  if (!oklch) throw new Error('Could not convert to OKLCH');
  // Clamp channels
  return clampOklch(oklch);
}

export function clampOklch(color: culori.Oklch): culori.Oklch {
  // Clamp L [0,1], C [0,0.4], H [0,360], alpha [0,1]
  return {
    mode: 'oklch',
    l: Math.max(0, Math.min(1, color.l)),
    c: Math.max(0, Math.min(0.4, color.c)),
    h: color.h == null ? 0 : ((color.h % 360) + 360) % 360,
    alpha: color.alpha == null ? 1 : Math.max(0, Math.min(1, color.alpha)),
  };
}

export function getConversions(input: string) {
  // Returns array of { label, value, note? }
  const color = parseColor(input);
  const results = [
    { label: 'HEX', value: formatters.hex(color) },
    { label: 'HEX8', value: formatters.hex8(color) },
    { label: 'rgb()', value: formatters.rgb(color) },
    { label: 'rgba()', value: formatters.rgba(color) },
    { label: 'hsl()', value: formatters.hsl(color) },
    { label: 'hsla()', value: formatters.hsla(color) },
    { label: 'hwb()', value: formatters.hwb(color) },
    { label: 'hsv()', value: formatters.hsv(color) },
    { label: 'lab()', value: formatters.lab(color) },
    { label: 'lch()', value: formatters.lch(color) },
    { label: 'oklab()', value: formatters.oklab(color) },
    { label: 'oklch()', value: formatters.oklch(color) },
    {
      label: 'display-p3',
      value: formatters.displayP3(color),
      note: formatters.p3Note(color),
    },
  ];
  return results;
}

export function getSwatchData(input: string) {
  // Returns { css, contrastWhite, contrastBlack, wcagWhite, wcagBlack, recommendText }
  const color = parseColor(input);
  const css = culori.formatHex8(color);
  const contrastWhite = round(
    contrast(color, { mode: 'rgb', r: 1, g: 1, b: 1 }),
    2
  );
  const contrastBlack = round(
    contrast(color, { mode: 'rgb', r: 0, g: 0, b: 0 }),
    2
  );
  const wcagWhite = wcagBadge(contrastWhite);
  const wcagBlack = wcagBadge(contrastBlack);
  const recommendText = contrastWhite >= 4.5 ? 'black' : 'white';
  return {
    css,
    contrastWhite,
    contrastBlack,
    wcagWhite,
    wcagBlack,
    recommendText,
  };
}

function contrast(a: culori.Color, b: culori.Color) {
  // WCAG contrast ratio
  return culori.wcagContrast(a, b);
}

function wcagBadge(ratio: number) {
  if (ratio >= 7) return 'AAA';
  if (ratio >= 4.5) return 'AA';
  if (ratio >= 3) return 'AA Large';
  return 'Fail';
}

function round(n: number, d: number) {
  return Math.round(n * 10 ** d) / 10 ** d;
}
