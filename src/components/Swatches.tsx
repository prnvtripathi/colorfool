'use client';

import React, { useEffect, useState } from 'react';
import { getSwatchData } from '@/lib/color';
import { useUrlSync } from '@/lib/url';

export default function Swatches() {
  const { getColorParam } = useUrlSync();
  const [color, setColor] = useState(getColorParam());

  useEffect(() => {
    const handler = () => setColor(getColorParam());
    window.addEventListener('popstate', handler);
    window.addEventListener('pushstate', handler);
    return () => {
      window.removeEventListener('popstate', handler);
      window.removeEventListener('pushstate', handler);
    };
  }, [getColorParam]);

  if (!color) return null;
  const swatch = getSwatchData(color);
  if (!swatch) return null;
  return (
    <div className="flex w-full flex-col gap-2" aria-label="Color swatches">
      <div className="flex items-center gap-2">
        <div className="border-input relative h-12 w-12 overflow-hidden rounded border">
          {/* Checkerboard bg for alpha */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#eee_25%,transparent_25%,transparent_75%,#eee_75%,#eee),linear-gradient(45deg,#eee_25%,#fff_25%,#fff_75%,#eee_75%,#eee)] bg-[length:8px_8px]" />
          <div
            className="absolute inset-0"
            style={{ background: swatch.css }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs">
            Contrast vs white: <b>{swatch.contrastWhite}</b> {swatch.wcagWhite}
          </span>
          <span className="text-xs">
            Contrast vs black: <b>{swatch.contrastBlack}</b> {swatch.wcagBlack}
          </span>
          <span className="text-xs">
            Recommended text: <b>{swatch.recommendText}</b>
          </span>
        </div>
      </div>
      <div className="flex gap-2">
        <div
          className="border-input h-8 w-8 rounded border bg-white"
          style={{ background: swatch.css }}
        />
        <div
          className="border-input h-8 w-8 rounded border bg-black"
          style={{ background: swatch.css }}
        />
      </div>
    </div>
  );
}
