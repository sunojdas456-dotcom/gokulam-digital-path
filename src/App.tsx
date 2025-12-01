import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Pilgrimage from "./pages/Pilgrimage";
import Donations from "./pages/Donations";
import Auth from "./pages/Auth";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/vision-mission" element={<About />} />
          <Route path="/about/objectives" element={<About />} />
          <Route path="/about/history" element={<About />} />
          <Route path="/about/trustees" element={<About />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/activities/events" element={<Activities />} />
          <Route path="/activities/events/:id" element={<Activities />} />
          <Route path="/activities/news-media" element={<Activities />} />
          <Route path="/activities/news-media/:id" element={<Activities />} />
          <Route path="/pilgrimage" element={<Pilgrimage />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/volunteer" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
