import { Search, Heart, CreditCard, Gift, HandHeart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const steps = [
  { icon: Search, title: "Identify the Need", description: "Choose from our various seva programs that resonate with your heart" },
  { icon: Heart, title: "Define the Help", description: "Select the type and amount of contribution you wish to make" },
  { icon: CreditCard, title: "Plan the Seva Program", description: "Complete the donation process securely through our portal" },
  { icon: Gift, title: "Receive Receipt", description: "Get your donation receipt with 80G certificate for tax benefits" },
  { icon: HandHeart, title: "Handover & Grow", description: "Your seva reaches those in need and creates lasting impact" },
];

export function DonationProcess() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.15 });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="container">
        <div className={cn(
          "text-center max-w-2xl mx-auto mb-20 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="inline-flex items-center gap-2 text-secondary text-sm font-medium mb-5">
            <span className="w-10 h-px bg-secondary/50" />
            How We Proceed
            <span className="w-10 h-px bg-secondary/50" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            How We Proceed with Donations
          </h2>
          <p className="text-muted-foreground text-lg">
            A simple, transparent process to ensure your seva reaches those who need it most
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={cn(
                "relative text-center group transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-px bg-border/50">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-secondary/50" />
                </div>
              )}

              <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-muted/50 border border-border/50 flex items-center justify-center group-hover:bg-primary/5 group-hover:border-primary/20 transition-all duration-500">
                <step.icon className="w-8 h-8 text-primary/70 group-hover:text-primary group-hover:scale-110 transition-all duration-500" />
              </div>

              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-secondary text-secondary-foreground text-xs font-bold flex items-center justify-center shadow-soft">
                {index + 1}
              </div>

              <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
