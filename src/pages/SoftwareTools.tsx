import { motion } from "framer-motion";
import CTASection from "@/components/CTASection";
import PageHeroAnimation from "@/components/PageHeroAnimation";
import { getSoftwareLogo } from "@/lib/softwareLogos";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Brain, Cpu, Workflow, Layers, Zap, Globe } from "lucide-react";
import AnimatedIcon from "@/components/AnimatedIcon";
import SEO from "@/components/SEO";
import { breadcrumbSchema } from "@/lib/seoSchemas";

const softwareCategories = [
  { label: "CAD & Drafting", tools: [
    { name: "AutoCAD", description: "Industry-standard 2D and 3D CAD design software for precise floor plans, site plans, and detailed construction drawings.", use: "Floor Plans, Site Plans, Details" },
    { name: "ArchiCAD", description: "Powerful BIM software for building design documentation with comprehensive building models and integrated project documentation.", use: "Building Design, Documentation" },
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
    { name: "V-Ray", description: "Professional rendering engine producing photorealistic images with industry-leading quality for building and design visualization.", use: "Photorealistic Rendering" },
    { name: "Lumion", description: "Real-time 3D visualization software with vast material and object libraries for quick, high-quality renderings and animations.", use: "Real-time Rendering, Animations" },
    { name: "Enscape", description: "Real-time rendering and VR plugin that integrates directly with Revit, SketchUp, and ArchiCAD.", use: "Real-time Walkthroughs, VR" },
    { name: "3ds Max", description: "Professional 3D modeling, animation, and rendering software for complex building and design visualizations.", use: "3D Modeling, Animation" },
    { name: "Twinmotion", description: "Real-time immersive 3D visualization tool based on Unreal Engine for high-quality building and design presentations.", use: "Immersive Presentations" },
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
    { name: "ETABS", description: "Integrated software by CSI for structural analysis and design of building systems — steel, concrete, and composite structures with advanced modeling.", use: "Structural Analysis" },
    { name: "RISA-3D", description: "Full-featured 3D structural analysis program by RISA Technologies for modeling and analyzing complex structures with intuitive interface.", use: "3D Structural Modeling" },
    { name: "SAP2000", description: "General-purpose structural analysis and design program by CSI for any type of structural system — bridges, buildings, dams.", use: "General Structural Analysis" },
  ]},
];

const modernMethods = [
  { icon: Brain, animation: "pulse" as const, title: "AI-Enhanced Drafting", description: "We leverage AI-powered tools for intelligent object recognition, automated dimensioning, and predictive design suggestions — reducing turnaround time by up to 40%." },
  { icon: Cpu, animation: "rotate" as const, title: "Generative Design", description: "Using computational algorithms to explore thousands of design variations based on constraints — optimizing for cost, materials, and structural performance simultaneously." },
  { icon: Workflow, animation: "bounce" as const, title: "Digital Twin Technology", description: "Creating real-time digital replicas of buildings that synchronize with construction data, enabling live monitoring and predictive maintenance from day one." },
  { icon: Layers, animation: "wave" as const, title: "Cloud-Based BIM Collaboration", description: "Real-time multi-discipline coordination in the cloud — designers, engineers, and contractors work on the same live model with zero file conflicts." },
  { icon: Zap, animation: "glow" as const, title: "Automated Code Checking", description: "AI-driven compliance verification against IBC, IRC, ADA, and local codes — catching violations before they reach the permit office." },
  { icon: Globe, animation: "float" as const, title: "VR/AR Design Reviews", description: "Immersive virtual walkthroughs let clients experience their building before construction starts — reducing change orders by up to 60%." },
];

const allSoftwareNames = softwareCategories.flatMap(c => c.tools.map(t => t.name));

const SoftwareTools = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const itemsPerView = 8;
  const totalItems = allSoftwareNames.length;

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCarouselIndex(prev => (prev + 1) % totalItems);
    }, 2500);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [totalItems]);

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < itemsPerView; i++) {
      items.push(allSoftwareNames[(carouselIndex + i) % totalItems]);
    }
    return items;
  };

  const handlePrev = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCarouselIndex(prev => (prev - 1 + totalItems) % totalItems);
  };
  const handleNext = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCarouselIndex(prev => (prev + 1) % totalItems);
  };

  return (
    <main>
      <SEO
        title="Software & Tools — AutoCAD, Revit, V-Ray, Lumion, ETABS & More"
        description="Drafinity uses industry-leading drafting and design software: AutoCAD, Revit, ArchiCAD, SketchUp, V-Ray, Lumion, ETABS, SAP2000, BIM 360, and more for precision deliverables."
        path="/software"
        keywords="AutoCAD drafting, Revit BIM, V-Ray rendering, Lumion, ETABS, structural software, design tools"
        schema={[breadcrumbSchema([{name:'Home',path:'/'},{name:'Software',path:'/software'}])]}
      />
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 blueprint-grid relative overflow-hidden">
        <PageHeroAnimation page="software" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-heading uppercase tracking-[0.2em] text-muted-foreground mb-4 block">Our Technology Stack</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-3xl lg:text-6xl font-heading font-bold mb-6 max-w-3xl">
            Software &<br /><span className="text-gradient-highlight">Tools We Use</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            We use industry-leading software and modern AI-enhanced methodologies to deliver accurate, high-quality results on every project.
          </motion.p>
        </div>
      </section>

      {/* Trusted Software Logos Carousel */}
      <section className="py-12 border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-center text-[10px] font-heading uppercase tracking-[0.2em] text-muted-foreground mb-8">Trusted Industry Software</p>
          <div className="flex items-center gap-4">
            <button onClick={handlePrev} className="shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex-1 overflow-hidden">
              <div className="flex items-center justify-center gap-6 lg:gap-10">
                {getVisibleItems().map((name, i) => (
                  <motion.div
                    key={`${carouselIndex}-${i}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.04 }}
                    className="flex flex-col items-center gap-1.5 min-w-[60px]"
                  >
                    <img src={getSoftwareLogo(name)} alt={name} className="w-10 h-10 object-contain" loading="lazy" />
                    <span className="text-[10px] font-heading text-muted-foreground/60 select-none tracking-wide whitespace-nowrap">{name.replace(" Pro", "").replace(" Revu", "")}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <button onClick={handleNext} className="shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Modern Methodologies */}
      <section className="py-24 lg:py-32 bg-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-xs font-heading uppercase tracking-[0.2em] text-muted-foreground mb-4 block">Modern Approach</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl lg:text-4xl font-heading font-bold mb-4">How We're Redefining the Industry</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-muted-foreground max-w-2xl mx-auto">
              We don't just use traditional tools — we combine them with cutting-edge AI, automation, and cloud-native workflows to deliver faster, smarter, and more accurate results.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modernMethods.map((method, i) => (
              <motion.div key={method.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-background border border-border rounded-lg p-6 card-hover">
                <div className="mb-4"><AnimatedIcon icon={method.icon} variant={method.animation} size={24} /></div>
                <h3 className="text-sm font-heading font-semibold mb-2">{method.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{method.description}</p>
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
                    <img src={getSoftwareLogo(tool.name)} alt={`${tool.name} logo`} className="w-10 h-10 object-contain shrink-0" loading="lazy" />
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
