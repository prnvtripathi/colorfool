import React, { useState } from 'react';
import CopyButton from '@/components/CopyButton';

interface FormatRowProps {
  label: string;
  value: string;
  canToggleAlpha?: boolean;
  canToggleDecimals?: boolean;
  decimals?: number;
  alpha?: boolean;
  onDecimalsChange?: (n: number) => void;
  onAlphaChange?: (a: boolean) => void;
  note?: string;
}

export default function FormatRow({ label, value, note }: FormatRowProps) {
  // For demo: menu not implemented, just show value and copy
  return (
    <div
      className="bg-muted border-input flex items-center gap-2 rounded-lg border px-3 py-2"
      role="listitem"
    >
      <span className="text-muted-foreground w-24 font-mono text-xs select-none">
        {label}
      </span>
      <span className="flex-1 font-mono text-sm break-all tabular-nums">
        {value}
      </span>
      {note && <span className="text-warning ml-2 text-xs">{note}</span>}
      <CopyButton value={value} />
      {/* Menu for decimals/alpha could go here */}
    </div>
  );
}
