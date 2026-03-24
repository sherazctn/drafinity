import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Flame } from "lucide-react";
import {
  Layers, Zap, FileText, Box, Ruler, Building2, Calculator,
  CuboidIcon as Cube, FileCheck, HardHat, PenTool, Warehouse,
} from "lucide-react";
import AnimatedIcon from "@/components/AnimatedIcon";

const trendingServices = [
  {
    icon: Cube,
    animation: "rotate" as const,
    title: "BIM Coordination & Clash Detection",
    slug: "bim-modeling",
    demand: "Very High",
    description: "Multi-discipline 3D coordination with automated clash detection to eliminate costly field conflicts before construction begins. Essential for complex commercial and institutional projects.",
    whyTrending: "Required by most large-scale US projects and government contracts. BIM mandates are expanding rapidly across states.",
  },
  {
    icon: Zap,
    animation: "glow" as const,
    title: "Permit-Expediting & Fast-Track Documentation",
    slug: "permit-expediting",
    demand: "Very High",
    description: "Streamlined permit submission with pre-reviewed, code-compliant documentation that passes review on the first attempt. Includes jurisdiction-specific compliance packaging.",
    whyTrending: "Construction timelines are tighter than ever. Developers demand faster permit cycles to reduce carrying costs.",
  },
  {
    icon: FileText,
    animation: "glow" as const,
    title: "Design Development to Construction Documents",
    slug: "construction-documents",
    demand: "High",
    description: "Complete DD-to-CD pipeline: converting approved designs into permit-ready, bid-ready construction document sets with full specifications and schedules.",
    whyTrending: "Architecture firms outsource CD production to meet project volumes while keeping overhead low.",
  },
  {
    icon: Layers,
    animation: "morph" as const,
    title: "Multidisciplinary Engineering Integration",
    slug: "mep-drafting",
    demand: "High",
    description: "Seamless coordination of architectural, structural, MEP, and fire protection drawings into unified, clash-free construction sets.",
    whyTrending: "Complex mixed-use developments require tight interdisciplinary coordination that in-house teams often can't handle alone.",
  },
  {
    icon: Box,
    animation: "float" as const,
    title: "High-Detail Revit & BIM Modeling (LOD 300–500)",
    slug: "bim-modeling",
    demand: "Very High",
    description: "Production-grade Revit models at LOD 300–500 with accurate geometry, fabrication-level detail, and embedded data for construction and facilities management.",
    whyTrending: "LOD 400–500 models are now standard requirements for design-build and IPD projects across the US.",
  },
  {
    icon: Building2,
    animation: "bounce" as const,
    title: "Structural Analysis & Value Engineering",
    slug: "structural-drafting",
    demand: "High",
    description: "Comprehensive structural analysis with value engineering recommendations to optimize material usage, reduce costs, and maintain safety compliance.",
    whyTrending: "Rising material costs (steel, concrete, lumber) drive demand for VE to keep projects within budget.",
  },
  {
    icon: Ruler,
    animation: "swing" as const,
    title: "MEP System Design & Load Calculations",
    slug: "mep-drafting",
    demand: "High",
    description: "Complete MEP system design including HVAC load calculations, electrical panel sizing, plumbing fixture counts, and energy code compliance documentation.",
    whyTrending: "Stricter energy codes (IECC 2021/2024) and green building mandates are increasing MEP complexity.",
  },
  {
    icon: Warehouse,
    animation: "bounce" as const,
    title: "As-Built Drawings & Renovation Documentation",
    slug: "construction-documents",
    demand: "High",
    description: "Precise as-built documentation from field measurements, point clouds, or existing drawings — essential for renovations, additions, and adaptive reuse projects.",
    whyTrending: "The US renovation market is booming. Aging building stock requires accurate as-built documentation for modernization.",
  },
  {
    icon: PenTool,
    animation: "draw" as const,
    title: "Redline Markup Implementation & Production Scaling",
    slug: "2d-floor-plans",
    demand: "Moderate–High",
    description: "Rapid implementation of architect/engineer redline markups into production CAD/BIM drawings with version control and quality assurance.",
    whyTrending: "Firms need scalable drafting capacity to handle project surges without hiring permanent staff.",
  },
  {
    icon: HardHat,
    animation: "bounce" as const,
    title: "Multi-State Code Compliance Expertise",
    slug: "plan-stamping",
    demand: "Very High",
    description: "Expert navigation of building codes across multiple US jurisdictions — IBC, IRC, ADA, OSHA, fire codes, and state-specific amendments — ensuring plans comply everywhere.",
    whyTrending: "National developers and franchise operators need consistent code compliance across dozens of jurisdictions simultaneously.",
  },
  {
    icon: Calculator,
    animation: "shake" as const,
    title: "Quantity Takeoffs & Cost Estimation",
    slug: "material-estimation",
    demand: "High",
    description: "Detailed material quantity takeoffs from plans and BIM models for accurate budgeting, procurement, and bid preparation.",
    whyTrending: "Volatile material prices make accurate estimation critical. GCs and developers demand precision to avoid cost overruns.",
  },
];

const TrendingServices = () => {
  return (
    <section className="py-24 lg:py-32 bg-card border-y border-border relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Flame className="w-4 h-4 text-destructive" />
            <span className="text-xs font-heading uppercase tracking-[0.2em] text-muted-foreground">
              Most In-Demand Services in the USA
            </span>
            <Flame className="w-4 h-4 text-destructive" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-heading font-bold mb-4"
          >
            Trending Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            The most demanded drafting, engineering, and compliance services by US companies and individual clients in 2024–2025
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {trendingServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={`/services/${service.slug}`}
                className="group block bg-background border border-border rounded-lg p-6 h-full card-hover shadow-sm relative overflow-hidden"
              >
                <div className="flex items-start justify-between mb-3">
                  <AnimatedIcon icon={service.icon} variant={service.animation} size={28} />
                  <div className="flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-destructive" />
                    <span className={`text-[10px] font-heading uppercase tracking-wider ${service.demand === "Very High" ? "text-destructive" : "text-muted-foreground"}`}>
                      {service.demand}
                    </span>
                  </div>
                </div>
                <h3 className="text-sm font-heading font-semibold mb-2 group-hover:text-foreground transition-colors leading-tight">
                  {service.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  {service.description}
                </p>
                <div className="border-t border-border pt-2 mt-auto">
                  <p className="text-[10px] text-muted-foreground/70 leading-relaxed">
                    <span className="font-semibold text-muted-foreground">Why trending:</span> {service.whyTrending}
                  </p>
                </div>
                <ArrowRight className="absolute bottom-6 right-6 w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </motion.div>
          ))}
        </div>

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
            <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TrendingServices;
