import { motion } from "framer-motion";
import { useState } from "react";
import { USAMap, USAStateAbbreviation } from "@mirawision/usa-map-react";

const serviceStates: USAStateAbbreviation[] = [
  "WA", "OR", "CA", "NV", "ID", "UT", "AZ", "MT", "WY", "CO", "NM",
  "ND", "SD", "NE", "KS", "OK", "TX", "MN", "IA", "MO", "AR", "LA",
  "WI", "IL", "MS", "MI", "IN", "KY", "TN", "AL", "OH", "VA", "NC",
  "SC", "GA", "FL", "PA", "NY", "NJ", "MD", "CT", "MA",
];

const comingSoonStates: USAStateAbbreviation[] = ["VT", "NH", "ME", "DE", "WV"];

const PartnerMap = () => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const customStates: Record<string, any> = {};

  serviceStates.forEach((abbr) => {
    customStates[abbr] = {
      fill: abbr === "NM" ? "hsl(0, 65%, 88%)" : "hsl(0, 0%, 90%)",
      stroke: "hsl(0, 0%, 70%)",
      onMouseEnter: () => setHoveredState(abbr),
      onMouseLeave: () => setHoveredState(null),
    };
  });

  comingSoonStates.forEach((abbr) => {
    customStates[abbr] = {
      fill: "hsl(0, 0%, 95%)",
      stroke: "hsl(0, 0%, 80%)",
      onMouseEnter: () => setHoveredState(abbr),
      onMouseLeave: () => setHoveredState(null),
    };
  });

  // Highlight NM specially
  customStates["NM"] = {
    ...customStates["NM"],
    fill: hoveredState === "NM" ? "hsl(0, 65%, 80%)" : "hsl(0, 65%, 88%)",
    stroke: "hsl(0, 60%, 50%)",
  };

  // Hover effect for other states
  if (hoveredState && hoveredState !== "NM") {
    const isService = serviceStates.includes(hoveredState as USAStateAbbreviation);
    customStates[hoveredState] = {
      ...customStates[hoveredState],
      fill: isService ? "hsl(0, 0%, 82%)" : "hsl(0, 0%, 90%)",
    };
  }

  return (
    <section className="py-24 lg:py-32 bg-card border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-heading uppercase tracking-[0.2em] text-muted-foreground mb-4 block"
          >
            Nationwide Coverage
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-heading font-bold mb-4"
          >
            States We Serve
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-xl mx-auto"
          >
            Professional drafting, design, and plan stamping services available across the United States
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          <USAMap
            customStates={customStates}
            defaultState={{
              fill: "hsl(0, 0%, 93%)",
              stroke: "hsl(0, 0%, 75%)",
            }}
            label={{
              enabled: true,
            }}
            tooltip={{
              enabled: true,
              render: (abbr: USAStateAbbreviation) => {
                const isHQ = abbr === "NM";
                const isService = serviceStates.includes(abbr);
                const isComingSoon = comingSoonStates.includes(abbr);
                return (
                  <div className="bg-foreground text-primary-foreground rounded-lg p-3 shadow-xl min-w-[180px]">
                    <p className="text-sm font-heading font-bold">{abbr}</p>
                    <p className="text-xs text-primary-foreground/70 mt-1">
                      {isHQ
                        ? "Headquarters — Full Service"
                        : isService
                          ? "Drafting & Stamping Available"
                          : isComingSoon
                            ? "Coming Soon"
                            : "Contact for Availability"}
                    </p>
                    {isHQ && (
                      <span className="inline-block mt-1.5 text-[10px] uppercase tracking-wider bg-primary-foreground/10 rounded px-2 py-0.5 text-primary-foreground/80">
                        ★ HQ
                      </span>
                    )}
                  </div>
                );
              },
            }}
          />
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-8"
        >
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ background: "hsl(0, 60%, 50%)" }} />
            <span className="text-xs text-muted-foreground">Headquarters (New Mexico)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded border" style={{ background: "hsl(0, 0%, 90%)", borderColor: "hsl(0, 0%, 70%)" }} />
            <span className="text-xs text-muted-foreground">Service Available</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded border" style={{ background: "hsl(0, 0%, 95%)", borderColor: "hsl(0, 0%, 80%)" }} />
            <span className="text-xs text-muted-foreground">Coming Soon</span>
          </div>
        </motion.div>

        {/* Trust cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-background border border-border rounded-lg p-6">
            <h4 className="text-sm font-heading font-bold mb-2">Professional Engineering</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">PE-stamped plans available across all active states for structural, mechanical, and civil engineering.</p>
          </div>
          <div className="bg-background border border-border rounded-lg p-6">
            <h4 className="text-sm font-heading font-bold mb-2">Registered Architect</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">RA-certified architectural plan review and stamping for residential and commercial projects.</p>
          </div>
          <div className="bg-background border border-border rounded-lg p-6">
            <h4 className="text-sm font-heading font-bold mb-2">Code Compliance</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">IBC, IRC, ADA, OSHA, and local jurisdiction code compliance review included with every plan set.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerMap;
