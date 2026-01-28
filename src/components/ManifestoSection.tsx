import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { StarDecoration, SparkleDecoration } from "./decorations/StarDecoration";

const ManifestoSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [0, 1, 1]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], [60, 0]);
  
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.4, 0.5], [0, 1, 1]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.4], [60, 0]);

  return (
    <section 
      ref={containerRef}
      className="min-h-[120vh] relative bg-manifesto"
    >
      {/* Decorative elements */}
      <div className="sticky top-0 h-screen pointer-events-none">
        <StarDecoration 
          className="absolute top-16 left-8 md:left-16 text-manifesto-foreground" 
          size={35} 
          filled 
        />
        <SparkleDecoration 
          className="absolute top-24 right-12 md:right-24 text-manifesto-foreground" 
          size={28} 
        />
        <StarDecoration 
          className="absolute bottom-24 right-8 md:right-20 text-manifesto-foreground" 
          size={32} 
        />
      </div>

      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 md:px-12 overflow-hidden">
        {/* Quote 1 */}
        <motion.p 
          style={{ opacity: opacity1, y: y1 }}
          className="font-display text-xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-center leading-tight max-w-4xl text-manifesto-foreground"
        >
          "Creative without strategy is called{" "}
          <span className="italic">art.</span>"
        </motion.p>

        {/* Quote 2 */}
        <motion.p 
          style={{ opacity: opacity2, y: y2 }}
          className="font-display text-xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-center leading-tight max-w-4xl mt-6 md:mt-8 text-manifesto-foreground"
        >
          "Creative with strategy is called{" "}
          <span className="bg-lime text-lime-foreground px-3 py-1 inline-block transform -rotate-1">
            advertising
          </span>"
        </motion.p>

        {/* Attribution */}
        <motion.div
          style={{ opacity: opacity2 }}
          className="mt-8"
        >
          <span className="font-script text-xl md:text-3xl text-manifesto-foreground/70">— Leo Burnett</span>
        </motion.div>
      </div>
    </section>
  );
};

export default ManifestoSection;
