import { motion } from "framer-motion";
import { Shield, Award, Clock, Lock, Users, CheckCircle } from "lucide-react";
import AnimatedIcon from "@/components/AnimatedIcon";

const pillars = [
  {
    icon: Award,
    animation: "pulse" as const,
    title: "USA Certified",
    description: "Licensed professionals delivering code-compliant, permit-ready plans across all 50 states.",
  },
  {
    icon: Clock,
    animation: "rotate" as const,
    title: "Since 2015",
    description: "Nearly a decade of trusted experience in drafting, design, and plan stamping services.",
  },
  {
    icon: Shield,
    animation: "glow" as const,
    title: "Quality Assured",
    description: "Rigorous quality control processes ensure accuracy and compliance in every deliverable.",
  },
  {
    icon: Lock,
    animation: "bounce" as const,
    title: "Secure & Confidential",
    description: "Your project data is protected with enterprise-grade security and strict confidentiality.",
  },
  {
    icon: Users,
    animation: "wave" as const,
    title: "Dedicated Team",
    description: "A specialized team assigned to your project for consistent communication and results.",
  },
  {
    icon: CheckCircle,
    animation: "float" as const,
    title: "Zero-Revision Guarantee",
    description: "Our multi-step QC process ensures plans are right the first time, saving you time and money.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 blueprint-grid opacity-50" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* Left */}
          <div className="flex flex-col justify-between">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xs font-heading uppercase tracking-[0.2em] text-muted-foreground mb-4 block"
              >
                Why Drafinity
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl lg:text-5xl font-heading font-bold mb-6"
              >
                Built on Trust,
                <br />
                <span className="text-gradient-highlight">Driven by Precision</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground leading-relaxed mb-6"
              >
                We combine industry expertise with cutting-edge technology to
                deliver plans that exceed expectations. Every project is handled with
                the precision and care it deserves.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="text-muted-foreground leading-relaxed mb-6"
              >
                At Drafinity, we don't just create drawings — we build confidence. Our clients
                trust us because we understand the stakes: every dimension matters, every code
                requirement counts, and every deadline is non-negotiable. From residential
                renovations to multi-million dollar commercial developments, we deliver the same
                level of meticulous attention to detail.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground leading-relaxed mb-6"
              >
                Our team of certified drafters, designers, and engineers brings together decades
                of combined experience across residential, commercial, industrial, and institutional
                projects. We stay ahead of industry standards by investing in the latest CAD and
                BIM technology, continuous professional development, and rigorous quality management systems.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
                className="text-muted-foreground leading-relaxed"
              >
                Whether you're an architect looking for reliable outsourcing, a contractor
                needing fast permit-ready plans, or a developer managing multiple projects
                simultaneously — Drafinity is the partner you can count on to deliver
                exceptional results, on time, every time.
              </motion.p>
            </div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-border"
            >
              {["AIA Compliant", "IBC Certified", "OSHA Standards", "ADA Compliant"].map((badge) => (
                <span
                  key={badge}
                  className="text-[10px] font-heading uppercase tracking-[0.15em] text-muted-foreground border border-border rounded-full px-3 py-1"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 card-hover"
              >
                <div className="mb-4">
                  <AnimatedIcon icon={pillar.icon} variant={pillar.animation} size={24} />
                </div>
                <h3 className="text-sm font-heading font-semibold mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
