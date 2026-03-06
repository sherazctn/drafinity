import { motion } from "framer-motion";

const BlueprintAnimation = () => {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] lg:w-[600px] xl:w-[700px] h-[500px] lg:h-[600px] xl:h-[700px] hidden lg:block pointer-events-none opacity-[0.12]">
      <svg viewBox="0 0 600 600" fill="none" className="w-full h-full">
        {/* Outer building frame */}
        <motion.rect
          x="150" y="100" width="300" height="400"
          stroke="hsl(0 0% 8%)" strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        {/* Roof line */}
        <motion.path
          d="M 120 100 L 300 20 L 480 100"
          stroke="hsl(0 0% 8%)" strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
        />
        {/* Floor lines */}
        {[220, 340].map((y, i) => (
          <motion.line
            key={y}
            x1="150" y1={y} x2="450" y2={y}
            stroke="hsl(0 0% 8%)" strokeWidth="0.8"
            strokeDasharray="6 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1 + i * 0.3 }}
          />
        ))}
        {/* Windows - Row 1 */}
        {[190, 270, 350].map((x, i) => (
          <motion.rect
            key={`w1-${x}`}
            x={x} y="130" width="40" height="60" rx="2"
            stroke="hsl(0 0% 8%)" strokeWidth="0.8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2 + i * 0.2 }}
          />
        ))}
        {/* Windows - Row 2 */}
        {[190, 270, 350].map((x, i) => (
          <motion.rect
            key={`w2-${x}`}
            x={x} y="250" width="40" height="60" rx="2"
            stroke="hsl(0 0% 8%)" strokeWidth="0.8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.6 + i * 0.2 }}
          />
        ))}
        {/* Door */}
        <motion.rect
          x="265" y="410" width="70" height="90" rx="3"
          stroke="hsl(0 0% 8%)" strokeWidth="1.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 3.2 }}
        />
        {/* Door knob */}
        <motion.circle
          cx="325" cy="460" r="4"
          stroke="hsl(0 0% 8%)" strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
        />
        {/* Dimension lines */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 3.5, duration: 1 }}
        >
          <line x1="150" y1="530" x2="450" y2="530" stroke="hsl(0 0% 8%)" strokeWidth="0.5" />
          <line x1="150" y1="520" x2="150" y2="540" stroke="hsl(0 0% 8%)" strokeWidth="0.5" />
          <line x1="450" y1="520" x2="450" y2="540" stroke="hsl(0 0% 8%)" strokeWidth="0.5" />
          <text x="300" y="548" textAnchor="middle" fill="hsl(0 0% 8%)" fontSize="10" fontFamily="Space Grotesk">
            30'-0"
          </text>
          <line x1="490" y1="100" x2="490" y2="500" stroke="hsl(0 0% 8%)" strokeWidth="0.5" />
          <line x1="480" y1="100" x2="500" y2="100" stroke="hsl(0 0% 8%)" strokeWidth="0.5" />
          <line x1="480" y1="500" x2="500" y2="500" stroke="hsl(0 0% 8%)" strokeWidth="0.5" />
        </motion.g>

        {/* Animated measuring crosshairs */}
        <motion.g
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
        >
          <line x1="290" y1="285" x2="310" y2="285" stroke="hsl(0 0% 8%)" strokeWidth="0.5" />
          <line x1="300" y1="275" x2="300" y2="295" stroke="hsl(0 0% 8%)" strokeWidth="0.5" />
          <circle cx="300" cy="285" r="8" stroke="hsl(0 0% 8%)" strokeWidth="0.5" fill="none" />
        </motion.g>

        {/* Rotating compass */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "80px 80px" }}
        >
          <circle cx="80" cy="80" r="25" stroke="hsl(0 0% 8%)" strokeWidth="0.5" fill="none" />
          <line x1="80" y1="55" x2="80" y2="65" stroke="hsl(0 0% 8%)" strokeWidth="1" />
          <text x="80" y="52" textAnchor="middle" fill="hsl(0 0% 8%)" fontSize="8" fontFamily="Space Grotesk">N</text>
        </motion.g>
      </svg>
    </div>
  );
};

export default BlueprintAnimation;
