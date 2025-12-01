import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { SevaCards } from "@/components/home/SevaCards";
import { AboutSection } from "@/components/home/AboutSection";
import { GauSevaSection } from "@/components/home/GauSevaSection";
import { EventsSection } from "@/components/home/EventsSection";
import { ImpactBanner } from "@/components/home/ImpactBanner";
import { DonationProcess } from "@/components/home/DonationProcess";
import { StatsSection } from "@/components/home/StatsSection";
import { NewsSection } from "@/components/home/NewsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { VolunteerSection } from "@/components/home/VolunteerSection";
import { CTABanner } from "@/components/home/CTABanner";
import { TrusteesSection } from "@/components/home/TrusteesSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <SevaCards />
      <AboutSection />
      <GauSevaSection />
      <EventsSection />
      <ImpactBanner />
      <DonationProcess />
      <StatsSection />
      <NewsSection />
      <TestimonialsSection />
      <VolunteerSection />
      <CTABanner />
      <TrusteesSection />
    </Layout>
  );
};

export default Index;
