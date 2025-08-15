import { parseColor, clampOklch } from "../src/lib/color";

describe("parseColor", () => {
  it("parses #09f to OKLCH", () => {
    const c = parseColor("#09f");
    expect(c.mode).toBe("oklch");
    if (c.mode === "oklch") {
      expect(typeof c.l).toBe("number");
      expect(typeof c.c).toBe("number");
      expect(typeof c.h).toBe("number");
    }
  });

  it("parses oklch(0.75 0.12 210)", () => {
    const c = parseColor("oklch(0.75 0.12 210)");
    if (c.mode === "oklch") {
      expect(Math.abs(c.l - 0.75)).toBeLessThan(0.01);
      expect(Math.abs(c.c - 0.12)).toBeLessThan(0.01);
      expect(typeof c.h).toBe("number");
      expect(Math.abs((c.h as number) - 210)).toBeLessThan(0.5);
    } else {
      throw new Error(`Expected oklch color, got ${c.mode}`);
    }
  });

  it("clamps out-of-range OKLCH", () => {
    const c = clampOklch({ mode: "oklch", l: 2, c: 1, h: 999, alpha: 2 });
    expect(c.l).toBeLessThanOrEqual(1);
    expect(c.c).toBeLessThanOrEqual(0.4);
    expect(c.h).toBeGreaterThanOrEqual(0);
    expect(c.h).toBeLessThan(360);
    expect(c.alpha).toBeLessThanOrEqual(1);
  });
});
