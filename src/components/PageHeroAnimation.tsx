import { motion, type Easing } from "framer-motion";

type PageType = "about" | "services" | "portfolio" | "contact" | "pricing" | "blog" | "software";

const easeInOut: Easing = "easeInOut";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { delay: i * 0.3, duration: 1.5, ease: easeInOut }, opacity: { delay: i * 0.3, duration: 0.3 } },
  }),
};

const fadeIn = (delay: number) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay, duration: 0.8 } },
});

// About page: Team/people silhouettes with connections
const AboutAnimation = () => (
  <svg viewBox="0 0 500 500" fill="none" className="w-full h-full">
    {/* Central hub */}
    <motion.circle cx="250" cy="250" r="40" stroke="hsl(0 0% 8%)" strokeWidth="1" variants={draw} custom={0} initial="hidden" animate="visible" />
    <motion.circle cx="250" cy="250" r="15" stroke="hsl(0 0% 8%)" strokeWidth="0.8" variants={draw} custom={0.5} initial="hidden" animate="visible" />
    {/* People nodes */}
    {[0, 60, 120, 180, 240, 300].map((angle, i) => {
      const x = 250 + 150 * Math.cos((angle * Math.PI) / 180);
      const y = 250 + 150 * Math.sin((angle * Math.PI) / 180);
      return (
        <motion.g key={angle}>
          <motion.line x1="250" y1="250" x2={x} y2={y} stroke="hsl(0 0% 8%)" strokeWidth="0.5" strokeDasharray="4 4" variants={draw} custom={i * 0.2 + 0.5} initial="hidden" animate="visible" />
          <motion.circle cx={x} cy={y} r="20" stroke="hsl(0 0% 8%)" strokeWidth="1" variants={draw} custom={i * 0.2 + 1} initial="hidden" animate="visible" />
          <motion.circle cx={x} cy={y} r="6" stroke="hsl(0 0% 8%)" strokeWidth="0.8" fill="hsl(0 0% 8% / 0.1)" variants={fadeIn(i * 0.2 + 1.5)} initial="hidden" animate="visible" />
        </motion.g>
      );
    })}
    {/* Orbiting dot */}
    <motion.circle cx="250" cy="250" r="3" fill="hsl(0 0% 8%)" animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "250px 250px", offsetPath: "path('M 250 150 A 100 100 0 1 1 249.9 150')" }}>
      <animateMotion dur="12s" repeatCount="indefinite" path="M 0,-100 A 100,100 0 1,1 -0.1,-100" />
    </motion.circle>
    {/* Award badge */}
    <motion.g variants={fadeIn(2.5)} initial="hidden" animate="visible">
      <motion.path d="M 250 80 L 260 100 L 280 105 L 265 120 L 268 140 L 250 130 L 232 140 L 235 120 L 220 105 L 240 100 Z" stroke="hsl(0 0% 8%)" strokeWidth="0.8" fill="none" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity }} style={{ transformOrigin: "250px 110px" }} />
    </motion.g>
  </svg>
);

