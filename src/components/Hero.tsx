// ============= Full file contents =============

import { Link } from "react-router-dom";
import { Phone, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import BlueprintAnimation from "@/components/BlueprintAnimation";

const headingLines = [
  { line1: "Precision Drafting", line2: "& 3D Design", icon: "✏️" },
  { line1: "Permit-Ready Plans", line2: "You Can Trust", icon: "📋" },
  { line1: "AI-Enhanced", line2: "BIM & CAD Support", icon: "🤖" },
  { line1: "From Concept", line2: "To Construction", icon: "🏗️" },
];

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [lineIndex, setLineIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 8]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLineIndex((prev) => (prev + 1) % headingLines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div className="absolute inset-0 blueprint-grid" />
        <motion.div className="absolute top-20 right-[15%] w-64 h-64 border border-border/30 rounded-full" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} />
        <motion.div className="absolute top-28 right-[17%] w-48 h-48 border border-border/20 rounded-full" animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} />
        <motion.div className="absolute top-36 right-[19%] w-32 h-32 border border-border/15 rounded-full" animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} />
        <motion.div className="absolute bottom-32 left-[8%] w-20 h-20 border border-border/20" animate={{ rotate: [0, 45, 0], scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute top-[25%] right-[5%] w-16 h-16 border border-border/15 rotate-12" animate={{ rotate: [12, -12, 12], y: [-5, 5, -5] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
        {[
          { top: "30%", left: "5%", size: "w-2 h-2", dur: 4, delay: 0 },
          { top: "60%", left: "20%", size: "w-3 h-3", dur: 5, delay: 1 },
          { top: "45%", left: "35%", size: "w-1.5 h-1.5", dur: 3.5, delay: 0.5 },
          { top: "15%", left: "45%", size: "w-2 h-2", dur: 4.5, delay: 1.5 },
        ].map((dot, i) => (
          <motion.div
            key={i}
            className={`absolute ${dot.size} rounded-full bg-foreground/8`}
            style={{ top: dot.top, left: dot.left }}
            animate={{ y: [-10, 10, -10], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: dot.dur, repeat: Infinity, delay: dot.delay }}
          />
        ))}
      </motion.div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div initial={{ x: "-100%" }} animate={{ x: "200%" }} transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 3 }} className="absolute top-1/4 h-px w-1/3 bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
        <motion.div initial={{ x: "200%" }} animate={{ x: "-100%" }} transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 2 }} className="absolute top-2/3 h-px w-1/4 bg-gradient-to-r from-transparent via-foreground/8 to-transparent" />
      </div>

      <BlueprintAnimation />

      <motion.div
        className="relative z-10 container mx-auto px-4 lg:px-8 py-32"
        style={{ y: textY, opacity, scale, perspective: 1000, rotateX }}
      >
        <div className="max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-xs font-heading uppercase tracking-[0.2em] text-muted-foreground border border-border rounded-full px-4 py-1.5 mb-8">
              <motion.span animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-foreground" />
              Drafting & Documentation Support Since 2015 • AI-Enhanced
            </span>
          </motion.div>

          <div className="h-[180px] sm:h-[200px] lg:h-[280px] mb-8 overflow-hidden relative">
            {headingLines.map((heading, idx) => (
              <motion.h1
                key={idx}
                className="text-5xl sm:text-6xl lg:text-8xl font-heading font-bold leading-[0.95] tracking-tight absolute inset-0"
                initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
                animate={lineIndex === idx ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: -60, filter: "blur(8px)" }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              >
                <span className="block">{heading.line1}</span>
                <span className="block text-gradient-highlight">{heading.line2}</span>
              </motion.h1>
            ))}
          </div>

          {/* Progress dots */}
          <div className="flex gap-2 mb-8">
            {headingLines.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setLineIndex(idx)}
                className={`h-1 rounded-full transition-all duration-500 ${lineIndex === idx ? "w-8 bg-foreground" : "w-2 bg-border"}`}
              />
            ))}
          </div>

          <motion.div
            className="h-px bg-foreground/20 mb-8 origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
            style={{ maxWidth: "200px" }}
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg lg:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
          >
            Delivering precision drafting, AI-enhanced BIM modeling, 3D rendering, and building documentation support for homeowners, contractors, designers, developers, and licensed professionals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/contact">
              <Button variant="hero" size="xl">
                <Sparkles className="w-4 h-4" />
                Get a Free Quote
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Button>
            </Link>
            <a href="tel:+19177281625">
              <Button variant="hero-outline" size="xl">
                <Phone className="w-4 h-4" />
                Call (917) 728-1625
              </Button>
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-[10px] font-heading uppercase tracking-[0.2em] text-muted-foreground">Scroll</span>
        <motion.div
          className="w-5 h-8 rounded-full border border-border flex items-start justify-center p-1"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-1.5 rounded-full bg-foreground"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
