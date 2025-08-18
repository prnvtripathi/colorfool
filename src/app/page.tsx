'use client';

import ColorInput from '@/components/ColorInput';
import ConversionsList from '@/components/ConversionsList';
import Swatches from '@/components/Swatches';
import History from '@/components/History';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen font-sans">
      <Navbar />

      <div className="mx-auto w-full px-4 py-8 md:w-3/4">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="mb-6">
            <h2 className="tracking-relaxed from-primary mb-4 bg-gradient-to-r to-purple-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
              Colorfool
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed">
              Convert any color code to every format. Fast, accessible, and
              modern.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-auto">
          <div className="grid gap-8">
            {/* Left Column - Input and Swatches */}
            <div className="space-y-6 lg:col-span-2">
              <section className="bg-card border-border rounded-xl border p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-semibold">Color Input</h3>
                <div className="space-y-4">
                  <ColorInput />
                  <Swatches />
                </div>
              </section>

              <section className="bg-card border-border rounded-xl border p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-semibold">Conversions</h3>
                <ConversionsList />
              </section>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-border mt-16 border-t pt-8 text-center">
          <div className="text-muted-foreground space-y-2 text-sm">
            <p>
              ColorFool &copy; {new Date().getFullYear()} &mdash; Built with{' '}
              <a
                href="https://github.com/culorijs/culori"
                className="hover:text-foreground underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                culori
              </a>{' '}
              and{' '}
              <a
                href="https://github.com/shadcn/ui"
                className="hover:text-foreground underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                shadcn/ui
              </a>
            </p>
            <p className="text-xs opacity-75">
              Fast, accessible, and modern color conversion tool
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
