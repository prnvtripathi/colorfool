'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { parseColor } from '@/lib/color';
import { useDebounce } from '@/hooks/useDebounce';
import { useUrlSync } from '@/lib/url';

export default function ColorInput() {
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | null>(null);
  const debounced = useDebounce(value, 500);
  const { setColorParam, getColorParam } = useUrlSync();
  const inputRef = useRef<HTMLInputElement>(null);

  // On mount, sync from URL
  useEffect(() => {
    const urlColor = getColorParam();
    if (urlColor) setValue(urlColor);
  }, [getColorParam]);

  // On debounced value, parse and update URL
  useEffect(() => {
    if (!debounced) {
      setError(null);
      setColorParam('');
      return;
    }
    try {
      parseColor(debounced); // throws on error
      setError(null);
      setColorParam(debounced);
    } catch (e: any) {
      setError(e.message || 'Invalid color');
      setColorParam('');
    }
  }, [debounced, setColorParam]);

  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor="color-input" className="sr-only text-sm font-medium">
        Enter a color code
      </label>
      <Input
        id="color-input"
        ref={inputRef}
        type="text"
        autoComplete="off"
        spellCheck={false}
        placeholder="Paste any color: #09f, oklch(0.75 0.12 210), rebeccapurple, ..."
        value={value}
        onChange={e => setValue(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? 'color-error' : undefined}
        className="border-input bg-background focus:ring-primary rounded-lg border px-4 py-3 text-lg transition-colors focus:ring-2 focus:outline-none"
      />
      {error && (
        <span
          id="color-error"
          role="alert"
          aria-live="polite"
          className="text-destructive mt-1 text-xs"
        >
          {error}
        </span>
      )}
    </div>
  );
}
