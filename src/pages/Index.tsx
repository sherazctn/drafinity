import { lazy, Suspense } from "react";
import Hero from "@/components/Hero";
import SEO from "@/components/SEO";
import { organizationSchema, localBusinessSchema, websiteSchema, faqSchema, homeFAQs } from "@/lib/seoSchemas";

// Lazy-load everything below the fold so the hero paints fast
const CounterStats = lazy(() => import("@/components/CounterStats"));
const TrustBadges = lazy(() => import("@/components/TrustBadges"));
const ServiceBlocks = lazy(() => import("@/components/ServiceBlocks"));
const TrendingServices = lazy(() => import("@/components/TrendingServices"));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const PortfolioPreview = lazy(() => import("@/components/PortfolioPreview"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const PartnerMap = lazy(() => import("@/components/PartnerMap"));

const SectionFallback = () => <div className="h-32" />;

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
      <Suspense fallback={<SectionFallback />}>
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
      </Suspense>
    </main>
  );
};

export default Index;
