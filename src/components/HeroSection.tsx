import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full px-6 md:px-12">
        {/* Top word - STRATEGY */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-8 md:top-16 left-6 md:left-12"
        >
          <h2 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-stroke-thin">
            STRATEGY
          </h2>
        </motion.div>

        {/* Center - Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center py-32"
        >
          <motion.h1 
            className="font-display text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold leading-none"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="block">Ines Cimcard</span>
            <span className="block text-lime mt-2">Novella</span>
          </motion.h1>
          
          {/* Decorative line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-32 h-1 bg-lime mx-auto mt-8"
          />
        </motion.div>

        {/* Bottom word - PORTFOLIO */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute bottom-8 md:bottom-16 right-6 md:right-12"
        >
          <h2 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-stroke-thin">
            PORTFOLIO
          </h2>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm font-body tracking-widest text-muted-foreground">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-foreground to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;