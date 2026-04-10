import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Flame, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Layers, Zap, FileText, Box, Ruler, Building2, Calculator,
  CuboidIcon as Cube, FileCheck, HardHat, PenTool, Warehouse,
} from "lucide-react";
import AnimatedIcon from "@/components/AnimatedIcon";

const trendingServices = [
  {
    icon: Cube, animation: "rotate" as const, title: "BIM Coordination & Clash Detection", slug: "bim-modeling", demand: "Very High",
    description: "Multi-discipline 3D coordination with automated clash detection to eliminate costly field conflicts before construction begins.",
    whyTrending: "Required by most large-scale US projects and government contracts.",
  },
  {
    icon: Zap, animation: "glow" as const, title: "Permit-Expediting & Fast-Track Documentation", slug: "permit-expediting", demand: "Very High",
    description: "Streamlined permit submission with pre-reviewed, code-compliant documentation that passes review on the first attempt.",
    whyTrending: "Developers demand faster permit cycles to reduce carrying costs.",
  },
  {
    icon: FileText, animation: "glow" as const, title: "Design Development to Construction Documents", slug: "construction-documents", demand: "High",
    description: "Complete DD-to-CD pipeline: converting approved designs into permit-ready, bid-ready construction document sets.",
    whyTrending: "Firms outsource CD production to meet project volumes while keeping overhead low.",
  },
  {
    icon: Layers, animation: "morph" as const, title: "Multidisciplinary Engineering Integration", slug: "mep-drafting", demand: "High",
    description: "Seamless coordination of architectural, structural, MEP, and fire protection drawings into unified construction sets.",
    whyTrending: "Complex mixed-use developments require tight interdisciplinary coordination.",
  },
  {
    icon: Box, animation: "float" as const, title: "High-Detail Revit & BIM Modeling (LOD 300–500)", slug: "bim-modeling", demand: "Very High",
    description: "Production-grade Revit models at LOD 300–500 with accurate geometry and fabrication-level detail.",
    whyTrending: "LOD 400–500 models are now standard requirements for design-build and IPD projects.",
  },
  {
    icon: Building2, animation: "bounce" as const, title: "Structural Analysis & Value Engineering", slug: "structural-drafting", demand: "High",
    description: "Comprehensive structural analysis with value engineering recommendations to optimize material usage and costs.",
    whyTrending: "Rising material costs drive demand for VE to keep projects within budget.",
  },
  {
    icon: Ruler, animation: "swing" as const, title: "MEP System Design & Load Calculations", slug: "mep-drafting", demand: "High",
    description: "Complete MEP system design including HVAC load calculations, electrical panel sizing, and plumbing fixture counts.",
    whyTrending: "Stricter energy codes (IECC 2021/2024) are increasing MEP complexity.",
  },
  {
    icon: Warehouse, animation: "bounce" as const, title: "As-Built Drawings & Renovation Documentation", slug: "construction-documents", demand: "High",
    description: "Precise as-built documentation from field measurements, point clouds, or existing drawings for renovations.",
    whyTrending: "The US renovation market is booming with aging building stock.",
  },
  {
    icon: PenTool, animation: "draw" as const, title: "Redline Markup Implementation & Production Scaling", slug: "2d-floor-plans", demand: "Moderate–High",
    description: "Rapid implementation of architect/engineer redline markups into production CAD/BIM drawings.",
    whyTrending: "Firms need scalable drafting capacity to handle project surges.",
  },
  {
    icon: HardHat, animation: "bounce" as const, title: "Multi-State Code Compliance Expertise", slug: "plan-stamping", demand: "Very High",
    description: "Expert navigation of building codes across multiple US jurisdictions — IBC, IRC, ADA, OSHA, and state-specific amendments.",
    whyTrending: "National developers need consistent compliance across dozens of jurisdictions.",
  },
  {
    icon: Calculator, animation: "shake" as const, title: "Quantity Takeoffs & Cost Estimation", slug: "material-estimation", demand: "High",
    description: "Detailed material quantity takeoffs from plans and BIM models for accurate budgeting and bid preparation.",
    whyTrending: "Volatile material prices make accurate estimation critical to avoid overruns.",
  },
];

const ITEMS_PER_VIEW = { mobile: 1, tablet: 2, desktop: 3 };

const TrendingServices = () => {
  const [current, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth < 768) setItemsPerView(ITEMS_PER_VIEW.mobile);
      else if (window.innerWidth < 1024) setItemsPerView(ITEMS_PER_VIEW.tablet);
      else setItemsPerView(ITEMS_PER_VIEW.desktop);
    };
    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const maxIndex = trendingServices.length - itemsPerView;

  const next = useCallback(() => setCurrent((p) => Math.min(p + 1, maxIndex)), [maxIndex]);
  const prev = useCallback(() => setCurrent((p) => Math.max(p - 1, 0)), []);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((p) => (p >= maxIndex ? 0 : p + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <section className="py-24 lg:py-32 bg-card border-y border-border relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center gap-2 mb-4">
              <Flame className="w-4 h-4 text-destructive" />
              <span className="text-xs font-heading uppercase tracking-[0.2em] text-muted-foreground">Most In-Demand Services in the USA</span>
              <Flame className="w-4 h-4 text-destructive" />
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl lg:text-5xl font-heading font-bold mb-2">
              Trending Services
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-muted-foreground max-w-xl">
              The most demanded drafting, engineering, and compliance services by US companies and individual clients
            </motion.p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button onClick={prev} disabled={current === 0} className="p-2 rounded-full border border-border hover:bg-muted disabled:opacity-30 transition-all">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} disabled={current >= maxIndex} className="p-2 rounded-full border border-border hover:bg-muted disabled:opacity-30 transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-5"
            animate={{ x: `-${current * (100 / itemsPerView + 5 / itemsPerView)}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {trendingServices.map((service) => (
              <div key={service.title} className="flex-shrink-0" style={{ width: `calc(${100 / itemsPerView}% - ${(5 * (itemsPerView - 1)) / itemsPerView * 4}px)` }}>
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
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-foreground w-6" : "bg-muted-foreground/30"}`}
            />
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-8">
          <Link to="/services" className="text-sm font-heading uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2">
            View All Services
            <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TrendingServices;
