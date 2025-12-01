import { Layout } from "@/components/layout/Layout";
import { Link, useSearchParams } from "react-router-dom";
import { Calendar, MapPin, Users, ArrowRight, ExternalLink, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const events = [
  {
    id: 1,
    title: "Monthly Aaruga Annadana Mahōtsava",
    date: "15 Dec 2024",
    location: "Gokulam Campus",
    attendees: 500,
    description: "Join us for our monthly Annadana program where we serve nutritious meals to the community.",
    status: "upcoming",
  },
  {
    id: 2,
    title: "Gau Puja on Ekadashi with Mahotsavam",
    date: "12 Dec 2024",
    location: "Goshala",
    attendees: 200,
    description: "Special Gau Puja ceremony on the auspicious Ekadashi day.",
    status: "upcoming",
  },
  {
    id: 3,
    title: "Winter Clothing Distribution",
    date: "20 Dec 2024",
    location: "Various Locations",
    attendees: 300,
    description: "Distributing warm clothing to those in need during the winter season.",
    status: "upcoming",
  },
  {
    id: 4,
    title: "Diwali Annadana Special",
    date: "01 Nov 2024",
    location: "Gokulam Campus",
    attendees: 800,
    description: "Special Diwali celebration with Annadana serving over 800 people.",
    status: "completed",
  },
];

const newsItems = [
  {
    id: 1,
    title: "Gokulam Trust Featured on Local News",
    date: "Nov 28, 2024",
    source: "Regional TV",
    type: "video",
    description: "Our Annadana program was featured on the local news channel.",
  },
  {
    id: 2,
    title: "Interview with Trust Chairman",
    date: "Nov 20, 2024",
    source: "Dharma Daily",
    type: "article",
    description: "Exclusive interview discussing our vision and upcoming initiatives.",
  },
  {
    id: 3,
    title: "Gau Seva Documentary",
    date: "Nov 15, 2024",
    source: "YouTube",
    type: "video",
    description: "A short documentary about our Goshala and the care we provide.",
  },
];

const Activities = () => {
  const [searchParams] = useSearchParams();
  const defaultTab = searchParams.get("tab") || "events";

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 section-teal">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Activities
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Explore our events, news coverage, and media from our various seva programs
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 section-cream">
        <div className="container">
          <Tabs defaultValue={defaultTab} className="space-y-8">
            <TabsList className="bg-muted">
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="news">News & Media</TabsTrigger>
            </TabsList>

            {/* Events Tab */}
            <TabsContent value="events" className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground">Our Events</h2>
                  <p className="text-muted-foreground">Discover and participate in our seva programs</p>
                </div>
                <Link to="/donations">
                  <Button variant="coral" className="gap-2">
                    Support Our Events
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="bg-card rounded-2xl overflow-hidden shadow-soft border border-border hover-lift"
                  >
                    <div className="aspect-[16/9] bg-muted flex items-center justify-center relative">
                      <span className="text-5xl">🎉</span>
                      {event.status === "upcoming" && (
                        <span className="absolute top-3 right-3 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">
                          Upcoming
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-lg text-foreground mb-2">{event.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {event.attendees}+ Expected
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* News Tab */}
            <TabsContent value="news" className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">News & Media</h2>
                <p className="text-muted-foreground">Media coverage and articles about our work</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {newsItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-card rounded-2xl overflow-hidden shadow-soft border border-border hover-lift"
                  >
                    <div className="aspect-video bg-muted flex items-center justify-center relative">
                      {item.type === "video" ? (
                        <>
                          <Play className="w-12 h-12 text-secondary fill-current" />
                          <span className="absolute top-3 left-3 px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded">
                            Video
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="text-4xl">📰</span>
                          <span className="absolute top-3 left-3 px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded">
                            Article
                          </span>
                        </>
                      )}
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                        <span>{item.date}</span>
                        <span>•</span>
                        <span>{item.source}</span>
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                      <button className="flex items-center gap-2 text-sm font-semibold text-secondary">
                        {item.type === "video" ? "Watch Now" : "Read More"}
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Activities;
