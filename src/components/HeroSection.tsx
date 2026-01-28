import { motion } from "framer-motion";
import { StarDecoration, SparkleDecoration, SmileyDecoration } from "./decorations/StarDecoration";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-hero py-16">
      {/* Decorative elements */}
      <StarDecoration 
        className="absolute top-12 left-8 md:top-16 md:left-20 text-foreground" 
        size={40} 
        filled 
      />
      <SparkleDecoration 
        className="absolute top-24 right-12 md:top-28 md:right-32 text-foreground" 
        size={25} 
      />
      <SmileyDecoration 
        className="absolute bottom-16 right-8 md:right-24 text-foreground" 
        size={50} 
      />

      {/* Main content */}
      <div className="relative z-10 w-full px-6 md:px-12 text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-hero-foreground">
            STRATEGY
          </h2>
          <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-hero-foreground mt-1">
            PORTFOLIO
          </h3>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="py-4"
        >
          <motion.h1 
            className="font-display text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold leading-none text-hero-foreground"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="block">Inés Gimeno</span>
            <span className="block mt-1">Novella</span>
          </motion.h1>
        </motion.div>

        {/* Decorative underline */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-32 h-1 bg-foreground mx-auto mt-4"
        />
      </div>
    </section>
  );
};

export default HeroSection;
