import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface RevealTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}

const RevealText = ({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 0.6,
  y = 30 
}: RevealTextProps) => {
  const variants: Variants = {
    hidden: { 
      opacity: 0, 
      y 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] 
      }
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RevealText;
