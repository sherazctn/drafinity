import { motion } from "framer-motion";
import { Eye, Lightbulb, Globe, Rocket, TrendingUp, Users } from "lucide-react";
import AnimatedIcon from "@/components/AnimatedIcon";
import CTASection from "@/components/CTASection";
import PageHeroAnimation from "@/components/PageHeroAnimation";

const visionPoints = [
  { icon: Eye, animation: "pulse" as const, title: "Industry Leadership", description: "To be the most trusted name in architectural drafting and design services across the United States, setting new standards for quality, speed, and innovation." },
  { icon: Globe, animation: "float" as const, title: "Nationwide Accessibility", description: "Making world-class drafting and design services accessible to every architect, contractor, and developer in all 50 states through our expanding partner network." },
  { icon: Rocket, animation: "bounce" as const, title: "AI-Powered Future", description: "Leading the integration of Artificial Intelligence, machine learning, and generative design into every phase of architectural documentation — from automated code checking to intelligent clash detection." },
  { icon: TrendingUp, animation: "wave" as const, title: "Sustainable Growth", description: "Building a company that grows sustainably by investing in our people, AI infrastructure, and processes while maintaining the highest standards of quality." },
  { icon: Users, animation: "glow" as const, title: "Community Impact", description: "Contributing to safer, more beautiful built environments by ensuring every project we touch meets the highest standards of code compliance and design excellence." },
  { icon: Lightbulb, animation: "rotate" as const, title: "Innovation Culture", description: "Fostering a culture where AI, automation, and human expertise work together — empowering every team member to deliver faster, smarter, and more accurate results than ever before." },
];

const Vision = () => {
  return (
    <main>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 blueprint-grid relative overflow-hidden">
        <PageHeroAnimation page="about" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-heading uppercase tracking-[0.2em] text-muted-foreground mb-4 block">Our Vision</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl lg:text-6xl font-heading font-bold mb-6 max-w-3xl">
            Building the Future of<br /><span className="text-gradient-highlight">Architectural Services</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            We envision a world where AI and human expertise converge to create precise, code-compliant, and beautifully crafted architectural documentation — delivered faster and more affordably than ever before.
          </motion.p>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-24 lg:py-32 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <Eye className="w-12 h-12 mx-auto mb-6 text-muted-foreground/40" />
            <blockquote className="text-2xl lg:text-3xl font-heading font-bold leading-relaxed mb-6">
              "To revolutionize the AEC industry by harnessing the power of AI, automation, and human craftsmanship to deliver unmatched precision, speed, and innovation — making world-class architectural services accessible to all."
            </blockquote>
            <p className="text-sm text-muted-foreground">— Drafinity LLC Leadership Team</p>
          </motion.div>
        </div>
      </section>

      {/* Vision Pillars */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-xs font-heading uppercase tracking-[0.2em] text-muted-foreground mb-4 block">Our Pillars</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl lg:text-4xl font-heading font-bold">Where We're Headed</motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visionPoints.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card border border-border rounded-lg p-6 card-hover">
                <div className="mb-4"><AnimatedIcon icon={v.icon} variant={v.animation} size={24} /></div>
                <h3 className="text-sm font-heading font-semibold mb-2">{v.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default Vision;
