import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Vision & Mission", href: "/about/vision-mission" },
      { label: "Objectives", href: "/about/objectives" },
      { label: "History", href: "/about/history" },
      { label: "Trustees", href: "/about/trustees" },
    ],
  },
  {
    label: "Activities",
    href: "/activities",
    children: [
      { label: "Events", href: "/activities/events" },
      { label: "News & Media", href: "/activities/news-media" },
    ],
  },
  { label: "Pilgrimage Tour", href: "/pilgrimage" },
  { label: "Donations", href: "/donations" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft py-2"
          : "bg-transparent py-4"
      )}
    >
      {/* Top bar */}
      <div className="hidden lg:block border-b border-border/50">
        <div className="container flex items-center justify-between py-2 text-sm">
          <p className="text-muted-foreground">
            🙏 Serving Humanity with Compassion, Faith & Purpose
          </p>
          <div className="flex items-center gap-4">
            <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">
              📞 +91 98765 43210
            </a>
            <a href="mailto:info@gokulam.org" className="text-muted-foreground hover:text-primary transition-colors">
              ✉️ info@gokulam.org
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container">
        <nav className="flex items-center justify-between py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display text-xl font-bold">G</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-xl font-bold text-primary leading-tight">
                Gokulam
              </h1>
              <p className="text-xs text-muted-foreground">Dharmik Charitable Trust</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                        location.pathname.startsWith(item.href)
                          ? "text-primary bg-primary/5"
                          : "text-foreground hover:text-primary hover:bg-primary/5"
                      )}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.label} asChild>
                        <Link
                          to={child.href}
                          className={cn(
                            "w-full cursor-pointer",
                            location.pathname === child.href && "text-primary font-medium"
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
                    "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                    location.pathname === item.href
                      ? "text-primary bg-primary/5"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link to="/auth" className="hidden sm:flex">
              <Button variant="ghost" size="sm" className="gap-2">
                <User className="w-4 h-4" />
                <span className="hidden md:inline">Login</span>
              </Button>
            </Link>
            <Link to="/donations">
              <Button variant="coral" size="default" className="gap-2">
                <Heart className="w-4 h-4" />
                <span className="hidden sm:inline">Donate Now</span>
              </Button>
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-card border-t border-border shadow-lg transition-all duration-300",
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="container py-4">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <div className="py-2">
                    <p className="px-4 text-sm font-semibold text-muted-foreground mb-1">
                      {item.label}
                    </p>
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className={cn(
                          "block px-6 py-2 text-sm rounded-lg transition-colors",
                          location.pathname === child.href
                            ? "text-primary bg-primary/5 font-medium"
                            : "text-foreground hover:bg-muted"
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
                      "block px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                      location.pathname === item.href
                        ? "text-primary bg-primary/5"
                        : "text-foreground hover:bg-muted"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-border">
              <Link to="/auth" className="block">
                <Button variant="outline" className="w-full mb-2">
                  <User className="w-4 h-4 mr-2" />
                  Login / Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
