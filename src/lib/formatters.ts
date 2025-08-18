// formatters.ts
// Stringify color in various formats, with rounding and clamping
import * as culori from 'culori';

function round(n: number, d: number) {
  return Math.round(n * 10 ** d) / 10 ** d;
}

export const formatters = {
  hex: (c: culori.Color) => culori.formatHex(c),
  hex8: (c: culori.Color) => culori.formatHex8(c),
  rgb: (c: culori.Color) => {
    const rgb = culori.rgb(c);
    if (!rgb) return '-';
    return `rgb(${[rgb.r, rgb.g, rgb.b].map(x => Math.round(x * 255)).join(',')})`;
  },
  rgba: (c: culori.Color) => {
    const rgb = culori.rgb(c);
    if (!rgb) return '-';
    return `rgba(${[rgb.r, rgb.g, rgb.b].map(x => Math.round(x * 255)).join(',')},${c.alpha ?? 1})`;
  },
  hsl: (c: culori.Color) => {
    const hsl = culori.hsl(c);
    if (!hsl) return '-';
    return `hsl(${round(hsl.h ?? 0, 1)} ${round(hsl.s * 100, 1)}% ${round(hsl.l * 100, 1)}%)`;
  },
  hsla: (c: culori.Color) => {
    const hsl = culori.hsl(c);
    if (!hsl) return '-';
    return `hsla(${round(hsl.h ?? 0, 1)} ${round(hsl.s * 100, 1)}% ${round(hsl.l * 100, 1)}% / ${c.alpha ?? 1})`;
  },
  hwb: (c: culori.Color) => {
    const hwb = culori.hwb(c);
    if (!hwb) return '-';
    return `hwb(${round(hwb.h ?? 0, 1)} ${round(hwb.w * 100, 1)}% ${round(hwb.b * 100, 1)}%)`;
  },
  hsv: (c: culori.Color) => {
    const hsv = culori.hsv(c);
    if (!hsv) return '-';
    return `hsv(${round(hsv.h ?? 0, 1)} ${round(hsv.s * 100, 1)}% ${round(hsv.v * 100, 1)}%)`;
  },
  lab: (c: culori.Color) => {
    const lab = culori.lab(c);
    if (!lab) return '-';
    return `lab(${round(lab.l, 1)} ${round(lab.a, 2)} ${round(lab.b, 2)})`;
  },
  lch: (c: culori.Color) => {
    const lch = culori.lch(c);
    if (!lch) return '-';
    return `lch(${round(lch.l, 1)} ${round(lch.c, 2)} ${round(lch.h ?? 0, 1)})`;
  },
  oklab: (c: culori.Color) => {
    const oklab = culori.oklab(c);
    if (!oklab) return '-';
    return `oklab(${round(oklab.l, 3)} ${round(oklab.a, 3)} ${round(oklab.b, 3)})`;
  },
  oklch: (c: culori.Color) => {
    const oklch = culori.oklch(c);
    if (!oklch) return '-';
    return `oklch(${round(oklch.l, 3)} ${round(oklch.c, 3)} ${round(oklch.h ?? 0, 1)})`;
  },
  displayP3: (c: culori.Color) => {
    const p3 = culori.p3(c);
    if (!p3) return '-';
    return `color(display-p3 ${round(p3.r, 3)} ${round(p3.g, 3)} ${round(p3.b, 3)})`;
  },
  p3Note: (c: culori.Color) => {
    // If out of P3 gamut, note it
    const p3 = culori.p3(c);
    if (!p3) return '-';
    const inGamut = [p3.r, p3.g, p3.b].every(x => x >= 0 && x <= 1);
    return inGamut ? '' : '(out of P3 gamut)';
  },
};
