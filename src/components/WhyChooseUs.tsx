import { motion } from "framer-motion";
import { Shield, Award, Clock, Lock } from "lucide-react";
import blueprintPattern from "@/assets/blueprint-pattern.jpg";

const pillars = [
  {
    icon: Award,
    title: "USA Certified",
    description:
      "Licensed professionals delivering code-compliant, permit-ready plans across all 50 states.",
  },
  {
    icon: Clock,
    title: "Since 2015",
    description:
      "Nearly a decade of trusted experience in drafting, design, and plan stamping services.",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description:
      "Rigorous quality control processes ensure accuracy and compliance in every deliverable.",
  },
  {
    icon: Lock,
    title: "Secure & Confidential",
    description:
      "Your project data is protected with enterprise-grade security and strict confidentiality.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-[0.04]">
        <img
          src={blueprintPattern}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-heading uppercase tracking-[0.2em] text-primary mb-4 block"
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
              <span className="text-gradient-gold">Driven by Precision</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground leading-relaxed max-w-lg"
            >
              We combine industry expertise with cutting-edge technology to
              deliver plans that exceed expectations. Every project is handled with
              the precision and care it deserves.
            </motion.p>
          </div>

          {/* Right — pillars grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/20 transition-colors duration-500"
              >
                <pillar.icon className="w-6 h-6 text-primary mb-4" />
                <h3 className="text-base font-heading font-semibold mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