// Services page: Drafting tools - ruler, compass, pencil
const ServicesAnimation = () => (
  <svg viewBox="0 0 500 500" fill="none" className="w-full h-full">
    {/* T-Square / Ruler */}
    <motion.rect x="100" y="200" width="300" height="12" rx="2" stroke="hsl(0 0% 8%)" strokeWidth="1" variants={draw} custom={0} initial="hidden" animate="visible" />
    {/* Ruler tick marks */}
    {Array.from({ length: 15 }).map((_, i) => (
      <motion.line key={i} x1={120 + i * 20} y1="200" x2={120 + i * 20} y2={i % 5 === 0 ? "190" : "195"} stroke="hsl(0 0% 8%)" strokeWidth="0.6" variants={fadeIn(1 + i * 0.05)} initial="hidden" animate="visible" />
    ))}
    {/* Compass */}
    <motion.circle cx="300" cy="320" r="80" stroke="hsl(0 0% 8%)" strokeWidth="0.8" strokeDasharray="6 3" variants={draw} custom={1} initial="hidden" animate="visible" />
    <motion.line x1="300" y1="240" x2="300" y2="320" stroke="hsl(0 0% 8%)" strokeWidth="1" variants={draw} custom={1.5} initial="hidden" animate="visible" />
    <motion.line x1="300" y1="240" x2="370" y2="340" stroke="hsl(0 0% 8%)" strokeWidth="1" variants={draw} custom={1.8} initial="hidden" animate="visible" />
    <motion.circle cx="300" cy="240" r="4" stroke="hsl(0 0% 8%)" strokeWidth="1" variants={fadeIn(2)} initial="hidden" animate="visible" />
    {/* Pencil */}
    <motion.g variants={draw} custom={2} initial="hidden" animate="visible">
      <motion.line x1="120" y1="350" x2="220" y2="280" stroke="hsl(0 0% 8%)" strokeWidth="8" strokeLinecap="round" />
      <motion.polygon points="120,350 110,360 115,365" stroke="hsl(0 0% 8%)" strokeWidth="0.8" fill="hsl(0 0% 8% / 0.2)" />
    </motion.g>
    {/* Blueprint grid overlay */}
    {[260, 300, 340, 380].map((y, i) => (
      <motion.line key={y} x1="100" y1={y} x2="200" y2={y} stroke="hsl(0 0% 8%)" strokeWidth="0.3" variants={fadeIn(2.5 + i * 0.1)} initial="hidden" animate="visible" />
    ))}
    {[120, 160, 200].map((x, i) => (
      <motion.line key={x} x1={x} y1="260" x2={x} y2="380" stroke="hsl(0 0% 8%)" strokeWidth="0.3" variants={fadeIn(2.8 + i * 0.1)} initial="hidden" animate="visible" />
    ))}
    {/* Rotating element */}
    <motion.g animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "300px 320px" }}>
      <line x1="300" y1="310" x2="300" y2="330" stroke="hsl(0 0% 8%)" strokeWidth="0.5" />
      <line x1="290" y1="320" x2="310" y2="320" stroke="hsl(0 0% 8%)" strokeWidth="0.5" />
    </motion.g>
  </svg>
);

