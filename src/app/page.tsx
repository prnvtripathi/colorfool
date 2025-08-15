"use client"

import ColorInput from "@/components/ColorInput";
import ConversionsList from "@/components/ConversionsList";
import Swatches from "@/components/Swatches";
import History from "@/components/History";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <div className="mx-auto w-full md:w-3/4 px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Colorfool
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Convert any color code to every format. Fast, accessible, and modern. 
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Input and Swatches */}
            <div className="lg:col-span-2 space-y-6">
              <section className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Color Input</h3>
                <div className="space-y-4">
                  <ColorInput />
                  <Swatches />
                </div>
              </section>

              <section className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Conversions</h3>
                <ConversionsList />
              </section>
            </div>

            {/* Right Column - History */}
            <div className="lg:col-span-1">
              <section className="bg-card border border-border rounded-xl p-6 shadow-sm sticky top-8">
                <h3 className="text-lg font-semibold mb-4">History</h3>
                <History />
              </section>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border text-center">
          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              ColorFool &copy; {new Date().getFullYear()} &mdash; Built with{' '}
              <a href="https://github.com/culorijs/culori" className="underline hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                culori
              </a>{' '}
              and{' '}
              <a href="https://github.com/shadcn/ui" className="underline hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
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
