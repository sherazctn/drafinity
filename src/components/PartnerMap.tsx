import { motion } from "framer-motion";
import { useState } from "react";

interface StateInfo {
  name: string;
  abbr: string;
  path: string;
  isHQ: boolean;
  serviceAvailable: boolean;
}

// Simplified USA state paths (approximate)
const statesData: StateInfo[] = [
  { name: "Washington", abbr: "WA", path: "M108,18 L140,15 L145,22 L150,50 L108,53 L100,35 Z", isHQ: false, serviceAvailable: true },
  { name: "Oregon", abbr: "OR", path: "M100,35 L108,53 L150,50 L148,82 L95,85 L85,60 Z", isHQ: false, serviceAvailable: true },
  { name: "California", abbr: "CA", path: "M85,60 L95,85 L100,120 L105,160 L95,175 L75,165 L65,130 L70,90 Z", isHQ: false, serviceAvailable: true },
  { name: "Nevada", abbr: "NV", path: "M95,85 L148,82 L145,95 L138,150 L105,160 L100,120 Z", isHQ: false, serviceAvailable: true },
  { name: "Idaho", abbr: "ID", path: "M150,50 L168,30 L178,45 L175,90 L148,82 Z", isHQ: false, serviceAvailable: true },
  { name: "Utah", abbr: "UT", path: "M148,82 L175,90 L172,135 L138,150 L145,95 Z", isHQ: false, serviceAvailable: true },
  { name: "Arizona", abbr: "AZ", path: "M138,150 L172,135 L168,185 L120,190 L105,160 Z", isHQ: false, serviceAvailable: true },
  { name: "Montana", abbr: "MT", path: "M168,30 L150,18 L210,12 L240,15 L235,50 L178,45 Z", isHQ: false, serviceAvailable: true },
  { name: "Wyoming", abbr: "WY", path: "M178,45 L235,50 L232,90 L175,90 Z", isHQ: false, serviceAvailable: true },
  { name: "Colorado", abbr: "CO", path: "M175,90 L232,90 L228,135 L172,135 Z", isHQ: false, serviceAvailable: true },
  { name: "New Mexico", abbr: "NM", path: "M172,135 L228,135 L225,190 L168,185 Z", isHQ: true, serviceAvailable: true },
  { name: "North Dakota", abbr: "ND", path: "M240,15 L290,12 L288,42 L235,45 Z", isHQ: false, serviceAvailable: true },
  { name: "South Dakota", abbr: "SD", path: "M235,45 L288,42 L286,75 L232,78 Z", isHQ: false, serviceAvailable: true },
  { name: "Nebraska", abbr: "NE", path: "M232,78 L286,75 L295,80 L290,108 L228,110 Z", isHQ: false, serviceAvailable: true },
  { name: "Kansas", abbr: "KS", path: "M228,110 L290,108 L288,142 L225,145 Z", isHQ: false, serviceAvailable: true },
  { name: "Oklahoma", abbr: "OK", path: "M225,145 L288,142 L290,155 L280,172 L225,175 Z", isHQ: false, serviceAvailable: true },
  { name: "Texas", abbr: "TX", path: "M225,175 L280,172 L290,185 L285,230 L260,255 L230,250 L210,230 L225,190 Z", isHQ: false, serviceAvailable: true },
  { name: "Minnesota", abbr: "MN", path: "M290,12 L330,10 L335,18 L340,65 L295,68 L288,42 Z", isHQ: false, serviceAvailable: true },
  { name: "Iowa", abbr: "IA", path: "M295,68 L340,65 L345,100 L295,105 Z", isHQ: false, serviceAvailable: true },
  { name: "Missouri", abbr: "MO", path: "M295,105 L345,100 L350,110 L348,148 L290,142 Z", isHQ: false, serviceAvailable: true },
  { name: "Arkansas", abbr: "AR", path: "M290,142 L348,148 L345,178 L290,172 Z", isHQ: false, serviceAvailable: true },
  { name: "Louisiana", abbr: "LA", path: "M290,172 L345,178 L350,210 L330,218 L295,210 Z", isHQ: false, serviceAvailable: true },
  { name: "Wisconsin", abbr: "WI", path: "M340,18 L370,15 L375,25 L378,68 L345,72 L340,65 Z", isHQ: false, serviceAvailable: true },
  { name: "Illinois", abbr: "IL", path: "M345,72 L378,68 L380,78 L375,128 L348,132 L345,100 Z", isHQ: false, serviceAvailable: true },
  { name: "Mississippi", abbr: "MS", path: "M345,178 L372,175 L375,215 L350,210 Z", isHQ: false, serviceAvailable: true },
  { name: "Michigan", abbr: "MI", path: "M375,15 L385,12 L400,18 L408,55 L395,65 L378,68 L375,25 Z", isHQ: false, serviceAvailable: true },
  { name: "Indiana", abbr: "IN", path: "M378,68 L395,65 L398,78 L395,120 L375,128 L380,78 Z", isHQ: false, serviceAvailable: true },
  { name: "Kentucky", abbr: "KY", path: "M375,128 L395,120 L425,115 L430,135 L370,142 Z", isHQ: false, serviceAvailable: true },
  { name: "Tennessee", abbr: "TN", path: "M370,142 L430,135 L435,155 L365,162 Z", isHQ: false, serviceAvailable: true },
  { name: "Alabama", abbr: "AL", path: "M365,162 L395,158 L400,200 L372,205 L372,175 Z", isHQ: false, serviceAvailable: true },
  { name: "Ohio", abbr: "OH", path: "M395,65 L408,55 L430,52 L435,65 L432,105 L425,115 L395,120 L398,78 Z", isHQ: false, serviceAvailable: true },
  { name: "West Virginia", abbr: "WV", path: "M425,85 L440,82 L445,105 L435,115 L425,115 L432,105 Z", isHQ: false, serviceAvailable: false },
  { name: "Virginia", abbr: "VA", path: "M435,115 L445,105 L475,100 L480,118 L440,125 Z", isHQ: false, serviceAvailable: true },
  { name: "North Carolina", abbr: "NC", path: "M435,125 L480,118 L495,135 L440,145 Z", isHQ: false, serviceAvailable: true },
  { name: "South Carolina", abbr: "SC", path: "M440,145 L475,140 L480,162 L448,165 Z", isHQ: false, serviceAvailable: true },
  { name: "Georgia", abbr: "GA", path: "M395,158 L435,155 L448,165 L445,200 L400,200 Z", isHQ: false, serviceAvailable: true },
  { name: "Florida", abbr: "FL", path: "M400,200 L445,200 L455,215 L450,250 L430,270 L415,255 L400,220 Z", isHQ: false, serviceAvailable: true },
  { name: "Pennsylvania", abbr: "PA", path: "M430,52 L470,48 L478,58 L475,82 L440,82 L435,65 Z", isHQ: false, serviceAvailable: true },
  { name: "New York", abbr: "NY", path: "M440,25 L470,20 L490,28 L495,48 L478,58 L470,48 L440,42 Z", isHQ: false, serviceAvailable: true },
  { name: "New Jersey", abbr: "NJ", path: "M478,58 L488,55 L490,78 L480,82 L475,82 Z", isHQ: false, serviceAvailable: true },
  { name: "Maryland", abbr: "MD", path: "M475,82 L490,78 L492,95 L480,100 L475,100 L445,105 L440,82 Z", isHQ: false, serviceAvailable: true },
  { name: "Connecticut", abbr: "CT", path: "M488,40 L498,38 L500,48 L490,50 Z", isHQ: false, serviceAvailable: true },
  { name: "Massachusetts", abbr: "MA", path: "M490,28 L505,25 L510,35 L498,38 L488,40 L495,32 Z", isHQ: false, serviceAvailable: true },
  { name: "Vermont", abbr: "VT", path: "M480,15 L490,12 L492,25 L482,28 Z", isHQ: false, serviceAvailable: false },
  { name: "New Hampshire", abbr: "NH", path: "M490,12 L498,10 L500,25 L492,25 Z", isHQ: false, serviceAvailable: false },
  { name: "Maine", abbr: "ME", path: "M498,0 L515,2 L510,22 L500,25 L498,10 Z", isHQ: false, serviceAvailable: false },
  { name: "Delaware", abbr: "DE", path: "M488,72 L495,70 L496,82 L490,82 Z", isHQ: false, serviceAvailable: false },
];

