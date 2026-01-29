import { motion, Variants } from "framer-motion";
import { StarDecoration, SparkleDecoration, SmileyDecoration } from "./decorations/StarDecoration";

const HeroSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero">
      {/* Decorative elements with reveal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <StarDecoration 
          className="absolute top-12 left-8 md:top-16 md:left-20 text-foreground" 
          size={40} 
          filled 
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <SparkleDecoration 
          className="absolute top-24 right-12 md:top-28 md:right-32 text-foreground" 
          size={25} 
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <SmileyDecoration 
          className="absolute bottom-16 right-8 md:right-24 text-foreground" 
          size={50} 
        />
      </motion.div>

      {/* Main content */}
      <motion.div 
        className="relative z-10 w-full px-6 md:px-12 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.div variants={itemVariants} className="mb-4">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-hero-foreground">
            STRATEGY
          </h2>
          <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-hero-foreground mt-1">
            PORTFOLIO
          </h3>
        </motion.div>

        {/* Name */}
        <motion.div variants={itemVariants} className="py-4">
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
          variants={itemVariants}
          className="w-32 h-1 bg-foreground mx-auto mt-4"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
