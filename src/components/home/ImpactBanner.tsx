import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export function ImpactBanner() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 md:py-32 section-teal relative overflow-hidden">
      {/* Soft decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-saffron/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-coral/8 rounded-full blur-[100px]" />
      
      {/* Sacred geometry */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-[0.02]">
        <div className="w-full h-full rounded-full border-2 border-primary-foreground" />
        <div className="absolute inset-16 rounded-full border border-primary-foreground" />
        <div className="absolute inset-32 rounded-full border border-primary-foreground" />
      </div>

      <div className="container relative z-10">
        <div className={cn(
          "max-w-4xl mx-auto text-center transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="inline-flex items-center gap-3 text-saffron text-sm font-medium mb-10">
            <span className="w-14 h-px bg-gradient-to-r from-transparent to-saffron" />
            <span className="uppercase tracking-widest">Create a Change Today</span>
            <span className="w-14 h-px bg-gradient-to-l from-transparent to-saffron" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-10 leading-tight text-primary-foreground">
            A Single Act Of Seva Can
            <br />
            <span className="relative inline-block mt-2">
              <span className="text-saffron italic">Transform An Entire Life</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 8C75 2 225 2 298 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-saffron/30"/>
              </svg>
            </span>
          </h2>

          <p className="text-primary-foreground/75 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Your generous contribution helps us continue our sacred mission of serving 
            humanity. Every donation, big or small, creates ripples of positive change.
          </p>

          <Link to="/donations">
            <Button 
              variant="coral" 
              size="xl" 
              className="gap-3 pr-5 rounded-full shadow-serene-lg hover:shadow-glow-soft transition-all duration-500 group"
            >
              <span className="font-semibold">Start Your Seva Today</span>
              <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ArrowUpRight className="w-4 h-4 text-coral" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
