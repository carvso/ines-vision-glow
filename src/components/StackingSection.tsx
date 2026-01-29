import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface StackingSectionProps {
  children: ReactNode;
  className?: string;
  index: number;
  totalSections: number;
}

const StackingSection = ({ children, className = "", index, totalSections }: StackingSectionProps) => {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Create depth effect - sections behind get slightly darker and scaled down
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const brightness = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 30]);

  // On mobile, disable sticky stacking for better usability
  if (isMobile) {
    return (
      <section className={`relative ${className}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {children}
        </motion.div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className={`sticky top-0 min-h-screen ${className}`}
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        style={{
          scale,
          y,
          filter: `brightness(${brightness.get()})`,
        }}
        className="relative w-full min-h-screen"
      >
        {/* Shadow overlay for depth */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0, 0.15]) }}
          className="absolute inset-0 bg-foreground pointer-events-none z-10"
        />
        {children}
      </motion.div>
    </section>
  );
};

export default StackingSection;
