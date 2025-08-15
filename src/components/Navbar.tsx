import React from "react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Flower2Icon } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto w-full md:w-3/4 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
            <Flower2Icon className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">Colorfool</h1>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
