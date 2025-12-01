import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, History, Users, Heart, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const objectives = [
  { icon: Heart, title: "Gau Seva", description: "Protect and care for cows with devotion" },
  { icon: Users, title: "Annadana", description: "Feed the hungry and serve the community" },
  { icon: Shield, title: "Dharma Preservation", description: "Uphold and spread spiritual values" },
  { icon: Award, title: "Pilgrimage Support", description: "Enable holy journeys for devotees" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 section-teal">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              About Gokulam Trust
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Serving humanity with compassion, faith, and purpose since 2010
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-4 bg-card border-b border-border sticky top-20 lg:top-32 z-30">
        <div className="container">
          <div className="flex gap-2 overflow-x-auto pb-2">
            <Link to="/about/vision-mission">
              <Button variant="ghost" size="sm" className="gap-2">
                <Eye className="w-4 h-4" />
                Vision & Mission
              </Button>
            </Link>
            <Link to="/about/objectives">
              <Button variant="ghost" size="sm" className="gap-2">
                <Target className="w-4 h-4" />
                Objectives
              </Button>
            </Link>
            <Link to="/about/history">
              <Button variant="ghost" size="sm" className="gap-2">
                <History className="w-4 h-4" />
                History
              </Button>
            </Link>
            <Link to="/about/trustees">
              <Button variant="ghost" size="sm" className="gap-2">
                <Users className="w-4 h-4" />
                Trustees
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 section-cream">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="p-8 rounded-2xl bg-card shadow-soft border border-border">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To create a world where every being is treated with compassion and dignity, 
                where dharma flourishes, and where no one goes hungry. We envision a society 
                rooted in spiritual values, serving as a beacon of hope and positive change.
              </p>
            </div>

            <div className="p-8 rounded-2xl gradient-primary text-primary-foreground shadow-spiritual">
              <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h2 className="font-display text-2xl font-bold mb-4">Our Mission</h2>
              <p className="opacity-90 leading-relaxed">
                To serve humanity through dedicated Gau Seva, Annadana, and spiritual 
                initiatives. We strive to preserve our sacred traditions while providing 
                essential support to those in need, guided by the eternal principles of 
                dharma and compassion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 section-cream">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Our Objectives</h2>
            <p className="text-muted-foreground">
              The core pillars that guide our mission and service
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((obj) => (
              <div key={obj.title} className="p-6 rounded-xl bg-card shadow-soft border border-border text-center hover-lift">
                <div className="w-12 h-12 mx-auto rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <obj.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{obj.title}</h3>
                <p className="text-sm text-muted-foreground">{obj.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 section-teal">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-6">Our History</h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              Founded in 2010, Gokulam Dharmik Charitable Trust began with a simple 
              mission: to serve those in need. What started as a small group of 
              dedicated individuals has grown into a thriving organization touching 
              thousands of lives each year.
            </p>
            <p className="text-primary-foreground/80 leading-relaxed">
              Over the years, we have expanded our Goshala to care for over 500 cows, 
              established regular Annadana programs serving millions of meals, and 
              helped countless devotees embark on sacred pilgrimages. Our journey 
              continues, guided by the blessings of the divine and the support of 
              our generous donors.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 section-cream">
        <div className="container text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">
            Want to be part of our journey?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/donations">
              <Button variant="coral" size="lg" className="gap-2">
                <Heart className="w-4 h-4" />
                Donate Now
              </Button>
            </Link>
            <Link to="/volunteer">
              <Button variant="outline" size="lg" className="gap-2">
                Become a Volunteer
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
