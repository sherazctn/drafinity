import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Drafinity delivered our complete set of construction documents ahead of schedule. Their attention to detail saved us from costly revisions during permitting.",
    name: "Michael Chen",
    role: "General Contractor, NYC",
  },
  {
    quote:
      "The 3D renderings were exceptional — our clients were able to visualize the project perfectly before construction even began. Outstanding work.",
    name: "Sarah Williams",
    role: "Interior Designer, LA",
  },
  {
    quote:
      "We've relied on Drafinity for plan stamping across multiple states. Fast turnaround, always compliant, always professional.",
    name: "James Rodriguez",
    role: "Development Firm Owner, FL",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 lg:py-32 bg-card blueprint-grid">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-heading uppercase tracking-[0.2em] text-primary mb-4 block"
          >
            Client Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-heading font-bold"
          >
            Trusted by Professionals
          </motion.h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-background border border-border rounded-lg p-8 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </p>
              <div>
                <p className="text-sm font-heading font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
