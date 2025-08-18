'use client';

import React, { useEffect, useState } from 'react';
import { getConversions } from '@/lib/color';
import { useUrlSync } from '@/lib/url';
import FormatRow from '@/components/FormatRow';

export default function ConversionsList() {
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

  interface Conversion {
    label: string;
    value: string;
    [key: string]: unknown;
  }

  let conversions: Conversion[] = [];
  try {
    conversions = color ? getConversions(color) : [];
  } catch {
    conversions = [];
  }
  if (!color) {
    return (
      <div className="text-muted-foreground py-8 text-center">
        Enter a color to see conversions.
      </div>
    );
  }
  if (!conversions.length) {
    return (
      <div className="text-muted-foreground py-8 text-center">
        No valid conversions found.
      </div>
    );
  }

  return (
    <div
      className="flex flex-col gap-2"
      role="list"
      aria-label="Color conversions"
    >
      {conversions.map(conv => (
        <FormatRow key={conv.label} {...conv} />
      ))}
    </div>
  );
}
