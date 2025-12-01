import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Heart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  { value: "14+", label: "Years of Service" },
  { value: "100%", label: "Transparent Operations" },
];

export function AboutSection() {
  return (
    <section className="py-20 section-cream lotus-pattern">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main large image placeholder */}
              <div className="col-span-2 aspect-[16/9] rounded-2xl gradient-primary flex items-center justify-center overflow-hidden">
                <div className="text-center text-primary-foreground p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                    <span className="font-display text-4xl font-bold">G</span>
                  </div>
                  <p className="font-display text-lg">Gokulam Trust</p>
                </div>
              </div>
              {/* Trust badge */}
              <div className="rounded-xl bg-card shadow-soft p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-8 h-8 text-primary" />
                  <span className="font-display text-lg font-semibold">Trust</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Registered charitable organization
                </p>
              </div>
              {/* Stats */}
              <div className="rounded-xl gradient-coral p-6 text-secondary-foreground">
                <p className="font-display text-3xl font-bold mb-1">80G</p>
                <p className="text-sm opacity-90">Tax Exemption Available</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="inline-flex items-center gap-2 text-secondary text-sm font-semibold mb-4">
              <span className="w-8 h-px bg-secondary" />
              About Gokulam
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Serving Humanity with
              <br />
              <span className="text-primary">Compassion, Faith & Purpose</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Gokulam Dharmik Charitable Trust has been dedicated to serving humanity 
              through various seva initiatives. Our mission is rooted in the timeless 
              values of dharma, compassion, and selfless service.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="flex gap-8 mb-8 pb-8 border-b border-border">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link to="/about">
              <Button size="lg" className="gap-2">
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
