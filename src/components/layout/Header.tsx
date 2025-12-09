import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, User, MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

// Custom X (Twitter) icon
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Vision & Mission", href: "/about#vision" },
      { label: "Objectives", href: "/about#objectives" },
      { label: "History", href: "/about#history" },
      { label: "Trustees", href: "/about#trustees" },
    ],
  },
  {
    label: "Activities",
    href: "/activities",
    children: [
      { label: "Events", href: "/activities#events" },
      { label: "News & Media", href: "/activities#news" },
    ],
  },
  { label: "Pilgrimage Tour", href: "/pilgrimage" },
  { label: "Donations", href: "/donations" },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: XIcon, href: "https://x.com", label: "X" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Contact Bar */}
      <div className={cn(
        "hidden lg:block transition-all duration-500",
        isScrolled 
          ? "h-0 opacity-0 overflow-hidden" 
          : "h-auto opacity-100 bg-primary text-primary-foreground"
      )}>
        <div className="max-w-7xl mx-auto px-8 py-2.5 flex items-center justify-between text-sm">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 hover:text-saffron transition-colors cursor-pointer">
              <MapPin className="w-4 h-4" />
              <span className="font-medium">123 Temple Road, Bangalore</span>
            </div>
            <div className="w-px h-4 bg-primary-foreground/30" />
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-saffron transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </a>
            <div className="w-px h-4 bg-primary-foreground/30" />
            <a href="mailto:info@gokulam.org" className="flex items-center gap-2 hover:text-saffron transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@gokulam.org</span>
            </a>
          </div>
          <div className="flex items-center gap-1">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary-foreground/10 hover:text-saffron transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation Container */}
      <div className={cn(
        "px-4 md:px-6 lg:px-10 transition-all duration-500",
        isScrolled ? "pt-2" : "pt-3"
      )}>
        <div
          className={cn(
            "max-w-7xl mx-auto rounded-full transition-all duration-500 border",
            isScrolled
              ? "bg-card/98 backdrop-blur-xl shadow-elevated border-border/50 py-1"
              : "bg-card/95 backdrop-blur-lg shadow-soft border-border/30 py-0.5"
          )}
        >
          <nav className="flex items-center justify-between px-3 md:px-5 lg:px-6 py-2">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-full gradient-primary flex items-center justify-center shadow-spiritual group-hover:shadow-saffron transition-shadow duration-300">
                  <span className="text-primary-foreground font-display text-xl md:text-2xl font-bold">G</span>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-saffron border-2 border-card" />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-display text-lg md:text-xl font-bold text-primary leading-tight group-hover:text-teal-mid transition-colors">
                  Gokulam
                </h1>
                <p className="text-[10px] md:text-xs text-muted-foreground font-medium tracking-wide">
                  Dharmik Charitable Trust
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center bg-muted/50 rounded-full p-1">
                {navItems.map((item) =>
                  item.children ? (
                    <DropdownMenu key={item.label}>
                      <DropdownMenuTrigger asChild>
                        <button
                          className={cn(
                            "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                            location.pathname.startsWith(item.href) && item.href !== "/"
                              ? "bg-primary text-primary-foreground shadow-md"
                              : "text-foreground hover:bg-card hover:shadow-sm"
                          )}
                        >
                          {item.label}
                          <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent 
                        align="center" 
                        className="w-52 mt-2 rounded-2xl border-border/50 shadow-elevated bg-card/98 backdrop-blur-xl"
                      >
                        {item.children.map((child) => (
                          <DropdownMenuItem key={child.label} asChild>
                            <Link
                              to={child.href}
                              className={cn(
                                "w-full cursor-pointer rounded-xl px-4 py-2.5 transition-colors",
                                location.pathname === child.href 
                                  ? "text-primary font-medium bg-primary/5" 
                                  : "hover:bg-muted"
                              )}
                            >
                              {child.label}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      key={item.label}
                      to={item.href}
                      className={cn(
                        "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                        location.pathname === item.href
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "text-foreground hover:bg-card hover:shadow-sm"
                      )}
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 md:gap-3">
              <Link to="/auth" className="hidden md:flex">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="gap-2 rounded-full hover:bg-primary/5 hover:text-primary"
                >
                  <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center">
                    <User className="w-4 h-4" />
                  </div>
                  <span className="hidden lg:inline font-medium">Login</span>
                </Button>
              </Link>
              
              <Link to="/donations">
                <Button 
                  variant="coral" 
                  size="default" 
                  className="gap-2 pr-2.5 rounded-full shadow-coral hover:shadow-lg transition-shadow"
                >
                  <span className="hidden sm:inline font-semibold">Donate Now</span>
                  <span className="sm:hidden font-semibold">Donate</span>
                  <span className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-inner">
                    <ArrowUpRight className="w-4 h-4 text-coral" />
                  </span>
                </Button>
              </Link>

              {/* Mobile menu toggle */}
              <button
                className="lg:hidden p-2.5 rounded-full hover:bg-muted transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden mt-3 mx-2 rounded-3xl bg-card border border-border shadow-elevated transition-all duration-400 overflow-hidden",
            isMobileMenuOpen
              ? "opacity-100 max-h-[80vh] translate-y-0"
              : "opacity-0 max-h-0 -translate-y-4 pointer-events-none"
          )}
        >
          <div className="p-5">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div className="py-2">
                      <p className="px-4 text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                        {item.label}
                      </p>
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className={cn(
                            "block px-4 py-2.5 text-sm rounded-xl transition-all duration-300",
                            location.pathname === child.href
                              ? "text-primary bg-primary/5 font-medium"
                              : "text-foreground hover:bg-muted hover:translate-x-1"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={cn(
                        "block px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300",
                        location.pathname === item.href
                          ? "text-primary bg-primary/5"
                          : "text-foreground hover:bg-muted hover:translate-x-1"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-border flex flex-col gap-2">
                <Link to="/auth" className="block">
                  <Button variant="outline" className="w-full rounded-xl gap-2">
                    <User className="w-4 h-4" />
                    Login / Sign Up
                  </Button>
                </Link>
                <Link to="/donations" className="block">
                  <Button variant="coral" className="w-full rounded-xl gap-2">
                    Donate Now
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}