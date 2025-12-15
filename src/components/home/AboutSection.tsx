import { Link } from "react-router-dom";
import { ArrowRight, Heart, Shield, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";

const features = [
  {
    icon: Heart,
    title: "Begin your Seva with Gokulam",
    description: "Start your spiritual journey of service",
  },
  {
    icon: Shield,
    title: "Make Donations",
    description: "Support our sacred mission through your generosity",
  },
];

const stats = [
  { value: 14, suffix: "+", label: "Years of Service" },
  { value: 100, suffix: "%", label: "Transparent Operations" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={ref} className="font-display text-4xl md:text-5xl font-bold text-primary">
      {count}{suffix}
    </div>
  );
}

export function AboutSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) / 25,
      y: (e.clientY - rect.top - rect.height / 2) / 25,
    });
  };

  return (
    <section className="py-24 section-cream lotus-pattern relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/5 animate-float" />
      <div className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-secondary/5 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-accent/5 animate-float" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Creative Image Stack with Parallax */}
          <div 
            className="relative"
            onMouseMove={handleMouseMove}
          >
            {/* Main image container with 3D effect */}
            <div className="relative perspective-1000">
              <div 
                className="transform transition-transform duration-300 ease-out"
                style={{ 
                  transform: `rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)` 
                }}
              >
                {/* Background decorative card */}
                <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl bg-gradient-to-br from-secondary/20 to-accent/20 transform rotate-3" />
                
                {/* Main card */}
                <div className="relative rounded-3xl gradient-primary p-8 shadow-2xl">
                  <div className="text-center text-primary-foreground">
                    {/* Animated logo ring */}
                    <div className="relative w-32 h-32 mx-auto mb-6">
                      <div className="absolute inset-0 rounded-full border-2 border-primary-foreground/20 animate-spin" style={{ animationDuration: "8s" }} />
                      <div className="absolute inset-2 rounded-full border-2 border-dashed border-primary-foreground/30 animate-spin" style={{ animationDuration: "12s", animationDirection: "reverse" }} />
                      <div className="absolute inset-4 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                        <span className="font-display text-5xl font-bold">G</span>
                      </div>
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-2">Gokulam Trust</h3>
                    <p className="text-primary-foreground/80 text-sm">Serving with Love & Devotion</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating info cards */}
            <div className="absolute -bottom-6 -left-6 md:left-0 z-10 animate-float">
              <div className="bg-card rounded-2xl shadow-elevated p-5 border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                    <Shield className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold text-foreground">Registered</p>
                    <p className="text-xs text-muted-foreground">Charitable Organization</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 md:right-0 z-10 animate-float" style={{ animationDelay: "0.5s" }}>
              <div className="bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl shadow-elevated p-5 text-secondary-foreground">
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 fill-current" />
                  <div>
                    <p className="font-display text-2xl font-bold">80G</p>
                    <p className="text-xs opacity-90">Tax Exemption</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content with creative elements */}
          <div className="relative">
            {/* Decorative accent */}
            <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-primary/5 blur-2xl" />
            
            <div className="relative">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">About Gokulam</span>
                </div>
              </div>

              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Serving Humanity
                <br />
                <span className="relative">
                  <span className="relative z-10 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                    with Purpose
                  </span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/10 -skew-x-6" />
                </span>
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-lg">
                Gokulam Dharmik Charitable Trust has been dedicated to serving humanity 
                through various seva initiatives. Our mission is rooted in the timeless 
                values of dharma, compassion, and selfless service.
              </p>

              {/* Creative Features */}
              <div className="space-y-4 mb-10">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="group relative flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="relative">
                      <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                    <ArrowRight className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>

              {/* Animated Stats */}
              <div className="flex gap-12 mb-10 pb-10 border-b border-border">
                {stats.map((stat) => (
                  <div key={stat.label} className="group cursor-default">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    <p className="text-sm text-muted-foreground mt-1 group-hover:text-foreground transition-colors">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <Link to="/about">
                <Button size="lg" className="gap-3 group px-8">
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
