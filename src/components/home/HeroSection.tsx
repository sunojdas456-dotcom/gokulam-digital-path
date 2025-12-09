import { Link } from "react-router-dom";
import { ArrowUpRight, Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-krishna.jpg";

export function HeroSection() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight - 100,
      behavior: "smooth"
    });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Lord Krishna in Vrindavan"
          className="w-full h-full object-cover scale-105"
        />
        {/* Enhanced gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-primary/30" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-32 right-20 w-40 h-40 bg-saffron/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-32 right-1/3 w-64 h-64 bg-coral/15 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-saffron/10 organic-shape blur-2xl animate-float" />
      
      {/* Mandala decoration */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-5">
        <div className="w-full h-full rounded-full border border-primary-foreground animate-rotate-slow" />
        <div className="absolute inset-8 rounded-full border border-primary-foreground animate-spin-slow" style={{ animationDirection: 'reverse' }} />
        <div className="absolute inset-16 rounded-full border border-primary-foreground animate-rotate-slow" />
      </div>

      <div className="container relative z-10 pt-32 pb-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-dark mb-8 animate-fade-in">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-saffron opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-saffron"></span>
            </span>
            <span className="text-sm font-semibold text-primary-foreground tracking-wide">
              Serving Humanity Since 2010
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-8 leading-[1.1] animate-slide-up">
            Your Seva Powers
            <br />
            <span className="relative">
              The Mission of{" "}
              <span className="text-saffron italic relative">
                Gokulam
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C50 2 150 2 198 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-saffron/50"/>
                </svg>
              </span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/85 mb-10 max-w-xl leading-relaxed animate-slide-up stagger-1">
            Join us in our sacred mission to serve humanity through compassion, 
            faith, and purpose. Every act of seva creates ripples of positive change
            that touch countless lives.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-slide-up stagger-2">
            <Link to="/donations">
              <Button 
                variant="hero" 
                size="xl" 
                className="gap-3 pr-4 rounded-full shadow-lg hover:shadow-xl transition-shadow group"
              >
                <span className="font-semibold">Donate Now</span>
                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-4 h-4 text-primary" />
                </span>
              </Button>
            </Link>
            <Button 
              variant="outline-light" 
              size="xl" 
              className="gap-3 rounded-full hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Play className="w-4 h-4 fill-current" />
              </div>
              <span className="font-medium">Watch Our Story</span>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center gap-6 mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-in stagger-3">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i} 
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-saffron to-coral border-2 border-primary flex items-center justify-center text-xs font-bold text-white"
                >
                  {['R', 'K', 'M', 'S'][i-1]}
                </div>
              ))}
            </div>
            <div>
              <p className="text-primary-foreground font-semibold">10,000+ Devotees</p>
              <p className="text-primary-foreground/70 text-sm">Joined our spiritual journey</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors cursor-pointer group"
      >
        <span className="text-xs font-medium tracking-wider uppercase">Scroll to explore</span>
        <div className="w-8 h-12 rounded-full border-2 border-current flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-current animate-bounce" />
        </div>
      </button>

      {/* Side decoration */}
      <div className="hidden xl:block absolute right-8 top-1/2 -translate-y-1/2 space-y-4">
        {['Gau Seva', 'Annadana', 'Pilgrimage'].map((item, i) => (
          <div 
            key={item}
            className="flex items-center gap-3 text-primary-foreground/60 hover:text-primary-foreground transition-colors cursor-pointer group"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <span className="w-8 h-px bg-current group-hover:w-12 transition-all" />
            <span className="text-xs font-medium tracking-wide uppercase">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}