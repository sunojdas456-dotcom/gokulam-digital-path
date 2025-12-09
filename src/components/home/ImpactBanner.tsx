import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ImpactBanner() {
  return (
    <section className="py-20 section-teal relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-saffron/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-coral/10 rounded-full blur-3xl" />
      
      {/* Mandala pattern */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03]">
        <div className="w-full h-full rounded-full border-2 border-primary-foreground" />
        <div className="absolute inset-12 rounded-full border border-primary-foreground" />
        <div className="absolute inset-24 rounded-full border border-primary-foreground" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 text-saffron text-sm font-bold mb-8">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-saffron" />
            <span className="uppercase tracking-widest">Create a Change Today</span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-saffron" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight text-primary-foreground">
            A Single Act Of Seva Can
            <br />
            <span className="relative inline-block">
              <span className="text-saffron italic">Transform An Entire Life</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 8C75 2 225 2 298 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-saffron/40"/>
              </svg>
            </span>
          </h2>

          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Your generous contribution helps us continue our sacred mission of serving 
            humanity. Every donation, big or small, creates ripples of positive change.
          </p>

          <Link to="/donations">
            <Button 
              variant="coral" 
              size="xl" 
              className="gap-3 pr-4 rounded-full shadow-coral hover:shadow-lg transition-all group"
            >
              <span className="font-semibold">Start Your Seva Today</span>
              <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowUpRight className="w-4 h-4 text-coral" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}