const PartnerMap = () => {
  const [hoveredState, setHoveredState] = useState<StateInfo | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

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
          className="relative max-w-4xl mx-auto"
        >
          <svg viewBox="0 0 530 280" className="w-full h-auto">
            {/* Background */}
            <rect x="0" y="0" width="530" height="280" fill="transparent" />

            {/* States */}
            {statesData.map((state, i) => (
              <motion.path
                key={state.abbr}
                d={state.path}
                fill={state.isHQ ? "hsl(0 65% 92%)" : state.serviceAvailable ? "hsl(0 0% 93%)" : "hsl(0 0% 96%)"}
                stroke="hsl(0 0% 75%)"
                strokeWidth="0.8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.02 }}
                className="cursor-pointer transition-colors duration-200"
                onMouseEnter={(e) => {
                  setHoveredState(state);
                  const svg = e.currentTarget.closest("svg");
                  if (svg) {
                    const rect = svg.getBoundingClientRect();
                    const bbox = e.currentTarget.getBBox();
                    const scaleX = rect.width / 530;
                    const scaleY = rect.height / 280;
                    setTooltipPos({
                      x: (bbox.x + bbox.width / 2) * scaleX,
                      y: bbox.y * scaleY - 10,
                    });
                  }
                }}
                onMouseLeave={() => setHoveredState(null)}
                whileHover={{ fill: state.isHQ ? "hsl(0 65% 85%)" : state.serviceAvailable ? "hsl(0 0% 85%)" : "hsl(0 0% 90%)" }}
              />
            ))}

            {/* HQ marker for New Mexico */}
            <motion.circle
              cx="198" cy="160" r="5"
              fill="hsl(0 70% 50%)"
              stroke="hsl(0 0% 100%)"
              strokeWidth="1.5"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5, type: "spring" }}
            />
            <motion.circle
              cx="198" cy="160" r="10"
              fill="none"
              stroke="hsl(0 70% 50%)"
              strokeWidth="0.8"
              animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ transformOrigin: "198px 160px" }}
            />
          </svg>

          {/* Tooltip */}
          {hoveredState && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute z-20 bg-foreground text-primary-foreground rounded-lg p-3 shadow-xl pointer-events-none min-w-[180px]"
              style={{ left: tooltipPos.x, top: tooltipPos.y, transform: "translate(-50%, -100%)" }}
            >
              <p className="text-sm font-heading font-bold">{hoveredState.name}</p>
              <p className="text-xs text-primary-foreground/70 mt-1">
                {hoveredState.isHQ
                  ? "Headquarters — Full Service"
                  : hoveredState.serviceAvailable
                    ? "Drafting & Stamping Available"
                    : "Coming Soon"}
              </p>
              {hoveredState.isHQ && (
                <span className="inline-block mt-1.5 text-[10px] uppercase tracking-wider bg-primary-foreground/10 rounded px-2 py-0.5 text-primary-foreground/80">
                  ★ HQ
                </span>
              )}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-foreground" />
            </motion.div>
          )}
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
            <span className="w-3 h-3 rounded-full" style={{ background: "hsl(0 70% 50%)" }} />
            <span className="text-xs text-muted-foreground">Headquarters (New Mexico)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded border" style={{ background: "hsl(0 0% 93%)", borderColor: "hsl(0 0% 75%)" }} />
            <span className="text-xs text-muted-foreground">Service Available</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded border" style={{ background: "hsl(0 0% 96%)", borderColor: "hsl(0 0% 85%)" }} />
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
