import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="py-20 section-cream min-h-[60vh] flex items-center">
        <div className="container">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full gradient-primary flex items-center justify-center">
              <span className="font-display text-5xl font-bold text-primary-foreground">404</span>
            </div>
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">
              Page Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved. 
              Let us help you find your way back.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/">
                <Button variant="coral" className="gap-2">
                  <Home className="w-4 h-4" />
                  Go to Home
                </Button>
              </Link>
              <Button variant="outline" onClick={() => window.history.back()} className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
