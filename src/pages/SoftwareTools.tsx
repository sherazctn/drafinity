import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import CTASection from "@/components/CTASection";

const softwareCategories = [
  {
    label: "CAD & Drafting",
    tools: [
      {
        name: "AutoCAD",
        description: "Industry-standard 2D and 3D CAD design software. We use it for precise floor plans, site plans, and detailed construction drawings.",
        use: "Floor Plans, Site Plans, Details",
      },
      {
        name: "ArchiCAD",
        description: "Powerful BIM software for architectural design. Ideal for creating comprehensive building models with integrated documentation.",
        use: "Architectural Design, Documentation",
      },
    ],
  },
  {
    label: "BIM & Modeling",
    tools: [
      {
        name: "Revit",
        description: "Autodesk's BIM platform for multi-discipline coordination. Enables parametric modeling, clash detection, and automated schedules.",
        use: "BIM Modeling, MEP, Structural",
      },
      {
        name: "Navisworks",
        description: "Project review software for clash detection and 4D scheduling. Essential for coordinating complex multi-discipline projects.",
        use: "Clash Detection, Coordination",
      },
    ],
  },
  {
    label: "3D Visualization",
    tools: [
      {
        name: "SketchUp Pro",
        description: "Intuitive 3D modeling software for rapid design exploration. Excellent for conceptual design and client presentations.",
        use: "Concept Design, Massing Studies",
      },
      {
        name: "V-Ray",
        description: "Professional rendering engine producing photorealistic images. Industry-leading quality for architectural visualization.",
        use: "Photorealistic Rendering",
      },
      {
        name: "Lumion",
        description: "Real-time 3D visualization software with vast material and object libraries. Perfect for quick, high-quality renderings and animations.",
        use: "Real-time Rendering, Animations",
      },
    ],
  },
  {
    label: "Documentation & Review",
    tools: [
      {
        name: "Bluebeam Revu",
        description: "PDF markup and collaboration tool designed for AEC professionals. Streamlines document review and quality control workflows.",
        use: "Plan Review, Markup, QC",
      },
      {
        name: "Adobe Creative Suite",
        description: "Professional design tools for presentation materials, marketing collateral, and post-processing of renderings.",
        use: "Presentations, Post-Processing",
      },
    ],
  },
];

const SoftwareTools = () => {
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
            Our Technology Stack
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-heading font-bold mb-6 max-w-3xl"
          >
            Software &
            <br />
            <span className="text-gradient-highlight">Tools We Use</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            We use industry-leading software to deliver accurate, high-quality
            results on every project. Here's our complete technology stack.
          </motion.p>
        </div>
      </section>

      {/* Software Categories */}
      {softwareCategories.map((category, catIdx) => (
        <section
          key={category.label}
          className={`py-16 lg:py-24 ${catIdx % 2 === 1 ? "bg-card" : ""}`}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-xl lg:text-2xl font-heading font-bold mb-2">
                {category.label}
              </h2>
              <div className="light-line max-w-xs" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.tools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-secondary/30 border border-border rounded-lg p-6 card-hover"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-heading font-bold">{tool.name}</h3>
                    <span className="text-[10px] font-heading uppercase tracking-wider text-muted-foreground bg-background border border-border rounded-full px-3 py-1 shrink-0">
                      {tool.use}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tool.description}
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

export default SoftwareTools;
