import { parseColor } from "../src/lib/color";

describe("Color parsing edge cases", () => {
  it("parses rgba(255,0,0,0.5) and preserves alpha", () => {
    const c = parseColor("rgba(255,0,0,0.5)");
    expect(c.alpha).toBeCloseTo(0.5, 2);
  });

  it("parses rebeccapurple to correct hex", () => {
    const c = parseColor("rebeccapurple");
    expect(c.mode).toBe("oklch");
  });

  it("parses hwb(90 10% 10%)", () => {
    const c = parseColor("hwb(90 10% 10%)");
    expect(c.mode).toBe("oklch");
  });

  it("parses display-p3 and flags out-of-gamut", () => {
    // This is a smoke test; actual gamut check is in formatters
    const c = parseColor("color(display-p3 1 0.2 0.2)");
    expect(c.mode).toBe("oklch");
  });
});
