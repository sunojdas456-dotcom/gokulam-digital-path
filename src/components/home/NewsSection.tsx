import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Bookmark, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const newsItems = [
  {
    id: 1,
    title: "Gokulam Trust Feeding 500+ Families in One Day",
    date: "Nov 28, 2024",
    source: "Local News",
    category: "Annadana",
    excerpt: "Our monthly Annadana program reached a new milestone with over 500 families receiving meals.",
    gradient: "from-orange-500 to-red-500",
    featured: true,
  },
  {
    id: 2,
    title: "First Ever Water Draught a Village to Hydrate",
    date: "Nov 15, 2024",
    source: "Regional Media",
    category: "Community",
    excerpt: "Gokulam Trust's water initiative brings relief to drought-affected village.",
    gradient: "from-blue-500 to-cyan-500",
    featured: false,
  },
  {
    id: 3,
    title: "5 Ways You Can Support a Miser Serving",
    date: "Nov 10, 2024",
    source: "Gokulam Blog",
    category: "Guide",
    excerpt: "Discover meaningful ways to contribute to our mission of serving humanity.",
    gradient: "from-emerald-500 to-teal-500",
    featured: false,
  },
  {
    id: 4,
    title: "Annual Charity Drive Exceeds Expectations",
    date: "Nov 05, 2024",
    source: "Press Release",
    category: "Milestone",
    excerpt: "This year's charity drive collected donations exceeding our annual target by 150%.",
    gradient: "from-purple-500 to-pink-500",
    featured: false,
  },
];

export function NewsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const featuredNews = newsItems.find(item => item.featured);
  const otherNews = newsItems.filter(item => !item.featured);

  return (
    <section className="py-24 section-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-secondary/5 blur-3xl" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Gokulam Today</span>
              </div>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Latest News &
              <span className="relative inline-block ml-3">
                <span className="relative z-10 text-primary">Articles</span>
                <Sparkles className="absolute -top-2 -right-4 w-5 h-5 text-secondary animate-pulse" />
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Stay updated with our latest initiatives, success stories, and community impact.
            </p>
          </div>

          <Link to="/activities/news-media">
            <Button variant="outline" className="gap-2 group">
              View All News
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Creative Magazine Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Article - Large */}
          {featuredNews && (
            <Link
              to={`/activities/news-media/${featuredNews.id}`}
              className="group relative"
              onMouseEnter={() => setHoveredId(featuredNews.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden shadow-elevated">
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${featuredNews.gradient}`} />
                
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full border border-white/30"
                      style={{
                        width: `${150 + i * 100}px`,
                        height: `${150 + i * 100}px`,
                        top: `${-20 + i * 10}%`,
                        right: `${-20 + i * 5}%`,
                      }}
                    />
                  ))}
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                  <div className="flex items-center justify-between">
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                      {featuredNews.category}
                    </span>
                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Bookmark className="w-5 h-5" />
                    </button>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 text-white/80 text-sm mb-4">
                      <Calendar className="w-4 h-4" />
                      {featuredNews.date}
                      <span>•</span>
                      {featuredNews.source}
                    </div>
                    
                    <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 group-hover:underline decoration-2 underline-offset-4">
                      {featuredNews.title}
                    </h3>
                    
                    <p className="text-white/80 text-lg mb-6 max-w-lg">
                      {featuredNews.excerpt}
                    </p>

                    <div className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-4 transition-all">
                      Read Full Story
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Other Articles - Stacked */}
          <div className="flex flex-col gap-6">
            {otherNews.map((item, index) => (
              <Link
                key={item.id}
                to={`/activities/news-media/${item.id}`}
                className="group"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <article className={`relative bg-card rounded-2xl overflow-hidden border border-border transition-all duration-500 ${
                  hoveredId === item.id ? 'shadow-elevated border-primary/30 scale-[1.02]' : 'shadow-soft'
                }`}>
                  <div className="flex">
                    {/* Color accent */}
                    <div className={`w-2 bg-gradient-to-b ${item.gradient}`} />
                    
                    {/* Content */}
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${item.gradient} text-white`}>
                              {item.category}
                            </span>
                            <span className="text-sm text-muted-foreground flex items-center gap-2">
                              <Calendar className="w-3 h-3" />
                              {item.date}
                            </span>
                          </div>
                          
                          <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {item.title}
                          </h3>
                          
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {item.excerpt}
                          </p>
                        </div>

                        {/* Arrow indicator */}
                        <div className={`w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0 transition-all duration-300 ${
                          hoveredId === item.id ? 'bg-primary text-primary-foreground' : ''
                        }`}>
                          <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${
                            hoveredId === item.id ? 'translate-x-0.5' : ''
                          }`} />
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
