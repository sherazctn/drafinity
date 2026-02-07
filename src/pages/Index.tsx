import Hero from "@/components/Hero";
import ServiceBlocks from "@/components/ServiceBlocks";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main>
      <Hero />
      <div className="section-divider" />
      <ServiceBlocks />
      <div className="section-divider" />
      <WhyChooseUs />
      <div className="section-divider" />
      <Testimonials />
      <div className="section-divider" />
      <CTASection />
    </main>
  );
};

export default Index;
