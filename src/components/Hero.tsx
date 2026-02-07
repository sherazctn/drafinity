import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "500+", label: "Projects" },
  { value: "50", label: "States" },
  { value: "10+", label: "Years" },
  { value: "100%", label: "Satisfaction" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/85" />
      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 blueprint-grid" />

      {/* Animated lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
          className="absolute top-1/4 h-px w-1/3 bg-gradient-to-r from-transparent via-foreground/10 to-transparent"
        />
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
          className="absolute top-2/3 h-px w-1/4 bg-gradient-to-r from-transparent via-foreground/8 to-transparent"
        />
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: "100%" }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
          className="absolute left-1/4 w-px h-1/3 bg-gradient-to-b from-transparent via-foreground/6 to-transparent"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-32">
        <div className="max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-heading uppercase tracking-[0.2em] text-muted-foreground border border-border rounded-full px-4 py-1.5 mb-8">
              <motion.span
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-foreground"
              />
              USA Certified Since 2015
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-heading font-bold leading-[0.95] tracking-tight mb-8"
          >
            <span className="block">Precision</span>
            <span className="block text-gradient-highlight">Drafting &</span>
            <span className="block">3D Design</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg lg:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
          >
            Delivering permit-ready, precision-driven plans with secure quality.
            Certified drafting, 3D rendering & plan stamping you can trust.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 mb-20"
          >
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <a href="tel:+19175401563">
              <Button variant="hero-outline" size="xl">
                <Phone className="w-4 h-4" />
                Call (917) 540-1563
              </Button>
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-border pt-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.15 }}
                className="text-center sm:text-left"
              >
                <p className="text-2xl lg:text-3xl font-heading font-bold stat-number">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
