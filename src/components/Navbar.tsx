import React from 'react';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { Flower2Icon, GithubIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

export default function Navbar() {
  return (
    <nav className="border-border bg-transparent w-full border-b backdrop-blur sticky top-0 z-50">
      <div className="mx-auto flex w-full items-center justify-between px-4 py-3 md:w-3/4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-orange-800">
            <Flower2Icon className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button asChild variant={'link'}>
            <Link
              href="https://github.com/prnvtripathi/colorfool"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm"
            >
              <span>Star us on GitHub</span>
              <GithubIcon className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
