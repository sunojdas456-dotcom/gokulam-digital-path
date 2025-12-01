import { Linkedin, Mail } from "lucide-react";

const trustees = [
  {
    name: "Sri Krishna Das",
    role: "Founder & Chairman",
    avatar: "KD",
    description: "Dedicated to serving humanity for over 30 years",
  },
  {
    name: "Radha Devi",
    role: "Managing Trustee",
    avatar: "RD",
    description: "Leading Gau Seva initiatives with devotion",
  },
  {
    name: "Govind Sharma",
    role: "Trustee - Operations",
    avatar: "GS",
    description: "Ensuring smooth operations of all seva programs",
  },
  {
    name: "Lakshmi Narayanan",
    role: "Trustee - Finance",
    avatar: "LN",
    description: "Maintaining transparency in all financial matters",
  },
];

export function TrusteesSection() {
  return (
    <section className="py-20 section-cream">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-secondary text-sm font-semibold mb-4">
            <span className="w-8 h-px bg-secondary" />
            Our Leadership
            <span className="w-8 h-px bg-secondary" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Trustees
          </h2>
          <p className="text-muted-foreground">
            Dedicated individuals guiding our mission with wisdom and compassion
          </p>
        </div>

        {/* Trustees Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustees.map((trustee) => (
            <div
              key={trustee.name}
              className="group bg-card rounded-2xl p-6 text-center shadow-soft hover-lift border border-border"
            >
              {/* Avatar */}
              <div className="w-20 h-20 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                <span className="font-display text-2xl font-bold text-primary-foreground">
                  {trustee.avatar}
                </span>
              </div>

              {/* Info */}
              <h3 className="font-semibold text-foreground mb-1">{trustee.name}</h3>
              <p className="text-sm text-secondary font-medium mb-2">{trustee.role}</p>
              <p className="text-sm text-muted-foreground mb-4">{trustee.description}</p>

              {/* Social Links */}
              <div className="flex justify-center gap-2">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={`${trustee.name} on LinkedIn`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={`Email ${trustee.name}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