// Portfolio page: Camera frame / gallery layout
const PortfolioAnimation = () => (
  <svg viewBox="0 0 500 500" fill="none" className="w-full h-full">
    {/* Gallery frames */}
    <motion.rect x="80" y="100" width="140" height="100" rx="3" stroke="hsl(0 0% 8%)" strokeWidth="1" variants={draw} custom={0} initial="hidden" animate="visible" />
    <motion.rect x="240" y="80" width="180" height="140" rx="3" stroke="hsl(0 0% 8%)" strokeWidth="1" variants={draw} custom={0.3} initial="hidden" animate="visible" />
    <motion.rect x="80" y="220" width="180" height="130" rx="3" stroke="hsl(0 0% 8%)" strokeWidth="1" variants={draw} custom={0.6} initial="hidden" animate="visible" />
    <motion.rect x="280" y="240" width="140" height="110" rx="3" stroke="hsl(0 0% 8%)" strokeWidth="1" variants={draw} custom={0.9} initial="hidden" animate="visible" />
    <motion.rect x="120" y="370" width="200" height="80" rx="3" stroke="hsl(0 0% 8%)" strokeWidth="1" variants={draw} custom={1.2} initial="hidden" animate="visible" />
    {/* Mountain/landscape icons inside frames */}
    <motion.path d="M 100 180 L 130 140 L 150 165 L 175 125 L 200 180" stroke="hsl(0 0% 8%)" strokeWidth="0.8" fill="none" variants={draw} custom={1.5} initial="hidden" animate="visible" />
    <motion.path d="M 260 200 L 300 120 L 330 160 L 370 100 L 400 200" stroke="hsl(0 0% 8%)" strokeWidth="0.8" fill="none" variants={draw} custom={1.8} initial="hidden" animate="visible" />
    {/* Sun circles */}
    <motion.circle cx="370" cy="110" r="12" stroke="hsl(0 0% 8%)" strokeWidth="0.6" variants={fadeIn(2)} initial="hidden" animate="visible" />
    <motion.circle cx="180" cy="130" r="8" stroke="hsl(0 0% 8%)" strokeWidth="0.6" variants={fadeIn(2.2)} initial="hidden" animate="visible" />
    {/* Cursor hand */}
    <motion.g animate={{ x: [0, 20, 0], y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
      <motion.path d="M 350 350 L 350 320 L 355 315 L 360 320 L 360 310 L 365 305 L 370 310 L 370 305 L 375 300 L 380 310 L 380 340 L 370 360 Z" stroke="hsl(0 0% 8%)" strokeWidth="0.8" fill="hsl(0 0% 8% / 0.05)" variants={fadeIn(2.5)} initial="hidden" animate="visible" />
    </motion.g>
  </svg>
);

// Contact page: Envelope opening with signal waves
const ContactAnimation = () => (
  <svg viewBox="0 0 500 500" fill="none" className="w-full h-full">
    {/* Envelope body */}
    <motion.rect x="120" y="220" width="260" height="160" rx="4" stroke="hsl(0 0% 8%)" strokeWidth="1.2" variants={draw} custom={0} initial="hidden" animate="visible" />
    {/* Envelope flap */}
    <motion.path d="M 120 220 L 250 310 L 380 220" stroke="hsl(0 0% 8%)" strokeWidth="1" variants={draw} custom={0.5} initial="hidden" animate="visible" />
    {/* Open flap */}
    <motion.path d="M 120 220 L 250 150 L 380 220" stroke="hsl(0 0% 8%)" strokeWidth="1" fill="hsl(0 0% 98%)" variants={draw} custom={0.8} initial="hidden" animate="visible" />
    {/* Letter coming out */}
    <motion.rect x="160" y="180" width="180" height="120" rx="2" stroke="hsl(0 0% 8%)" strokeWidth="0.8" fill="hsl(0 0% 98%)" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }} />
    {/* Letter lines */}
    {[200, 215, 230, 245].map((y, i) => (
      <motion.line key={y} x1="180" y1={y} x2={i === 3 ? "280" : "320"} y2={y} stroke="hsl(0 0% 8%)" strokeWidth="0.5" variants={fadeIn(2 + i * 0.1)} initial="hidden" animate="visible" />
    ))}
    {/* Signal waves */}
    {[30, 50, 70].map((r, i) => (
      <motion.path key={r} d={`M ${250 + r} ${120 - r * 0.3} A ${r} ${r} 0 0 0 ${250 - r} ${120 - r * 0.3}`} stroke="hsl(0 0% 8%)" strokeWidth="0.6" fill="none" animate={{ opacity: [0, 0.8, 0], scale: [0.9, 1.1, 0.9] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }} style={{ transformOrigin: "250px 120px" }} />
    ))}
    {/* Phone icon */}
    <motion.g variants={fadeIn(2.5)} initial="hidden" animate="visible">
      <motion.rect x="400" y="280" width="40" height="70" rx="6" stroke="hsl(0 0% 8%)" strokeWidth="0.8" />
      <motion.line x1="412" y1="340" x2="428" y2="340" stroke="hsl(0 0% 8%)" strokeWidth="0.5" />
      <motion.circle cx="420" cy="345" r="3" stroke="hsl(0 0% 8%)" strokeWidth="0.5" />
      <motion.g animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }} style={{ transformOrigin: "420px 315px" }}>
        <circle cx="420" cy="315" r="1.5" fill="hsl(0 0% 8% / 0.3)" />
      </motion.g>
    </motion.g>
  </svg>
);

