import { Link } from "react-router-dom";
import { Phone, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import BlueprintAnimation from "@/components/BlueprintAnimation";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 8]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Animated geometric background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div className="absolute inset-0 blueprint-grid" />
        
        {/* Multiple concentric rotating circles */}
        <motion.div className="absolute top-20 right-[15%] w-64 h-64 border border-border/30 rounded-full" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} />
        <motion.div className="absolute top-28 right-[17%] w-48 h-48 border border-border/20 rounded-full" animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} />
        <motion.div className="absolute top-36 right-[19%] w-32 h-32 border border-border/15 rounded-full" animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} />
        
        {/* Floating architectural shapes */}
        <motion.div className="absolute bottom-32 left-[8%] w-20 h-20 border border-border/20" animate={{ rotate: [0, 45, 0], scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute top-[25%] right-[5%] w-16 h-16 border border-border/15 rotate-12" animate={{ rotate: [12, -12, 12], y: [-5, 5, -5] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-[20%] right-[25%] w-12 h-24 border border-border/10" animate={{ scaleY: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 5, repeat: Infinity }} />
        
        {/* Floating dots */}
        {[
          { top: "30%", left: "5%", size: "w-2 h-2", dur: 4, delay: 0 },
          { top: "60%", left: "20%", size: "w-3 h-3", dur: 5, delay: 1 },
          { top: "45%", left: "35%", size: "w-1.5 h-1.5", dur: 3.5, delay: 0.5 },
          { top: "15%", left: "45%", size: "w-2 h-2", dur: 4.5, delay: 1.5 },
          { top: "70%", left: "10%", size: "w-2.5 h-2.5", dur: 6, delay: 2 },
          { top: "80%", left: "40%", size: "w-1.5 h-1.5", dur: 3, delay: 0.8 },
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

      {/* Animated scanning lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div initial={{ x: "-100%" }} animate={{ x: "200%" }} transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 3 }} className="absolute top-1/4 h-px w-1/3 bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
        <motion.div initial={{ x: "200%" }} animate={{ x: "-100%" }} transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 2 }} className="absolute top-2/3 h-px w-1/4 bg-gradient-to-r from-transparent via-foreground/8 to-transparent" />
        <motion.div initial={{ y: "-100%" }} animate={{ y: "200%" }} transition={{ duration: 10, repeat: Infinity, ease: "linear", repeatDelay: 1 }} className="absolute left-1/4 w-px h-1/3 bg-gradient-to-b from-transparent via-foreground/6 to-transparent" />
        <motion.div initial={{ y: "200%" }} animate={{ y: "-100%" }} transition={{ duration: 12, repeat: Infinity, ease: "linear", repeatDelay: 4 }} className="absolute right-1/3 w-px h-1/4 bg-gradient-to-b from-transparent via-foreground/5 to-transparent" />
        
        {/* Diagonal scan line */}
        <motion.div
          initial={{ x: "-100%", y: "-100%" }}
          animate={{ x: "200%", y: "200%" }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 5 }}
          className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-foreground/6 to-transparent"
          style={{ transform: "rotate(45deg)" }}
        />
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
              USA Certified Since 2015
            </span>
          </motion.div>

          <motion.h1 className="text-5xl sm:text-6xl lg:text-8xl font-heading font-bold leading-[0.95] tracking-tight mb-8">
            {["Precision", "Drafting &", "3D Design"].map((text, i) => (
              <motion.span key={text} className="block overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <motion.span
                  className={`block ${i === 1 ? "text-gradient-highlight" : ""}`}
                  initial={{ y: "100%", skewY: 3 }}
                  animate={{ y: 0, skewY: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.2, ease: [0.33, 1, 0.68, 1] }}
                >
                  {text}
                </motion.span>
              </motion.span>
            ))}
          </motion.h1>

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
            Delivering permit-ready, precision-driven plans with secure quality.
            Certified drafting, 3D rendering & plan stamping you can trust.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <Link to="/contact">
              <Button variant="hero" size="xl">
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

          {/* Contact info row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="flex flex-wrap items-center gap-6 text-xs text-muted-foreground"
          >
            <a href="mailto:info@drafinity.us" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Mail className="w-3.5 h-3.5" />
              info@drafinity.us
            </a>
            <span className="hidden sm:inline text-border">|</span>
            <span>1209 Mountain Road Pl NE, Albuquerque, NM 87110</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
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
