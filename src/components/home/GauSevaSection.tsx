import { Link } from "react-router-dom";
import { Play, ArrowRight, Leaf, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import gauSevaImage from "@/assets/gau-seva.jpg";

const benefits = [
  "Daily Meals: Fresh & Life-Giving Nutrition",
  "Daily Care: Expert healthcare and supervision",
  "Safe Shelter: Comfortable living spaces",
];

export function GauSevaSection() {
  return (
    <section className="py-20 section-teal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-2 border-primary-foreground" />
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full border-2 border-primary-foreground" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Video/Image */}
          <div className="relative group">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={gauSevaImage}
                alt="Gau Seva at Gokulam"
                className="w-full h-full object-cover"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-primary/20">
                <button className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center shadow-coral group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-secondary-foreground fill-current ml-1" />
                </button>
              </div>
            </div>
            {/* Floating Label */}
            <div className="absolute -bottom-4 left-6 px-6 py-3 bg-card rounded-xl shadow-soft">
              <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                <span className="text-secondary">🎬</span>
                Watch Now
              </p>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="inline-flex items-center gap-2 text-secondary text-sm font-semibold mb-4">
              <span className="w-8 h-px bg-secondary" />
              Gau Seva
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Support Gau Seva, Preserve
              <br />
              Dharma, Spread Compassion
            </h2>

            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              Our Goshala is home to over 500 cows who are cared for with love 
              and devotion. Your seva helps provide them with nutritious food, 
              medical care, and a safe sanctuary.
            </p>

            {/* Benefits Card */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-primary-foreground/10">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Leaf className="w-5 h-5 text-secondary" />
                Our Hands Feed & Care for Gaumatas
              </h4>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm">
                    <Heart className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span className="text-primary-foreground/90">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link to="/donations?seva=gau">
              <Button variant="coral" size="lg" className="gap-2">
                Support Gau Seva
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
