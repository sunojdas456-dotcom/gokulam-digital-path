import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Users, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";

const events = [
  {
    id: 1,
    title: "Monthly Aaruga Annadana Mahōtsava",
    date: "15 Dec 2024",
    location: "Gokulam Campus",
    attendees: 500,
    image: "🍚",
    gradient: "from-orange-500 to-amber-400",
    status: "upcoming",
  },
  {
    id: 2,
    title: "Gau Puja on Ekadashi with Mahotsavam",
    date: "12 Dec 2024",
    location: "Goshala",
    attendees: 200,
    image: "🐄",
    gradient: "from-emerald-500 to-teal-400",
    status: "upcoming",
  },
  {
    id: 3,
    title: "Monthly Aaruga Annadana Mahōtsava",
    date: "28 Nov 2024",
    location: "Gokulam Campus",
    attendees: 450,
    image: "🍚",
    gradient: "from-purple-500 to-pink-400",
    status: "completed",
  },
  {
    id: 4,
    title: "Gau Puja on Ekadashi with Mahotsavam",
    date: "26 Nov 2024",
    location: "Goshala",
    attendees: 180,
    image: "🐄",
    gradient: "from-blue-500 to-cyan-400",
    status: "completed",
  },
  {
    id: 5,
    title: "Diwali Celebration at Gokulam",
    date: "20 Nov 2024",
    location: "Main Hall",
    attendees: 800,
    image: "🪔",
    gradient: "from-yellow-500 to-orange-400",
    status: "completed",
  },
];

export function EventsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % events.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const scrollToIndex = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % events.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + events.length) % events.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-24 section-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-secondary/5 blur-3xl" />

      <div className="container relative z-10">
        {/* Header with creative elements */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Recent Activities</span>
              </div>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Most Recent
              <span className="relative inline-block ml-3">
                <span className="relative z-10 text-primary">Events</span>
                <Sparkles className="absolute -top-2 -right-4 w-5 h-5 text-secondary animate-pulse" />
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Join us in our mission to serve humanity through meaningful events and celebrations.
            </p>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group"
              >
                <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group"
              >
                <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
            <Link to="/activities/events">
              <Button variant="outline" className="gap-2 group">
                View All Events
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Creative Carousel */}
        <div className="relative">
          {/* Main carousel container */}
          <div 
            ref={carouselRef}
            className="flex gap-6 transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${activeIndex * (100 / 3)}%)` }}
          >
            {events.map((event, index) => {
              const isActive = index === activeIndex;
              const offset = index - activeIndex;
              
              return (
                <Link
                  key={event.id}
                  to={`/activities/events/${event.id}`}
                  className={`group flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] transition-all duration-500 ${
                    isActive ? 'scale-100 z-10' : 'scale-95 opacity-80'
                  }`}
                  style={{
                    transform: `perspective(1000px) rotateY(${offset * 5}deg)`,
                  }}
                >
                  <div className="bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elevated border border-border group-hover:border-primary/30 transition-all duration-300 h-full">
                    {/* Image area with gradient */}
                    <div className={`aspect-[4/3] bg-gradient-to-br ${event.gradient} relative overflow-hidden`}>
                      {/* Animated background pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-4 right-4 w-20 h-20 rounded-full border-2 border-white/30 animate-pulse" />
                        <div className="absolute bottom-4 left-4 w-32 h-32 rounded-full border-2 border-white/20" />
                      </div>
                      
                      {/* Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-8xl group-hover:scale-125 transition-transform duration-500 drop-shadow-lg">
                          {event.image}
                        </span>
                      </div>
                      
                      {/* Status badge */}
                      {event.status === "upcoming" && (
                        <div className="absolute top-4 right-4">
                          <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-foreground text-xs font-bold rounded-full flex items-center gap-2 shadow-lg">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            Upcoming
                          </span>
                        </div>
                      )}

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-display text-lg font-bold text-foreground mb-4 line-clamp-2 group-hover:text-primary transition-colors">
                        {event.title}
                      </h3>
                      
                      <div className="space-y-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Calendar className="w-4 h-4 text-primary" />
                          </div>
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                            <MapPin className="w-4 h-4 text-secondary" />
                          </div>
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                            <Users className="w-4 h-4 text-accent-foreground" />
                          </div>
                          <span>{event.attendees}+ Attendees</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Progress indicators */}
          <div className="flex items-center justify-center gap-3 mt-10">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`relative h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'w-10 bg-primary' : 'w-2 bg-border hover:bg-primary/50'
                }`}
              >
                {index === activeIndex && (
                  <span className="absolute inset-0 rounded-full bg-primary animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
