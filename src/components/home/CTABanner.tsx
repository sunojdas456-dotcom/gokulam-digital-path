import { Link } from "react-router-dom";
import { Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTABanner() {
  return (
    <section className="py-20 section-teal relative overflow-hidden">
      {/* Decorative paint strokes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-secondary/20 rounded-br-full" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent/20 rounded-tl-full" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Join Gokulam In Serving Humanity
            <br />
            With Devotion And Purpose.
          </h2>

          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Every act of service, every donation, every prayer - together we can 
            create a world filled with compassion and love.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/donations">
              <Button variant="coral" size="xl" className="gap-3">
                <Heart className="w-5 h-5" />
                Make a Donation
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/volunteer">
              <Button variant="outline-light" size="xl" className="gap-2">
                Volunteer With Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
