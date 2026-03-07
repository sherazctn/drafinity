import Hero from "@/components/Hero";
import CounterStats from "@/components/CounterStats";
import TrustBadges from "@/components/TrustBadges";
import ServiceBlocks from "@/components/ServiceBlocks";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessSection from "@/components/ProcessSection";
import PortfolioPreview from "@/components/PortfolioPreview";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import PartnerMap from "@/components/PartnerMap";

const Index = () => {
  return (
    <main>
      <Hero />
      <CounterStats />
      <TrustBadges />
      <div className="section-divider" />
      <ServiceBlocks />
      <div className="section-divider" />
      <WhyChooseUs />
      <div className="section-divider" />
      <ProcessSection />
      <div className="section-divider" />
      <PortfolioPreview />
      <div className="section-divider" />
      <Testimonials />
      <div className="section-divider" />
      <PartnerMap />
      <div className="section-divider" />
      <FAQSection />
      <div className="section-divider" />
      <CTASection />
    </main>
  );
};

export default Index;
