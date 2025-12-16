import { useState, useEffect, useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const stats = [
  { value: 10000, suffix: "+", label: "Happy Donors", icon: "❤️" },
  { value: 500, suffix: "+", label: "Cows Protected", icon: "🐄" },
  { value: 1000000, suffix: "+", label: "Meals Served", icon: "🍽️" },
  { value: 200, suffix: "+", label: "Pilgrimages Sponsored", icon: "🛕" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2500;
          const steps = 80;
          const increment = value / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K";
    }
    return num.toString();
  };

  return (
    <div ref={ref} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
      {formatNumber(count)}{suffix}
    </div>
  );
}

export function StatsSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, hsl(18 75% 60%) 0%, hsl(18 70% 50%) 50%, hsl(40 85% 55%) 100%)'
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-[100px]" />
      
      {/* Sacred geometry pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-white" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full border border-white" />
      </div>

      <div className="container relative z-10">
        <div className={cn(
          "text-center mb-16 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="inline-flex items-center gap-3 text-sm font-medium mb-5 text-white/80">
            <span className="w-10 h-px bg-white/40" />
            Help Strengthen
            <span className="w-10 h-px bg-white/40" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            We can achieve Gokulam dreams
            <br />
            <span className="text-white/90">when we work together.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className={cn(
                "relative p-8 md:p-10 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/10 text-center text-white transition-all duration-700",
                "hover:bg-white/15 hover:border-white/20 hover:scale-105",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              <div className="text-3xl mb-4">{stat.icon}</div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-sm mt-3 opacity-80 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
