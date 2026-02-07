import { motion } from "framer-motion";
import {
  PenTool,
  Box,
  FileCheck,
  Building2,
  Layers,
  Ruler,
  TreePine,
  Palette,
  Calculator,
} from "lucide-react";
import CTASection from "@/components/CTASection";

const serviceCategories = [
  {
    label: "Drafting & Design",
    services: [
      {
        icon: PenTool,
        title: "2D Floor Plans",
        description:
          "Detailed, dimensioned floor plans for residential and commercial projects. Our plans are accurate, code-compliant, and ready for permit submissions.",
      },
      {
        icon: Building2,
        title: "Structural Drafting",
        description:
          "Comprehensive structural drawings including foundations, framing plans, and details. Engineered for safety and compliance with all applicable building codes.",
      },
      {
        icon: Ruler,
        title: "Site Plans",
        description:
          "Precise site layout drawings showing property boundaries, setbacks, utilities, and grading — essential for zoning and development approvals.",
      },
      {
        icon: Layers,
        title: "MEP Drafting",
        description:
          "Coordinated mechanical, electrical, and plumbing drawings that integrate seamlessly with architectural and structural plans for clash-free construction.",
      },
    ],
  },
  {
    label: "3D & Visualization",
    services: [
      {
        icon: Box,
        title: "3D Rendering",
        description:
          "Photorealistic exterior and interior renderings that help you present winning designs. Perfect for marketing materials, client approvals, and pre-sales.",
      },
      {
        icon: Palette,
        title: "Interior Visualization",
        description:
          "Stunning interior 3D visuals showcasing material selections, lighting design, and spatial arrangements to help clients experience their spaces before construction.",
      },
      {
        icon: TreePine,
        title: "Virtual Landscaping",
        description:
          "Realistic landscape renderings with vegetation, hardscaping, water features, and outdoor lighting to complete your project's visual presentation.",
      },
    ],
  },
  {
    label: "Estimation & Compliance",
    services: [
      {
        icon: Calculator,
        title: "Material Estimation",
        description:
          "Accurate quantity takeoffs and material estimates to help you budget effectively and reduce waste during construction.",
      },
      {
        icon: FileCheck,
        title: "Plan Stamping",
        description:
          "Certified plan stamping by licensed professionals across all US states. Our stamped plans are permit-ready and meet all local and national code requirements.",
      },
    ],
  },
];

const Services = () => {
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
            Our Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-heading font-bold mb-6 max-w-3xl"
          >
            Comprehensive Drafting
            <br />
            <span className="text-gradient-gold">& Design Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            From initial concepts to permit-ready plans, we deliver the full
            spectrum of drafting, 3D visualization, and compliance services your
            project demands.
          </motion.p>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, catIdx) => (
        <section
          key={category.label}
          className={`py-20 lg:py-28 ${catIdx % 2 === 1 ? "bg-card" : ""}`}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl lg:text-3xl font-heading font-bold mb-4"
            >
              {category.label}
            </motion.h2>
            <div className="gold-line mb-10 max-w-xs" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-secondary/50 border border-border rounded-lg p-8 hover:border-primary/20 transition-all duration-500"
                >
                  <service.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-heading font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </main>
  );
};

export default Services;
