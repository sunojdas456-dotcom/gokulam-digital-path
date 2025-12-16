import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 z-50 group",
        "w-14 h-14 rounded-full",
        "bg-gradient-to-br from-primary to-teal-deep",
        "shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30",
        "flex items-center justify-center",
        "transition-all duration-500 ease-out",
        "hover:scale-110 hover:-translate-y-1",
        "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2",
        isVisible 
          ? "opacity-100 translate-y-0 pointer-events-auto" 
          : "opacity-0 translate-y-10 pointer-events-none"
      )}
      aria-label="Back to top"
    >
      {/* Ripple effect */}
      <span className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-0 group-hover:opacity-100" />
      
      {/* Inner glow */}
      <span className="absolute inset-1 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
      
      {/* Arrow icon */}
      <ArrowUp className="w-5 h-5 text-white relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5" />
      
      {/* Progress ring (optional visual) */}
      <svg className="absolute inset-0 w-full h-full -rotate-90">
        <circle
          cx="28"
          cy="28"
          r="26"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-white/20"
        />
      </svg>
    </button>
  );
}
