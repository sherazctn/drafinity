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

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Animated geometric background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div className="absolute inset-0 blueprint-grid" />
        <motion.div className="absolute top-20 right-[15%] w-64 h-64 border border-border/40 rounded-full" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} />
        <motion.div className="absolute top-40 right-[10%] w-40 h-40 border border-border/30 rounded-full" animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} />
        <motion.div className="absolute bottom-32 left-[8%] w-20 h-20 border border-border/20" animate={{ rotate: 45, scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute top-[30%] left-[5%] w-2 h-2 rounded-full bg-foreground/10" animate={{ y: [-10, 10, -10], opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 4, repeat: Infinity }} />
        <motion.div className="absolute top-[60%] left-[20%] w-3 h-3 rounded-full bg-foreground/8" animate={{ y: [10, -15, 10], opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} />
      </motion.div>

      {/* Animated lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div initial={{ x: "-100%" }} animate={{ x: "100%" }} transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 2 }} className="absolute top-1/4 h-px w-1/3 bg-gradient-to-r from-transparent via-foreground/8 to-transparent" />
        <motion.div initial={{ x: "100%" }} animate={{ x: "-100%" }} transition={{ duration: 10, repeat: Infinity, ease: "linear", repeatDelay: 3 }} className="absolute top-2/3 h-px w-1/4 bg-gradient-to-r from-transparent via-foreground/6 to-transparent" />
        <motion.div initial={{ y: "-100%" }} animate={{ y: "100%" }} transition={{ duration: 12, repeat: Infinity, ease: "linear", repeatDelay: 1 }} className="absolute left-1/4 w-px h-1/3 bg-gradient-to-b from-transparent via-foreground/5 to-transparent" />
      </div>

      <BlueprintAnimation />

      <motion.div className="relative z-10 container mx-auto px-4 lg:px-8 py-32" style={{ y: textY, opacity, scale }}>
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
                <motion.span className={`block ${i === 1 ? "text-gradient-highlight" : ""}`} initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.2 + i * 0.2, ease: [0.33, 1, 0.68, 1] }}>
                  {text}
                </motion.span>
              </motion.span>
            ))}
          </motion.h1>

          <motion.div className="h-px bg-foreground/20 mb-8 origin-left" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, delay: 1, ease: "easeOut" }} style={{ maxWidth: "200px" }} />

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="text-lg lg:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
            Delivering permit-ready, precision-driven plans with secure quality.
            Certified drafting, 3D rendering & plan stamping you can trust.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }} className="flex flex-col sm:flex-row gap-4 mb-8">
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
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} className="flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
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
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
        <span className="text-[10px] font-heading uppercase tracking-[0.2em] text-muted-foreground">Scroll</span>
        <motion.div className="w-5 h-8 rounded-full border border-border flex items-start justify-center p-1" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>
          <motion.div className="w-1 h-1.5 rounded-full bg-foreground" animate={{ y: [0, 12, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
