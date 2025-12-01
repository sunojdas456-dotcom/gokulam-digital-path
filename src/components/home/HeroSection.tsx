import { Link } from "react-router-dom";
import { ArrowRight, Heart, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-krishna.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Lord Krishna in Vrindavan"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-40 right-40 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" />

      <div className="container relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground">
              Serving Humanity Since 2010
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-slide-up">
            Your Seva Powers
            <br />
            The Mission of{" "}
            <span className="text-secondary italic">Gokulam</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Join us in our sacred mission to serve humanity through compassion, 
            faith, and purpose. Every act of seva creates ripples of positive change.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Link to="/donations">
              <Button variant="hero" size="xl" className="gap-3">
                <Heart className="w-5 h-5" />
                Donate Now
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Button variant="outline-light" size="xl" className="gap-3">
              <Play className="w-5 h-5" />
              Watch Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">10K+</p>
              <p className="text-sm text-primary-foreground/70">Donors Worldwide</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">500+</p>
              <p className="text-sm text-primary-foreground/70">Cows Protected</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">1M+</p>
              <p className="text-sm text-primary-foreground/70">Meals Served</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
