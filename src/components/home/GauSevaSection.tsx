import { Link } from "react-router-dom";
import { Play, ArrowRight, Leaf, Heart, Sparkles, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import gauSevaImage from "@/assets/gau-seva.jpg";
import { useState, useEffect } from "react";

const benefits = [
  { title: "Daily Meals", desc: "Fresh & Life-Giving Nutrition", icon: "🌾" },
  { title: "Daily Care", desc: "Expert healthcare and supervision", icon: "💊" },
  { title: "Safe Shelter", desc: "Comfortable living spaces", icon: "🏠" },
];

const cowStats = [
  { value: "500+", label: "Cows Protected" },
  { value: "365", label: "Days of Care" },
  { value: "1000+", label: "Daily Meals" },
];

export function GauSevaSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeBenefit, setActiveBenefit] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBenefit((prev) => (prev + 1) % benefits.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 section-teal relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-primary-foreground/10 animate-pulse"
              style={{
                width: `${100 + i * 80}px`,
                height: `${100 + i * 80}px`,
                top: `${10 + i * 5}%`,
                left: `${-5 + i * 3}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i}s`,
              }}
            />
          ))}
        </div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Creative Video Card */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Stacked cards effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-secondary/30 to-accent/30 transform rotate-6 scale-95 opacity-60" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-secondary/20 to-accent/20 transform rotate-3 scale-97 opacity-80" />
            
            {/* Main video card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]">
              <div className="aspect-video relative">
                <img
                  src={gauSevaImage}
                  alt="Gau Seva at Gokulam"
                  className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
                />
                
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent" />
                
                {/* Play button with ripple effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Ripple rings */}
                    <div className="absolute inset-0 rounded-full bg-secondary/30 animate-ping" style={{ animationDuration: "2s" }} />
                    <div className="absolute -inset-4 rounded-full bg-secondary/20 animate-ping" style={{ animationDuration: "2.5s", animationDelay: "0.5s" }} />
                    
                    <button className="relative w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group/btn">
                      <Play className="w-10 h-10 text-secondary-foreground fill-current ml-1 group-hover/btn:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Floating stats on hover */}
                <div className={`absolute bottom-6 left-6 right-6 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="flex justify-between gap-4">
                    {cowStats.map((stat, index) => (
                      <div 
                        key={stat.label}
                        className="flex-1 bg-primary-foreground/10 backdrop-blur-md rounded-xl p-3 border border-primary-foreground/20"
                        style={{ transitionDelay: `${index * 0.1}s` }}
                      >
                        <p className="font-display text-xl font-bold text-primary-foreground">{stat.value}</p>
                        <p className="text-xs text-primary-foreground/70">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-10">
              <div className="px-6 py-3 bg-card rounded-full shadow-elevated border border-border flex items-center gap-3">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                </span>
                <span className="text-sm font-semibold text-foreground">Live Goshala Feed</span>
              </div>
            </div>
          </div>

          {/* Right - Content with animated benefits */}
          <div className="text-primary-foreground">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20">
                <Leaf className="w-4 h-4 text-secondary" />
                <span className="text-sm font-semibold text-primary-foreground">Gau Seva</span>
              </div>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Support Gau Seva
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-secondary">Preserve Dharma</span>
                <Sparkles className="absolute -top-2 -right-6 w-6 h-6 text-secondary animate-pulse" />
              </span>
            </h2>

            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-10 max-w-lg">
              Our Goshala is home to over 500 cows who are cared for with love 
              and devotion. Your seva helps provide them with nutritious food, 
              medical care, and a safe sanctuary.
            </p>

            {/* Animated Benefits Carousel */}
            <div className="relative mb-10">
              <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-3xl p-8 border border-primary-foreground/10 overflow-hidden">
                <h4 className="font-semibold mb-6 flex items-center gap-3 text-lg">
                  <Heart className="w-6 h-6 text-secondary" />
                  Our Hands Feed & Care for Gaumatas
                </h4>
                
                {/* Benefit items with slide animation */}
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div
                      key={benefit.title}
                      className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-500 cursor-pointer ${
                        activeBenefit === index 
                          ? 'bg-primary-foreground/10 scale-105 shadow-lg' 
                          : 'hover:bg-primary-foreground/5'
                      }`}
                      onClick={() => setActiveBenefit(index)}
                    >
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl transition-all duration-300 ${
                        activeBenefit === index ? 'bg-secondary scale-110' : 'bg-primary-foreground/10'
                      }`}>
                        {benefit.icon}
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-primary-foreground">{benefit.title}</h5>
                        <p className="text-sm text-primary-foreground/70">{benefit.desc}</p>
                      </div>
                      <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeBenefit === index ? 'bg-secondary scale-150' : 'bg-primary-foreground/30'
                      }`} />
                    </div>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="mt-6 h-1 bg-primary-foreground/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-secondary transition-all duration-300"
                    style={{ width: `${((activeBenefit + 1) / benefits.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            <Link to="/donations?seva=gau">
              <Button variant="coral" size="lg" className="gap-3 group px-8 shadow-lg hover:shadow-xl">
                <span>Support Gau Seva</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
