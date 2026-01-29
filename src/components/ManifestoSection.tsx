import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Radiating lines SVG component
const RadiatingLines = () => {
  const lines = [];
  const numLines = 36; // Number of radiating lines
  
  for (let i = 0; i < numLines; i++) {
    const angle = (i * 360) / numLines;
    lines.push(
      <line
        key={i}
        x1="50%"
        y1="50%"
        x2={`${50 + 50 * Math.cos((angle * Math.PI) / 180)}%`}
        y2={`${50 + 50 * Math.sin((angle * Math.PI) / 180)}%`}
        stroke="hsl(0, 80%, 55%)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="8 16"
      />
    );
  }
  
  return (
    <svg 
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
    >
      {lines}
    </svg>
  );
};

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
      className="min-h-[100vh] relative bg-manifesto overflow-hidden"
    >
      {/* Radiating lines background */}
      <div className="absolute inset-0">
        <RadiatingLines />
      </div>

      {/* Sticky container for centering */}
      <div className="sticky top-0 h-screen flex items-center justify-center px-6 md:px-12">
        {/* Beige circular container */}
        <div className="relative z-10 bg-background rounded-full w-[85vw] h-[85vw] max-w-[500px] max-h-[500px] md:max-w-[600px] md:max-h-[600px] lg:max-w-[700px] lg:max-h-[700px] flex flex-col items-center justify-center p-8 md:p-12 shadow-2xl">
          {/* Quote 1 */}
          <motion.p 
            style={{ opacity: opacity1, y: y1 }}
            className="font-display text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center leading-tight text-foreground"
          >
            "Creative without strategy is called{" "}
            <span className="italic">art.</span>"
          </motion.p>

          {/* Quote 2 */}
          <motion.p 
            style={{ opacity: opacity2, y: y2 }}
            className="font-display text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center leading-tight mt-4 md:mt-6 text-foreground"
          >
            "Creative with strategy is called{" "}
            <span className="bg-lime text-lime-foreground px-2 py-0.5 md:px-3 md:py-1 inline-block transform -rotate-1">
              advertising
            </span>"
          </motion.p>

          {/* Attribution */}
          <motion.div
            style={{ opacity: opacity2 }}
            className="mt-6 md:mt-8"
          >
            <span className="font-script text-lg md:text-2xl text-foreground/70">— Leo Burnett</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
