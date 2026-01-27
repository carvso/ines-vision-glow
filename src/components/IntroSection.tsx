import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-6 md:px-12"
      >
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          {/* Column 1 */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              ¿POR QUE ESTOY
              <br />
              <span className="text-lime">AQUI HOY?</span>
            </h2>
            <div className="w-16 h-1 bg-foreground" />
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
              La estrategia creativa es el puente entre la visión y la ejecución. 
              Me apasiona descubrir insights que transforman marcas y conectan 
              con las audiencias de manera auténtica y memorable.
            </p>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
              Creo en el poder de las historias bien contadas, en la investigación 
              profunda y en la creatividad con propósito.
            </p>
          </motion.div>

          {/* Column 2 */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              QUE ES LA
              <br />
              <span className="text-lime">ESTRATEGIA</span>
              <br />
              PARA MI?
            </h2>
            <div className="w-16 h-1 bg-foreground" />
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
              La estrategia es encontrar la verdad escondida. Es convertir datos 
              en dirección, convertir problemas en oportunidades y convertir 
              ideas en impacto real.
            </p>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
              Es el arte de hacer las preguntas correctas antes de buscar las 
              respuestas. Es pensar diferente para actuar mejor.
            </p>
          </motion.div>
        </div>

        {/* Decorative quote */}
        <motion.div 
          variants={itemVariants}
          className="mt-24 text-center"
        >
          <blockquote className="font-script text-4xl md:text-6xl text-muted-foreground">
            "Strategy is about choices"
          </blockquote>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default IntroSection;