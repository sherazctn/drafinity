import { motion } from "framer-motion";
import { useState } from "react";
import { USAMap, USAStateAbbreviation } from "@mirawision/usa-map-react";

const allServices = [
  "2D Floor Plans", "3D Rendering", "Permit Drawing Preparation", "Structural Drafting",
  "MEP Drafting", "Site Plans", "BIM Modeling", "Interior Visualization",
  "Construction Documents", "Landscape Design", "Material Estimation",
  "Permit Expediting", "BIM Coordination & Clash Detection",
  "Code Reference Documentation", "As-Built Documentation",
  "Structural Drafting & Documentation",
];

const serviceStates: USAStateAbbreviation[] = [
  "WA", "OR", "CA", "NV", "ID", "UT", "AZ", "MT", "WY", "CO", "NM",
  "ND", "SD", "NE", "KS", "OK", "TX", "MN", "IA", "MO", "AR", "LA",
  "WI", "IL", "MS", "MI", "IN", "KY", "TN", "AL", "OH", "VA", "NC",
  "SC", "GA", "FL", "PA", "NY", "NJ", "MD", "CT", "MA", "HI", "AK",
];

const comingSoonStates: USAStateAbbreviation[] = ["VT", "NH", "ME", "DE", "WV", "RI", "DC" as USAStateAbbreviation];

// State native colors (flag/identity inspired)
const stateColors: Record<string, string> = {
  CA: "210, 60%, 55%", TX: "0, 70%, 55%", NY: "220, 55%, 50%", FL: "30, 80%, 55%",
  NM: "0, 65%, 55%", AZ: "15, 70%, 55%", CO: "210, 55%, 50%", WA: "140, 45%, 45%",
  OR: "210, 45%, 45%", NV: "220, 50%, 50%", UT: "10, 60%, 55%", ID: "200, 50%, 50%",
  MT: "210, 50%, 50%", WY: "15, 60%, 55%", ND: "210, 60%, 50%", SD: "210, 55%, 50%",
  NE: "40, 60%, 50%", KS: "210, 55%, 50%", OK: "10, 65%, 50%", MN: "210, 55%, 50%",
  IA: "210, 55%, 50%", MO: "0, 55%, 50%", AR: "0, 60%, 50%", LA: "210, 60%, 50%",
  WI: "0, 55%, 50%", IL: "210, 55%, 50%", MS: "0, 55%, 50%", MI: "210, 55%, 50%",
  IN: "40, 55%, 50%", KY: "210, 55%, 50%", TN: "0, 55%, 50%", AL: "0, 60%, 50%",
  OH: "0, 55%, 50%", VA: "210, 55%, 50%", NC: "0, 55%, 50%", SC: "210, 55%, 55%",
  GA: "0, 55%, 50%", PA: "210, 55%, 50%", NJ: "40, 55%, 50%", MD: "0, 60%, 50%",
  CT: "210, 55%, 50%", MA: "210, 55%, 50%", HI: "0, 60%, 50%", AK: "210, 55%, 50%",
};

const getStateServices = (abbr: string): string[] => {
  if (abbr === "NM") return allServices;
  const seed = abbr.charCodeAt(0) * 31 + abbr.charCodeAt(1);
  const count = 4 + (seed % 5);
  const shuffled = [...allServices].sort((a, b) => {
    const ha = (a.charCodeAt(0) * 37 + seed) % 100;
    const hb = (b.charCodeAt(0) * 37 + seed) % 100;
    return ha - hb;
  });
  return shuffled.slice(0, count);
};

const stateNames: Record<string, string> = {
  AL: "Alabama", AK: "Alaska", AZ: "Arizona", AR: "Arkansas", CA: "California",
  CO: "Colorado", CT: "Connecticut", DE: "Delaware", FL: "Florida", GA: "Georgia",
  HI: "Hawaii", ID: "Idaho", IL: "Illinois", IN: "Indiana", IA: "Iowa",
  KS: "Kansas", KY: "Kentucky", LA: "Louisiana", ME: "Maine", MD: "Maryland",
  MA: "Massachusetts", MI: "Michigan", MN: "Minnesota", MS: "Mississippi",
  MO: "Missouri", MT: "Montana", NE: "Nebraska", NV: "Nevada", NH: "New Hampshire",
  NJ: "New Jersey", NM: "New Mexico", NY: "New York", NC: "North Carolina",
  ND: "North Dakota", OH: "Ohio", OK: "Oklahoma", OR: "Oregon", PA: "Pennsylvania",
  RI: "Rhode Island", SC: "South Carolina", SD: "South Dakota", TN: "Tennessee",
  TX: "Texas", UT: "Utah", VT: "Vermont", VA: "Virginia", WA: "Washington",
  WV: "West Virginia", WI: "Wisconsin", WY: "Wyoming", DC: "District of Columbia",
};

