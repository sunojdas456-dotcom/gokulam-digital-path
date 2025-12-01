import { Search, Heart, CreditCard, Gift, HandHeart, Users } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Identify the Need",
    description: "Choose from our various seva programs that resonate with your heart",
  },
  {
    icon: Heart,
    title: "Define the Help",
    description: "Select the type and amount of contribution you wish to make",
  },
  {
    icon: CreditCard,
    title: "Plan the Seva Program",
    description: "Complete the donation process securely through our portal",
  },
  {
    icon: Gift,
    title: "Receive Receipt",
    description: "Get your donation receipt with 80G certificate for tax benefits",
  },
  {
    icon: HandHeart,
    title: "Handover & Grow",
    description: "Your seva reaches those in need and creates lasting impact",
  },
];

export function DonationProcess() {
  return (
    <section className="py-20 section-cream">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-secondary text-sm font-semibold mb-4">
            <span className="w-8 h-px bg-secondary" />
            How We Proceed
            <span className="w-8 h-px bg-secondary" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            How We Proceed with Donations
          </h2>
          <p className="text-muted-foreground">
            A simple, transparent process to ensure your seva reaches those who need it most
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative text-center group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-px bg-border">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-secondary" />
                </div>
              )}

              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                <step.icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors" />
              </div>

              {/* Step Number */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-xs font-bold flex items-center justify-center">
                {index + 1}
              </div>

              {/* Content */}
              <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
