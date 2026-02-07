import { type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

type AnimationVariant =
  | "float"
  | "pulse"
  | "rotate"
  | "bounce"
  | "swing"
  | "draw"
  | "morph"
  | "glow"
  | "spin-pulse"
  | "wave"
  | "shake"
  | "flip";

const animationMap: Record<string, any> = {
  float: {
    y: [0, -8, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
  pulse: {
    scale: [1, 1.2, 1],
    opacity: [1, 0.7, 1],
    transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
  },
  rotate: {
    rotate: [0, 360],
    transition: { duration: 8, repeat: Infinity, ease: "linear" },
  },
  bounce: {
    y: [0, -6, 0, -3, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
  swing: {
    rotate: [0, 10, -10, 5, -5, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
  draw: {
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" as const },
  },
  morph: {
    scale: [1, 1.1, 0.95, 1.05, 1],
    rotate: [0, 5, -5, 3, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
  glow: {
    filter: [
      "drop-shadow(0 0 0px hsl(0 0% 100% / 0))",
      "drop-shadow(0 0 8px hsl(0 0% 100% / 0.5))",
      "drop-shadow(0 0 0px hsl(0 0% 100% / 0))",
    ],
    transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
  },
  "spin-pulse": {
    rotate: [0, 180, 360],
    scale: [1, 1.15, 1],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
  wave: {
    x: [0, 4, -4, 2, 0],
    y: [0, -3, 3, -1, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
  shake: {
    x: [0, -3, 3, -2, 2, 0],
    transition: { duration: 0.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" },
  },
  flip: {
    rotateY: [0, 180, 360],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const hoverAnimation = {
  scale: 1.25,
  rotate: 5,
  transition: { type: "spring" as const, stiffness: 300, damping: 15 },
};

interface AnimatedIconProps {
  icon: LucideIcon;
  variant?: AnimationVariant;
  size?: number;
  className?: string;
}

const AnimatedIcon = ({
  icon: Icon,
  variant = "float",
  size = 32,
  className = "",
}: AnimatedIconProps) => {
  return (
    <motion.div
      animate={animationMap[variant]}
      whileHover={hoverAnimation}
      className={`inline-flex items-center justify-center text-foreground ${className}`}
    >
      <Icon size={size} strokeWidth={1.5} />
    </motion.div>
  );
};

export default AnimatedIcon;
