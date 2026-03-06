import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const featured = [
  { image: portfolio1, title: "Modern Residential Complex", category: "3D Rendering", result: "Secured $2.5M in investor funding" },
  { image: portfolio2, title: "Corporate Office HQ", category: "Interior Visualization", result: "Client approval on first revision" },
  { image: portfolio3, title: "Mixed-Use Development", category: "Construction Documents", result: "Permits in 3 states, zero revisions" },
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <Link
                to="/portfolio"
                className="group block bg-card border border-border rounded-lg overflow-hidden card-hover shadow-sm"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/20 transition-colors duration-500" />
                  <span className="absolute top-4 left-4 text-[10px] font-heading uppercase tracking-[0.2em] bg-card/90 backdrop-blur-sm border border-border rounded-full px-3 py-1">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-base font-heading font-semibold mb-2 group-hover:text-foreground transition-colors">
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
