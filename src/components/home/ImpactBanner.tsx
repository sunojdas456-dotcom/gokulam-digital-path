import { Link } from "react-router-dom";
import { Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ImpactBanner() {
  return (
    <section className="py-16 section-teal relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-secondary text-sm font-semibold mb-6">
            <span className="w-8 h-px bg-secondary" />
            Create a Change Today
            <span className="w-8 h-px bg-secondary" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            A Single Act Of Seva Can Change
            <br />
            <span className="text-secondary">An Entire Life</span>
          </h2>

          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Your generous contribution helps us continue our sacred mission of serving 
            humanity. Every donation, big or small, makes a meaningful difference.
          </p>

          <Link to="/donations">
            <Button variant="coral" size="xl" className="gap-3">
              <Heart className="w-5 h-5" />
              Start Your Seva Today
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
