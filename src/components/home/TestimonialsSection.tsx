import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Raghunath Kumar M",
    location: "Vrindavan, India",
    quote: "Your connect with me means more than you can say. Mumbai is a fast-moving city, but Gokulam gave a new peace in my heart and mind. Donations to this organization gave me this connection that never seems impossible.",
    avatar: "RK",
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Delhi, India",
    quote: "Being part of Gokulam's Annadana program has been the most fulfilling experience. Seeing the smiles on faces when we serve food is priceless. This trust truly embodies compassion in action.",
    avatar: "PS",
  },
  {
    id: 3,
    name: "Venkatesh Iyer",
    location: "Chennai, India",
    quote: "The Gau Seva program at Gokulam is exceptional. The care and love they provide to the cows is remarkable. I'm proud to be a regular donor and volunteer.",
    avatar: "VI",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section className="py-20 section-teal relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full border-2 border-primary-foreground/10" />
      <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full border-2 border-primary-foreground/10" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image Area */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden">
              <div className="w-full h-full gradient-coral flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-secondary-foreground/10 flex items-center justify-center">
                    <span className="font-display text-4xl font-bold">{testimonial.avatar}</span>
                  </div>
                  <p className="text-secondary-foreground font-display text-lg">{testimonial.name}</p>
                  <p className="text-secondary-foreground/70 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="inline-flex items-center gap-2 text-secondary text-sm font-semibold mb-4">
              <span className="w-8 h-px bg-secondary" />
              Cause of Change, Or Year of Bless
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
              What They Are Saying
              <br />
              About Gokulam
            </h2>

            {/* Quote */}
            <div className="relative mb-8">
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-secondary/30" />
              <p className="text-primary-foreground/90 text-lg leading-relaxed pl-8">
                "{testimonial.quote}"
              </p>
            </div>

            {/* Author */}
            <div className="mb-8">
              <h4 className="font-semibold text-lg">{testimonial.name}</h4>
              <p className="text-primary-foreground/70">{testimonial.location}</p>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline-light"
                size="icon"
                onClick={prev}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-8 bg-secondary"
                        : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <Button
                variant="outline-light"
                size="icon"
                onClick={next}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
