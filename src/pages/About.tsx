import { motion } from "framer-motion";
import { Award, Users, Shield, Cpu, Target, Globe } from "lucide-react";
import AnimatedIcon from "@/components/AnimatedIcon";
import CTASection from "@/components/CTASection";
import PageHeroAnimation from "@/components/PageHeroAnimation";

const stats = [
  { value: "2015", label: "Founded" },
  { value: "500+", label: "Projects Completed" },
  { value: "50", label: "States Covered" },
  { value: "100%", label: "Client Satisfaction" },
];

const values = [
  { icon: Award, animation: "pulse" as const, title: "Certified Excellence", description: "Every deliverable is certified by licensed professionals, ensuring compliance with local and national building codes." },
  { icon: Users, animation: "wave" as const, title: "Client-Centric Approach", description: "We tailor our services to your unique project needs, providing dedicated support from start to finish." },
  { icon: Shield, animation: "glow" as const, title: "Uncompromising Quality", description: "Multi-stage quality assurance checks guarantee accuracy, consistency, and compliance in every drawing." },
  { icon: Cpu, animation: "rotate" as const, title: "Cutting-Edge Technology", description: "We leverage the latest CAD, BIM, and 3D visualization tools to deliver state-of-the-art results." },
  { icon: Target, animation: "bounce" as const, title: "Precision-Driven", description: "Every measurement, every line, every detail is verified for absolute precision in all deliverables." },
  { icon: Globe, animation: "float" as const, title: "Nationwide Coverage", description: "We serve clients across all 50 states with consistent quality and rapid turnaround times." },
];

const softwareTools = ["AutoCAD", "Revit", "ArchiCAD", "SketchUp Pro", "V-Ray", "Lumion", "Bluebeam Revu", "Adobe Creative Suite"];

const timelineEvents = [
  { year: "2015", event: "Drafinity LLC founded in New York" },
  { year: "2017", event: "Expanded to 3D rendering & visualization" },
  { year: "2019", event: "Achieved 200+ project milestone" },
  { year: "2021", event: "Launched BIM modeling services" },
  { year: "2023", event: "Nationwide plan stamping coverage" },
  { year: "2025", event: "500+ projects delivered across 50 states" },
];

const About = () => {
  return (
    <main>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 blueprint-grid relative overflow-hidden">
        <PageHeroAnimation page="about" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-heading uppercase tracking-[0.2em] text-muted-foreground mb-4 block">About Drafinity</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl lg:text-6xl font-heading font-bold mb-6 max-w-3xl">
            We Turn Concepts Into<br /><span className="text-gradient-highlight">Permit-Ready Plans</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Drafinity LLC is a USA-based drafting and design firm specializing in precision-driven architectural plans, 3D visualization, and certified plan stamping. Since 2015, we've partnered with architects, contractors, and developers to deliver exceptional quality.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <p className="text-3xl lg:text-4xl font-heading font-bold stat-number mb-1">{stat.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-xs font-heading uppercase tracking-[0.2em] text-muted-foreground mb-4 block text-center">Our Journey</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl lg:text-4xl font-heading font-bold mb-16 text-center">A Decade of Growth</motion.h2>
          <div className="max-w-2xl mx-auto relative">
            <div className="absolute left-[18px] top-0 bottom-0 w-px bg-border" />
            {timelineEvents.map((item, i) => (
              <motion.div key={item.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-6 mb-8 last:mb-0">
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 + 0.2, type: "spring" }} className="w-9 h-9 rounded-full bg-secondary border border-border flex items-center justify-center shrink-0 relative z-10">
                  <span className="w-2 h-2 rounded-full bg-foreground" />
                </motion.div>
                <div className="pt-1">
                  <p className="text-sm font-heading font-bold">{item.year}</p>
                  <p className="text-sm text-muted-foreground">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-xs font-heading uppercase tracking-[0.2em] text-muted-foreground mb-4 block">Our Values</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl lg:text-4xl font-heading font-bold">What Sets Us Apart</motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, i) => (
              <motion.div key={val.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-background border border-border rounded-lg p-6 card-hover">
                <div className="mb-4"><AnimatedIcon icon={val.icon} variant={val.animation} size={24} /></div>
                <h3 className="text-sm font-heading font-semibold mb-2">{val.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Software */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-xs font-heading uppercase tracking-[0.2em] text-muted-foreground mb-4 block">Our Toolkit</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl lg:text-4xl font-heading font-bold mb-12">Industry-Leading Software</motion.h2>
          <div className="flex flex-wrap justify-center gap-3">
            {softwareTools.map((tool, i) => (
              <motion.span key={tool} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} whileHover={{ scale: 1.05, y: -2 }} className="bg-card border border-border rounded-lg px-6 py-3 text-sm font-heading tracking-wide text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors duration-300 cursor-default">
                {tool}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default About;
