import { motion } from "framer-motion";
import CTASection from "@/components/CTASection";
import PageHeroAnimation from "@/components/PageHeroAnimation";

const softwareLogos: Record<string, string> = {
  "AutoCAD": "https://img.icons8.com/color/96/autocad.png",
  "ArchiCAD": "https://img.icons8.com/color/96/archicad.png",
  "DraftSight": "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/DraftSight_Logo.svg/200px-DraftSight_Logo.svg.png",
  "MicroStation": "https://img.icons8.com/color/96/bentley-systems.png",
  "Revit": "https://img.icons8.com/color/96/autodesk-revit.png",
  "Navisworks": "https://img.icons8.com/color/96/navisworks.png",
  "Tekla Structures": "https://img.icons8.com/color/96/tekla-structures.png",
  "Dynamo": "https://img.icons8.com/color/96/autodesk.png",
  "SketchUp Pro": "https://img.icons8.com/color/96/sketchup.png",
  "V-Ray": "https://img.icons8.com/color/96/v-ray.png",
  "Lumion": "https://img.icons8.com/color/96/rendering.png",
  "Enscape": "https://img.icons8.com/color/96/virtual-reality.png",
  "3ds Max": "https://img.icons8.com/color/96/3ds-max.png",
  "Twinmotion": "https://img.icons8.com/color/96/unreal-engine.png",
  "Bluebeam Revu": "https://img.icons8.com/color/96/pdf.png",
  "Adobe Creative Suite": "https://img.icons8.com/color/96/adobe-creative-cloud.png",
  "PlanGrid": "https://img.icons8.com/color/96/autodesk.png",
  "BIM 360": "https://img.icons8.com/color/96/autodesk.png",
  "Procore": "https://img.icons8.com/color/96/construction.png",
  "Microsoft Project": "https://img.icons8.com/color/96/microsoft-project.png",
  "ETABS": "https://img.icons8.com/color/96/structural.png",
  "RISA-3D": "https://img.icons8.com/color/96/structural.png",
  "SAP2000": "https://img.icons8.com/color/96/structural.png",
};

const softwareCategories = [
  { label: "CAD & Drafting", tools: [
    { name: "AutoCAD", description: "Industry-standard 2D and 3D CAD design software for precise floor plans, site plans, and detailed construction drawings.", use: "Floor Plans, Site Plans, Details" },
    { name: "ArchiCAD", description: "Powerful BIM software for architectural design with comprehensive building models and integrated documentation.", use: "Architectural Design, Documentation" },
    { name: "DraftSight", description: "Professional-grade 2D/3D CAD solution for creating, editing, and reviewing DWG files with precision.", use: "2D Drafting, DWG Editing" },
    { name: "MicroStation", description: "Advanced CAD platform for infrastructure design, from roads to buildings, used by top engineering firms.", use: "Infrastructure, Civil Design" },
  ]},
  { label: "BIM & Modeling", tools: [
    { name: "Revit", description: "Autodesk's BIM platform for multi-discipline coordination with parametric modeling, clash detection, and automated schedules.", use: "BIM Modeling, MEP, Structural" },
    { name: "Navisworks", description: "Project review software for clash detection and 4D scheduling, essential for coordinating complex multi-discipline projects.", use: "Clash Detection, Coordination" },
    { name: "Tekla Structures", description: "Advanced structural BIM software for steel and concrete detailing with high accuracy and automation.", use: "Structural Detailing" },
    { name: "Dynamo", description: "Visual programming tool for computational design, automating Revit workflows and complex geometry creation.", use: "Automation, Parametric Design" },
  ]},
  { label: "3D Visualization & Rendering", tools: [
    { name: "SketchUp Pro", description: "Intuitive 3D modeling software for rapid design exploration, excellent for conceptual design and client presentations.", use: "Concept Design, Massing Studies" },
    { name: "V-Ray", description: "Professional rendering engine producing photorealistic images with industry-leading quality for architectural visualization.", use: "Photorealistic Rendering" },
    { name: "Lumion", description: "Real-time 3D visualization software with vast material and object libraries for quick, high-quality renderings and animations.", use: "Real-time Rendering, Animations" },
    { name: "Enscape", description: "Real-time rendering and VR plugin that integrates directly with Revit, SketchUp, and ArchiCAD.", use: "Real-time Walkthroughs, VR" },
    { name: "3ds Max", description: "Professional 3D modeling, animation, and rendering software for complex architectural visualizations.", use: "3D Modeling, Animation" },
    { name: "Twinmotion", description: "Real-time immersive 3D visualization tool based on Unreal Engine for high-quality architectural presentations.", use: "Immersive Presentations" },
  ]},
  { label: "Documentation & Review", tools: [
    { name: "Bluebeam Revu", description: "PDF markup and collaboration tool designed for AEC professionals, streamlining document review and quality control.", use: "Plan Review, Markup, QC" },
    { name: "Adobe Creative Suite", description: "Professional design tools for presentation materials, marketing collateral, and post-processing of renderings.", use: "Presentations, Post-Processing" },
    { name: "PlanGrid", description: "Construction productivity software for blueprint management, field reports, and real-time document updates.", use: "Field Reports, Blueprint Mgmt" },
  ]},
  { label: "Project Management & Collaboration", tools: [
    { name: "BIM 360", description: "Cloud-based construction management platform for design collaboration, model coordination, and project insights.", use: "Cloud Collaboration, Model Sharing" },
    { name: "Procore", description: "Construction management platform connecting field and office teams with real-time project data.", use: "Project Management" },
    { name: "Microsoft Project", description: "Industry-standard project scheduling and resource management tool for complex construction timelines.", use: "Scheduling, Resource Planning" },
  ]},
  { label: "Structural & Analysis", tools: [
    { name: "ETABS", description: "Integrated software for structural analysis and design of building systems including steel, concrete, and composite.", use: "Structural Analysis" },
    { name: "RISA-3D", description: "Full-featured 3D structural analysis program for modeling and analyzing complex structures.", use: "3D Structural Modeling" },
    { name: "SAP2000", description: "General-purpose structural analysis and design program for any type of structural system.", use: "General Structural Analysis" },
  ]},
];

