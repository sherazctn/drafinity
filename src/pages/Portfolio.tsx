import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import CTASection from "@/components/CTASection";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const categories = [
  "All",
  "3D Rendering",
  "Interior Visualization",
  "Construction Documents",
  "2D Floor Plans",
  "BIM Modeling",
  "Plan Stamping",
];

const projects = [
  {
    image: portfolio1,
    title: "Modern Residential Complex",
    category: "3D Rendering",
    problem: "Client needed photorealistic visuals for investor presentation of a luxury residential development.",
    solution: "Full exterior 3D rendering package with landscaping, lighting studies, and aerial perspectives.",
    tools: "SketchUp Pro, V-Ray, Lumion",
    result: "Secured $2.5M in investor funding with visual presentation.",
  },
  {
    image: portfolio2,
    title: "Corporate Office Headquarters",
    category: "Interior Visualization",
    problem: "Architecture firm required interior visualization for a 50,000 sq ft corporate office renovation.",
    solution: "Complete interior 3D visualization package with material selections and spatial planning.",
    tools: "Revit, V-Ray, Adobe Creative Suite",
    result: "Client approval on first revision, saving 3 weeks of design iterations.",
  },
  {
    image: portfolio3,
    title: "Mixed-Use Development",
    category: "Construction Documents",
    problem: "Developer needed full construction document set for a mixed-use building across multiple jurisdictions.",
    solution: "Complete CD set with structural, MEP, and architectural plans stamped for 3 states.",
    tools: "AutoCAD, Revit, Bluebeam Revu",
    result: "Permits approved in all 3 jurisdictions with zero revisions required.",
  },
  {
    image: portfolio1,
    title: "Luxury Villa Estate",
    category: "2D Floor Plans",
    problem: "Custom home builder needed detailed floor plans for a 12,000 sq ft luxury villa with complex geometry.",
    solution: "Comprehensive 2D floor plan set with structural coordination and site plan integration.",
    tools: "AutoCAD, ArchiCAD",
    result: "Permit approved on first submission, construction completed on schedule.",
  },
  {
    image: portfolio2,
    title: "Healthcare Facility Expansion",
    category: "BIM Modeling",
    problem: "Hospital needed clash-free MEP coordination for a critical care unit expansion.",
    solution: "Full BIM model with automated clash detection across all disciplines.",
    tools: "Revit, Navisworks, AutoCAD",
    result: "Zero field conflicts during construction, saving $180K in change orders.",
  },
  {
    image: portfolio3,
    title: "Urban Retail Center",
    category: "Plan Stamping",
    problem: "Nationwide retailer needed stamped plans for 15 store locations across different states.",
    solution: "Multi-state plan stamping service with local code compliance review for each jurisdiction.",
    tools: "AutoCAD, Bluebeam Revu",
    result: "All 15 locations permitted within 60 days.",
  },
  {
    image: portfolio1,
    title: "Waterfront Condo Tower",
    category: "3D Rendering",
    problem: "Real estate developer needed marketing visuals for pre-construction sales of a 40-story waterfront tower.",
    solution: "Full suite of day/night exterior renders, lobby visualization, and bird's-eye perspective.",
    tools: "3ds Max, V-Ray, Photoshop",
    result: "Achieved 60% pre-sales before groundbreaking with rendered marketing materials.",
  },
  {
    image: portfolio2,
    title: "Boutique Hotel Renovation",
    category: "Interior Visualization",
    problem: "Hotel group needed interior visuals for a historic building renovation to secure franchise approval.",
    solution: "Detailed room-by-room interior renderings showing material finishes and FF&E selections.",
    tools: "SketchUp, V-Ray, Enscape",
    result: "Franchise approval granted on first submission with visualization package.",
  },
  {
    image: portfolio3,
    title: "Industrial Warehouse Complex",
    category: "Construction Documents",
    problem: "Logistics company needed construction documents for a 200,000 sq ft warehouse with specialized loading.",
    solution: "Full CD set including structural steel details, MEP coordination, and fire protection plans.",
    tools: "AutoCAD, Revit, Navisworks",
    result: "Construction completed 2 weeks ahead of schedule due to accurate documentation.",
  },
  {
    image: portfolio1,
    title: "Multi-Family Housing Project",
    category: "2D Floor Plans",
    problem: "Affordable housing developer needed standardized floor plans for a 120-unit apartment complex.",
    solution: "Modular floor plan designs optimized for efficient construction and code compliance.",
    tools: "AutoCAD, Revit",
    result: "30% reduction in drafting costs through modular design approach.",
  },
  {
    image: portfolio2,
    title: "University Science Building",
    category: "BIM Modeling",
    problem: "University required detailed BIM coordination for a research facility with complex lab requirements.",
    solution: "LOD 400 BIM model with MEP coordination, equipment clearances, and lab gas routing.",
    tools: "Revit, Navisworks, Dynamo",
    result: "Reduced RFIs by 75% during construction phase.",
  },
  {
    image: portfolio3,
    title: "Restaurant Chain Expansion",
    category: "Plan Stamping",
    problem: "Fast-casual restaurant chain needed plans stamped for 25 new locations across 8 states.",
    solution: "Standardized plan set with state-specific amendments and licensed PE/RA stamps.",
    tools: "AutoCAD, Bluebeam Revu",
    result: "Average permit approval time of 12 business days across all locations.",
  },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

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
            Our Work
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-heading font-bold mb-6 max-w-3xl"
          >
            Portfolio &
            <br />
            <span className="text-gradient-highlight">Case Studies</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            Explore our completed projects showcasing our expertise across
            residential, commercial, and industrial sectors.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-y border-border bg-card sticky top-16 lg:top-20 z-30">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-xs font-heading uppercase tracking-[0.12em] px-4 py-2 rounded-full border transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground"
                }`}
              >
                {cat}
                {cat !== "All" && (
                  <span className="ml-1.5 text-[10px] opacity-60">
                    ({projects.filter((p) => p.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group bg-card border border-border rounded-lg overflow-hidden card-hover"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-background/40" />
                    <span className="absolute top-4 left-4 text-[10px] font-heading uppercase tracking-[0.2em] bg-background/80 backdrop-blur-sm border border-border rounded-full px-3 py-1">
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    <h3 className="text-xl font-heading font-bold mb-4">
                      {project.title}
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="text-xs font-heading uppercase tracking-wider text-muted-foreground">Problem</span>
                        <p className="text-muted-foreground mt-1">{project.problem}</p>
                      </div>
                      <div>
                        <span className="text-xs font-heading uppercase tracking-wider text-muted-foreground">Solution</span>
                        <p className="text-muted-foreground mt-1">{project.solution}</p>
                      </div>
                      <div className="flex items-center gap-4 pt-2 border-t border-border">
                        <div>
                          <span className="text-xs font-heading uppercase tracking-wider text-muted-foreground">Tools</span>
                          <p className="text-xs text-foreground mt-1">{project.tools}</p>
                        </div>
                      </div>
                      <div className="bg-secondary/50 rounded-md p-3">
                        <span className="text-xs font-heading uppercase tracking-wider text-muted-foreground">Result</span>
                        <p className="text-sm text-foreground font-medium mt-1">{project.result}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No projects found for this category.</p>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default Portfolio;
