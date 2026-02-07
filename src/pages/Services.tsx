import { motion } from "framer-motion";
import {
  PenTool, Box, FileCheck, Building2, Layers, Ruler,
  TreePine, Palette, Calculator, CuboidIcon as Cube,
  FileText, Zap, Warehouse, Compass, HardHat, Eye,
} from "lucide-react";
import AnimatedIcon from "@/components/AnimatedIcon";
import CTASection from "@/components/CTASection";

const serviceCategories = [
  {
    label: "Drafting & Design",
    description: "Comprehensive drafting services from concept to construction-ready documents.",
    services: [
      {
        icon: PenTool, animation: "draw" as const,
        title: "2D Floor Plans",
        description: "Detailed, dimensioned floor plans for residential and commercial projects. Our plans are accurate, code-compliant, and ready for permit submissions across all 50 states.",
      },
      {
        icon: Building2, animation: "bounce" as const,
        title: "Structural Drafting",
        description: "Comprehensive structural drawings including foundations, framing plans, and details. Engineered for safety and compliance with all applicable building codes.",
      },
      {
        icon: Ruler, animation: "swing" as const,
        title: "Site Plans",
        description: "Precise site layout drawings showing property boundaries, setbacks, utilities, and grading — essential for zoning and development approvals.",
      },
      {
        icon: Layers, animation: "morph" as const,
        title: "MEP Drafting",
        description: "Coordinated mechanical, electrical, and plumbing drawings that integrate seamlessly with architectural and structural plans for clash-free construction.",
      },
    ],
  },
  {
    label: "3D & Visualization",
    description: "Photorealistic visuals and immersive experiences that sell your designs.",
    services: [
      {
        icon: Box, animation: "float" as const,
        title: "3D Rendering",
        description: "Photorealistic exterior and interior renderings that help you present winning designs. Perfect for marketing materials, client approvals, and pre-sales.",
      },
      {
        icon: Palette, animation: "wave" as const,
        title: "Interior Visualization",
        description: "Stunning interior 3D visuals showcasing material selections, lighting design, and spatial arrangements to help clients experience spaces before construction.",
      },
      {
        icon: TreePine, animation: "float" as const,
        title: "Virtual Landscaping",
        description: "Realistic landscape renderings with vegetation, hardscaping, water features, and outdoor lighting to complete your project's visual presentation.",
      },
      {
        icon: Eye, animation: "pulse" as const,
        title: "Virtual Walkthroughs",
        description: "Interactive 3D walkthroughs that let clients explore every room and angle of their future space with immersive virtual reality experiences.",
      },
    ],
  },
  {
    label: "BIM & Technology",
    description: "Advanced digital modeling for smarter, more efficient construction.",
    services: [
      {
        icon: Cube, animation: "rotate" as const,
        title: "BIM Modeling",
        description: "Building Information Modeling services for comprehensive 3D coordination, clash detection, and data-rich project management across disciplines.",
      },
      {
        icon: FileText, animation: "glow" as const,
        title: "Construction Documents",
        description: "Complete CD sets with all necessary details, schedules, and specifications for permitting, bidding, and construction phases.",
      },
      {
        icon: Warehouse, animation: "bounce" as const,
        title: "As-Built Documentation",
        description: "Accurate as-built drawings documenting existing conditions for renovations, additions, and facility management purposes.",
      },
      {
        icon: Compass, animation: "spin-pulse" as const,
        title: "Shop Drawings",
        description: "Detailed fabrication drawings for steel, millwork, curtain walls, and specialty items with precise measurements and specifications.",
      },
    ],
  },
  {
    label: "Estimation & Compliance",
    description: "Budget control and regulatory compliance from start to finish.",
    services: [
      {
        icon: Calculator, animation: "shake" as const,
        title: "Material Estimation",
        description: "Accurate quantity takeoffs and material estimates to help you budget effectively, reduce waste, and optimize procurement during construction.",
      },
      {
        icon: FileCheck, animation: "pulse" as const,
        title: "Plan Stamping",
        description: "Certified plan stamping by licensed professionals across all US states. Our stamped plans are permit-ready and meet all code requirements.",
      },
      {
        icon: Zap, animation: "glow" as const,
        title: "Permit Expediting",
        description: "Fast-track your building permits with our streamlined compliance-first approach and established relationships with local building departments.",
      },
      {
        icon: HardHat, animation: "bounce" as const,
        title: "Code Compliance Review",
        description: "Thorough review of your plans against local building codes, ADA requirements, fire safety regulations, and energy codes before submission.",
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
            className="text-xs font-heading uppercase tracking-[0.2em] text-muted-foreground mb-4 block"
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
            <span className="text-gradient-highlight">& Design Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            From initial concepts to permit-ready plans, we deliver 16+ specialized
            services covering every stage of your architectural project.
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-2xl lg:text-3xl font-heading font-bold mb-2">
                {category.label}
              </h2>
              <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
              <div className="light-line max-w-xs" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-secondary/30 border border-border rounded-lg p-8 card-hover"
                >
                  <div className="mb-4">
                    <AnimatedIcon icon={service.icon} variant={service.animation} size={32} />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
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
