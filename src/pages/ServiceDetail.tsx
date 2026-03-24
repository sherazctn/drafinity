import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2, Phone } from "lucide-react";
import {
  PenTool, Box, FileCheck, Building2, Layers, Ruler,
  TreePine, Palette, Calculator, CuboidIcon as Cube,
  FileText, Zap, Warehouse, Compass, HardHat, Eye,
} from "lucide-react";
import AnimatedIcon from "@/components/AnimatedIcon";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/CTASection";

const serviceData: Record<string, {
  icon: any;
  animation: any;
  title: string;
  tagline: string;
  description: string[];
  benefits: string[];
  process: { step: string; desc: string }[];
  deliverables: string[];
  tools: string[];
  faqs: { q: string; a: string }[];
  relatedServices: string[];
}> = {
  "2d-floor-plans": {
    icon: PenTool,
    animation: "draw",
    title: "2D Floor Plans",
    tagline: "Accurate, Code-Compliant Floor Plans Ready for Permits",
    description: [
      "Our 2D floor plan services deliver dimensioned, detailed drawings that meet the highest standards of accuracy and code compliance. Whether you're designing a single-family home or a large commercial facility, our plans are crafted to pass permit review on the first submission.",
      "We work from your sketches, existing blueprints, or field measurements to produce clean, professional-grade floor plans in AutoCAD or Revit. Every plan includes proper dimensioning, annotations, room schedules, and door/window schedules as required by your local jurisdiction.",
      "Our team understands building codes across all 50 states, ensuring your floor plans incorporate the necessary egress paths, accessibility features, and structural clearances before submission.",
    ],
    benefits: [
      "Permit-ready plans that pass review on first submission",
      "Accurate dimensioning with ±1/8\" tolerance",
      "Code-compliant layouts meeting local jurisdiction requirements",
      "Fast turnaround — standard plans in 2–3 business days",
      "Unlimited revisions until you're 100% satisfied",
      "All file formats: DWG, PDF, DXF, and print-ready sheets",
    ],
    process: [
      { step: "Submit Your Sketches", desc: "Send us your hand sketches, photos, existing plans, or field measurements." },
      { step: "Review & Quote", desc: "We analyze your project and provide a detailed quote within 24 hours." },
      { step: "Drafting", desc: "Our certified team creates your floor plans using industry-leading CAD tools." },
      { step: "QC & Review", desc: "Multi-step quality check for code compliance, dimensions, and annotations." },
      { step: "Delivery", desc: "You receive final permit-ready plans in your preferred format." },
    ],
    deliverables: [
      "Dimensioned floor plans (all levels)",
      "Room schedules & area calculations",
      "Door & window schedules",
      "Electrical & plumbing layout (if requested)",
      "Site plan integration",
      "Title block with project info",
    ],
    tools: ["AutoCAD", "Revit", "ArchiCAD", "Bluebeam Revu"],
    faqs: [
      { q: "What do I need to provide to get started?", a: "Hand sketches, photos, existing PDFs, or field measurements are all fine. We can work from virtually any starting point." },
      { q: "How long does a typical floor plan take?", a: "Standard residential floor plans take 2–3 business days. Complex commercial plans may take 5–7 business days." },
      { q: "Are your plans ready for permit submission?", a: "Yes, all our floor plans are designed to meet local building code requirements and are permit-ready upon delivery." },
    ],
    relatedServices: ["structural-drafting", "site-plans", "construction-documents"],
  },
  "3d-rendering": {
    icon: Box,
    animation: "float",
    title: "3D Rendering",
    tagline: "Photorealistic Visualizations That Sell Your Designs",
    description: [
      "Our 3D rendering services transform architectural concepts into stunning photorealistic images that captivate clients, investors, and buyers. Using industry-leading visualization tools, we create exterior and interior renderings with precise material textures, realistic lighting, and atmospheric effects.",
      "Whether you need marketing materials for pre-sales, investor presentations, or client approvals, our renderings communicate your design vision with unmatched clarity. We specialize in both daytime and nighttime scenarios, aerial perspectives, and street-level views.",
      "Our visualization team works closely with architects and developers to ensure every rendering accurately represents the design intent while enhancing its visual appeal for maximum impact.",
    ],
    benefits: [
      "Photorealistic quality that wins client approval",
      "Day, night, and seasonal lighting variations",
      "Aerial, street-level, and interior perspectives",
      "High-resolution output for print and digital media",
      "Material and finish accuracy for design decisions",
      "Quick turnaround for marketing deadlines",
    ],
    process: [
      { step: "Provide Design Files", desc: "Share your CAD/Revit models, sketches, or reference images with material preferences." },
      { step: "3D Modeling", desc: "We build a detailed 3D model capturing your design's geometry and proportions." },
      { step: "Materials & Lighting", desc: "Realistic materials, landscaping, and lighting are applied based on your specifications." },
      { step: "Draft Render", desc: "You receive a draft render for review and feedback on angles, materials, and mood." },
      { step: "Final Delivery", desc: "High-resolution final renders delivered in your preferred format and resolution." },
    ],
    deliverables: [
      "High-resolution exterior renderings",
      "Interior visualization images",
      "Aerial/bird's-eye perspectives",
      "Multiple lighting scenarios (day/night)",
      "Material board visualization",
      "Print-ready and web-optimized files",
    ],
    tools: ["SketchUp Pro", "V-Ray", "Lumion", "3ds Max", "Enscape", "Photoshop"],
    faqs: [
      { q: "What resolution are the final renderings?", a: "We deliver renders at 4K resolution (3840×2160) as standard. Higher resolutions for print are available on request." },
      { q: "Can you render from my SketchUp/Revit model?", a: "Absolutely. We can work directly from your existing 3D models in any major format." },
      { q: "How many revision rounds are included?", a: "Each project includes 2 rounds of revisions. Additional rounds are available at a modest fee." },
    ],
    relatedServices: ["interior-visualization", "virtual-landscaping", "bim-modeling"],
  },
  "plan-stamping": {
    icon: FileCheck,
    animation: "pulse",
    title: "Plan Stamping",
    tagline: "Certified Plan Stamping by Licensed Professionals — All 50 States",
    description: [
      "Our plan stamping service provides certified review and professional stamps from licensed architects (RA) and engineers (PE) across all 50 US states. Whether you need architectural, structural, mechanical, or electrical stamps, we have the licensed professionals to cover your project.",
      "Every plan undergoes a thorough review for building code compliance, structural adequacy, and life safety before receiving a professional stamp. This ensures your plans are fully compliant with local, state, and national building codes.",
      "We understand the urgency of permit submissions. Our streamlined process delivers stamped plans within 3–5 business days for most projects, with expedited options available for time-sensitive submissions.",
    ],
    benefits: [
      "Licensed RA/PE stamps in all 50 states",
      "Thorough code compliance review included",
      "3–5 business day standard turnaround",
      "Expedited service available for urgent projects",
      "Digital and wet stamps available",
      "Liability coverage through professional insurance",
    ],
    process: [
      { step: "Submit Plans", desc: "Upload your completed plans in PDF or CAD format for review." },
      { step: "Code Review", desc: "Our licensed professionals review plans for code compliance and structural adequacy." },
      { step: "Feedback", desc: "If revisions are needed, we provide detailed markup with specific code references." },
      { step: "Stamping", desc: "Upon compliance, plans receive the professional stamp and signature." },
      { step: "Delivery", desc: "Stamped plans delivered digitally and/or in print as required for submission." },
    ],
    deliverables: [
      "Professionally stamped plan sets",
      "Code compliance review report",
      "Licensed professional signature & seal",
      "State-specific compliance documentation",
      "Digital and printed copies",
      "Letter of certification (if required)",
    ],
    tools: ["AutoCAD", "Revit", "Bluebeam Revu", "PlanGrid"],
    faqs: [
      { q: "Do you have licenses in my state?", a: "We have licensed architects and engineers covering all 50 US states. Contact us with your project location for confirmation." },
      { q: "What types of stamps do you offer?", a: "We provide architectural (RA), structural (PE), mechanical, electrical, and plumbing stamps depending on your project requirements." },
      { q: "How fast can I get plans stamped?", a: "Standard turnaround is 3–5 business days. Expedited service (24–48 hours) is available for rush projects." },
    ],
    relatedServices: ["construction-documents", "permit-expediting", "code-compliance-review"],
  },
  "structural-drafting": {
    icon: Building2,
    animation: "bounce",
    title: "Structural Drafting",
    tagline: "Detailed Structural Drawings Engineered for Safety",
    description: [
      "Our structural drafting services produce detailed engineering drawings covering foundations, framing, steel connections, and load-bearing systems. We ensure every structural element is accurately documented for safe, code-compliant construction.",
      "Working alongside structural engineers, we translate complex calculations into clear, buildable drawings that contractors can follow with confidence. Our drawings include all necessary details, sections, and schedules required for construction and permit approval.",
    ],
    benefits: [
      "Foundation plans, framing plans, and structural details",
      "Steel connection details and schedules",
      "Coordination with architectural and MEP drawings",
      "Compliance with IBC and local structural codes",
      "Clear, contractor-friendly documentation",
      "PE review and stamping available",
    ],
    process: [
      { step: "Engineering Input", desc: "Receive structural calculations and design requirements from your engineer." },
      { step: "Drafting", desc: "Create detailed structural plans, sections, and connection details." },
      { step: "Coordination", desc: "Cross-reference with architectural and MEP plans for consistency." },
      { step: "Review", desc: "Quality assurance check against engineering calculations and building codes." },
      { step: "Delivery", desc: "Final structural drawing set ready for permit submission and construction." },
    ],
    deliverables: ["Foundation plans", "Framing plans (floor, roof, wall)", "Steel connection details", "Beam/column schedules", "Section details", "Structural notes and specifications"],
    tools: ["AutoCAD", "Revit Structure", "ETABS", "RAM Structural"],
    faqs: [
      { q: "Do you provide structural engineering calculations?", a: "We focus on drafting from engineer-provided calculations. We can connect you with structural engineers if needed." },
      { q: "Can you coordinate with my architect?", a: "Absolutely. We regularly coordinate with architects, engineers, and other consultants on multi-discipline projects." },
    ],
    relatedServices: ["2d-floor-plans", "construction-documents", "bim-modeling"],
  },
  "mep-drafting": {
    icon: Layers,
    animation: "morph",
    title: "MEP Drafting",
    tagline: "Coordinated Mechanical, Electrical & Plumbing Plans",
    description: [
      "Our MEP drafting services produce fully coordinated mechanical, electrical, and plumbing drawings that integrate seamlessly with architectural and structural plans. We ensure all systems are properly sized, routed, and documented for efficient construction.",
      "Using BIM and CAD tools, we perform clash detection and cross-discipline coordination to eliminate field conflicts before construction begins, saving significant time and money.",
    ],
    benefits: [
      "Fully coordinated MEP drawing sets",
      "Clash detection and resolution",
      "Equipment schedules and specifications",
      "Energy code compliance",
      "Load calculations and sizing",
      "Integration with architectural/structural plans",
    ],
    process: [
      { step: "Requirements", desc: "Receive MEP design criteria, equipment selections, and engineering calculations." },
      { step: "Layout", desc: "Develop MEP layouts coordinated with architectural backgrounds." },
      { step: "Coordination", desc: "Run clash detection and resolve conflicts across all disciplines." },
      { step: "Documentation", desc: "Complete schedules, details, and specifications." },
      { step: "Delivery", desc: "Final coordinated MEP drawing set for permit and construction." },
    ],
    deliverables: ["HVAC plans and details", "Electrical plans and panel schedules", "Plumbing plans and riser diagrams", "Fire protection plans", "Equipment schedules", "Energy compliance documentation"],
    tools: ["Revit MEP", "AutoCAD MEP", "Navisworks", "Trane TRACE"],
    faqs: [
      { q: "Do you handle all three disciplines (M, E, P)?", a: "Yes, we provide comprehensive services for mechanical, electrical, and plumbing, as well as fire protection." },
    ],
    relatedServices: ["structural-drafting", "bim-modeling", "construction-documents"],
  },
  "site-plans": {
    icon: Ruler,
    animation: "swing",
    title: "Site Plans",
    tagline: "Precise Site Layouts for Zoning & Development Approvals",
    description: [
      "Our site plan services deliver accurate, dimensioned drawings showing property boundaries, building footprints, setbacks, parking layouts, utilities, and grading — all essential for zoning and development permit approvals.",
      "We work with survey data, GIS information, and local zoning requirements to create plans that satisfy planning commission and building department requirements.",
    ],
    benefits: [
      "Accurate property boundary depiction",
      "Setback and zoning compliance",
      "Parking and circulation layouts",
      "Utility connections and easements",
      "Grading and drainage plans",
      "Landscape plan integration",
    ],
    process: [
      { step: "Survey Data", desc: "Provide property survey, topographic data, and zoning requirements." },
      { step: "Layout", desc: "Develop site plan showing building placement, parking, and utilities." },
      { step: "Compliance", desc: "Verify against zoning ordinances and development standards." },
      { step: "Details", desc: "Add grading, drainage, and utility connection details." },
      { step: "Delivery", desc: "Final site plan ready for planning commission review." },
    ],
    deliverables: ["Dimensioned site plan", "Setback diagrams", "Parking & circulation plan", "Utility plan", "Grading plan", "Landscape plan"],
    tools: ["AutoCAD", "Civil 3D", "Google Earth Pro"],
    faqs: [
      { q: "Do I need a survey before you can start?", a: "A property survey is ideal but not always required. We can work with available GIS data and plat maps for preliminary site plans." },
    ],
    relatedServices: ["2d-floor-plans", "construction-documents", "permit-expediting"],
  },
  "bim-modeling": {
    icon: Cube,
    animation: "rotate",
    title: "BIM Modeling",
    tagline: "Building Information Modeling for Smarter Construction",
    description: [
      "Our BIM modeling services create data-rich 3D models that serve as the single source of truth for your project. From conceptual design through construction and facilities management, our BIM models facilitate better collaboration, reduce errors, and improve project outcomes.",
      "We provide models at various LOD levels (100–500) depending on project phase and requirements, with automated clash detection and quantity takeoffs.",
    ],
    benefits: [
      "Multi-discipline 3D coordination",
      "Automated clash detection",
      "Quantity takeoffs and cost estimation",
      "LOD 100–500 modeling capabilities",
      "4D scheduling integration",
      "Facilities management data handoff",
    ],
    process: [
      { step: "Scope", desc: "Define BIM requirements, LOD level, and project standards." },
      { step: "Modeling", desc: "Build multi-discipline 3D model with data attributes." },
      { step: "Coordination", desc: "Run clash detection and resolve conflicts across all trades." },
      { step: "Documentation", desc: "Generate drawings, schedules, and quantities from the model." },
      { step: "Handoff", desc: "Deliver model with data for construction and FM use." },
    ],
    deliverables: ["Revit 3D model (all disciplines)", "Clash detection reports", "Drawing extraction", "Quantity takeoff schedules", "BIM execution plan", "IFC/COBie data export"],
    tools: ["Revit", "Navisworks", "BIM 360", "Dynamo", "Solibri"],
    faqs: [
      { q: "What LOD levels do you provide?", a: "We provide models from LOD 100 (conceptual) through LOD 500 (as-built), depending on your project needs." },
    ],
    relatedServices: ["structural-drafting", "mep-drafting", "construction-documents"],
  },
  "interior-visualization": {
    icon: Palette,
    animation: "wave",
    title: "Interior Visualization",
    tagline: "Stunning Interior Renders That Bring Spaces to Life",
    description: [
      "Our interior visualization services create photorealistic 3D renderings of interior spaces, showcasing material selections, lighting design, furniture layouts, and spatial arrangements with stunning accuracy.",
      "Perfect for client presentations, design approvals, and marketing materials, our interior renders help stakeholders experience and evaluate design options before any construction begins.",
    ],
    benefits: [
      "Photorealistic material representation",
      "Multiple design option comparisons",
      "Accurate lighting simulations",
      "Furniture and fixture visualization",
      "Color scheme and finish evaluation",
      "Marketing-ready output quality",
    ],
    process: [
      { step: "Design Input", desc: "Provide floor plans, design concepts, material selections, and inspiration images." },
      { step: "3D Modeling", desc: "Build detailed interior model with furnishings and fixtures." },
      { step: "Materials & Lighting", desc: "Apply materials, textures, and lighting design." },
      { step: "Review", desc: "Draft renders for your feedback on angles, materials, and atmosphere." },
      { step: "Final Render", desc: "Deliver high-resolution images optimized for your use case." },
    ],
    deliverables: ["Room-by-room interior renders", "Material visualization boards", "Multiple design option renders", "Day/evening lighting variations", "360° panoramic views", "Print and digital formats"],
    tools: ["SketchUp", "V-Ray", "Enscape", "3ds Max", "Photoshop"],
    faqs: [
      { q: "Can you furnish the rooms in the renderings?", a: "Yes, we include furniture, fixtures, artwork, and accessories from manufacturer catalogs or custom selections." },
    ],
    relatedServices: ["3d-rendering", "virtual-landscaping", "2d-floor-plans"],
  },
  "construction-documents": {
    icon: FileText,
    animation: "glow",
    title: "Construction Documents",
    tagline: "Complete CD Sets for Permitting, Bidding & Construction",
    description: [
      "Our construction document services deliver complete, coordinated drawing sets that serve as the definitive guide for permitting, contractor bidding, and on-site construction. Every CD set includes all architectural, structural, and MEP drawings with proper cross-referencing and coordination.",
      "We ensure all documents comply with applicable building codes and standards, include proper general notes and specifications, and are organized for efficient plan review by building departments.",
    ],
    benefits: [
      "Complete multi-discipline CD sets",
      "Code-compliant and permit-ready",
      "Proper cross-referencing and coordination",
      "General notes and specifications included",
      "Organized for efficient plan review",
      "Both digital and print deliverables",
    ],
    process: [
      { step: "Design Development", desc: "Review design documents and finalize scope of construction documents." },
      { step: "Drafting", desc: "Develop full drawing set across all required disciplines." },
      { step: "Coordination", desc: "Cross-discipline coordination check for conflicts and consistency." },
      { step: "Code Review", desc: "Compliance review against applicable building codes." },
      { step: "Delivery", desc: "Final CD set with all schedules, details, and specifications." },
    ],
    deliverables: ["Architectural plans and details", "Structural plans", "MEP plans", "Schedules (door, window, finish, equipment)", "General notes and code analysis", "Cover sheet and drawing index"],
    tools: ["AutoCAD", "Revit", "Bluebeam Revu", "PlanGrid"],
    faqs: [
      { q: "What's included in a typical CD set?", a: "A full set includes site plan, floor plans, elevations, sections, details, schedules, general notes, and discipline-specific drawings." },
    ],
    relatedServices: ["2d-floor-plans", "structural-drafting", "plan-stamping"],
  },
  "virtual-landscaping": {
    icon: TreePine,
    animation: "float",
    title: "Virtual Landscaping",
    tagline: "Realistic Landscape Renderings with Vegetation & Hardscaping",
    description: [
      "Our virtual landscaping services create realistic outdoor visualizations featuring vegetation, hardscaping, water features, outdoor lighting, and seasonal variations. These renderings help clients envision the complete exterior experience of their property.",
    ],
    benefits: [
      "Realistic plant and tree species rendering",
      "Hardscape material visualization",
      "Seasonal and time-of-day variations",
      "Water feature and pool design",
      "Outdoor lighting simulations",
      "Integration with architectural renders",
    ],
    process: [
      { step: "Landscape Plan", desc: "Provide planting plan, hardscape layout, and material preferences." },
      { step: "3D Scene", desc: "Build outdoor environment with terrain, vegetation, and hardscape." },
      { step: "Detail", desc: "Add lighting, water features, and outdoor furnishings." },
      { step: "Review", desc: "Draft renders for feedback on plant selections and overall feel." },
      { step: "Final", desc: "High-resolution renders with seasonal or lighting variations." },
    ],
    deliverables: ["Landscape 3D renderings", "Plant palette visualization", "Hardscape material renders", "Lighting design visualization", "Bird's-eye landscape views", "Before/after comparisons"],
    tools: ["Lumion", "SketchUp", "V-Ray", "Photoshop"],
    faqs: [
      { q: "Can you render specific plant species?", a: "Yes, we have an extensive library of realistic plant models and can source specific species upon request." },
    ],
    relatedServices: ["3d-rendering", "site-plans", "interior-visualization"],
  },
  "material-estimation": {
    icon: Calculator,
    animation: "shake",
    title: "Material Estimation",
    tagline: "Accurate Quantity Takeoffs to Budget Effectively",
    description: [
      "Our material estimation services provide detailed quantity takeoffs and cost projections to help you budget accurately, reduce waste, and optimize procurement. We extract quantities from your plans and specifications using digital takeoff tools for maximum accuracy.",
    ],
    benefits: [
      "Detailed quantity takeoffs by trade",
      "Material cost projections",
      "Waste factor calculations",
      "Bid package preparation",
      "Value engineering recommendations",
      "Format compatible with estimating software",
    ],
    process: [
      { step: "Plans Review", desc: "Analyze construction documents and specifications." },
      { step: "Takeoff", desc: "Digital quantity takeoff for all trades and materials." },
      { step: "Pricing", desc: "Apply current material pricing and labor rates." },
      { step: "Report", desc: "Compile detailed estimate with breakdowns by trade and phase." },
      { step: "Delivery", desc: "Estimate report in spreadsheet and PDF format." },
    ],
    deliverables: ["Quantity takeoff spreadsheet", "Material cost estimate", "Trade-by-trade breakdowns", "Waste and contingency calculations", "Bid comparison worksheets", "Executive summary report"],
    tools: ["Bluebeam Revu", "PlanSwift", "RSMeans", "Excel"],
    faqs: [
      { q: "How accurate are your estimates?", a: "Our estimates typically fall within 3–5% of actual construction costs when based on complete construction documents." },
    ],
    relatedServices: ["construction-documents", "bim-modeling", "permit-expediting"],
  },
  "permit-expediting": {
    icon: Zap,
    animation: "spin-pulse",
    title: "Permit Expediting",
    tagline: "Fast-Track Your Building Permits with Compliance-First Approach",
    description: [
      "Our permit expediting services streamline the permit approval process by ensuring your plans are fully compliant before submission and managing the review process with building departments. We have established relationships with jurisdictions across the country to help fast-track your approvals.",
    ],
    benefits: [
      "Pre-submission compliance review",
      "Building department liaison service",
      "Response to plan review comments",
      "Multi-jurisdiction coordination",
      "Status tracking and updates",
      "Reduced approval timelines",
    ],
    process: [
      { step: "Compliance Check", desc: "Review plans against local codes before submission." },
      { step: "Submission", desc: "Prepare and submit permit application with all required documents." },
      { step: "Tracking", desc: "Monitor review status and respond to examiner comments." },
      { step: "Revisions", desc: "Address plan review comments and resubmit as needed." },
      { step: "Approval", desc: "Secure permit approval and deliver stamped, approved plans." },
    ],
    deliverables: ["Pre-submission review report", "Permit application preparation", "Code compliance documentation", "Plan review response letters", "Approved permit documentation", "Status tracking reports"],
    tools: ["Bluebeam Revu", "ePlans", "PlanGrid"],
    faqs: [
      { q: "How much faster can you get permits approved?", a: "On average, our clients see 30–50% faster approval times compared to self-submission, thanks to our pre-review and established relationships." },
    ],
    relatedServices: ["plan-stamping", "construction-documents", "code-compliance-review"],
  },
};

