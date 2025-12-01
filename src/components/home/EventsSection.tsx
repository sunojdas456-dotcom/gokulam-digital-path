import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    id: 1,
    title: "Monthly Aaruga Annadana Mahōtsava",
    date: "15 Dec 2024",
    location: "Gokulam Campus",
    attendees: 500,
    image: "🍚",
    status: "upcoming",
  },
  {
    id: 2,
    title: "Gau Puja on Ekadashi with Mahotsavam",
    date: "12 Dec 2024",
    location: "Goshala",
    attendees: 200,
    image: "🐄",
    status: "upcoming",
  },
  {
    id: 3,
    title: "Monthly Aaruga Annadana Mahōtsava",
    date: "28 Nov 2024",
    location: "Gokulam Campus",
    attendees: 450,
    image: "🍚",
    status: "completed",
  },
  {
    id: 4,
    title: "Gau Puja on Ekadashi with Mahotsavam",
    date: "26 Nov 2024",
    location: "Goshala",
    attendees: 180,
    image: "🐄",
    status: "completed",
  },
];

export function EventsSection() {
  return (
    <section className="py-20 section-cream">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-secondary text-sm font-semibold mb-4">
              <span className="w-8 h-px bg-secondary" />
              Recent Trust Activities
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Our Most Recent Events
            </h2>
          </div>
          <Link to="/activities/events">
            <Button variant="outline" className="gap-2">
              View All Events
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <Link
              key={event.id}
              to={`/activities/events/${event.id}`}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover-lift border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image/Icon Area */}
              <div className="aspect-[4/3] bg-muted flex items-center justify-center relative">
                <span className="text-6xl">{event.image}</span>
                {event.status === "upcoming" && (
                  <span className="absolute top-3 right-3 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">
                    Upcoming
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {event.attendees}+ Attendees
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
