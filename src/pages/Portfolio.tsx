import { motion } from "framer-motion";
import CTASection from "@/components/CTASection";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

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
];

const Portfolio = () => {
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

      {/* Projects Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-card border border-border rounded-lg overflow-hidden card-hover"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default Portfolio;
