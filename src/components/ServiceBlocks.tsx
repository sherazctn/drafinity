import { motion } from "framer-motion";
import {
  Ruler,
  Box,
  FileCheck,
  Building2,
  Layers,
  PenTool,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: PenTool,
    title: "2D Floor Plans",
    description:
      "Accurate, code-compliant floor plans ready for permits and construction.",
  },
  {
    icon: Box,
    title: "3D Rendering",
    description:
      "Photorealistic 3D visuals that bring your designs to life for client presentations.",
  },
  {
    icon: FileCheck,
    title: "Plan Stamping",
    description:
      "Certified, permit-ready plan stamping by licensed professionals across all US states.",
  },
  {
    icon: Building2,
    title: "Structural Drafting",
    description:
      "Detailed structural drawings ensuring safety, compliance, and buildability.",
  },
  {
    icon: Layers,
    title: "MEP Drafting",
    description:
      "Mechanical, electrical, and plumbing plans coordinated for seamless construction.",
  },
  {
    icon: Ruler,
    title: "Site Plans",
    description:
      "Precise site layout drawings for zoning approvals and development permits.",
  },
];

const ServiceBlocks = () => {
  return (
    <section className="py-24 lg:py-32 blueprint-grid">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-heading uppercase tracking-[0.2em] text-primary mb-4 block"
          >
            What We Deliver
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-heading font-bold"
          >
            Our Core Services
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to="/services"
                className="group block bg-card border border-border rounded-lg p-8 h-full hover:border-primary/30 hover:bg-surface-elevated transition-all duration-500"
              >
                <service.icon className="w-8 h-8 text-primary mb-5 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-heading font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBlocks;