const SoftwareTools = () => {
  return (
    <main>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 blueprint-grid relative overflow-hidden">
        <PageHeroAnimation page="software" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-heading uppercase tracking-[0.2em] text-muted-foreground mb-4 block">Our Technology Stack</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-3xl lg:text-6xl font-heading font-bold mb-6 max-w-3xl">
            Software &<br /><span className="text-gradient-highlight">Tools We Use</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            We use industry-leading software to deliver accurate, high-quality results on every project.
          </motion.p>
        </div>
      </section>

      {/* Trusted Software Logos Bar */}
      <section className="py-12 border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-center text-[10px] font-heading uppercase tracking-[0.2em] text-muted-foreground mb-8">Trusted Industry Software</p>
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {["AutoCAD", "Revit", "SketchUp Pro", "V-Ray", "Lumion", "Navisworks", "Bluebeam Revu", "ArchiCAD", "3ds Max", "Enscape"].map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center gap-1"
              >
                <img
                  src={softwareLogos[name] || ""}
                  alt={name}
                  className="w-8 h-8 object-contain grayscale opacity-50"
                  loading="lazy"
                />
                <span className="text-[10px] font-heading text-muted-foreground/40 select-none tracking-wide">{name.replace(" Pro", "").replace(" Revu", "")}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {softwareCategories.map((category, catIdx) => (
        <section key={category.label} className={`py-12 lg:py-24 ${catIdx % 2 === 1 ? "bg-card" : ""}`}>
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
              <h2 className="text-xl lg:text-2xl font-heading font-bold mb-2">{category.label}</h2>
              <div className="light-line max-w-xs" />
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.tools.map((tool, i) => (
                <motion.div key={tool.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-secondary/30 border border-border rounded-lg p-6 card-hover group">
                  <div className="flex items-start gap-4 mb-3">
                    <img
                      src={softwareLogos[tool.name] || "https://img.icons8.com/color/96/software.png"}
                      alt={`${tool.name} logo`}
                      className="w-10 h-10 object-contain shrink-0"
                      loading="lazy"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-heading font-bold group-hover:text-foreground transition-colors">{tool.name}</h3>
                      <span className="text-[10px] font-heading uppercase tracking-wider text-muted-foreground bg-background border border-border rounded-full px-3 py-0.5 inline-block mt-1">{tool.use}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tool.description}</p>
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
