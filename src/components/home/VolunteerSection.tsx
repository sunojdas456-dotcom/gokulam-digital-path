import { Link } from "react-router-dom";
import { ArrowRight, Users, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const positions = [
  {
    title: "Kitchen Seva Volunteer",
    commitment: "4 hours/week",
    location: "Gokulam Campus",
  },
  {
    title: "Goshala Care Assistant",
    commitment: "Flexible",
    location: "Goshala",
  },
  {
    title: "Event Coordinator",
    commitment: "As needed",
    location: "Various",
  },
];

export function VolunteerSection() {
  return (
    <section className="py-20 section-cream">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-secondary text-sm font-semibold mb-4">
            <span className="w-8 h-px bg-secondary" />
            Volunteer
            <span className="w-8 h-px bg-secondary" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Volunteer Positions Available
          </h2>

          <p className="text-muted-foreground text-lg mb-8">
            Join our family of dedicated volunteers and make a difference in the lives of others
          </p>

          {/* Positions */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {positions.map((position) => (
              <div
                key={position.title}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-soft transition-all"
              >
                <Users className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{position.title}</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {position.commitment}
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {position.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link to="/volunteer">
            <Button variant="coral" size="lg" className="gap-2">
              Become a Volunteer
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
