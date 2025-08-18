import React from 'react';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { Flower2Icon, GithubIcon } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="border-border bg-background/95 supports-[backdrop-filter]:bg-background/60 w-full border-b backdrop-blur">
      <div className="mx-auto flex w-full items-center justify-between px-4 py-3 md:w-3/4">
        <div className="flex items-center gap-2">
          <div className="from-primary flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br to-purple-600">
            <Flower2Icon className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">Colorfool</h1>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <a
            href="https://github.com/prnvtripathi/colorfool"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </nav>
  );
}
