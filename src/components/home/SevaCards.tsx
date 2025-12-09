import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import gauSevaImage from "@/assets/gau-seva.jpg";
import annadanaImage from "@/assets/annadana-seva.jpg";
import pilgrimageImage from "@/assets/pilgrimage.jpg";

const sevas = [
  {
    title: "Nurture Gaumata",
    subtitle: "Preserve Dharma",
    description: "Support our cow sanctuary and help protect these sacred beings with love and devotion",
    image: gauSevaImage,
    href: "/donations?seva=gau",
    accent: "from-primary to-teal-deep",
    badge: "Most Popular",
  },
  {
    title: "Feed The Hungry",
    subtitle: "Serve With Compassion",
    description: "Provide nutritious meals to those in need through the sacred practice of Annadana",
    image: annadanaImage,
    href: "/donations?seva=annadana",
    accent: "from-coral to-coral-dark",
    badge: null,
  },
  {
    title: "Gift A Holy Journey",
    subtitle: "Support For Pilgrimage",
    description: "Help devotees experience sacred pilgrimages to holy destinations across India",
    image: pilgrimageImage,
    href: "/pilgrimage",
    accent: "from-saffron to-coral",
    badge: "Free Tours",
  },
];

export function SevaCards() {
  return (
    <section className="py-8 -mt-20 relative z-20">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {sevas.map((seva, index) => (
            <Link
              key={seva.title}
              to={seva.href}
              className="group relative overflow-hidden rounded-3xl shadow-dramatic hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={seva.image}
                  alt={seva.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${seva.accent} opacity-80 mix-blend-multiply`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Badge */}
              {seva.badge && (
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-saffron text-xs font-bold text-white shadow-lg">
                  {seva.badge}
                </div>
              )}

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider opacity-80 mb-2">
                  {seva.subtitle}
                </p>
                <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-saffron transition-colors">
                  {seva.title}
                </h3>
                <p className="text-sm opacity-85 mb-5 line-clamp-2 leading-relaxed">
                  {seva.description}
                </p>
                
                {/* Action button */}
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold group-hover:underline underline-offset-4">
                    Learn More
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-saffron group-hover:scale-110 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-3xl border-2 border-white/0 group-hover:border-saffron/50 transition-colors duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}