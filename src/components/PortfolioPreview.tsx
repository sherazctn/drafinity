import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useMemo } from "react";
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

const allProjects = [
  { image: luxury1, title: "Palm Vista Modern Residence", category: "Luxury Rendering", result: "Pre-sold 8 units before construction" },
  { image: luxury2, title: "Skyline Mixed-Use Complex", category: "Luxury Rendering", result: "Secured $12M development funding" },
  { image: luxury3, title: "Greenfield Contemporary Villa", category: "Luxury Rendering", result: "Featured in Architectural Digest" },
  { image: luxury4, title: "Emerald Terrace Townhouse", category: "Luxury Rendering", result: "Won Best Residential Design 2023" },
  { image: luxury5, title: "Grand Luxe Shopping Mall", category: "Luxury Rendering", result: "Attracted 3 anchor tenants pre-lease" },
  { image: luxury6, title: "Marina Bay Waterfront Township", category: "Luxury Rendering", result: "Government approval in 45 days" },
  { image: luxury7, title: "Oasis Resort & Pool Club", category: "Luxury Rendering", result: "Phase 1 sold out in 3 weeks" },
  { image: reno1, title: "Navy Siding Colonial Revival", category: "3D Renovation Projects", result: "Homeowner approved in 3 days" },
  { image: reno2, title: "211 West Street Urban Apartments", category: "3D Renovation Projects", result: "Zoning board approval on first hearing" },
  { image: reno3, title: "Modern Kitchen & Dining Renovation", category: "3D Renovation Projects", result: "Client signed off zero revisions" },
  { image: reno4, title: "Heritage Home Front Elevation", category: "3D Renovation Projects", result: "Historic preservation board approved" },
  { image: reno5, title: "Country Estate Concept Model", category: "3D Renovation Projects", result: "Planning permission in 30 days" },
  { image: reno6, title: "Open-Plan Living & Kitchen Redesign", category: "3D Renovation Projects", result: "Featured in Home Design Magazine" },
  { image: reno7, title: "Lofts of Delray Mixed-Use", category: "3D Renovation Projects", result: "All 8 units pre-leased before completion" },
  { image: reno8, title: "Stonegate Manor Estate", category: "3D Renovation Projects", result: "Property value increased by 35%" },
  { image: reno9, title: "Stonegate Manor Garage Wing", category: "3D Renovation Projects", result: "Contractor bid accuracy improved 40%" },
  { image: reno10, title: "Modern Farmhouse Renovation", category: "3D Renovation Projects", result: "Won Regional Design Award 2024" },
  { image: portfolio1, title: "Modern Residential Complex", category: "3D Rendering", result: "Secured $2.5M in investor funding" },
  { image: portfolio2, title: "Corporate Office Headquarters", category: "Interior Visualization", result: "Client approval on first revision" },
  { image: portfolio3, title: "Mixed-Use Development", category: "Construction Documents", result: "Permits approved with zero revisions" },
  { image: render3d1, title: "2-Bed Luxury Floor Plan", category: "3D Rendering", result: "Sold 12 units in first week" },
  { image: render3d2, title: "Contemporary Living Room Design", category: "Interior Visualization", result: "Client approved on first draft" },
  { image: render3d3, title: "Modern Two-Story Residence", category: "3D Rendering", result: "Pre-sold before foundation poured" },
  { image: render3d4, title: "Compact Modern Garden Home", category: "3D Rendering", result: "Featured in Modern Living magazine" },
  { image: render3d5, title: "Kids' Bedroom Moon Theme", category: "Interior Visualization", result: "Design award finalist 2024" },
  { image: render3d6, title: "Farmhouse Living Room Fireplace", category: "Interior Visualization", result: "Client 5-star review on Houzz" },
  { image: render3d7, title: "Scandinavian Kitchen Remodel", category: "Interior Visualization", result: "Increased property value by 28%" },
  { image: render3d8, title: "Outdoor BBQ Terrace Design", category: "3D Rendering", result: "Built exactly as rendered" },
  { image: render3d9, title: "Luxury Dining Room Visualization", category: "Interior Visualization", result: "Secured high-end furniture contract" },
  { image: render3d10, title: "White Shaker Kitchen Render", category: "Interior Visualization", result: "Contractor used as build reference" },
  { image: render3d11, title: "Contemporary Luxury Residence", category: "3D Rendering", result: "Investor commitment in 48 hours" },
  { image: render3d12, title: "Suburban Family Home Design", category: "3D Rendering", result: "Approved on first presentation" },
  { image: render3d13, title: "Tropical Infinity Pool Villa", category: "3D Rendering", result: "Featured in Luxury Homes International" },
  { image: render3d14, title: "Avenue Rivi Beach Mixed-Use", category: "3D Rendering", result: "All retail spaces pre-leased" },
  { image: render3d15, title: "Urban Apartment Complex", category: "3D Rendering", result: "80% units sold in first month" },
];

function shuffleAndPick<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

const PortfolioPreview = () => {
  const featured = useMemo(() => shuffleAndPick(allProjects, 12), []);

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
              transition={{ delay: i * 0.08, duration: 0.6 }}
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