// Pricing page: Calculator/chart
const PricingAnimation = () => (
  <svg viewBox="0 0 500 500" fill="none" className="w-full h-full">
    {/* Calculator body */}
    <motion.rect x="150" y="120" width="200" height="280" rx="8" stroke="hsl(0 0% 8%)" strokeWidth="1.2" variants={draw} custom={0} initial="hidden" animate="visible" />
    {/* Screen */}
    <motion.rect x="170" y="140" width="160" height="50" rx="3" stroke="hsl(0 0% 8%)" strokeWidth="0.8" fill="hsl(0 0% 8% / 0.03)" variants={draw} custom={0.5} initial="hidden" animate="visible" />
    {/* Digits on screen */}
    <motion.text x="310" y="175" textAnchor="end" fill="hsl(0 0% 8%)" fontSize="20" fontFamily="Space Grotesk" fontWeight="600" variants={fadeIn(1.5)} initial="hidden" animate="visible">$1,499</motion.text>
    {/* Calculator buttons grid */}
    {[0, 1, 2, 3].map((row) =>
      [0, 1, 2, 3].map((col) => (
        <motion.rect key={`${row}-${col}`} x={175 + col * 38} y={210 + row * 42} width={30} height={30} rx="4" stroke="hsl(0 0% 8%)" strokeWidth="0.6" fill={col === 3 ? "hsl(0 0% 8% / 0.08)" : "none"} variants={fadeIn(1 + (row * 4 + col) * 0.05)} initial="hidden" animate="visible" />
      ))
    )}
    {/* Bar chart beside */}
    {[320, 280, 350, 300, 260].map((h, i) => (
      <motion.rect key={i} x={390 + i * 18} y={500 - h} width="12" height={h - 200} rx="2" stroke="hsl(0 0% 8%)" strokeWidth="0.6" fill="hsl(0 0% 8% / 0.06)" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 2 + i * 0.15, duration: 0.6 }} style={{ transformOrigin: `${396 + i * 18}px 300px` }} />
    ))}
    {/* Pulsing dollar sign */}
    <motion.text x="250" y="450" textAnchor="middle" fill="hsl(0 0% 8% / 0.1)" fontSize="60" fontFamily="Space Grotesk" fontWeight="700" animate={{ opacity: [0.05, 0.15, 0.05] }} transition={{ duration: 3, repeat: Infinity }}>$</motion.text>
  </svg>
);

