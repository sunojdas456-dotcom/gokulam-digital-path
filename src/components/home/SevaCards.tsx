import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
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
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="py-10 -mt-20 relative z-20">
      <div className="container" ref={ref}>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {sevas.map((seva, index) => (
            <Link
              key={seva.title}
              to={seva.href}
              className={cn(
                "group relative overflow-hidden rounded-3xl shadow-serene-lg hover-serene",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                transitionDuration: '800ms',
                transitionProperty: 'all',
                transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={seva.image}
                  alt={seva.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Gradient Overlay - softer */}
              <div className={`absolute inset-0 bg-gradient-to-t ${seva.accent} opacity-70 mix-blend-multiply`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Badge */}
              {seva.badge && (
                <div className="absolute top-5 right-5 px-4 py-2 rounded-full bg-saffron/90 backdrop-blur-sm text-xs font-semibold text-white shadow-soft">
                  {seva.badge}
                </div>
              )}

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <p className="text-xs font-medium uppercase tracking-widest opacity-70 mb-2">
                  {seva.subtitle}
                </p>
                <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-saffron transition-colors duration-500">
                  {seva.title}
                </h3>
                <p className="text-sm opacity-80 mb-6 line-clamp-2 leading-relaxed">
                  {seva.description}
                </p>
                
                {/* Action button */}
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold group-hover:underline underline-offset-4 transition-all duration-300">
                    Learn More
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center group-hover:bg-saffron group-hover:scale-110 transition-all duration-500">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-3xl border-2 border-white/0 group-hover:border-saffron/40 transition-colors duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
