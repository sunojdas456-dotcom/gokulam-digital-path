import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    id: 1,
    title: "Gokulam Trust Feeding 500+ Families in One Day",
    date: "Nov 28, 2024",
    source: "Local News",
    category: "Annadana",
    excerpt: "Our monthly Annadana program reached a new milestone with over 500 families receiving meals.",
  },
  {
    id: 2,
    title: "First Ever Water Draught a Village to Hydrate",
    date: "Nov 15, 2024",
    source: "Regional Media",
    category: "Community",
    excerpt: "Gokulam Trust's water initiative brings relief to drought-affected village.",
  },
  {
    id: 3,
    title: "5 Ways You Can Support a Miser Serving",
    date: "Nov 10, 2024",
    source: "Gokulam Blog",
    category: "Guide",
    excerpt: "Discover meaningful ways to contribute to our mission of serving humanity.",
  },
];

export function NewsSection() {
  return (
    <section className="py-20 section-cream">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-secondary text-sm font-semibold mb-4">
              <span className="w-8 h-px bg-secondary" />
              Gokulam Today
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Latest News And Articles
            </h2>
          </div>
          <Link to="/activities/news-media">
            <Button variant="outline" className="gap-2">
              View All News
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <article
              key={item.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover-lift border border-border"
            >
              {/* Image placeholder */}
              <div className="aspect-[16/9] bg-muted flex items-center justify-center relative">
                <span className="text-4xl">📰</span>
                <span className="absolute top-3 left-3 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                  <span className="mx-2">•</span>
                  {item.source}
                </div>
                <h3 className="font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {item.excerpt}
                </p>
                <Link
                  to={`/activities/news-media/${item.id}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
