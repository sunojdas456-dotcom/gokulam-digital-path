import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTABanner() {
  return (
    <section className="py-24 section-teal-radial relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-saffron/15 rounded-br-[100px] blur-sm" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-coral/10 rounded-tl-[100px] blur-sm" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary-foreground/5 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-primary-foreground/5 rounded-full" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-saffron animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground">Join Our Mission</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-primary-foreground">
            Join Gokulam In Serving
            <br />
            <span className="text-saffron italic">Humanity With Devotion</span>
          </h2>

          <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Every act of service, every donation, every prayer brings us closer together 
            in creating a world filled with compassion and love.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/donations">
              <Button 
                variant="coral" 
                size="xl" 
                className="gap-3 pr-4 rounded-full shadow-coral hover:shadow-lg transition-shadow"
              >
                <span className="font-semibold">Make a Donation</span>
                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-coral" />
                </span>
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                variant="outline-light" 
                size="xl" 
                className="rounded-full hover:bg-primary-foreground/10"
              >
                Learn About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}