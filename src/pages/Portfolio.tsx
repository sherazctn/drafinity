import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Eye, X, ExternalLink } from "lucide-react";
import CTASection from "@/components/CTASection";
import PageHeroAnimation from "@/components/PageHeroAnimation";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import luxury1 from "@/assets/luxury-1.jpg";
import luxury2 from "@/assets/luxury-2.jpg";
import luxury3 from "@/assets/luxury-3.jpg";
import luxury4 from "@/assets/luxury-4.jpg";
import luxury5 from "@/assets/luxury-5.jpg";
import luxury6 from "@/assets/luxury-6.jpg";
import luxury7 from "@/assets/luxury-7.jpg";
import reno1 from "@/assets/reno-1.jpg";
import reno2 from "@/assets/reno-2.jpg";
import reno3 from "@/assets/reno-3.jpg";
import reno4 from "@/assets/reno-4.jpg";
import reno5 from "@/assets/reno-5.jpg";
import reno6 from "@/assets/reno-6.jpg";
import reno7 from "@/assets/reno-7.jpg";
import reno8 from "@/assets/reno-8.jpg";
import reno9 from "@/assets/reno-9.jpg";
import reno10 from "@/assets/reno-10.jpg";
import render3d1 from "@/assets/render-3d-1.jpg";
import render3d2 from "@/assets/render-3d-2.jpg";
import render3d3 from "@/assets/render-3d-3.jpg";
import render3d4 from "@/assets/render-3d-4.jpg";
import render3d5 from "@/assets/render-3d-5.jpg";
import render3d6 from "@/assets/render-3d-6.jpg";
import render3d7 from "@/assets/render-3d-7.jpg";
import render3d8 from "@/assets/render-3d-8.jpg";
import render3d9 from "@/assets/render-3d-9.jpg";
import render3d10 from "@/assets/render-3d-10.jpg";
import render3d11 from "@/assets/render-3d-11.jpg";
import render3d12 from "@/assets/render-3d-12.jpg";
import render3d13 from "@/assets/render-3d-13.jpg";
import render3d14 from "@/assets/render-3d-14.jpg";
import render3d15 from "@/assets/render-3d-15.jpg";

const categories = ["All", "Luxury Rendering", "3D Renovation Projects", "3D Rendering", "Interior Visualization", "Construction Documents", "2D Floor Plans", "BIM Modeling", "Plan Stamping"];

