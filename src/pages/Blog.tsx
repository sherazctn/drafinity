import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "@/components/CTASection";

const posts = [
  {
    slug: "what-is-plan-stamping",
    title: "What is Plan Stamping & Why It Matters",
    excerpt:
      "Plan stamping is the process of having a licensed professional review and certify your construction documents. Learn why it's essential for getting permits approved across all US states.",
    category: "Compliance",
    date: "January 15, 2026",
    readTime: "5 min read",
    author: "Drafinity Team",
  },
  {
    slug: "top-cad-tools",
    title: "Top 5 CAD Tools for Accurate Plans in 2026",
    excerpt:
      "From AutoCAD to Revit, we break down the best CAD software for architectural drafting. Compare features, pricing, and workflows to find the right tool for your projects.",
    category: "Technology",
    date: "January 8, 2026",
    readTime: "7 min read",
    author: "Drafinity Team",
  },
  {
    slug: "prepare-sketches",
    title: "How to Prepare Sketches for Drafting Services",
    excerpt:
      "Getting the most out of your drafting service starts with good preparation. Here's how to create effective hand sketches that communicate your design intent clearly.",
    category: "Tips",
    date: "December 20, 2025",
    readTime: "4 min read",
    author: "Drafinity Team",
  },
  {
    slug: "bim-vs-cad",
    title: "BIM vs. CAD: Which Is Right for Your Project?",
    excerpt:
      "Building Information Modeling and traditional CAD serve different purposes. We explain when to use each approach and how they can work together for optimal results.",
    category: "Technology",
    date: "December 10, 2025",
    readTime: "6 min read",
    author: "Drafinity Team",
  },
  {
    slug: "permit-process-guide",
    title: "A Complete Guide to the Building Permit Process",
    excerpt:
      "Navigating the building permit process can be complex. This comprehensive guide walks you through every step, from initial application to final inspection.",
    category: "Compliance",
    date: "November 28, 2025",
    readTime: "8 min read",
    author: "Drafinity Team",
  },
  {
    slug: "3d-rendering-benefits",
    title: "Why 3D Renderings Win More Clients",
    excerpt:
      "Photorealistic 3D renderings don't just look impressive — they close deals. Discover how visualization services can transform your sales process and client relationships.",
    category: "Business",
    date: "November 15, 2025",
    readTime: "5 min read",
    author: "Drafinity Team",
  },
];

const Blog = () => {
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
            Blog & Resources
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-heading font-bold mb-6 max-w-3xl"
          >
            Insights &
            <br />
            <span className="text-gradient-highlight">Industry Knowledge</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            Expert articles on drafting, CAD technology, compliance, and
            best practices for the architecture and construction industry.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-card border border-border rounded-lg overflow-hidden card-hover flex flex-col"
              >
                {/* Category badge header */}
                <div className="p-6 pb-0">
                  <span className="text-[10px] font-heading uppercase tracking-[0.2em] text-muted-foreground border border-border rounded-full px-3 py-1">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-heading font-bold mb-3 group-hover:text-foreground transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <motion.span
                      whileHover={{ x: 4 }}
                      className="text-foreground cursor-pointer"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default Blog;