const slugToKey = (slug: string) => slug || "";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = serviceData[slugToKey(slug || "")];

  if (!service) {
    return (
      <main className="pt-32 pb-20 container mx-auto px-4 text-center">
        <h1 className="text-3xl font-heading font-bold mb-4">Service Not Found</h1>
        <p className="text-muted-foreground mb-8">The requested service page doesn't exist.</p>
        <Link to="/services">
          <Button variant="hero">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Button>
        </Link>
      </main>
    );
  }

  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 blueprint-grid relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-start gap-4 mb-6">
            <Link
              to="/services"
              className="text-xs font-heading uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 mt-1"
            >
              <ArrowLeft className="w-3 h-3" />
              All Services
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <AnimatedIcon icon={service.icon} variant={service.animation} size={40} />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-heading font-bold mb-4 max-w-3xl"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            {service.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <a href="tel:+19177281625">
              <Button variant="hero-outline" size="xl">
                <Phone className="w-4 h-4" />
                Call (917) 728-1625
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-heading uppercase tracking-[0.2em] text-muted-foreground mb-6"
            >
              Overview
            </motion.h2>
            {service.description.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-muted-foreground leading-relaxed mb-4"
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl lg:text-3xl font-heading font-bold mb-10"
          >
            Key Benefits
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 bg-background border border-border rounded-lg p-5"
              >
                <CheckCircle2 className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground leading-relaxed">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl lg:text-3xl font-heading font-bold mb-10"
          >
            Our Process
          </motion.h2>
          <div className="space-y-4">
            {service.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-6 bg-card border border-border rounded-lg p-6"
              >
                <span className="text-2xl font-heading font-bold text-muted-foreground/30 flex-shrink-0 w-10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-sm font-heading font-semibold mb-1">{step.step}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables & Tools */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-2xl font-heading font-bold mb-6"
              >
                Deliverables
              </motion.h2>
              <ul className="space-y-3">
                {service.deliverables.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-2xl font-heading font-bold mb-6"
              >
                Tools & Software
              </motion.h2>
              <div className="flex flex-wrap gap-3">
                {service.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-heading uppercase tracking-[0.12em] border border-border rounded-full px-4 py-2 text-muted-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {service.faqs.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-heading font-bold mb-10"
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="space-y-6">
              {service.faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border border-border rounded-lg p-6 bg-card"
                >
                  <h3 className="text-sm font-heading font-semibold mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-heading font-bold mb-8"
          >
            Related Services
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {service.relatedServices.map((relSlug) => {
              const rel = serviceData[relSlug];
              if (!rel) return null;
              return (
                <Link
                  key={relSlug}
                  to={`/services/${relSlug}`}
                  className="group bg-background border border-border rounded-lg p-6 card-hover"
                >
                  <AnimatedIcon icon={rel.icon} variant={rel.animation} size={24} />
                  <h3 className="text-sm font-heading font-semibold mt-4 mb-2 group-hover:text-foreground transition-colors">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">Learn more →</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default ServiceDetail;
