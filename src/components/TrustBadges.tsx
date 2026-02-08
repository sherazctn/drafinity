import { motion } from "framer-motion";
import { Shield, Award, Lock, Zap, Globe, HeartHandshake } from "lucide-react";

const badges = [
  { icon: Shield, label: "USA Certified" },
  { icon: Award, label: "Licensed Professionals" },
  { icon: Lock, label: "Secure & Encrypted" },
  { icon: Zap, label: "Fast Turnaround" },
  { icon: Globe, label: "All 50 States" },
  { icon: HeartHandshake, label: "100% Satisfaction" },
];

const TrustBadges = () => {
  return (
    <section className="py-12 lg:py-16 border-y border-border bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <badge.icon className="w-4 h-4" />
              <span className="text-[11px] font-heading uppercase tracking-[0.12em]">
                {badge.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
