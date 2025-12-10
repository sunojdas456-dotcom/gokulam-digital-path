import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, Send, ChevronRight, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

// Custom X (Twitter) icon
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/donations" },
  { label: "Our Events", href: "/activities" },
  { label: "News & Media", href: "/activities#news" },
  { label: "Contact Us", href: "/about#contact" },
];

const serviceLinks = [
  { label: "Annadhana Seva", href: "/donations?seva=annadana" },
  { label: "Gau Seva", href: "/donations?seva=gau" },
  { label: "Pilgrimage Seva", href: "/pilgrimage" },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/gokulam", label: "Facebook", color: "hover:bg-[#1877F2]" },
  { icon: XIcon, href: "https://x.com/gokulam", label: "X", color: "hover:bg-foreground" },
  { icon: Instagram, href: "https://instagram.com/gokulam", label: "Instagram", color: "hover:bg-[#E4405F]" },
  { icon: Youtube, href: "https://youtube.com/gokulam", label: "YouTube", color: "hover:bg-[#FF0000]" },
  { icon: Linkedin, href: "https://linkedin.com/gokulam", label: "LinkedIn", color: "hover:bg-[#0A66C2]" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [agreedToPolicy, setAgreedToPolicy] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }
    if (!agreedToPolicy) {
      toast({
        title: "Agreement required",
        description: "Please agree to the Privacy Policy",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Successfully subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail("");
    setAgreedToPolicy(false);
  };

  return (
    <footer className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 opacity-5">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <pattern id="footerPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#footerPattern)" />
        </svg>
      </div>

      {/* Top Contact Bar */}
      <div className="relative border-b border-primary-foreground/10">
        <div className="container py-6 md:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 lg:gap-16 max-w-5xl mx-auto">
            {/* Phone */}
            <a href="tel:+919123456789" className="group flex items-center gap-3 md:gap-4 justify-center sm:justify-start hover:translate-y-[-2px] transition-transform">
              <div className="relative shrink-0">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-coral/50 flex items-center justify-center group-hover:border-coral transition-colors">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-coral" />
                </div>
              </div>
              <div className="text-left">
                <span className="block text-[10px] md:text-xs text-primary-foreground/60 uppercase tracking-wider mb-0.5">Call</span>
                <span className="font-semibold text-sm md:text-lg group-hover:text-coral transition-colors">+91 91234 56789</span>
              </div>
            </a>

            {/* Email */}
            <a href="mailto:info@gokulam.com" className="group flex items-center gap-3 md:gap-4 justify-center hover:translate-y-[-2px] transition-transform">
              <div className="relative shrink-0">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-coral/50 flex items-center justify-center group-hover:border-coral transition-colors">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-coral" />
                </div>
              </div>
              <div className="text-left">
                <span className="block text-[10px] md:text-xs text-primary-foreground/60 uppercase tracking-wider mb-0.5">Send Email</span>
                <span className="font-semibold text-sm md:text-lg group-hover:text-coral transition-colors">info@gokulam.com</span>
              </div>
            </a>

            {/* Address */}
            <div className="group flex items-center gap-3 md:gap-4 justify-center sm:justify-end">
              <div className="relative shrink-0">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-coral/50 flex items-center justify-center">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-coral" />
                </div>
              </div>
              <div className="text-left">
                <span className="block text-[10px] md:text-xs text-primary-foreground/60 uppercase tracking-wider mb-0.5">Address</span>
                <span className="font-semibold text-xs md:text-sm lg:text-base leading-tight">Bypass Rd. Nizamabad,<br className="hidden sm:block" /> Telangana 503001, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-10 lg:py-16 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          {/* Logo & About - Takes 4 columns */}
          <div className="sm:col-span-2 lg:col-span-4 relative text-center sm:text-left">
            {/* Decorative Brush Stroke */}
            <div className="absolute left-1/2 sm:left-0 -translate-x-1/2 sm:translate-x-0 sm:-left-8 -top-4 w-48 h-32 opacity-80 pointer-events-none">
              <svg viewBox="0 0 200 100" className="w-full h-full">
                <path
                  d="M10,50 Q30,20 60,40 T110,35 T160,50 T190,40"
                  stroke="hsl(var(--coral))"
                  strokeWidth="35"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.6"
                />
                <path
                  d="M20,60 Q50,30 80,55 T130,45 T170,60"
                  stroke="hsl(var(--coral))"
                  strokeWidth="20"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.4"
                />
              </svg>
            </div>

            {/* Logo Box */}
            <div className="relative z-10 bg-ivory rounded-xl p-5 inline-block mb-5 shadow-lg mx-auto sm:mx-0">
              <div className="flex flex-col items-center text-primary">
                {/* Decorative Mandala Icon */}
                <svg viewBox="0 0 60 60" className="w-10 h-10 mb-1.5">
                  <circle cx="30" cy="30" r="28" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                  <circle cx="30" cy="30" r="20" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                  <circle cx="30" cy="30" r="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="30" cy="30" r="4" fill="currentColor" />
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                    <line
                      key={i}
                      x1="30"
                      y1="30"
                      x2={30 + 25 * Math.cos((angle * Math.PI) / 180)}
                      y2={30 + 25 * Math.sin((angle * Math.PI) / 180)}
                      stroke="currentColor"
                      strokeWidth="1"
                      opacity="0.4"
                    />
                  ))}
                </svg>
                <span className="font-display text-lg font-bold tracking-wide">gokulam</span>
              </div>
            </div>

            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-5 max-w-xs mx-auto sm:mx-0">
              Our secure online donation platform allows you to make contributions quickly and safely. Donations to Gokulam Dharmik Charitable Trust are eligible for 80G benefits under the Income Tax Act, 1961.
            </p>

            {/* Social Links */}
            <div className="flex gap-2 justify-center sm:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 md:w-10 md:h-10 rounded-full bg-coral flex items-center justify-center text-white transition-all duration-300 hover:scale-110 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Takes 2 columns */}
          <div className="lg:col-span-2 text-center sm:text-left">
            <h4 className="font-display text-lg font-semibold mb-4 md:mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-coral rounded-full" />
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="group inline-flex items-center gap-2 text-primary-foreground/70 hover:text-coral transition-colors text-sm"
                  >
                    <ChevronRight className="w-4 h-4 text-coral opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services - Takes 2 columns */}
          <div className="lg:col-span-2 text-center sm:text-left">
            <h4 className="font-display text-lg font-semibold mb-4 md:mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-coral rounded-full" />
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="group inline-flex items-center gap-2 text-primary-foreground/70 hover:text-coral transition-colors text-sm"
                  >
                    <ChevronRight className="w-4 h-4 text-coral opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter - Takes 4 columns */}
          <div className="sm:col-span-2 lg:col-span-4 text-center sm:text-left">
            <h4 className="font-display text-lg font-semibold mb-4 md:mb-6 relative inline-block">
              Newsletter
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-coral rounded-full" />
            </h4>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Subscribe to Our Newsletter: Regular inspiration and feedback mechanisms.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3 max-w-sm mx-auto sm:mx-0">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 pr-14 h-11 md:h-12 rounded-lg focus:border-coral"
                />
                <Button 
                  type="submit" 
                  size="icon"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 md:w-9 md:h-9 rounded-lg bg-coral hover:bg-coral-dark"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex items-start gap-2 justify-center sm:justify-start">
                <Checkbox
                  id="privacy"
                  checked={agreedToPolicy}
                  onCheckedChange={(checked) => setAgreedToPolicy(checked as boolean)}
                  className="mt-0.5 border-primary-foreground/30 data-[state=checked]:bg-coral data-[state=checked]:border-coral"
                />
                <label htmlFor="privacy" className="text-xs text-primary-foreground/60 leading-relaxed cursor-pointer text-left">
                  I agree to the{" "}
                  <Link to="/privacy-policy" className="text-coral hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 bg-primary-foreground/5">
        <div className="container py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-primary-foreground/60">
              © All Copyright 2025 by <span className="text-primary-foreground">Gokulam Dharmik Charitable Trust</span>
            </p>
            <div className="flex gap-6">
              <Link to="/terms" className="text-primary-foreground/60 hover:text-coral transition-colors">
                Terms & Condition
              </Link>
              <Link to="/privacy-policy" className="text-primary-foreground/60 hover:text-coral transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
