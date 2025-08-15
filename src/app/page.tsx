"use client"

import ColorInput from "@/components/ColorInput";
import ConversionsList from "@/components/ConversionsList";
import Swatches from "@/components/Swatches";
import History from "@/components/History";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col items-center justify-center px-4 py-8 sm:py-16">
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center gap-2 mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">ColorFool</h1>
        <p className="text-base text-muted-foreground text-center max-w-md">
          Convert any color code to every format. Fast, accessible, and modern. Powered by OKLCH and{' '}
          <a href="https://culorijs.org/" className="underline" target="_blank" rel="noopener noreferrer">culori</a>.
        </p>
      </div>
      <main className="w-full max-w-2xl mx-auto flex flex-col gap-8">
        <section className="flex flex-col gap-4">
          <ColorInput />
          <Swatches />
        </section>
        <section>
          <ConversionsList />
        </section>
        <section>
          <History />
        </section>
      </main>
      <footer className="w-full max-w-2xl mx-auto mt-12 text-xs text-muted-foreground flex flex-col items-center gap-2 opacity-80">
        <span>
          ColorFool &copy; {new Date().getFullYear()} &mdash;{' '}
          <a href="https://github.com/culorijs/culori" className="underline" target="_blank" rel="noopener noreferrer">culori</a> |{' '}
          <a href="https://github.com/shadcn/ui" className="underline" target="_blank" rel="noopener noreferrer">shadcn/ui</a>
        </span>
      </footer>
    </div>
  );
}
