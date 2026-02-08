import { motion } from "framer-motion";
import { MessageSquare, Search, PenTool, FileCheck, CheckCircle2 } from "lucide-react";
import AnimatedIcon from "@/components/AnimatedIcon";

const steps = [
  {
    icon: MessageSquare,
    animation: "pulse" as const,
    number: "01",
    title: "Consultation",
    description: "Share your project requirements. We'll discuss scope, timeline, and deliverables in a free consultation call.",
  },
  {
    icon: Search,
    animation: "wave" as const,
    number: "02",
    title: "Analysis & Quote",
    description: "We review your sketches, blueprints, or concepts and provide a detailed proposal within 24 hours.",
  },
  {
    icon: PenTool,
    animation: "draw" as const,
    number: "03",
    title: "Design & Draft",
    description: "Our certified team creates precision-driven plans using industry-leading CAD and BIM tools.",
  },
  {
    icon: FileCheck,
    animation: "glow" as const,
    number: "04",
    title: "Review & Revise",
    description: "You review the deliverables. We iterate until every detail meets your exact specifications.",
  },
  {
    icon: CheckCircle2,
    animation: "bounce" as const,
    number: "05",
    title: "Delivery & Support",
    description: "Receive permit-ready plans with stamping if needed. We provide ongoing support through permitting.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-card relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-30" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-heading uppercase tracking-[0.2em] text-muted-foreground mb-4 block"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-heading font-bold mb-4"
          >
            Our Proven Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-xl mx-auto"
          >
            From first contact to final delivery — a streamlined workflow designed for precision and speed
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />
          <motion.div
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 origin-left"
            style={{ background: "linear-gradient(90deg, hsl(0 0% 96% / 0.4), hsl(0 0% 96% / 0.1))" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5 }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative text-center group"
              >
                {/* Step circle */}
                <div className="relative mx-auto mb-6">
                  <motion.div
                    className="w-20 h-20 rounded-full border border-border bg-background flex items-center justify-center mx-auto relative z-10"
                    whileHover={{ scale: 1.1, borderColor: "hsl(0 0% 40%)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <AnimatedIcon icon={step.icon} variant={step.animation} size={24} />
                  </motion.div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-foreground text-background text-[10px] font-heading font-bold flex items-center justify-center z-20">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-sm font-heading font-semibold mb-2">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-[200px] mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
