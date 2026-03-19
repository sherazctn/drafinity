import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import luxury1 from "@/assets/luxury-1.jpg";
import luxury2 from "@/assets/luxury-2.jpg";
import luxury3 from "@/assets/luxury-3.jpg";
import luxury4 from "@/assets/luxury-4.jpg";
import luxury5 from "@/assets/luxury-5.jpg";
import luxury6 from "@/assets/luxury-6.jpg";
import luxury7 from "@/assets/luxury-7.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import reno7 from "@/assets/reno-7.jpg";
import reno8 from "@/assets/reno-8.jpg";
import reno10 from "@/assets/reno-10.jpg";

const featured = [
  { image: luxury1, title: "Palm Vista Modern Residence", category: "Luxury Rendering", result: "Pre-sold 8 units before construction" },
  { image: luxury2, title: "Skyline Mixed-Use Complex", category: "Luxury Rendering", result: "Secured $12M development funding" },
  { image: luxury3, title: "Greenfield Contemporary Villa", category: "Luxury Rendering", result: "Featured in Architectural Digest" },
  { image: reno7, title: "Lofts of Delray Mixed-Use", category: "3D Renovation Projects", result: "All 8 units pre-leased before completion" },
  { image: portfolio1, title: "Modern Residential Complex", category: "3D Rendering", result: "Secured $2.5M in investor funding" },
  { image: luxury4, title: "Emerald Terrace Townhouse", category: "Luxury Rendering", result: "Won Best Residential Design 2023" },
  { image: reno8, title: "Stonegate Manor Estate", category: "3D Renovation Projects", result: "Property value increased by 35%" },
  { image: luxury5, title: "Grand Luxe Shopping Mall", category: "Luxury Rendering", result: "Attracted 3 anchor tenants pre-lease" },
  { image: portfolio2, title: "Corporate Office Headquarters", category: "Interior Visualization", result: "Client approval on first revision" },
  { image: reno10, title: "Modern Farmhouse Renovation", category: "3D Renovation Projects", result: "Won Regional Design Award 2024" },
  { image: luxury6, title: "Marina Bay Waterfront Township", category: "Luxury Rendering", result: "Government approval in 45 days" },
  { image: luxury7, title: "Oasis Resort & Pool Club", category: "Luxury Rendering", result: "Phase 1 sold out in 3 weeks" },
  { image: portfolio3, title: "Mixed-Use Development", category: "Construction Documents", result: "Permits approved with zero revisions" },
];

const PortfolioPreview = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-4">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-heading uppercase tracking-[0.2em] text-muted-foreground mb-4 block"
            >
              Featured Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl lg:text-5xl font-heading font-bold"
            >
              Recent Projects
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <Link
              to="/portfolio"
              className="text-sm font-heading uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
            >
              View All Work
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {featured.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Link
                to="/portfolio"
                className="group block bg-card border border-border rounded-lg overflow-hidden card-hover shadow-sm"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/20 transition-colors duration-500" />
                  <span className="absolute top-3 left-3 text-[10px] font-heading uppercase tracking-[0.2em] bg-card/90 backdrop-blur-sm border border-border rounded-full px-3 py-1">
                    {project.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-heading font-semibold mb-1.5 group-hover:text-foreground transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{project.result}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
