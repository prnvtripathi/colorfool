import { formatters } from "../src/lib/formatters";
import { parseColor } from "../src/lib/color";

describe("Formatters", () => {
  it("formats #09f to hex, rgb, oklch", () => {
    const c = parseColor("#09f");
    expect(formatters.hex(c)).toMatch(/^#\w{6}$/);
    expect(formatters.rgb(c)).toMatch(/^rgb\(.+\)$/);
    expect(formatters.oklch(c)).toMatch(/^oklch\(.+\)$/);
  });

  it("formats alpha correctly in rgba/hsla", () => {
    const c = parseColor("rgba(255,0,0,0.5)");
    expect(formatters.rgba(c)).toContain("0.5");
    expect(formatters.hsla(c)).toContain("0.5");
  });

  it("flags out-of-gamut display-p3", () => {
    const c = parseColor("color(display-p3 1 0.2 0.2)");
    expect(formatters.p3Note(c)).toMatch(/gamut|out/i);
  });
});
