import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "", label: "States Covered" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 200, suffix: "+", label: "Happy Clients" },
  { value: 24, suffix: "hr", label: "Turnaround Time" },
];

const CounterNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2.5, ease: "easeOut" });
    }
  }, [isInView, count, value]);

  return (
    <span ref={ref} className="flex items-baseline gap-0.5 justify-center">
      <motion.span>{rounded}</motion.span>
      <span className="text-muted-foreground">{suffix}</span>
    </span>
  );
};

const CounterStats = () => {
  return (
    <section className="relative w-full bg-foreground text-primary-foreground">
      {/* Animated line accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent"
        />
        <motion.div
          animate={{ x: ["200%", "-100%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 h-px w-1/4 bg-gradient-to-r from-transparent via-primary-foreground/15 to-transparent"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center relative"
            >
              <p className="text-3xl lg:text-5xl font-heading font-bold stat-number mb-2 text-primary-foreground">
                <CounterNumber value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-[10px] sm:text-xs text-primary-foreground/50 uppercase tracking-[0.15em]">
                {stat.label}
              </p>
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-primary-foreground/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterStats;
