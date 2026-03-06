import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-foreground text-primary-foreground">
      {/* Animated background lines */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: ["-50%", "150%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 h-px w-1/2 bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent"
        />
        <motion.div
          animate={{ x: ["150%", "-50%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-2/3 h-px w-1/3 bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-heading uppercase tracking-[0.2em] text-primary-foreground/50 mb-4 block"
        >
          Start Your Project
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl lg:text-5xl font-heading font-bold mb-6 text-primary-foreground"
        >
          Ready to Build
          <br />
          Something Exceptional?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-primary-foreground/60 max-w-xl mx-auto mb-10 leading-relaxed"
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
            <Button className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-heading uppercase tracking-[0.1em] text-xs px-8 py-6 h-auto rounded-full">
              Get a Free Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <a href="tel:+19175401563">
            <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-heading uppercase tracking-[0.1em] text-xs px-8 py-6 h-auto rounded-full">
              <Phone className="w-4 h-4 mr-2" />
              Call (917) 540-1563
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
