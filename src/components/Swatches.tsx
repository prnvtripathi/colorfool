import React from "react";
import { getSwatchData } from "@/lib/color";
import { useUrlSync } from "@/lib/url";

export default function Swatches() {
  const { getColorParam } = useUrlSync();
  const color = getColorParam();
  if (!color) return null;
  const swatch = getSwatchData(color);
  if (!swatch) return null;
  return (
    <div className="flex flex-col gap-2 w-full" aria-label="Color swatches">
      <div className="flex gap-2 items-center">
        <div className="relative w-12 h-12 rounded overflow-hidden border border-input">
          {/* Checkerboard bg for alpha */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#eee_25%,transparent_25%,transparent_75%,#eee_75%,#eee),linear-gradient(45deg,#eee_25%,#fff_25%,#fff_75%,#eee_75%,#eee)] bg-[length:8px_8px]" />
          <div className="absolute inset-0" style={{ background: swatch.css }} />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs">Contrast vs white: <b>{swatch.contrastWhite}</b> {swatch.wcagWhite}</span>
          <span className="text-xs">Contrast vs black: <b>{swatch.contrastBlack}</b> {swatch.wcagBlack}</span>
          <span className="text-xs">Recommended text: <b>{swatch.recommendText}</b></span>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="w-8 h-8 rounded bg-white border border-input" style={{ background: swatch.css }} />
        <div className="w-8 h-8 rounded bg-black border border-input" style={{ background: swatch.css }} />
      </div>
    </div>
  );
}
