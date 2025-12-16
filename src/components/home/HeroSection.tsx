import { Link } from "react-router-dom";
import { ArrowUpRight, Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AmbientParticles } from "@/components/ui/AmbientParticles";
import heroImage from "@/assets/hero-krishna.jpg";
import { useEffect, useState } from "react";

// Animated counter component
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

export function HeroSection() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight - 100,
      behavior: "smooth"
    });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with serene overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Lord Krishna in Vrindavan"
          className="w-full h-full object-cover scale-105"
        />
        {/* Ultra-soft gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-primary/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30" />
      </div>

      {/* Ambient particles */}
      <AmbientParticles count={25} variant="spiritual" />

      {/* Serene decorative elements */}
      <div className="absolute top-32 right-20 w-48 h-48 bg-saffron/15 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-32 right-1/3 w-72 h-72 bg-coral/10 rounded-full blur-[120px] animate-gentle-float" />
      <div className="absolute top-1/2 left-10 w-32 h-32 bg-saffron/8 organic-shape blur-[80px] animate-float" />
      
      {/* Sacred geometry decoration */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03]">
        <div className="w-full h-full rounded-full border border-primary-foreground animate-rotate-slow" />
        <div className="absolute inset-10 rounded-full border border-primary-foreground animate-spin-slow" style={{ animationDirection: 'reverse' }} />
        <div className="absolute inset-20 rounded-full border border-primary-foreground animate-rotate-slow" />
        <div className="absolute inset-28 rounded-full border border-primary-foreground/50" />
      </div>

      <div className="container relative z-10 pt-32 pb-20">
        <div className="max-w-2xl">
          {/* Badge with serene styling */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-ultra mb-10 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-saffron opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-saffron"></span>
            </span>
            <span className="text-sm font-medium text-primary-foreground/90 tracking-wide">
              Serving Humanity Since 2010
            </span>
          </div>

          {/* Headline with refined typography */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-10 leading-[1.1] animate-slide-up">
            Your Seva Powers
            <br />
            <span className="relative">
              The Mission of{" "}
              <span className="text-saffron italic relative">
                Gokulam
                <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C50 2 150 2 198 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-saffron/40"/>
                </svg>
              </span>
            </span>
          </h1>

          {/* Description with generous spacing */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-xl leading-relaxed animate-slide-up stagger-1">
            Join us in our sacred mission to serve humanity through compassion, 
            faith, and purpose. Every act of seva creates ripples of positive change
            that touch countless lives.
          </p>

          {/* CTA Buttons with soft styling */}
          <div className="flex flex-wrap gap-5 animate-slide-up stagger-2">
            <Link to="/donations">
              <Button 
                variant="hero" 
                size="xl" 
                className="gap-3 pr-5 rounded-full shadow-serene-lg hover:shadow-glow-soft transition-all duration-500 group"
              >
                <span className="font-semibold">Donate Now</span>
                <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-300">
                  <ArrowUpRight className="w-4 h-4 text-primary" />
                </span>
              </Button>
            </Link>
            <Button 
              variant="outline-light" 
              size="xl" 
              className="gap-3 rounded-full hover:bg-primary-foreground/10 transition-all duration-500"
            >
              <div className="w-9 h-9 rounded-full bg-primary-foreground/15 flex items-center justify-center backdrop-blur-sm">
                <Play className="w-4 h-4 fill-current" />
              </div>
              <span className="font-medium">Watch Our Story</span>
            </Button>
          </div>

          {/* Live impact stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 pt-10 border-t border-primary-foreground/10 animate-fade-in stagger-3">
            {[
              { value: 50000, suffix: "+", label: "Meals Served" },
              { value: 500, suffix: "+", label: "Cows Protected" },
              { value: 100, suffix: "+", label: "Tours Conducted" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl font-display font-bold text-saffron mb-1">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs md:text-sm text-primary-foreground/60 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator with serene animation */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-primary-foreground/60 hover:text-primary-foreground transition-colors cursor-pointer group"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Explore</span>
        <div className="w-7 h-11 rounded-full border-2 border-current flex items-start justify-center p-2 opacity-60 group-hover:opacity-100 transition-opacity">
          <div className="w-1 h-2.5 rounded-full bg-current animate-bounce" />
        </div>
      </button>

      {/* Side navigation hints */}
      <div className="hidden xl:block absolute right-8 top-1/2 -translate-y-1/2 space-y-5">
        {['Gau Seva', 'Annadana', 'Pilgrimage'].map((item, i) => (
          <div 
            key={item}
            className="flex items-center gap-3 text-primary-foreground/40 hover:text-primary-foreground transition-all duration-500 cursor-pointer group"
          >
            <span className="w-6 h-px bg-current group-hover:w-10 transition-all duration-500" />
            <span className="text-xs font-medium tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
