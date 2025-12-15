import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Raghunath Kumar M",
    location: "Vrindavan, India",
    quote: "Your connect with me means more than you can say. Mumbai is a fast-moving city, but Gokulam gave a new peace in my heart and mind. Donations to this organization gave me this connection that never seems impossible.",
    avatar: "RK",
    rating: 5,
    role: "Regular Donor",
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Delhi, India",
    quote: "Being part of Gokulam's Annadana program has been the most fulfilling experience. Seeing the smiles on faces when we serve food is priceless. This trust truly embodies compassion in action.",
    avatar: "PS",
    rating: 5,
    role: "Volunteer",
  },
  {
    id: 3,
    name: "Venkatesh Iyer",
    location: "Chennai, India",
    quote: "The Gau Seva program at Gokulam is exceptional. The care and love they provide to the cows is remarkable. I'm proud to be a regular donor and volunteer.",
    avatar: "VI",
    rating: 5,
    role: "Gau Seva Supporter",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const next = () => {
    if (isAnimating) return;
    setDirection('right');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const prev = () => {
    if (isAnimating) return;
    setDirection('left');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[currentIndex];

  return (
    <section className="py-24 section-teal relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-primary-foreground/10 animate-pulse"
            style={{
              width: `${100 + i * 60}px`,
              height: `${100 + i * 60}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Large quote decoration */}
      <div className="absolute top-20 left-10 opacity-5">
        <Quote className="w-64 h-64" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-semibold text-primary-foreground">Testimonials</span>
            </div>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            What They Are Saying
            <br />
            <span className="text-secondary">About Gokulam</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            {/* Left - Avatar Stack */}
            <div className="lg:col-span-2 relative hidden lg:block">
              <div className="relative h-[400px]">
                {testimonials.map((t, index) => {
                  const isActive = index === currentIndex;
                  const offset = (index - currentIndex + testimonials.length) % testimonials.length;
                  
                  return (
                    <div
                      key={t.id}
                      className={`absolute left-1/2 top-1/2 transition-all duration-500 cursor-pointer`}
                      style={{
                        transform: `translate(-50%, -50%) translateY(${(offset - 1) * 120}px) scale(${isActive ? 1 : 0.8})`,
                        opacity: isActive ? 1 : 0.5,
                        zIndex: isActive ? 10 : 5 - offset,
                      }}
                      onClick={() => setCurrentIndex(index)}
                    >
                      <div className={`w-32 h-32 rounded-2xl ${isActive ? 'bg-gradient-to-br from-secondary to-secondary/80' : 'bg-primary-foreground/10'} flex items-center justify-center shadow-2xl transition-all duration-500`}>
                        <span className={`font-display text-3xl font-bold ${isActive ? 'text-secondary-foreground' : 'text-primary-foreground'}`}>
                          {t.avatar}
                        </span>
                      </div>
                      {isActive && (
                        <div className="absolute -inset-4 rounded-3xl border-2 border-secondary/30 animate-pulse" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right - Content */}
            <div className="lg:col-span-3">
              {/* Mobile avatar */}
              <div className="lg:hidden flex justify-center mb-8">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-xl">
                  <span className="font-display text-2xl font-bold text-secondary-foreground">
                    {testimonial.avatar}
                  </span>
                </div>
              </div>

              {/* Testimonial card */}
              <div className="relative">
                <div className={`bg-primary-foreground/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-primary-foreground/10 transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                  {/* Quote icon */}
                  <Quote className="w-10 h-10 text-secondary mb-6" />
                  
                  {/* Quote text */}
                  <blockquote className="font-display text-xl md:text-2xl text-primary-foreground leading-relaxed mb-8">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-secondary fill-secondary" />
                    ))}
                  </div>

                  {/* Author info */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-display text-xl font-bold text-primary-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-primary-foreground/70 text-sm">
                        {testimonial.role} • {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-6 mt-8">
                <Button
                  variant="outline-light"
                  size="icon"
                  onClick={prev}
                  className="w-12 h-12 rounded-full"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                
                <div className="flex gap-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "w-10 bg-secondary"
                          : "w-2 bg-primary-foreground/30 hover:bg-primary-foreground/50"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                
                <Button
                  variant="outline-light"
                  size="icon"
                  onClick={next}
                  className="w-12 h-12 rounded-full"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
