import { motion } from "framer-motion";
import {
  PenTool, Box, FileCheck, Building2, Layers, Ruler,
  TreePine, Palette, Calculator, CuboidIcon as Cube,
  FileText, Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedIcon from "@/components/AnimatedIcon";

const services = [
  {
    icon: PenTool,
    animation: "draw" as const,
    title: "2D Floor Plans",
    slug: "2d-floor-plans",
    description: "Accurate, code-compliant floor plans ready for permits and construction documents.",
  },
  {
    icon: Box,
    animation: "float" as const,
    title: "3D Rendering",
    slug: "3d-rendering",
    description: "Photorealistic 3D visualizations that bring your designs to life.",
  },
  {
    icon: FileCheck,
    animation: "pulse" as const,
    title: "Plan Stamping",
    slug: "plan-stamping",
    description: "Certified, permit-ready plan stamping by licensed professionals.",
  },
  {
    icon: Building2,
    animation: "bounce" as const,
    title: "Structural Drafting",
    slug: "structural-drafting",
    description: "Detailed structural drawings ensuring safety and compliance.",
  },
  {
    icon: Layers,
    animation: "morph" as const,
    title: "MEP Drafting",
    slug: "mep-drafting",
    description: "Mechanical, electrical, and plumbing plans for seamless construction.",
  },
  {
    icon: Ruler,
    animation: "swing" as const,
    title: "Site Plans",
    slug: "site-plans",
    description: "Precise site layout drawings for zoning and development approvals.",
  },
  {
    icon: Cube,
    animation: "rotate" as const,
    title: "BIM Modeling",
    slug: "bim-modeling",
    description: "Building Information Modeling for clash-free design coordination.",
  },
  {
    icon: Palette,
    animation: "wave" as const,
    title: "Interior Design",
    slug: "interior-visualization",
    description: "Stunning interior visualizations with materials and lighting.",
  },
  {
    icon: FileText,
    animation: "glow" as const,
    title: "Construction Documents",
    slug: "construction-documents",
    description: "Complete CD sets for permitting, bidding, and construction.",
  },
  {
    icon: TreePine,
    animation: "float" as const,
    title: "Landscape Design",
    slug: "virtual-landscaping",
    description: "Realistic landscape renderings with vegetation and hardscaping.",
  },
  {
    icon: Calculator,
    animation: "shake" as const,
    title: "Material Estimation",
    slug: "material-estimation",
    description: "Accurate quantity takeoffs to budget effectively and reduce waste.",
  },
  {
    icon: Zap,
    animation: "spin-pulse" as const,
    title: "Permit Expediting",
    slug: "permit-expediting",
    description: "Fast-track your permits with our compliance-first approach.",
  },
];

const ServiceBlocks = () => {
  return (
    <section className="py-24 lg:py-32 blueprint-grid relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-heading uppercase tracking-[0.2em] text-muted-foreground mb-4 block"
          >
            What We Deliver
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-heading font-bold mb-4"
          >
            Our Core Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-xl mx-auto"
          >
            12 specialized services covering every stage of your architectural project
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Link
                to={`/services/${service.slug}`}
                className="group block bg-card border border-border rounded-lg p-6 h-full card-hover"
              >
                <div className="mb-4">
                  <AnimatedIcon
                    icon={service.icon}
                    variant={service.animation}
                    size={28}
                  />
                </div>
                <h3 className="text-sm font-heading font-semibold mb-2 group-hover:text-foreground transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="text-sm font-heading uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
          >
            View All Services
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceBlocks;
