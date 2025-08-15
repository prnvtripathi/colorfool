import React, { useState } from "react";
import CopyButton from "@/components/CopyButton";

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
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted border border-input" role="listitem">
      <span className="w-24 font-mono text-xs text-muted-foreground select-none">{label}</span>
      <span className="flex-1 font-mono text-sm tabular-nums break-all">{value}</span>
      {note && <span className="text-xs text-warning ml-2">{note}</span>}
      <CopyButton value={value} />
      {/* Menu for decimals/alpha could go here */}
    </div>
  );
}
