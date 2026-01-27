import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { StarDecoration, SparkleDecoration } from "./decorations/StarDecoration";

const ManifestoSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 1, 1]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [100, 0]);
  
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.5, 0.6], [0, 1, 1]);
  const y2 = useTransform(scrollYProgress, [0.3, 0.5], [100, 0]);

  return (
    <section 
      ref={containerRef}
      className="min-h-[200vh] relative bg-manifesto"
    >
      {/* Decorative elements */}
      <div className="sticky top-0 h-screen">
        <StarDecoration 
          className="absolute top-20 left-10 md:left-20 text-manifesto-foreground" 
          size={45} 
          filled 
        />
        <SparkleDecoration 
          className="absolute top-32 right-16 md:right-32 text-manifesto-foreground" 
          size={35} 
        />
        <StarDecoration 
          className="absolute bottom-32 right-10 md:right-24 text-manifesto-foreground" 
          size={40} 
        />
        <SparkleDecoration 
          className="absolute bottom-40 left-20 md:left-40 text-manifesto-foreground" 
          size={28} 
        />
      </div>

      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 md:px-12 overflow-hidden">
        {/* Quote 1 */}
        <motion.p 
          style={{ opacity: opacity1, y: y1 }}
          className="font-display text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-center leading-tight max-w-5xl text-manifesto-foreground"
        >
          "Creative without strategy is called{" "}
          <span className="italic">art.</span>"
        </motion.p>

        {/* Quote 2 */}
        <motion.p 
          style={{ opacity: opacity2, y: y2 }}
          className="font-display text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-center leading-tight max-w-5xl mt-8 md:mt-12 text-manifesto-foreground"
        >
          "Creative with strategy is called{" "}
          <span className="bg-lime text-lime-foreground px-4 py-1 inline-block transform -rotate-1">
            advertising
          </span>"
        </motion.p>

        {/* Attribution */}
        <motion.div
          style={{ opacity: opacity2 }}
          className="mt-12"
        >
          <span className="font-script text-2xl md:text-4xl text-manifesto-foreground/70">— Leo Burnett</span>
        </motion.div>
      </div>
    </section>
  );
};

export default ManifestoSection;