const projects = [
  // Luxury Rendering projects
  { image: luxury1, title: "Palm Vista Modern Residence", category: "Luxury Rendering", solution: "Photorealistic exterior rendering with tropical landscaping, wet driveway reflections, and luxury vehicle staging for marketing collateral.", tools: "3ds Max, V-Ray, Photoshop, Lumion", result: "Pre-sold 8 units before construction.", pdfUrl: "https://drive.google.com/file/d/1c45qCiQiNJGTIlZ7neLbU541EvDozEaH/view?usp=drive_link" },
  { image: luxury2, title: "Skyline Mixed-Use Complex", category: "Luxury Rendering", solution: "Aerial bird's-eye 3D rendering of a multi-building mixed-use development with rooftop gardens and urban context modeling.", tools: "SketchUp Pro, V-Ray, Lumion, AutoCAD", result: "Secured $12M development funding.", pdfUrl: "https://drive.google.com/file/d/1_7j_Oc4nU4jNzty8I6pIixbVkubqF8qI/view?usp=drive_link" },
  { image: luxury3, title: "Greenfield Contemporary Villa", category: "Luxury Rendering", solution: "Full exterior visualization with natural stone finishes, wooden pergola details, and lush front yard landscape design.", tools: "3ds Max, Corona Renderer, Photoshop", result: "Featured in Architectural Digest.", pdfUrl: "https://drive.google.com/file/d/1H85SWGpI8JgKWz4Ne1jatHzj9y2x0veW/view?usp=drive_link" },
  { image: luxury4, title: "Emerald Terrace Townhouse", category: "Luxury Rendering", solution: "Three-story modern facade rendering with vertical garden walls, glass balustrades, and evening ambient lighting.", tools: "Revit, V-Ray, Enscape, Photoshop", result: "Won Best Residential Design 2023.", pdfUrl: "https://drive.google.com/file/d/1DbjtKdM0eGg-zOX2Y_JuHqTqfWOd58yY/view?usp=drive_link" },
  { image: luxury5, title: "Grand Luxe Shopping Mall", category: "Luxury Rendering", solution: "Large-scale commercial exterior rendering with glass curtain wall systems, digital signage integration, and nighttime atmospheric effects.", tools: "3ds Max, V-Ray, After Effects, Photoshop", result: "Attracted 3 anchor tenants pre-lease.", pdfUrl: "https://drive.google.com/file/d/1vuHzDVlo1ZX_v3mUGMc2LQZvI-UT877Y/view?usp=drive_link" },
  { image: luxury6, title: "Marina Bay Waterfront Township", category: "Luxury Rendering", solution: "Master plan aerial rendering of a waterfront community with marina, resort amenities, road networks, and green corridors.", tools: "SketchUp, Lumion, AutoCAD, Photoshop", result: "Government approval in 45 days.", pdfUrl: "https://drive.google.com/file/d/1pFToPvBrHNzlyM0t4MPrcKmKiqasPpo1/view?usp=drive_link" },
  { image: luxury7, title: "Oasis Resort & Pool Club", category: "Luxury Rendering", solution: "Resort-style aerial rendering with freeform pools, cabana structures, tropical landscaping, and pedestrian circulation paths.", tools: "3ds Max, V-Ray, Lumion, Photoshop", result: "Phase 1 sold out in 3 weeks.", pdfUrl: "https://drive.google.com/file/d/1NGDg6jca3f0HDuyC0ikfGOBZX-vczqIk/view?usp=drive_link" },

  // 3D Renovation Projects
  { image: reno1, title: "Navy Siding Colonial Revival", category: "3D Renovation Projects", solution: "Complete exterior 3D renovation rendering of a colonial-style home with navy clapboard siding, stone accent pillars, and dormer window upgrades.", tools: "SketchUp Pro, V-Ray, Photoshop", result: "Homeowner approved renovation in 3 days.", pdfUrl: "https://drive.google.com/file/d/1c45qCiQiNJGTIlZ7neLbU541EvDozEaH/view?usp=drive_link" },
  { image: reno2, title: "211 West Street Urban Apartments", category: "3D Renovation Projects", solution: "Street-level 3D rendering of a four-story urban apartment building with modern balconies, clean white stucco facade, and neighborhood context integration.", tools: "SketchUp, V-Ray, Lumion, AutoCAD", result: "Zoning board approval on first hearing.", pdfUrl: "https://drive.google.com/file/d/1_7j_Oc4nU4jNzty8I6pIixbVkubqF8qI/view?usp=drive_link" },
  { image: reno3, title: "Modern Kitchen & Dining Renovation", category: "3D Renovation Projects", solution: "Interior visualization of an open-plan kitchen and dining renovation with custom cabinetry, granite island countertop, and contemporary furniture selections.", tools: "3ds Max, V-Ray, Photoshop", result: "Client signed off with zero revisions.", pdfUrl: "https://drive.google.com/file/d/1H85SWGpI8JgKWz4Ne1jatHzj9y2x0veW/view?usp=drive_link" },
  { image: reno4, title: "Heritage Home Front Elevation", category: "3D Renovation Projects", solution: "Front elevation 3D rendering of a heritage-style home renovation with bay windows, dormer details, and symmetrical facade composition.", tools: "SketchUp Pro, V-Ray, Enscape", result: "Historic preservation board approved.", pdfUrl: "https://drive.google.com/file/d/1DbjtKdM0eGg-zOX2Y_JuHqTqfWOd58yY/view?usp=drive_link" },
  { image: reno5, title: "Country Estate Concept Model", category: "3D Renovation Projects", solution: "Conceptual 3D massing model of a country estate renovation with multi-gable roof design, covered porch, and full-glass feature wall.", tools: "SketchUp, AutoCAD, Revit", result: "Secured planning permission in 30 days.", pdfUrl: "https://drive.google.com/file/d/1vuHzDVlo1ZX_v3mUGMc2LQZvI-UT877Y/view?usp=drive_link" },
  { image: reno6, title: "Open-Plan Living & Kitchen Redesign", category: "3D Renovation Projects", solution: "Interior 3D visualization of an open-plan living space renovation with floor-to-ceiling windows, granite breakfast bar, and designer lounge furniture.", tools: "3ds Max, Corona Renderer, Photoshop", result: "Featured in Home Design Magazine.", pdfUrl: "https://drive.google.com/file/d/1pFToPvBrHNzlyM0t4MPrcKmKiqasPpo1/view?usp=drive_link" },
  { image: reno7, title: "Lofts of Delray Mixed-Use Renovation", category: "3D Renovation Projects", solution: "Photorealistic street-view rendering of a brick mixed-use renovation with barrel-vault dormers, rooftop terraces, and ground-floor retail integration.", tools: "SketchUp Pro, V-Ray, Lumion, Photoshop", result: "All 8 units pre-leased before completion.", pdfUrl: "https://drive.google.com/file/d/1NGDg6jca3f0HDuyC0ikfGOBZX-vczqIk/view?usp=drive_link" },
  { image: reno8, title: "Stonegate Manor Estate", category: "3D Renovation Projects", solution: "Luxury estate exterior rendering with natural stone facade, wrought-iron perimeter fencing, manicured landscaping, and luxury vehicle staging.", tools: "3ds Max, V-Ray, Lumion, Photoshop", result: "Property value increased by 35%.", pdfUrl: "https://drive.google.com/file/d/1derDvg6jZpoCX8a-8nv-tkkQAudReHhX/view?usp=drive_link" },
  { image: reno9, title: "Stonegate Manor Garage Wing", category: "3D Renovation Projects", solution: "Detailed exterior rendering of the garage and porte-cochère wing with matching stone cladding, arched windows, and columned entryway.", tools: "3ds Max, V-Ray, Photoshop", result: "Contractor bid accuracy improved by 40%.", pdfUrl: "https://drive.google.com/file/d/1nR6SHSjq9SyJRrFeuAKbeZNqS4i-Ep4Q/view?usp=drive_link" },
  { image: reno10, title: "Modern Farmhouse Renovation", category: "3D Renovation Projects", solution: "Contemporary farmhouse exterior rendering with board-and-batten siding, stone chimney accent, full-height glazing, and horizontal cedar privacy fencing.", tools: "SketchUp, V-Ray, Enscape, Photoshop", result: "Won Regional Design Award 2024.", pdfUrl: "https://drive.google.com/file/d/1GoqE8gm4YXfv9kwxGGaTCzhau1C7uGIl/view?usp=drive_link" },

  // 3D Rendering projects with unique uploaded images
  { image: render3d1, title: "2-Bedroom Luxury Floor Plan", category: "3D Rendering", solution: "Isometric 3D floor plan rendering with detailed furniture layouts, material textures, and spatial flow visualization for marketing materials.", tools: "3ds Max, V-Ray, Photoshop", result: "Sold 12 units in first week of marketing.", pdfUrl: "https://drive.google.com/file/d/1WiEXerGmYjJlelubERmrxH2TsQiERICU/view?usp=drive_link" },
  { image: render3d3, title: "Modern Two-Story Residence", category: "3D Rendering", solution: "Full exterior 3D rendering of a contemporary two-story home with horizontal railing, stone cladding accents, and landscaped front yard with pedestrian context.", tools: "SketchUp Pro, V-Ray, Lumion", result: "Pre-sold before foundation poured.", pdfUrl: "https://drive.google.com/file/d/1uTsltnLJvWpGeU9AteVfp2kNYxuPw8az/view?usp=drive_link" },
  { image: render3d4, title: "Compact Modern Garden Home", category: "3D Rendering", solution: "Exterior rendering of a single-story modern home with angled roofline, dark accent wall, wood soffit, and garden landscaping integration.", tools: "SketchUp, V-Ray, Enscape", result: "Featured in Modern Living magazine.", pdfUrl: "https://drive.google.com/file/d/1GeCx7SWgAGjFd1LCcQ2ciCM83aKsRW9e/view?usp=drive_link" },
  { image: render3d8, title: "Outdoor BBQ Terrace Design", category: "3D Rendering", solution: "Aerial perspective 3D rendering of an outdoor cooking and entertainment terrace with stone wall cladding, built-in grill, and wooden counter seating.", tools: "SketchUp Pro, V-Ray, Photoshop", result: "Built exactly as rendered.", pdfUrl: "https://drive.google.com/file/d/1CtK9mYtbb_sBn-aEAq6PsDv-XmfXu8Kt/view?usp=drive_link" },
  { image: portfolio1, title: "Modern Residential Complex", category: "3D Rendering", solution: "Full exterior 3D rendering package with landscaping, lighting studies, and aerial perspectives.", tools: "SketchUp Pro, V-Ray, Lumion", result: "Secured $2.5M in investor funding.", pdfUrl: "https://drive.google.com/file/d/1derDvg6jZpoCX8a-8nv-tkkQAudReHhX/view?usp=drive_link" },
  { image: render3d11, title: "Contemporary Luxury Residence", category: "3D Rendering", solution: "Photorealistic exterior rendering of a modern luxury home with stone cladding, glass balustrades, ambient evening lighting, and manicured landscape design.", tools: "3ds Max, V-Ray, Photoshop, Lumion", result: "Investor commitment secured in 48 hours.", pdfUrl: "https://drive.google.com/file/d/1eFA8XQqlBlvmF7k1jPOeAPhPdPIdQCJh/view?usp=drive_link" },
  { image: render3d12, title: "Suburban Family Home Design", category: "3D Rendering", solution: "Full exterior 3D visualization of a contemporary suburban two-story home with carport, wooden accent cladding, and landscaped front yard.", tools: "SketchUp Pro, V-Ray, Enscape", result: "Client approved design on first presentation.", pdfUrl: "https://drive.google.com/file/d/1tKb_7HtSjSoDmn3s-iBn3rIfjf85HQaZ/view?usp=drive_link" },
  { image: render3d13, title: "Tropical Infinity Pool Villa", category: "3D Rendering", solution: "Resort-style villa rendering with infinity pool, palm tree landscaping, flat roof architecture, and sunset ambiance for luxury marketing collateral.", tools: "3ds Max, Corona Renderer, Photoshop", result: "Featured in Luxury Homes International.", pdfUrl: "https://drive.google.com/file/d/1yCpXRwPqpqZXz3erxnnR5IdTbSGVZ92n/view?usp=drive_link" },
  { image: render3d14, title: "Avenue Rivi Beach Mixed-Use", category: "3D Rendering", solution: "3-story mixed-use office building rendering with retail shops, café, and conference center featuring modern glass curtain wall facade and urban street context.", tools: "Revit, V-Ray, AutoCAD, Photoshop", result: "All retail spaces pre-leased before construction.", pdfUrl: "https://drive.google.com/file/d/1Bj2qUjzP4NoxJ2jpE9opwZpDdLjCJ1P5/view?usp=drive_link" },
  { image: render3d15, title: "Urban Apartment Complex", category: "3D Rendering", solution: "Mid-rise apartment complex visualization with rooftop terrace, wood-accent facade panels, glass balconies, and integrated green elements.", tools: "SketchUp, V-Ray, Lumion, Photoshop", result: "80% units sold within first month.", pdfUrl: "https://drive.google.com/file/d/1tncVCCXfx3YBYnR29h5MbKhIm-by1Jyo/view?usp=drive_link" },

  // Interior Visualization with unique images
  { image: render3d2, title: "Contemporary Living Room Design", category: "Interior Visualization", solution: "High-end living room visualization with arched windows, ring pendant lighting, marble flooring, and curated furniture selection.", tools: "3ds Max, V-Ray, Photoshop", result: "Client approved on first draft.", pdfUrl: "https://drive.google.com/file/d/13rvXbZ1XKfDt_EAsNpajXHm5DxBqkeDD/view?usp=drive_link" },
  { image: render3d5, title: "Kids' Bedroom Moon Theme", category: "Interior Visualization", solution: "Themed children's bedroom interior rendering with custom moon wall light, wooden wardrobe with glass doors, and space-themed décor elements.", tools: "3ds Max, Corona Renderer, Photoshop", result: "Design award finalist 2024.", pdfUrl: "https://drive.google.com/file/d/17Cq6ReL7fYbQblwG6r2GFMyIvhNLxKBr/view?usp=drive_link" },
  { image: render3d6, title: "Farmhouse Living Room with Fireplace", category: "Interior Visualization", solution: "Classic farmhouse living room rendering with stone fireplace surround, exposed ceiling beams, built-in bookshelves, and traditional upholstered wingback chairs.", tools: "3ds Max, V-Ray, Photoshop", result: "Client 5-star review on Houzz.", pdfUrl: "https://drive.google.com/file/d/1H-wx28SJuojE8NNJFJHMdjBEFeAgqcd1/view?usp=drive_link" },
  { image: render3d7, title: "Scandinavian Kitchen Remodel", category: "Interior Visualization", solution: "Modern Scandinavian kitchen rendering with light wood cabinetry, patterned tile backsplash, exposed beam ceiling, and marble waterfall island.", tools: "SketchUp, V-Ray, Enscape", result: "Increased property value by 28%.", pdfUrl: "https://drive.google.com/file/d/1UQ8egE-mu2zp-sgQ0kA6t1qTMcG7GSZS/view?usp=drive_link" },
  { image: render3d9, title: "Luxury Dining Room Visualization", category: "Interior Visualization", solution: "Upscale dining room rendering with walnut table, marble accent walls, wine storage display, and designer pendant lighting fixtures.", tools: "3ds Max, V-Ray, Photoshop", result: "Secured high-end furniture contract.", pdfUrl: "https://drive.google.com/file/d/1J1FMqNzAHoa3Pgc96qrRHSwpaAGdD4xT/view?usp=drive_link" },
  { image: render3d10, title: "White Shaker Kitchen Render", category: "Interior Visualization", solution: "Clean white shaker-style kitchen rendering with brass hardware, natural stone countertops, triangle pendant lights, and hardwood flooring.", tools: "SketchUp, V-Ray, Photoshop", result: "Contractor used as build reference.", pdfUrl: "https://drive.google.com/file/d/1sV8AlVu0I3qvDcYLUb-mNNtebX94fjUk/view?usp=drive_link" },
  { image: portfolio2, title: "Corporate Office Headquarters", category: "Interior Visualization", solution: "Complete interior 3D visualization package with material selections and spatial planning.", tools: "Revit, V-Ray, Adobe Creative Suite", result: "Client approval on first revision.", pdfUrl: "https://drive.google.com/file/d/1nR6SHSjq9SyJRrFeuAKbeZNqS4i-Ep4Q/view?usp=drive_link" },

  // Construction Documents
  { image: portfolio3, title: "Mixed-Use Development", category: "Construction Documents", solution: "Complete CD set with structural, MEP, and architectural plans stamped for 3 states.", tools: "AutoCAD, Revit, Bluebeam Revu", result: "Permits approved with zero revisions.", pdfUrl: "https://drive.google.com/file/d/1GoqE8gm4YXfv9kwxGGaTCzhau1C7uGIl/view?usp=drive_link" },
  { image: reno8, title: "Industrial Warehouse Complex", category: "Construction Documents", solution: "Full CD set including structural steel details, MEP coordination, and fire protection plans.", tools: "AutoCAD, Revit, Navisworks", result: "Completed 2 weeks ahead of schedule.", pdfUrl: "https://drive.google.com/file/d/17Cq6ReL7fYbQblwG6r2GFMyIvhNLxKBr/view?usp=drive_link" },
  { image: luxury5, title: "Senior Living Facility", category: "Construction Documents", solution: "ADA-compliant CD set with accessibility details, nurse call systems, and emergency egress plans.", tools: "AutoCAD, Revit, Bluebeam Revu", result: "State licensing approved first review.", pdfUrl: "https://drive.google.com/file/d/1Bs0f_4IYZCOAuE0FI0diK3a5QmUBnPN0/view?usp=drive_link" },

  // 2D Floor Plans
  { image: reno4, title: "Luxury Villa Estate", category: "2D Floor Plans", solution: "Comprehensive 2D floor plan set with structural coordination and site plan integration.", tools: "AutoCAD, ArchiCAD", result: "Permit approved on first submission.", pdfUrl: "https://drive.google.com/file/d/1WiEXerGmYjJlelubERmrxH2TsQiERICU/view?usp=drive_link" },
  { image: reno1, title: "Multi-Family Housing Project", category: "2D Floor Plans", solution: "Modular floor plan designs optimized for efficient construction and code compliance.", tools: "AutoCAD, Revit", result: "30% reduction in drafting costs.", pdfUrl: "https://drive.google.com/file/d/1H-wx28SJuojE8NNJFJHMdjBEFeAgqcd1/view?usp=drive_link" },
  { image: luxury2, title: "Airport Terminal Expansion", category: "2D Floor Plans", solution: "Terminal expansion floor plans with passenger flow analysis, gate assignments, and retail space allocation.", tools: "AutoCAD, Revit, ArchiCAD", result: "FAA approval with zero comments.", pdfUrl: "https://drive.google.com/file/d/1JBR38Zg2WiJty6VyyNup178AsZTMX-1q/view?usp=drive_link" },

  // BIM Modeling
  { image: reno6, title: "Healthcare Facility Expansion", category: "BIM Modeling", solution: "Full BIM model with automated clash detection across all disciplines.", tools: "Revit, Navisworks, AutoCAD", result: "Saved $180K in change orders.", pdfUrl: "https://drive.google.com/file/d/1uTsltnLJvWpGeU9AteVfp2kNYxuPw8az/view?usp=drive_link" },
  { image: reno5, title: "University Science Building", category: "BIM Modeling", solution: "LOD 400 BIM model with MEP coordination, equipment clearances, and lab gas routing.", tools: "Revit, Navisworks, Dynamo", result: "Reduced RFIs by 75%.", pdfUrl: "https://drive.google.com/file/d/1UQ8egE-mu2zp-sgQ0kA6t1qTMcG7GSZS/view?usp=drive_link" },
  { image: luxury1, title: "Tech Campus Masterplan", category: "BIM Modeling", solution: "Full campus BIM model with 6 buildings, underground parking, and utility infrastructure coordination.", tools: "Revit, Navisworks, Civil 3D", result: "Zero clashes during construction.", pdfUrl: "https://drive.google.com/file/d/1kcSURXNqNtofvXS_Nre4pkXgemxPwMao/view?usp=drive_link" },

  // Plan Stamping
  { image: reno7, title: "Urban Retail Center", category: "Plan Stamping", solution: "Multi-state plan stamping service with local code compliance review.", tools: "AutoCAD, Bluebeam Revu", result: "All 15 locations permitted in 60 days.", pdfUrl: "https://drive.google.com/file/d/1GeCx7SWgAGjFd1LCcQ2ciCM83aKsRW9e/view?usp=drive_link" },
  { image: reno9, title: "Restaurant Chain Expansion", category: "Plan Stamping", solution: "Standardized plan set with state-specific amendments and licensed PE/RA stamps.", tools: "AutoCAD, Bluebeam Revu", result: "12 business days avg. permit approval.", pdfUrl: "https://drive.google.com/file/d/1J1FMqNzAHoa3Pgc96qrRHSwpaAGdD4xT/view?usp=drive_link" },
  { image: luxury4, title: "National Bank Headquarters", category: "Plan Stamping", solution: "Multi-jurisdictional plan stamping with vault specifications, security systems, and blast-resistant design.", tools: "AutoCAD, Revit, Bluebeam Revu", result: "8 branches permitted simultaneously.", pdfUrl: "https://drive.google.com/file/d/1N7qPCelI_O_MibjN7kZ1ktER_tJNZFGG/view?usp=drive_link" },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <main>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid" />
        <PageHeroAnimation page="portfolio" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-heading uppercase tracking-[0.2em] text-muted-foreground mb-4 block">Our Work</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl lg:text-6xl font-heading font-bold mb-6 max-w-3xl">
            Portfolio &<br /><span className="text-gradient-highlight">Case Studies</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Explore our completed projects showcasing our expertise across residential, commercial, and industrial sectors.
          </motion.p>
        </div>
      </section>

      <section className="border-y border-border bg-card sticky top-16 lg:top-20 z-30 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <motion.button key={cat} onClick={() => setActiveFilter(cat)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`text-xs font-heading uppercase tracking-[0.12em] px-4 py-2 rounded-full border transition-all duration-300 ${activeFilter === cat ? "bg-foreground text-primary-foreground border-foreground" : "bg-transparent text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground"}`}>
                {cat}
                {cat !== "All" && <span className="ml-1.5 text-[10px] opacity-60">({projects.filter((p) => p.category === cat).length})</span>}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div key={activeFilter} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((project, i) => (
                <motion.div key={project.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.5 }} onMouseEnter={() => setHoveredIndex(i)} onMouseLeave={() => setHoveredIndex(null)} className="group bg-card border border-border rounded-xl overflow-hidden card-hover cursor-pointer" onClick={() => setSelectedProject(project)}>
                  <div className="relative h-56 overflow-hidden">
                    <motion.img src={project.image} alt={project.title} className="w-full h-full object-cover" animate={{ scale: hoveredIndex === i ? 1.08 : 1 }} transition={{ duration: 0.6 }} loading="lazy" />
                    <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/30 transition-colors duration-500" />
                    <span className="absolute top-4 left-4 text-[10px] font-heading uppercase tracking-[0.2em] bg-card/90 backdrop-blur-sm border border-border rounded-full px-3 py-1">{project.category}</span>
                    <motion.div className="absolute inset-0 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: hoveredIndex === i ? 1 : 0 }} transition={{ duration: 0.3 }}>
                      <div className="w-12 h-12 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center">
                        <Eye className="w-5 h-5 text-foreground" />
                      </div>
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-heading font-bold mb-3 flex items-center gap-2 group-hover:text-foreground transition-colors">
                      {project.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <div className="space-y-2.5 text-sm">
                      <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">{project.solution}</p>
                      <div className="flex items-center gap-2 pt-2 border-t border-border">
                        <span className="text-[10px] font-heading uppercase tracking-wider text-muted-foreground">Tools:</span>
                        <span className="text-xs text-foreground">{project.tools}</span>
                      </div>
                      <div className="bg-muted/50 rounded-md p-3">
                        <span className="text-[10px] font-heading uppercase tracking-wider text-muted-foreground">Result</span>
                        <p className="text-sm text-foreground font-medium mt-0.5">{project.result}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          {filtered.length === 0 && (
            <div className="text-center py-20"><p className="text-muted-foreground">No projects found for this category.</p></div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 backdrop-blur-sm p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-card border border-border rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 sm:h-80 object-cover rounded-t-2xl" />
                <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center border border-border hover:bg-card transition-colors">
                  <X className="w-5 h-5 text-foreground" />
                </button>
                <span className="absolute bottom-4 left-4 text-[10px] font-heading uppercase tracking-[0.2em] bg-card/90 backdrop-blur-sm border border-border rounded-full px-4 py-1.5">{selectedProject.category}</span>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-heading font-bold mb-4">{selectedProject.title}</h2>
                <div className="space-y-5">
                  <div>
                    <h4 className="text-xs font-heading uppercase tracking-wider text-muted-foreground mb-1.5">Solution</h4>
                    <p className="text-sm text-foreground leading-relaxed">{selectedProject.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-heading uppercase tracking-wider text-muted-foreground mb-1.5">Tools Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.split(", ").map((tool) => (
                        <span key={tool} className="text-xs bg-muted rounded-full px-3 py-1 text-foreground">{tool}</span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-5 border border-border">
                    <h4 className="text-xs font-heading uppercase tracking-wider text-muted-foreground mb-1.5">Result</h4>
                    <p className="text-lg font-heading font-bold text-foreground">{selectedProject.result}</p>
                  </div>
                  {selectedProject.pdfUrl && (
                    <a
                      href={selectedProject.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-foreground text-background font-heading text-sm uppercase tracking-widest px-6 py-3 rounded-lg hover:opacity-90 transition-opacity mt-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Full Project
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection />
    </main>
  );
};

export default Portfolio;
