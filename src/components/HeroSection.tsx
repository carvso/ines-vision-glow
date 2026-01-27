import { motion } from "framer-motion";
import { StarDecoration, SparkleDecoration, SmileyDecoration } from "./decorations/StarDecoration";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero">
      {/* Decorative elements */}
      <StarDecoration 
        className="absolute top-12 left-8 md:top-20 md:left-20 text-foreground" 
        size={50} 
        filled 
      />
      <SparkleDecoration 
        className="absolute top-32 right-12 md:top-40 md:right-32 text-foreground" 
        size={30} 
      />
      <StarDecoration 
        className="absolute bottom-32 left-16 md:bottom-40 md:left-40 text-foreground" 
        size={35} 
      />
      <SmileyDecoration 
        className="absolute top-1/4 right-8 md:right-24 text-foreground" 
        size={60} 
      />
      <SparkleDecoration 
        className="absolute bottom-20 right-20 text-foreground" 
        size={40} 
      />

      {/* Main content */}
      <div className="relative z-10 w-full px-6 md:px-12 text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-hero-foreground">
            STRATEGY
          </h2>
          <h3 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-hero-foreground mt-2">
            PORTFOLIO
          </h3>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="py-8"
        >
          <motion.h1 
            className="font-display text-5xl md:text-7xl lg:text-9xl xl:text-[10rem] font-bold leading-none text-hero-foreground"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="block">Inés Gimeno</span>
            <span className="block mt-2">Novella</span>
          </motion.h1>
        </motion.div>

        {/* Decorative underline */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-48 h-1 bg-foreground mx-auto mt-8"
        />
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
          <span className="text-sm font-body tracking-widest text-hero-foreground">SCROLL</span>
          <div className="w-px h-12 bg-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
