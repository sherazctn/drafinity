import Hero from "@/components/Hero";
import CounterStats from "@/components/CounterStats";
import TrustBadges from "@/components/TrustBadges";
import ServiceBlocks from "@/components/ServiceBlocks";
import TrendingServices from "@/components/TrendingServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessSection from "@/components/ProcessSection";
import PortfolioPreview from "@/components/PortfolioPreview";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import PartnerMap from "@/components/PartnerMap";
import SEO from "@/components/SEO";
import { organizationSchema, localBusinessSchema, websiteSchema, faqSchema, homeFAQs } from "@/lib/seoSchemas";

const Index = () => {
  return (
    <main>
      <SEO
        title="Drafinity LLC — USA Certified Drafting, 3D Design, BIM & Plan Stamping"
        description="Drafinity LLC delivers permit-ready architectural drafting, 3D rendering, BIM modeling, structural drafting, and plan stamping in all 50 US states. Free quote in 24 hours. Certified since 2015."
        path="/"
        keywords="architectural drafting, plan stamping, 3D rendering, BIM modeling, Revit, structural drafting, MEP drafting, USA drafting services, permit drawings"
        schema={[organizationSchema, localBusinessSchema, websiteSchema, faqSchema(homeFAQs)]}
      />
      <Hero />
      <CounterStats />
      <TrustBadges />
      <div className="section-divider" />
      <ServiceBlocks />
      <div className="section-divider" />
      <TrendingServices />
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
