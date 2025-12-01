import { useState, useEffect, useRef } from "react";

const stats = [
  { value: 10000, suffix: "+", label: "Happy Donors", color: "text-secondary" },
  { value: 500, suffix: "+", label: "Cows Protected", color: "text-primary-foreground" },
  { value: 1000000, suffix: "+", label: "Meals Served", color: "text-accent" },
  { value: 200, suffix: "+", label: "Pilgrimages Sponsored", color: "text-secondary" },
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
          const duration = 2000;
          const steps = 60;
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
      { threshold: 0.5 }
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
    <div ref={ref} className="font-display text-4xl md:text-5xl font-bold">
      {formatNumber(count)}{suffix}
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-16 gradient-coral text-secondary-foreground">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-sm font-semibold mb-4 opacity-90">
            <span className="w-8 h-px bg-secondary-foreground/50" />
            Help Strengthen
            <span className="w-8 h-px bg-secondary-foreground/50" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            We can achieve Gokulam dreams
            <br />
            when we work together.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="p-6">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-sm mt-2 opacity-80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
