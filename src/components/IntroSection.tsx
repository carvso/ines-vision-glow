import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { StarDecoration, SparkleDecoration, SmileyDecoration } from "./decorations/StarDecoration";

const IntroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <>
      {/* First About Section - Light Green */}
      <section className="py-24 md:py-32 bg-about-green relative overflow-hidden">
        {/* Decorations */}
        <StarDecoration 
          className="absolute top-12 right-12 md:right-24 text-about-green-foreground" 
          size={40} 
          filled 
        />
        <SparkleDecoration 
          className="absolute bottom-16 left-12 md:left-24 text-about-green-foreground" 
          size={30} 
        />
        <SmileyDecoration 
          className="absolute top-1/2 right-8 md:right-16 text-about-green-foreground hidden md:block" 
          size={50} 
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto px-6 md:px-12"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-about-green-foreground">
              ¿POR QUÉ ESTOY
              <br />
              AQUÍ HOY?
            </h2>
            <div className="w-24 h-1 bg-foreground" />
            <p className="font-body text-xl md:text-2xl text-about-green-foreground/90 leading-relaxed max-w-3xl">
              Creo firmemente en que tenemos que guiarnos por lo que nos mueve y en mi caso ha sido il perseguir 'el por qué' de las cosas... todo es cuestión de enfoque.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Second About Section - Soft Pink */}
      <section className="py-24 md:py-32 bg-about-pink relative overflow-hidden">
        {/* Decorations */}
        <StarDecoration 
          className="absolute top-16 left-12 md:left-24 text-about-pink-foreground" 
          size={35} 
        />
        <SparkleDecoration 
          className="absolute bottom-20 right-16 md:right-32 text-about-pink-foreground" 
          size={28} 
        />
        <StarDecoration 
          className="absolute top-1/3 right-8 md:right-20 text-about-pink-foreground hidden md:block" 
          size={45} 
          filled 
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto px-6 md:px-12"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-about-pink-foreground">
              ¿QUÉ ES LA
              <br />
              ESTRATEGIA
              <br />
              PARA MÍ?
            </h2>
            <div className="w-24 h-1 bg-foreground" />
            <p className="font-body text-xl md:text-2xl text-about-pink-foreground/90 leading-relaxed max-w-3xl">
              Para mí la estrategia es investigación, observación, decisión e inspiración... la curiosidad del día a día che nos ayuda a descubrir esos insights.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default IntroSection;
