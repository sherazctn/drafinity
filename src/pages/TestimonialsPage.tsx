// ============= Full file contents =============

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import CTASection from "@/components/CTASection";
import PageHeroAnimation from "@/components/PageHeroAnimation";
import SEO from "@/components/SEO";
import { breadcrumbSchema } from "@/lib/seoSchemas";

const testimonials = [
  { quote: "Drafinity delivered our complete set of construction documents ahead of schedule. Their attention to detail saved us from costly revisions during permitting.", name: "Michael Chen", role: "General Contractor, NYC" },
  { quote: "The 3D renderings were exceptional — our clients were able to visualize the project perfectly before construction even began. Outstanding work.", name: "Sarah Williams", role: "Interior Designer, LA" },
  { quote: "We've relied on Drafinity for drafting and documentation support across multiple projects. Fast turnaround, always thorough, always professional.", name: "James Rodriguez", role: "Development Firm Owner, FL" },
  { quote: "Their BIM modeling caught clashes that would have cost us over $200K in change orders. Drafinity is now our go-to for every project.", name: "Robert Martinez", role: "Project Manager, TX" },
  { quote: "From initial sketches to permit-ready documents in under a week. The speed and quality are unmatched in the industry.", name: "Emily Parker", role: "Designer, Chicago" },
  { quote: "We needed coordinated drawing packages for a retail rollout across 15 locations. Drafinity handled it flawlessly — all submissions approved first round.", name: "David Kim", role: "Retail Developer, CA" },
  { quote: "The structural drafting precision was remarkable. Our engineers praised the quality and it passed review without a single comment.", name: "Amanda Foster", role: "Structural Engineer, Denver" },
  { quote: "Drafinity's coordination documentation eliminated all conflicts before we even broke ground. The BIM model was incredibly detailed.", name: "Thomas Wright", role: "MEP Contractor, Seattle" },
  { quote: "As a small developer, I need reliable partners. Drafinity has been exactly that — responsive, professional, and always on time.", name: "Lisa Chang", role: "Residential Developer, Portland" },
  { quote: "The permit drawing preparation saved us 6 weeks on our timeline. They knew exactly what each jurisdiction required.", name: "Kevin O'Brien", role: "Construction Manager, Boston" },
  { quote: "Their interior visualizations helped us sell 80% of units before construction completed. The quality was photographic.", name: "Rachel Green", role: "Marketing Director, Miami" },
  { quote: "I've worked with many drafting firms. Drafinity is the only one that consistently delivers permit-ready drawing packages on the first submission.", name: "Mark Johnson", role: "Designer, San Francisco" },
];

const TestimonialsPage = () => {
  return (
    <main>
      <SEO
        title="Client Testimonials — 100% Satisfaction Across 500+ Projects"
        description="Read what 237+ clients say about Drafinity's drafting, 3D rendering, BIM, and design documentation support services. 4.9/5 average rating across 500+ completed projects."
        path="/testimonials"
        schema={[breadcrumbSchema([{name:'Home',path:'/'},{name:'Testimonials',path:'/testimonials'}])]}
      />
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 blueprint-grid relative overflow-hidden">
        <PageHeroAnimation page="about" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-heading uppercase tracking-[0.2em] text-muted-foreground mb-4 block">Testimonials</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl lg:text-6xl font-heading font-bold mb-6 max-w-3xl">
            What Our Clients<br /><span className="text-gradient-highlight">Say About Us</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Hear from homeowners, contractors, designers, and developers who trust Drafinity for their most important projects.
          </motion.p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-lg p-8 flex flex-col card-hover"
              >
                <Quote className="w-8 h-8 text-muted-foreground/30 mb-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-foreground text-foreground" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">"{t.quote}"</p>
                <div className="border-t border-border pt-4">
                  <p className="text-sm font-heading font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default TestimonialsPage;
