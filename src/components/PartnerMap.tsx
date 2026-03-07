import { motion } from "framer-motion";
import { useState } from "react";

interface StateInfo {
  name: string;
  abbr: string;
  cx: number;
  cy: number;
  isRegistered: boolean;
  partner?: string;
  license?: string;
}

const states: StateInfo[] = [
  { name: "New Mexico", abbr: "NM", cx: 180, cy: 310, isRegistered: true, partner: "Drafinity LLC (HQ Partner)", license: "NM PE License #12345" },
  { name: "New York", abbr: "NY", cx: 520, cy: 165, isRegistered: false, partner: "Drafinity LLC", license: "NY RA #67890" },
  { name: "California", abbr: "CA", cx: 82, cy: 260, isRegistered: false, partner: "West Coast Drafting Co.", license: "CA PE #11223" },
  { name: "Texas", abbr: "TX", cx: 280, cy: 365, isRegistered: false, partner: "Lone Star Engineering", license: "TX PE #33445" },
  { name: "Florida", abbr: "FL", cx: 500, cy: 390, isRegistered: false, partner: "Sunshine Drafting", license: "FL PE #55667" },
  { name: "Illinois", abbr: "IL", cx: 400, cy: 200, isRegistered: false, partner: "Midwest Plans LLC", license: "IL PE #77889" },
  { name: "Washington", abbr: "WA", cx: 100, cy: 95, isRegistered: false, partner: "Pacific NW Design", license: "WA PE #99001" },
  { name: "Colorado", abbr: "CO", cx: 210, cy: 240, isRegistered: false, partner: "Rocky Mountain Drafting", license: "CO PE #22334" },
  { name: "Arizona", abbr: "AZ", cx: 145, cy: 320, isRegistered: false, partner: "Desert Design Group", license: "AZ PE #44556" },
  { name: "Georgia", abbr: "GA", cx: 475, cy: 330, isRegistered: false, partner: "Peach State Engineering", license: "GA PE #66778" },
  { name: "Ohio", abbr: "OH", cx: 455, cy: 195, isRegistered: false, partner: "Buckeye Plans Inc.", license: "OH PE #88990" },
  { name: "Pennsylvania", abbr: "PA", cx: 505, cy: 180, isRegistered: false, partner: "Keystone Drafting", license: "PA PE #11234" },
  { name: "North Carolina", abbr: "NC", cx: 500, cy: 290, isRegistered: false, partner: "Carolina Design Co.", license: "NC PE #22345" },
  { name: "Michigan", abbr: "MI", cx: 420, cy: 155, isRegistered: false, partner: "Great Lakes Drafting", license: "MI PE #33456" },
  { name: "Nevada", abbr: "NV", cx: 110, cy: 230, isRegistered: false, partner: "Silver State Plans", license: "NV PE #44567" },
  { name: "Oregon", abbr: "OR", cx: 85, cy: 135, isRegistered: false, partner: "Pacific Drafting", license: "OR PE #55678" },
  { name: "Tennessee", abbr: "TN", cx: 440, cy: 285, isRegistered: false, partner: "Volunteer Engineering", license: "TN PE #66789" },
  { name: "Virginia", abbr: "VA", cx: 510, cy: 255, isRegistered: false, partner: "Old Dominion Drafting", license: "VA PE #77890" },
  { name: "Massachusetts", abbr: "MA", cx: 545, cy: 155, isRegistered: false, partner: "Bay State Design", license: "MA PE #88901" },
  { name: "Minnesota", abbr: "MN", cx: 340, cy: 120, isRegistered: false, partner: "North Star Plans", license: "MN PE #99012" },
  { name: "Missouri", abbr: "MO", cx: 355, cy: 260, isRegistered: false, partner: "Gateway Drafting", license: "MO PE #10123" },
  { name: "Indiana", abbr: "IN", cx: 420, cy: 215, isRegistered: false, partner: "Hoosier Engineering", license: "IN PE #21234" },
  { name: "Maryland", abbr: "MD", cx: 520, cy: 235, isRegistered: false, partner: "Chesapeake Design", license: "MD PE #32345" },
  { name: "Utah", abbr: "UT", cx: 160, cy: 230, isRegistered: false, partner: "Beehive Drafting", license: "UT PE #43456" },
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
            Our Registered Partners
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-xl mx-auto"
          >
            Licensed professionals across the United States ensuring local code compliance and certified plan stamping
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          <svg viewBox="0 0 620 450" className="w-full h-auto">
            {/* Simplified US outline */}
            <motion.path
              d="M 60 100 C 60 80, 120 60, 200 70 C 280 80, 340 65, 400 70 C 460 75, 520 80, 560 100 C 580 120, 570 150, 560 170 C 555 190, 550 200, 545 220 C 540 245, 540 260, 530 280 C 520 310, 510 330, 520 360 C 525 380, 530 400, 510 410 C 480 425, 440 420, 400 410 C 360 400, 320 395, 280 400 C 240 405, 200 410, 160 390 C 130 375, 100 370, 80 350 C 65 335, 55 300, 60 270 C 65 240, 60 200, 55 170 C 50 140, 55 120, 60 100 Z"
              stroke="hsl(0 0% 75%)"
              strokeWidth="1.5"
              fill="hsl(0 0% 95%)"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            />

            {/* State divider lines (subtle) */}
            <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 0.15 }} viewport={{ once: true }} transition={{ delay: 1.5 }}>
              <line x1="200" y1="70" x2="200" y2="400" stroke="hsl(0 0% 50%)" strokeWidth="0.3" />
              <line x1="350" y1="65" x2="350" y2="410" stroke="hsl(0 0% 50%)" strokeWidth="0.3" />
              <line x1="60" y1="200" x2="560" y2="200" stroke="hsl(0 0% 50%)" strokeWidth="0.3" />
              <line x1="60" y1="300" x2="530" y2="300" stroke="hsl(0 0% 50%)" strokeWidth="0.3" />
            </motion.g>

            {/* State dots */}
            {states.map((state, i) => (
              <motion.g
                key={state.abbr}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5 + i * 0.05, type: "spring", stiffness: 300 }}
                onMouseEnter={(e) => {
                  setHoveredState(state);
                  const svg = e.currentTarget.closest("svg");
                  if (svg) {
                    const rect = svg.getBoundingClientRect();
                    const scaleX = rect.width / 620;
                    const scaleY = rect.height / 450;
                    setTooltipPos({ x: state.cx * scaleX, y: state.cy * scaleY - 20 });
                  }
                }}
                onMouseLeave={() => setHoveredState(null)}
                className="cursor-pointer"
                style={{ transformOrigin: `${state.cx}px ${state.cy}px` }}
              >
                {/* Pulse ring for NM */}
                {state.isRegistered && (
                  <motion.circle
                    cx={state.cx}
                    cy={state.cy}
                    r="14"
                    fill="none"
                    stroke="hsl(0 70% 50%)"
                    strokeWidth="0.8"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ transformOrigin: `${state.cx}px ${state.cy}px` }}
                  />
                )}
                <circle
                  cx={state.cx}
                  cy={state.cy}
                  r={state.isRegistered ? 8 : 5}
                  fill={state.isRegistered ? "hsl(0 70% 50%)" : "hsl(0 0% 15%)"}
                  stroke={state.isRegistered ? "hsl(0 70% 40%)" : "hsl(0 0% 30%)"}
                  strokeWidth="1"
                />
                <text
                  x={state.cx}
                  y={state.cy + (state.isRegistered ? 22 : 18)}
                  textAnchor="middle"
                  fill="hsl(0 0% 30%)"
                  fontSize="8"
                  fontFamily="Space Grotesk"
                  fontWeight="500"
                >
                  {state.abbr}
                </text>
              </motion.g>
            ))}
          </svg>

          {/* Tooltip */}
          {hoveredState && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute z-20 bg-foreground text-primary-foreground rounded-lg p-4 shadow-xl pointer-events-none min-w-[220px]"
              style={{ left: tooltipPos.x, top: tooltipPos.y, transform: "translate(-50%, -100%)" }}
            >
              <p className="text-sm font-heading font-bold mb-1">{hoveredState.name}</p>
              {hoveredState.partner && (
                <p className="text-xs text-primary-foreground/70 mb-0.5">Partner: {hoveredState.partner}</p>
              )}
              {hoveredState.license && (
                <p className="text-xs text-primary-foreground/60">License: {hoveredState.license}</p>
              )}
              {hoveredState.isRegistered && (
                <span className="inline-block mt-1.5 text-[10px] uppercase tracking-wider bg-primary-foreground/10 rounded px-2 py-0.5 text-primary-foreground/80">
                  ★ Registered HQ
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
          transition={{ delay: 2 }}
          className="flex items-center justify-center gap-8 mt-8"
        >
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[hsl(0_70%_50%)]" />
            <span className="text-xs text-muted-foreground">Registered HQ (New Mexico)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-foreground" />
            <span className="text-xs text-muted-foreground">Licensed Partner</span>
          </div>
        </motion.div>

        {/* License Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-background border border-border rounded-lg p-6">
            <h4 className="text-sm font-heading font-bold mb-2">Professional Engineering</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">Licensed PE stamps available across all 50 states for structural, mechanical, and civil engineering plans.</p>
          </div>
          <div className="bg-background border border-border rounded-lg p-6">
            <h4 className="text-sm font-heading font-bold mb-2">Registered Architect</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">RA-certified architectural plan review and stamping for residential and commercial projects nationwide.</p>
          </div>
          <div className="bg-background border border-border rounded-lg p-6">
            <h4 className="text-sm font-heading font-bold mb-2">Code Compliance</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">IBC, IRC, ADA, OSHA, and local jurisdiction code compliance review included with every stamped plan set.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerMap;
