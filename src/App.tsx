/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "@/src/components/Navbar";
import { Hero } from "@/src/components/Hero";
import { Features } from "@/src/components/Features";
import { BentoGrid } from "@/src/components/BentoGrid";
import { Footer } from "@/src/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <BentoGrid />
        
        {/* Final CTA Section */}
        <section className="py-32 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              Ready to transform your <br className="hidden md:block" /> productivity?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join thousands of professionals who have already made the switch to Lumina.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-foreground text-background px-10 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity">
                Download for Mac
              </button>
              <button className="bg-muted text-foreground px-10 py-4 rounded-full font-semibold hover:bg-muted/80 transition-colors">
                Try for Free
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
