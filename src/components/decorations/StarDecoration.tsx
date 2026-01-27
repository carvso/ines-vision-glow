import { motion } from "framer-motion";

interface StarDecorationProps {
  className?: string;
  size?: number;
  filled?: boolean;
  animate?: boolean;
}

export const StarDecoration = ({ className = "", size = 40, filled = false, animate = true }: StarDecorationProps) => {
  if (animate) {
    return (
      <motion.div 
        className={className}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" as const }}
      >
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 0L23.5 16.5L40 20L23.5 23.5L20 40L16.5 23.5L0 20L16.5 16.5L20 0Z"
            fill={filled ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </motion.div>
    );
  }

  return (
    <div className={className}>
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 0L23.5 16.5L40 20L23.5 23.5L20 40L16.5 23.5L0 20L16.5 16.5L20 0Z"
          fill={filled ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export const SparkleDecoration = ({ className = "", size = 24, animate = true }: Omit<StarDecorationProps, 'filled'>) => {
  if (animate) {
    return (
      <motion.div 
        className={className}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z"
            fill="currentColor"
          />
        </svg>
      </motion.div>
    );
  }

  return (
    <div className={className}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export const SmileyDecoration = ({ className = "", size = 80 }: { className?: string; size?: number }) => {
  return (
    <motion.div
      className={className}
      animate={{ y: [-5, 5, -5] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="3" fill="hsl(270, 60%, 50%)"/>
        <circle cx="28" cy="32" r="5" fill="white"/>
        <circle cx="52" cy="32" r="5" fill="white"/>
        <path
          d="M24 48C24 48 32 58 40 58C48 58 56 48 56 48"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
};
