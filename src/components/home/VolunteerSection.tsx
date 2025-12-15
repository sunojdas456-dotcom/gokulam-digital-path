import { Link } from "react-router-dom";
import { ArrowRight, Users, Calendar, MapPin, Heart, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const positions = [
  {
    title: "Kitchen Seva Volunteer",
    commitment: "4 hours/week",
    location: "Gokulam Campus",
    icon: "🍳",
    gradient: "from-orange-500 to-amber-400",
    description: "Help prepare and serve meals for our Annadana program",
  },
  {
    title: "Goshala Care Assistant",
    commitment: "Flexible",
    location: "Goshala",
    icon: "🐄",
    gradient: "from-emerald-500 to-teal-400",
    description: "Support daily care activities for our beloved Gaumatas",
  },
  {
    title: "Event Coordinator",
    commitment: "As needed",
    location: "Various",
    icon: "🎯",
    gradient: "from-purple-500 to-pink-400",
    description: "Help organize and manage trust events and programs",
  },
];

const impactStats = [
  { value: "500+", label: "Active Volunteers" },
  { value: "10K+", label: "Hours Served" },
  { value: "50+", label: "Events Organized" },
];

export function VolunteerSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 section-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-20 w-60 h-60 rounded-full bg-secondary/5 blur-3xl" />
      
      {/* Floating hearts animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/10 animate-float"
            style={{
              width: `${20 + i * 10}px`,
              height: `${20 + i * 10}px`,
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i}s`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Join Our Family</span>
              </div>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Volunteer Positions
              <span className="relative inline-block ml-3">
                <span className="relative z-10 text-primary">Available</span>
                <Sparkles className="absolute -top-2 -right-4 w-5 h-5 text-secondary animate-pulse" />
              </span>
            </h2>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join our family of dedicated volunteers and make a difference in the lives of others. 
              Every act of service brings us closer to our divine mission.
            </p>
          </div>

          {/* Impact Stats */}
          <div className="flex justify-center gap-8 md:gap-16 mb-16">
            {impactStats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Positions with creative cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {positions.map((position, index) => (
              <div
                key={position.title}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Background glow */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${position.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />
                
                <div className={`relative p-8 bg-card rounded-3xl border border-border overflow-hidden transition-all duration-500 ${
                  hoveredIndex === index ? 'shadow-elevated border-primary/30 scale-[1.02]' : 'shadow-soft'
                }`}>
                  {/* Gradient accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${position.gradient}`} />
                  
                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${position.gradient} flex items-center justify-center text-4xl mb-6 transform transition-transform duration-500 ${
                    hoveredIndex === index ? 'scale-110 rotate-6' : ''
                  }`}>
                    {position.icon}
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {position.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-6">
                    {position.description}
                  </p>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-primary" />
                      </div>
                      <span>{position.commitment}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-secondary" />
                      </div>
                      <span>{position.location}</span>
                    </div>
                  </div>

                  {/* Apply button on hover */}
                  <div className={`mt-6 transition-all duration-300 ${
                    hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    <Link to="/volunteer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/volunteer">
              <Button variant="coral" size="lg" className="gap-3 group px-8 shadow-lg hover:shadow-xl">
                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Become a Volunteer</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <p className="mt-4 text-sm text-muted-foreground">
              <Star className="w-4 h-4 inline-block text-secondary mr-1" />
              Join 500+ volunteers making a difference every day
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
