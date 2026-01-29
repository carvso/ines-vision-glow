import { motion, Variants } from "framer-motion";
import { StarDecoration, SparkleDecoration, SmileyDecoration } from "./decorations/StarDecoration";

const IntroSection = () => {
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
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <>
      {/* First About Section - Light Green */}
      <section className="min-h-screen py-24 md:py-32 bg-about-green relative overflow-hidden flex items-center">
        {/* Decorations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <StarDecoration 
            className="absolute top-12 right-12 md:right-24 text-about-green-foreground" 
            size={40} 
            filled 
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <SparkleDecoration 
            className="absolute bottom-16 left-12 md:left-24 text-about-green-foreground" 
            size={30} 
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <SmileyDecoration 
            className="absolute top-1/2 right-8 md:right-16 text-about-green-foreground hidden md:block" 
            size={50} 
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto px-6 md:px-12"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-about-green-foreground">
              ¿POR QUÉ ESTOY
              <br />
              AQUÍ HOY?
            </h2>
            <motion.div variants={itemVariants} className="w-24 h-1 bg-foreground" />
            <motion.p variants={itemVariants} className="font-body text-xl md:text-2xl text-about-green-foreground/90 leading-relaxed max-w-3xl">
              Creo firmemente en que tenemos que guiarnos por lo que nos mueve y en mi caso ha sido il perseguir 'el por qué' de las cosas... todo es cuestión de enfoque.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* Second About Section - Soft Pink */}
      <section className="min-h-screen py-24 md:py-32 bg-about-pink relative overflow-hidden flex items-center">
        {/* Decorations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <StarDecoration 
            className="absolute top-16 left-12 md:left-24 text-about-pink-foreground" 
            size={35} 
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <SparkleDecoration 
            className="absolute bottom-20 right-16 md:right-32 text-about-pink-foreground" 
            size={28} 
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <StarDecoration 
            className="absolute top-1/3 right-8 md:right-20 text-about-pink-foreground hidden md:block" 
            size={45} 
            filled 
          />
        </motion.div>

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
            <motion.div variants={itemVariants} className="w-24 h-1 bg-foreground" />
            <motion.p variants={itemVariants} className="font-body text-xl md:text-2xl text-about-pink-foreground/90 leading-relaxed max-w-3xl">
              Para mí la estrategia es investigación, observación, decisión e inspiración... la curiosidad del día a día che nos ayuda a descubrir esos insights.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default IntroSection;
