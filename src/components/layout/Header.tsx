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
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 lg:px-12 pt-4">
      <div
        className={cn(
          "max-w-7xl mx-auto rounded-full transition-all duration-500",
          isScrolled
            ? "bg-card/95 backdrop-blur-md shadow-lg"
            : "bg-card/80 backdrop-blur-sm shadow-soft"
        )}
      >

        {/* Main navigation */}
        <nav className="flex items-center justify-between px-4 md:px-6 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:gap-3">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-full gradient-primary flex items-center justify-center shadow-md">
              <span className="text-primary-foreground font-display text-lg md:text-xl font-bold">G</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-lg md:text-xl font-bold text-primary leading-tight">
                Gokulam
              </h1>
              <p className="text-[10px] md:text-xs text-muted-foreground -mt-0.5">Dharmik Charitable Trust</p>
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
          "lg:hidden mt-2 rounded-2xl bg-card border border-border shadow-lg transition-all duration-300 overflow-hidden",
          isMobileMenuOpen
            ? "opacity-100 max-h-[80vh] translate-y-0"
            : "opacity-0 max-h-0 -translate-y-2 pointer-events-none"
        )}
      >
        <div className="p-4">
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
