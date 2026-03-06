import { motion, useAnimationFrame } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useRef, useState } from "react";

const testimonials = [
  {
    quote: "Drafinity delivered our complete set of construction documents ahead of schedule. Their attention to detail saved us from costly revisions during permitting.",
    name: "Michael Chen",
    role: "General Contractor, NYC",
  },
  {
    quote: "The 3D renderings were exceptional — our clients were able to visualize the project perfectly before construction even began. Outstanding work.",
    name: "Sarah Williams",
    role: "Interior Designer, LA",
  },
  {
    quote: "We've relied on Drafinity for plan stamping across multiple states. Fast turnaround, always compliant, always professional.",
    name: "James Rodriguez",
    role: "Development Firm Owner, FL",
  },
  {
    quote: "Their BIM modeling caught clashes that would have cost us over $200K in change orders. Drafinity is now our go-to for every project.",
    name: "Robert Martinez",
    role: "Project Manager, TX",
  },
  {
    quote: "From initial sketches to permit-ready documents in under a week. The speed and quality are unmatched in the industry.",
    name: "Emily Parker",
    role: "Architect, Chicago",
  },
  {
    quote: "We needed plans stamped across 15 states for a retail rollout. Drafinity handled it flawlessly — all permits approved first submission.",
    name: "David Kim",
    role: "Retail Developer, CA",
  },
];

const allCards = [...testimonials, ...testimonials];

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useAnimationFrame((_, delta) => {
    if (isPaused) return;
    setOffset((prev) => {
      const speed = 0.03;
      const next = prev + delta * speed;
      const cardWidth = 380;
      const totalWidth = testimonials.length * cardWidth;
      return next >= totalWidth ? next - totalWidth : next;
    });
  });

  return (
    <section className="py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-heading uppercase tracking-[0.2em] text-muted-foreground mb-4 block"
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
      </div>

      <div
        ref={containerRef}
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-6"
          style={{
            transform: `translateX(-${offset}px)`,
            width: "max-content",
          }}
        >
          {allCards.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="w-[350px] flex-shrink-0 bg-card border border-border rounded-lg p-8 flex flex-col shadow-sm"
            >
              <Quote className="w-8 h-8 text-muted-foreground/30 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="w-3.5 h-3.5 fill-foreground text-foreground" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="text-sm font-heading font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
