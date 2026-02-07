import { motion } from "framer-motion";
import { Award, Users, Shield, Cpu } from "lucide-react";
import CTASection from "@/components/CTASection";

const stats = [
  { value: "2015", label: "Founded" },
  { value: "500+", label: "Projects Completed" },
  { value: "50", label: "States Covered" },
  { value: "100%", label: "Client Satisfaction" },
];

const values = [
  {
    icon: Award,
    title: "Certified Excellence",
    description:
      "Every deliverable is certified by licensed professionals, ensuring compliance with local and national building codes.",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description:
      "We tailor our services to your unique project needs, providing dedicated support from start to finish.",
  },
  {
    icon: Shield,
    title: "Uncompromising Quality",
    description:
      "Multi-stage quality assurance checks guarantee accuracy, consistency, and compliance in every drawing.",
  },
  {
    icon: Cpu,
    title: "Cutting-Edge Technology",
    description:
      "We leverage the latest CAD, BIM, and 3D visualization tools to deliver state-of-the-art results.",
  },
];

const softwareTools = [
  "AutoCAD",
  "Revit",
  "ArchiCAD",
  "SketchUp Pro",
  "V-Ray",
  "Lumion",
  "Bluebeam Revu",
  "Adobe Creative Suite",
];

const About = () => {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 blueprint-grid">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs font-heading uppercase tracking-[0.2em] text-primary mb-4 block"
          >
            About Drafinity
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-heading font-bold mb-6 max-w-3xl"
          >
            We Turn Concepts Into
            <br />
            <span className="text-gradient-gold">Permit-Ready Plans</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            Drafinity LLC is a USA-based drafting and design firm specializing in
            precision-driven architectural plans, 3D visualization, and certified
            plan stamping. Since 2015, we've partnered with architects, contractors,
            and developers to deliver exceptional quality.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl lg:text-4xl font-heading font-bold text-gradient-gold mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xs font-heading uppercase tracking-[0.2em] text-primary mb-4 block"
              >
                Our Mission
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl lg:text-4xl font-heading font-bold mb-6"
              >
                Elevating the Standard of Drafting
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground leading-relaxed mb-6"
              >
                Our mission is to provide the highest quality drafting and design
                services that help our clients bring their visions to life — on time,
                on budget, and with zero compromises on accuracy or compliance.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground leading-relaxed"
              >
                With deep expertise across residential, commercial, and industrial
                projects, we serve as an extension of your team — delivering the
                technical drawings and certifications you need to move forward
                confidently.
              </motion.p>
            </div>

            {/* Right — values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((val, i) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="bg-card border border-border rounded-lg p-6"
                >
                  <val.icon className="w-6 h-6 text-primary mb-3" />
                  <h3 className="text-sm font-heading font-semibold mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {val.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Software & Tools */}
      <section className="py-24 lg:py-32 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-heading uppercase tracking-[0.2em] text-primary mb-4 block"
          >
            Our Toolkit
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-heading font-bold mb-12"
          >
            Industry-Leading Software
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-4">
            {softwareTools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-background border border-border rounded-lg px-6 py-3 text-sm font-heading tracking-wide text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors duration-300"
              >
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
