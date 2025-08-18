'use client';

import React, { useState } from 'react';
import { Button } from './ui/button';
import { CopyIcon, CheckIcon } from 'lucide-react';

interface CopyButtonProps {
  value: string;
}

export default function CopyButton({ value }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  }
  return (
    <Button
      variant={'ghost'}
      size={'icon'}
      aria-label="Copy to clipboard"
      onClick={handleCopy}
      tabIndex={0}
    >
      {copied ? (
        <CheckIcon className="h-4 w-4" />
      ) : (
        <CopyIcon className="h-4 w-4" />
      )}
    </Button>
  );
}
