import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
      className="min-h-[200vh] relative bg-background"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 md:px-12 overflow-hidden">
        {/* Quote 1 */}
        <motion.p 
          style={{ opacity: opacity1, y: y1 }}
          className="font-display text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-center leading-tight max-w-6xl"
        >
          "Creative without strategy is called{" "}
          <span className="italic">art.</span>"
        </motion.p>

        {/* Quote 2 */}
        <motion.p 
          style={{ opacity: opacity2, y: y2 }}
          className="font-display text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-center leading-tight max-w-6xl mt-8 md:mt-12"
        >
          "Creative with strategy is called{" "}
          <span className="bg-lime text-lime-foreground px-4 py-1 inline-block transform -rotate-1">
            advertising
          </span>"
        </motion.p>

        {/* Decorative elements */}
        <motion.div
          style={{ opacity: opacity2 }}
          className="absolute bottom-20 left-10 md:left-20"
        >
          <span className="font-script text-2xl md:text-4xl text-muted-foreground">— Leo Burnett</span>
        </motion.div>
      </div>
    </section>
  );
};

export default ManifestoSection;