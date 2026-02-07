import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Gold accent line top */}
      <div className="gold-line mb-16" />

      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-heading uppercase tracking-[0.2em] text-primary mb-4 block"
        >
          Start Your Project
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl lg:text-5xl font-heading font-bold mb-6"
        >
          Ready to Build
          <br />
          <span className="text-gradient-gold">Something Exceptional?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Get in touch for a free consultation. We'll review your project
          requirements and deliver a detailed quote within 24 hours.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
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
      </div>
    </section>
  );
};

export default CTASection;