const PartnerMap = () => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const customStates: Record<string, any> = {};

  serviceStates.forEach((abbr) => {
    const isHovered = hoveredState === abbr;
    const nativeColor = stateColors[abbr] || "0, 0%, 70%";
    customStates[abbr] = {
      fill: abbr === "NM"
        ? (isHovered ? "hsl(0, 65%, 50%)" : "hsl(0, 65%, 60%)")
        : (isHovered ? `hsl(${nativeColor})` : "hsl(0, 0%, 90%)"),
      stroke: isHovered ? `hsl(${nativeColor.split(",")[0]}, 70%, 35%)` : "hsl(0, 0%, 70%)",
      onMouseEnter: () => setHoveredState(abbr),
      onMouseLeave: () => setHoveredState(null),
    };
  });

  comingSoonStates.forEach((abbr) => {
    customStates[abbr] = {
      fill: hoveredState === abbr ? "hsl(0, 0%, 88%)" : "hsl(0, 0%, 95%)",
      stroke: "hsl(0, 0%, 80%)",
      onMouseEnter: () => setHoveredState(abbr),
      onMouseLeave: () => setHoveredState(null),
    };
  });

  return (
    <section className="py-24 lg:py-32 bg-card border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-xs font-heading uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
            Remote Drafting Support
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl lg:text-5xl font-heading font-bold mb-4">
            States We Serve
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-muted-foreground max-w-xl mx-auto">
            Drafinity provides remote drafting, BIM modeling, and construction documentation support. Where a licensed professional review is required, that responsibility rests with the client's designated licensed professional.
          </motion.p>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative max-w-5xl mx-auto">
          <USAMap
            customStates={customStates}
            defaultState={{
              fill: "hsl(0, 0%, 93%)",
              stroke: "hsl(0, 0%, 75%)",
              label: { enabled: true },
              tooltip: {
                enabled: true,
                render: (abbr: string) => {
                  const isHQ = abbr === "NM";
                  const isService = serviceStates.includes(abbr as USAStateAbbreviation);
                  const isComingSoon = comingSoonStates.includes(abbr as USAStateAbbreviation);
                  const services = isService ? getStateServices(abbr) : [];
                  const name = stateNames[abbr] || abbr;

                  return (
                    <div className="bg-foreground text-primary-foreground rounded-lg p-4 shadow-xl min-w-[260px] max-w-[340px]">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                          style={{ background: isHQ ? "hsl(0, 65%, 55%)" : isService ? `hsl(${stateColors[abbr] || "0, 0%, 70%"})` : "hsl(0, 0%, 85%)" }}
                        />
                        <p className="text-sm font-heading font-bold">{name} ({abbr})</p>
                      </div>

                      {/* Service type label */}
                      <p className="text-[10px] font-heading uppercase tracking-wider mb-2 px-2 py-0.5 rounded inline-block" style={{ background: isHQ ? "hsla(0,65%,55%,0.2)" : "hsla(0,0%,100%,0.1)" }}>
                        {isHQ ? "★ HQ — Drafting Support" : isService ? "Coverage Area" : isComingSoon ? "Coming Soon" : "Contact for Availability"}
                      </p>

                      {/* Partner info */}
                      {isService && !isHQ && (
                        <div className="mb-2">
                          <p className="text-[10px] text-primary-foreground/50">Partner: <span className="text-primary-foreground/70 italic">Coming Soon</span></p>
                          
                        </div>
                      )}
                      {isHQ && (
                        <div className="mb-2">
                          <p className="text-[10px] text-primary-foreground/50">Drafinity LLC — Registered</p>
                          <p className="text-[10px] text-primary-foreground/50">Drafinity LLC · Drafting & Documentation</p>
                        </div>
                      )}

                      {isService && services.length > 0 && (
                        <div className="border-t border-primary-foreground/10 pt-2 mt-1">
                          <p className="text-[10px] uppercase tracking-wider text-primary-foreground/50 mb-1.5">
                            {isHQ ? "Registered Services" : "Associated Services"}
                          </p>
                          <ul className="space-y-0.5">
                            {services.map((s) => (
                              <li key={s} className="text-[11px] text-primary-foreground/80 flex items-center gap-1.5">
                                <span className="w-1 h-1 rounded-full bg-primary-foreground/40 flex-shrink-0" />
                                {s} {!isHQ && <span className="text-primary-foreground/40 text-[9px]">· associated</span>}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {isHQ && (
                        <span className="inline-block mt-2 text-[10px] uppercase tracking-wider bg-primary-foreground/10 rounded px-2 py-0.5 text-primary-foreground/80">
                          ★ HQ — Albuquerque, NM
                        </span>
                      )}
                    </div>
                  );
                },
              },
            }}
          />
        </motion.div>

        {/* Legend */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1 }} className="flex flex-wrap items-center justify-center gap-6 mt-8">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ background: "hsl(0, 60%, 55%)" }} />
            <span className="text-xs text-muted-foreground">Drafinity HQ (New Mexico)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded border" style={{ background: "hsl(0, 0%, 90%)", borderColor: "hsl(0, 0%, 70%)" }} />
            <span className="text-xs text-muted-foreground">Coverage Area</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded border" style={{ background: "hsl(0, 0%, 95%)", borderColor: "hsl(0, 0%, 80%)" }} />
            <span className="text-xs text-muted-foreground">Coming Soon</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-background border border-border rounded-lg p-6">
            <h4 className="text-sm font-heading font-bold mb-2">Technical Drafting Support</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">Structural, MEP, and civil drafting documentation support prepared for review by the client's licensed professional of record.</p>
          </div>
          <div className="bg-background border border-border rounded-lg p-6">
            <h4 className="text-sm font-heading font-bold mb-2">Design Documentation Support</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">Building design documentation prepared to support your design team or licensed professional of record on residential and commercial projects.</p>
          </div>
          <div className="bg-background border border-border rounded-lg p-6">
            <h4 className="text-sm font-heading font-bold mb-2">Code Reference & Documentation</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">Construction documents prepared with reference to IBC, IRC, ADA, and OSHA standards. Formal code compliance determination is performed by the client's licensed professional of record.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerMap;