// Blog page: Open book with writing
const BlogAnimation = () => (
  <svg viewBox="0 0 500 500" fill="none" className="w-full h-full">
    {/* Open book - left page */}
    <motion.path d="M 250 130 C 200 130, 100 140, 80 160 L 80 400 C 100 380, 200 370, 250 370 Z" stroke="hsl(0 0% 8%)" strokeWidth="1" fill="hsl(0 0% 8% / 0.02)" variants={draw} custom={0} initial="hidden" animate="visible" />
    {/* Right page */}
    <motion.path d="M 250 130 C 300 130, 400 140, 420 160 L 420 400 C 400 380, 300 370, 250 370 Z" stroke="hsl(0 0% 8%)" strokeWidth="1" fill="hsl(0 0% 8% / 0.02)" variants={draw} custom={0.3} initial="hidden" animate="visible" />
    {/* Spine */}
    <motion.line x1="250" y1="130" x2="250" y2="370" stroke="hsl(0 0% 8%)" strokeWidth="1" variants={draw} custom={0.6} initial="hidden" animate="visible" />
    {/* Text lines - left */}
    {[180, 200, 220, 240, 260, 280, 300, 320].map((y, i) => (
      <motion.line key={`l-${y}`} x1="110" y1={y} x2={200 - (i % 3) * 15} y2={y} stroke="hsl(0 0% 8%)" strokeWidth="0.5" variants={fadeIn(1 + i * 0.08)} initial="hidden" animate="visible" />
    ))}
    {/* Text lines - right */}
    {[180, 200, 220, 240, 260, 280, 300, 320].map((y, i) => (
      <motion.line key={`r-${y}`} x1="280" y1={y} x2={370 - (i % 3) * 15} y2={y} stroke="hsl(0 0% 8%)" strokeWidth="0.5" variants={fadeIn(1.2 + i * 0.08)} initial="hidden" animate="visible" />
    ))}
    {/* Animated pen writing */}
    <motion.g animate={{ x: [0, 30, 0], y: [0, 3, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
      <motion.line x1="300" y1="180" x2="320" y2="160" stroke="hsl(0 0% 8%)" strokeWidth="2" strokeLinecap="round" variants={fadeIn(2)} initial="hidden" animate="visible" />
      <motion.circle cx="300" cy="180" r="1.5" fill="hsl(0 0% 8%)" variants={fadeIn(2)} initial="hidden" animate="visible" />
    </motion.g>
    {/* Floating lightbulb */}
    <motion.g animate={{ y: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
      <motion.circle cx="380" cy="110" r="18" stroke="hsl(0 0% 8%)" strokeWidth="0.8" variants={fadeIn(2.5)} initial="hidden" animate="visible" />
      <motion.path d="M 374 120 L 374 130 L 386 130 L 386 120" stroke="hsl(0 0% 8%)" strokeWidth="0.6" variants={fadeIn(2.7)} initial="hidden" animate="visible" />
      <motion.g animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }}>
        {[95, 90, 85].map((y, i) => (
          <line key={y} x1={377 + i * 3} y1={y + 10} x2={377 + i * 3} y2={y + 18} stroke="hsl(0 0% 8%)" strokeWidth="0.4" />
        ))}
      </motion.g>
    </motion.g>
  </svg>
);

// Software page: Circuit board / tech
const SoftwareAnimation = () => (
  <svg viewBox="0 0 500 500" fill="none" className="w-full h-full">
    {/* Monitor */}
    <motion.rect x="120" y="100" width="260" height="180" rx="6" stroke="hsl(0 0% 8%)" strokeWidth="1.2" variants={draw} custom={0} initial="hidden" animate="visible" />
    <motion.rect x="130" y="110" width="240" height="155" rx="2" stroke="hsl(0 0% 8%)" strokeWidth="0.5" fill="hsl(0 0% 8% / 0.02)" variants={draw} custom={0.3} initial="hidden" animate="visible" />
    {/* Monitor stand */}
    <motion.path d="M 220 280 L 220 310 L 180 320 L 320 320 L 280 310 L 280 280" stroke="hsl(0 0% 8%)" strokeWidth="0.8" variants={draw} custom={0.6} initial="hidden" animate="visible" />
    {/* Code lines on screen */}
    {[130, 145, 160, 175, 190, 205, 220, 235].map((y, i) => (
      <motion.line key={y} x1={145 + (i % 3) * 10} y1={y} x2={145 + 80 + (i % 2) * 60} y2={y} stroke="hsl(0 0% 8%)" strokeWidth={i === 0 ? "1" : "0.5"} variants={fadeIn(1 + i * 0.08)} initial="hidden" animate="visible" />
    ))}
    {/* Circuit traces */}
    <motion.path d="M 250 320 L 250 360 L 180 360 L 180 400 M 250 360 L 320 360 L 320 400" stroke="hsl(0 0% 8%)" strokeWidth="0.6" variants={draw} custom={1.5} initial="hidden" animate="visible" />
    {/* Circuit nodes */}
    {[[180, 400], [250, 400], [320, 400], [140, 430], [210, 430], [290, 430], [360, 430]].map(([x, y], i) => (
      <motion.g key={i}>
        <motion.rect x={x - 15} y={y - 10} width="30" height="20" rx="2" stroke="hsl(0 0% 8%)" strokeWidth="0.6" variants={fadeIn(2 + i * 0.1)} initial="hidden" animate="visible" />
        <motion.circle cx={x} cy={y} r="2" fill="hsl(0 0% 8% / 0.3)" variants={fadeIn(2.3 + i * 0.1)} initial="hidden" animate="visible" />
      </motion.g>
    ))}
    {/* Data pulse */}
    <motion.circle cx="250" cy="360" r="4" fill="hsl(0 0% 8%)" animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0.2, 0.8] }} transition={{ duration: 2, repeat: Infinity }} />
    {/* Gear icon */}
    <motion.g animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "420px 150px" }}>
      <circle cx="420" cy="150" r="20" stroke="hsl(0 0% 8%)" strokeWidth="0.6" fill="none" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
        const x1 = 420 + 17 * Math.cos((a * Math.PI) / 180);
        const y1 = 150 + 17 * Math.sin((a * Math.PI) / 180);
        const x2 = 420 + 24 * Math.cos((a * Math.PI) / 180);
        const y2 = 150 + 24 * Math.sin((a * Math.PI) / 180);
        return <line key={a} x1={x1} y1={y1} x2={x2} y2={y2} stroke="hsl(0 0% 8%)" strokeWidth="2" />;
      })}
      <circle cx="420" cy="150" r="8" stroke="hsl(0 0% 8%)" strokeWidth="0.6" fill="none" />
    </motion.g>
  </svg>
);

const animations: Record<PageType, React.FC> = {
  about: AboutAnimation,
  services: ServicesAnimation,
  portfolio: PortfolioAnimation,
  contact: ContactAnimation,
  pricing: PricingAnimation,
  blog: BlogAnimation,
  software: SoftwareAnimation,
};

const PageHeroAnimation = ({ page }: { page: PageType }) => {
  const Animation = animations[page];
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] lg:w-[500px] xl:w-[600px] h-[400px] lg:h-[500px] xl:h-[600px] hidden lg:block pointer-events-none opacity-[0.15]">
      <Animation />
    </div>
  );
};

export default PageHeroAnimation;
