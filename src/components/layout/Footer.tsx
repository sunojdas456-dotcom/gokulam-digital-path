import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Activities", href: "/activities" },
  { label: "Pilgrimage Tour", href: "/pilgrimage" },
  { label: "Donations", href: "/donations" },
];

const sevaLinks = [
  { label: "Gau Seva", href: "/donations?seva=gau" },
  { label: "Annadana Seva", href: "/donations?seva=annadana" },
  { label: "Book Pilgrimage", href: "/pilgrimage" },
  { label: "Volunteer", href: "/volunteer" },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/gokulam", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/gokulam", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/gokulam", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com/gokulam", label: "YouTube" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) {
      toast({
        title: "Please fill required fields",
        description: "Name and Email are required",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Successfully subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail("");
    setName("");
    setPhone("");
  };

  return (
    <footer className="section-teal">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
              Subscribe for Latest News & Updates
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Stay connected with Gokulam's activities and events
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
              <Input
                type="text"
                placeholder="Your Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                required
              />
              <Input
                type="email"
                placeholder="Email Address *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                required
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button type="submit" variant="coral" className="shrink-0">
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <span className="font-display text-xl font-bold">G</span>
              </div>
              <div>
                <h4 className="font-display text-lg font-bold">Gokulam</h4>
                <p className="text-xs text-primary-foreground/70">Dharmik Charitable Trust</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              Serving humanity with compassion, faith, and purpose. Join us in our mission 
              to spread dharma and support those in need.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Sevas */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Our Sevas</h4>
            <ul className="space-y-2">
              {sevaLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  Gokulam Campus, Vrindavan Road,<br />
                  Mathura, Uttar Pradesh 281121, India
                </span>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@gokulam.org"
                  className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  info@gokulam.org
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/70">
            <p>© 2024 Gokulam Dharmik Charitable Trust. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary-foreground transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
