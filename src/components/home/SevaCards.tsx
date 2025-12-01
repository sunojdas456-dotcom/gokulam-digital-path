import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import gauSevaImage from "@/assets/gau-seva.jpg";
import annadanaImage from "@/assets/annadana-seva.jpg";
import pilgrimageImage from "@/assets/pilgrimage.jpg";

const sevas = [
  {
    title: "Nurture Gaumata",
    subtitle: "Preserve Dharma",
    description: "Support our cow sanctuary and help protect these sacred beings",
    image: gauSevaImage,
    href: "/donations?seva=gau",
    color: "primary",
  },
  {
    title: "Feed The Hungry",
    subtitle: "Serve With Compassion",
    description: "Provide nutritious meals to those in need through Annadana",
    image: annadanaImage,
    href: "/donations?seva=annadana",
    color: "secondary",
  },
  {
    title: "Gift A Holy Journey",
    subtitle: "Support For Pilgrimage",
    description: "Help devotees experience sacred pilgrimages to holy destinations",
    image: pilgrimageImage,
    href: "/pilgrimage",
    color: "accent",
  },
];

export function SevaCards() {
  return (
    <section className="py-6 -mt-24 relative z-20">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-6">
          {sevas.map((seva, index) => (
            <Link
              key={seva.title}
              to={seva.href}
              className="group relative overflow-hidden rounded-2xl shadow-elevated hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={seva.image}
                  alt={seva.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                <p className="text-sm font-medium opacity-80 mb-1">{seva.subtitle}</p>
                <h3 className="font-display text-xl font-bold mb-2">{seva.title}</h3>
                <p className="text-sm opacity-80 mb-4 line-clamp-2">{seva.description}</p>
                <Button
                  variant="coral"
                  size="sm"
                  className="group-hover:translate-x-2 transition-transform"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
