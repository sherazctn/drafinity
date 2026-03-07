import { motion } from "framer-motion";
import { MessageSquare, Search, PenTool, FileCheck, CheckCircle2 } from "lucide-react";
import AnimatedIcon from "@/components/AnimatedIcon";

const steps = [
  {
    icon: MessageSquare,
    animation: "pulse" as const,
    number: "01",
    title: "Consultation",
    subtitle: "Free · 30 min",
    description: "Share your project requirements. We'll discuss scope, timeline, and deliverables in a free consultation call.",
    details: ["Understand project scope", "Define timeline & budget", "Identify deliverables"],
  },
  {
    icon: Search,
    animation: "wave" as const,
    number: "02",
    title: "Analysis & Quote",
    subtitle: "Within 24 hrs",
    description: "We review your sketches, blueprints, or concepts and provide a detailed proposal within 24 hours.",
    details: ["Blueprint/sketch review", "Scope documentation", "Detailed cost breakdown"],
  },
  {
    icon: PenTool,
    animation: "draw" as const,
    number: "03",
    title: "Design & Draft",
    subtitle: "Precision-Driven",
    description: "Our certified team creates precision-driven plans using industry-leading CAD and BIM tools.",
    details: ["AutoCAD & Revit modeling", "Code compliance check", "Multi-discipline coordination"],
  },
  {
    icon: FileCheck,
    animation: "glow" as const,
    number: "04",
    title: "Review & Revise",
    subtitle: "Unlimited Revisions",
    description: "You review the deliverables. We iterate until every detail meets your exact specifications.",
    details: ["Client review portal", "Markup & redline tools", "Version tracking"],
  },
  {
    icon: CheckCircle2,
    animation: "bounce" as const,
    number: "05",
    title: "Delivery & Support",
    subtitle: "Permit-Ready",
    description: "Receive permit-ready plans with stamping if needed. We provide ongoing support through permitting.",
    details: ["PE/RA stamped plans", "Permit submission support", "Post-delivery assistance"],
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
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

        {/* Steps - alternating layout */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
          <motion.div
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 origin-top"
            style={{ background: "linear-gradient(180deg, hsl(0 0% 8% / 0.3), hsl(0 0% 8% / 0.05))" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3, delay: 0.5 }}
          />

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 mb-16 last:mb-0 ${
                  isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content side */}
                <div className={`flex-1 ${isLeft ? "lg:text-right" : "lg:text-left"}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-card border border-border rounded-xl p-8 card-hover relative overflow-hidden group"
                  >
                    {/* Background number */}
                    <span className="absolute -top-4 -right-2 text-[120px] font-heading font-bold text-muted/30 leading-none select-none pointer-events-none">
                      {step.number}
                    </span>

                    <div className={`relative z-10 ${isLeft ? "lg:text-right" : "lg:text-left"}`}>
                      <span className="text-[10px] font-heading uppercase tracking-[0.15em] text-muted-foreground bg-muted rounded-full px-3 py-1 inline-block mb-3">
                        {step.subtitle}
                      </span>
                      <h3 className="text-xl font-heading font-bold mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {step.description}
                      </p>
                      <ul className={`space-y-1.5 ${isLeft ? "lg:flex lg:flex-col lg:items-end" : ""}`}>
                        {step.details.map((detail, di) => (
                          <motion.li
                            key={detail}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 + di * 0.1 + 0.3 }}
                            className="flex items-center gap-2 text-xs text-muted-foreground"
                          >
                            <span className="w-1 h-1 rounded-full bg-foreground shrink-0" />
                            {detail}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>

                {/* Center icon */}
                <div className="relative z-10 shrink-0 order-first lg:order-none">
                  <motion.div
                    className="w-20 h-20 rounded-full border-2 border-border bg-card flex items-center justify-center shadow-lg relative"
                    whileHover={{ scale: 1.15, borderColor: "hsl(0 0% 40%)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <AnimatedIcon icon={step.icon} variant={step.animation} size={26} />
                  </motion.div>
                  <motion.span
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-foreground text-primary-foreground text-[10px] font-heading font-bold flex items-center justify-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3, type: "spring" }}
                  >
                    {step.number}
                  </motion.span>
                </div>

                {/* Empty side for alignment */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
