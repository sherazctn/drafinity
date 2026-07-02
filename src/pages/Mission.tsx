// ============= Full file contents =============

import { motion } from "framer-motion";
import { Target, Heart, Zap, Award, ShieldCheck, Handshake } from "lucide-react";
import AnimatedIcon from "@/components/AnimatedIcon";
import CTASection from "@/components/CTASection";
import PageHeroAnimation from "@/components/PageHeroAnimation";
import SEO from "@/components/SEO";
import { breadcrumbSchema } from "@/lib/seoSchemas";

const missionValues = [
  { icon: Target, animation: "pulse" as const, title: "Precision First", description: "Every measurement, every line, every detail is verified for absolute precision. We believe that accuracy in documentation prevents costly errors in construction." },
  { icon: Heart, animation: "wave" as const, title: "Client Success", description: "Our clients' success is our success. We go beyond deliverables to become true partners in your projects, offering guidance, expertise, and unwavering support." },
  { icon: Zap, animation: "bounce" as const, title: "Speed Without Compromise", description: "We've built systems and workflows that allow us to deliver faster than industry averages without ever compromising on quality or documentation accuracy." },
  { icon: Award, animation: "glow" as const, title: "Excellence in Every Detail", description: "From the first sketch to the final deliverable, we maintain the highest standards of professional excellence across every drawing and document." },
  { icon: ShieldCheck, animation: "rotate" as const, title: "Code Awareness in Documentation", description: "Every plan we prepare is cross-referenced against current local, state, and national building codes to support first-time permit approvals." },
  { icon: Handshake, animation: "float" as const, title: "Transparent Partnership", description: "We believe in clear communication, honest timelines, and transparent pricing. No hidden fees, no surprises — just reliable, professional service." },
];

const commitments = [
  { metric: "24hr", label: "Quote Turnaround", description: "Every project inquiry receives a detailed quote within one business day." },
  { metric: "100%", label: "Quality Review", description: "All deliverables are reviewed for accuracy and consistency before delivery." },
  { metric: "3x", label: "Quality Checks", description: "Triple-stage quality assurance on every drawing before delivery." },
  { metric: "Multi-State", label: "Service Reach", description: "Drafting support available for projects in many locations. Service availability depends on project location, project type, and applicable local requirements." },
];

const Mission = () => {
  return (
    <main>
      <SEO
        title="Our Mission — Precision, Speed, Documentation Quality"
        description="Drafinity's mission is to deliver permit drawing preparation support and building documentation with unmatched precision and 24-hour quote turnaround. Service availability depends on project location and applicable requirements."
        path="/mission"
        schema={[breadcrumbSchema([{name:'Home',path:'/'},{name:'Mission',path:'/mission'}])]}
      />
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 blueprint-grid relative overflow-hidden">
        <PageHeroAnimation page="about" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-heading uppercase tracking-[0.2em] text-muted-foreground mb-4 block">Our Mission</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl lg:text-6xl font-heading font-bold mb-6 max-w-3xl">
            Empowering Builders With<br /><span className="text-gradient-highlight">Precision & Trust</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Our mission is to empower homeowners, contractors, designers, and developers with AI-enhanced, precision-driven building documentation and drafting support — blending cutting-edge technology with expert craftsmanship to deliver permit drawing packages on time, every time.
          </motion.p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 lg:py-32 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <Target className="w-12 h-12 mx-auto mb-6 text-muted-foreground/40" />
            <blockquote className="text-2xl lg:text-3xl font-heading font-bold leading-relaxed mb-6">
              "To deliver the highest quality drafting, design documentation, and drawing support services that help our clients build safer, smarter, and more functional structures — while making the permit preparation process seamless and stress-free."
            </blockquote>
            <p className="text-sm text-muted-foreground">— Drafinity LLC</p>
          </motion.div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {commitments.map((c, i) => (
              <motion.div key={c.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <p className="text-3xl lg:text-4xl font-heading font-bold stat-number mb-1">{c.metric}</p>
                <p className="text-xs font-heading uppercase tracking-widest text-muted-foreground mb-2">{c.label}</p>
                <p className="text-xs text-muted-foreground">{c.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-xs font-heading uppercase tracking-[0.2em] text-muted-foreground mb-4 block">Our Values</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl lg:text-4xl font-heading font-bold">How We Deliver on Our Mission</motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {missionValues.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card border border-border rounded-lg p-6 card-hover">
                <div className="mb-4"><AnimatedIcon icon={v.icon} variant={v.animation} size={24} /></div>
                <h3 className="text-sm font-heading font-semibold mb-2">{v.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default Mission;
