import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, User, MapPin, Mail, Facebook, Instagram, Linkedin, Youtube, ArrowUpRight, Heart, Calendar, Home, Info, Sparkles, HandHeart, Gift, Globe, Phone } from "lucide-react";
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

// Icons for nav items
const navIcons: Record<string, React.ReactNode> = {
  "Home": <Home className="w-4 h-4" />,
  "About": <Info className="w-4 h-4" />,
  "Activities": <Sparkles className="w-4 h-4" />,
  "Pilgrimage Tour": <Calendar className="w-4 h-4" />,
  "Donations": <HandHeart className="w-4 h-4" />,
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const location = useLocation();

  const toggleSection = (label: string) => {
    setExpandedSection(expandedSection === label ? null : label);
  };

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
      {/* Top Contact Bar - Sleek Dark Design */}
      <div className={cn(
        "hidden lg:block transition-all duration-500 relative overflow-hidden",
        isScrolled 
          ? "h-0 opacity-0" 
          : "h-auto opacity-100"
      )}>
        {/* Main dark bar */}
        <div className="bg-gradient-to-r from-[hsl(165,55%,8%)] via-[hsl(165,50%,12%)] to-[hsl(165,55%,8%)] text-white border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex items-center justify-between h-10">
              {/* Left: Email & Address */}
              <div className="flex items-center divide-x divide-white/10">
                <a 
                  href="mailto:info@gokulam.com" 
                  className="flex items-center gap-2 pr-5 hover:text-saffron transition-colors group"
                >
                  <Mail className="w-3.5 h-3.5 text-coral" />
                  <span className="text-xs font-medium tracking-wide">info@gokulam.com</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center gap-2 pl-5 hover:text-saffron transition-colors group"
                >
                  <MapPin className="w-3.5 h-3.5 text-coral" />
                  <span className="text-xs font-medium tracking-wide">Bypass Rd, Kanteshwar, Nizamabad, Telangana 503002, India</span>
                </a>
              </div>
              
              {/* Right: Language & Social */}
              <div className="flex items-center gap-5">
                {/* Language Selector */}
                <button className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                  <Globe className="w-3 h-3 text-saffron" />
                  <span className="text-xs font-semibold">En</span>
                  <ChevronDown className="w-3 h-3 opacity-60" />
                </button>
                
                {/* Divider */}
                <div className="w-px h-5 bg-white/15" />
                
                {/* Follow Us & Social */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium text-white/70 tracking-wide">Follow Us</span>
                  <div className="flex items-center">
                    {socialLinks.map((social, index) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "w-7 h-7 flex items-center justify-center transition-all duration-300 hover:text-saffron hover:scale-110",
                          index !== socialLinks.length - 1 && "border-r border-white/10"
                        )}
                        aria-label={social.label}
                      >
                        <social.icon className="w-3.5 h-3.5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative bottom accent line */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-coral/60 to-transparent" />
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
                            "flex items-center gap-1 px-4 py-2 text-sm font-sans font-semibold rounded-full transition-all duration-300",
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
                        "px-4 py-2 text-sm font-sans font-semibold rounded-full transition-all duration-300",
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
              {/* Login icon - visible on mobile */}
              <Link to="/auth" className="flex">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="gap-2 rounded-full hover:bg-primary/5 hover:text-primary p-2 md:px-3"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/10 to-saffron/10 border border-primary/20 flex items-center justify-center transition-all duration-300 hover:border-primary/40 hover:shadow-md">
                    <User className="w-4 h-4 text-primary" />
                  </div>
                  <span className="hidden lg:inline font-medium">Login</span>
                </Button>
              </Link>
              
              <Link to="/donations" className="hidden sm:block">
                <Button 
                  variant="coral" 
                  size="default" 
                  className="gap-2 pr-2.5 rounded-full shadow-coral hover:shadow-lg transition-shadow font-sans"
                >
                  <span className="font-semibold">Donate Now</span>
                  <span className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-inner">
                    <ArrowUpRight className="w-4 h-4 text-coral" />
                  </span>
                </Button>
              </Link>

              {/* Mobile menu toggle */}
              <button
                className="lg:hidden p-2 rounded-full bg-gradient-to-br from-primary/5 to-saffron/5 border border-primary/20 hover:border-primary/40 hover:shadow-md transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className={cn(
                  "w-5 h-5 flex flex-col items-center justify-center gap-1 transition-all duration-300",
                  isMobileMenuOpen && "rotate-180"
                )}>
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5 text-primary" />
                  ) : (
                    <>
                      <span className="w-4 h-0.5 bg-primary rounded-full transition-all duration-300" />
                      <span className="w-3 h-0.5 bg-primary rounded-full transition-all duration-300" />
                      <span className="w-4 h-0.5 bg-primary rounded-full transition-all duration-300" />
                    </>
                  )}
                </div>
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu - Innovative Collapsible Design */}
        <div
          className={cn(
            "lg:hidden mt-3 mx-2 rounded-3xl bg-card/98 backdrop-blur-xl border border-border/50 shadow-elevated transition-all duration-500 overflow-hidden",
            isMobileMenuOpen
              ? "opacity-100 max-h-[85vh] translate-y-0"
              : "opacity-0 max-h-0 -translate-y-4 pointer-events-none"
          )}
        >
          {/* Decorative top gradient bar */}
          <div className="h-1 w-full bg-gradient-to-r from-primary via-saffron to-coral" />
          
          <div className="p-4 space-y-2">
            {navItems.map((item, index) => (
              <div 
                key={item.label}
                className={cn(
                  "rounded-2xl overflow-hidden transition-all duration-300",
                  expandedSection === item.label 
                    ? "bg-gradient-to-br from-primary/5 to-saffron/5 border border-primary/20 shadow-md" 
                    : "bg-muted/30 border border-transparent hover:bg-muted/50"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.children ? (
                  <>
                    {/* Collapsible Header */}
                    <button
                      onClick={() => toggleSection(item.label)}
                      className="w-full flex items-center justify-between p-4 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300",
                          expandedSection === item.label
                            ? "bg-primary text-primary-foreground shadow-md"
                            : "bg-primary/10 text-primary"
                        )}>
                          {navIcons[item.label]}
                        </div>
                        <div className="text-left">
                          <p className={cn(
                            "font-semibold text-sm transition-colors",
                            expandedSection === item.label ? "text-primary" : "text-foreground"
                          )}>
                            {item.label}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {item.children.length} options
                          </p>
                        </div>
                      </div>
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                        expandedSection === item.label
                          ? "bg-primary text-primary-foreground rotate-90"
                          : "bg-muted text-muted-foreground"
                      )}>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </button>
                    
                    {/* Collapsible Content */}
                    <div className={cn(
                      "overflow-hidden transition-all duration-400",
                      expandedSection === item.label 
                        ? "max-h-96 opacity-100 pb-3" 
                        : "max-h-0 opacity-0"
                    )}>
                      <div className="px-4 space-y-1">
                        {item.children.map((child, childIndex) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className={cn(
                              "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300",
                              "hover:bg-card hover:shadow-sm hover:translate-x-2",
                              location.pathname === child.href
                                ? "bg-card text-primary font-medium shadow-sm border border-primary/20"
                                : "text-foreground/80"
                            )}
                            style={{ animationDelay: `${childIndex * 30}ms` }}
                          >
                            <span className="w-2 h-2 rounded-full bg-saffron" />
                            <span className="text-sm">{child.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className="flex items-center gap-3 p-4 transition-all duration-300"
                  >
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300",
                      location.pathname === item.href
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-primary/10 text-primary"
                    )}>
                      {navIcons[item.label]}
                    </div>
                    <span className={cn(
                      "font-semibold text-sm",
                      location.pathname === item.href ? "text-primary" : "text-foreground"
                    )}>
                      {item.label}
                    </span>
                    {location.pathname === item.href && (
                      <span className="ml-auto w-2 h-2 rounded-full bg-coral animate-pulse" />
                    )}
                  </Link>
                )}
              </div>
            ))}

            {/* Divider */}
            <div className="relative py-3">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border/50" />
              </div>
              <div className="relative flex justify-center">
                <span className="px-3 bg-card text-xs text-muted-foreground font-medium">Quick Actions</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <Link to="/auth" className="block">
                <Button 
                  variant="outline" 
                  className="w-full rounded-xl gap-2 h-12 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                >
                  <User className="w-4 h-4" />
                  <span className="font-medium">Login</span>
                </Button>
              </Link>
              <Link to="/donations" className="block">
                <Button 
                  variant="coral" 
                  className="w-full rounded-xl gap-2 h-12 shadow-coral font-sans"
                >
                  <span className="font-semibold">Donate</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Social Links in Mobile Menu */}
            <div className="pt-3 flex items-center justify-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}