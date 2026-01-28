import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { StarDecoration, SparkleDecoration } from "./decorations/StarDecoration";
import miamiAdSchoolLogo from "@/assets/miami-ad-school.webp";
import universidadValladolidLogo from "@/assets/universidad-valladolid.png";

const experiences = [
  {
    role: "Departamento de Estrategia",
    company: "Padre",
    period: "2025 - 2026",
    description: "Desarrollo del pensamiento estratégico en proyectos diversos y concursos. Investigación para saber qué marcas son cool y por qué.",
    clients: ["Subaru", "La Salve", "InPost", "Ecoembes", "Ultima", "100 Montaditos"]
  },
  {
    role: "Departamento de Estrategia",
    company: "TBWA",
    period: "2025",
    description: "Filosofía Disruption. Identificación de oportunidades diferenciales a través de la investigación. Análisis de tendencias y consumer insights.",
    clients: ["Apple", "McDonald's", "Plenitude", "Backslash"]
  }
];

const education = [
  {
    degree: "Máster en Estrategia",
    institution: "Miami Ad School Madrid",
    year: "2023 - 2024",
    logo: miamiAdSchoolLogo
  },
  {
    degree: "Grado en Publicidad y RRPP",
    institution: "Universidad de Valladolid",
    year: "2019 - 2023",
    logo: universidadValladolidLogo
  }
];

const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Decorations */}
      <StarDecoration 
        className="absolute top-16 right-8 md:right-24 text-foreground" 
        size={35} 
        filled 
      />
      <SparkleDecoration 
        className="absolute bottom-24 left-8 md:left-20 text-foreground" 
        size={25} 
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Experience Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <Briefcase className="w-6 h-6 text-manifesto" />
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">EXPERIENCIA</h2>
          </div>
          <div className="w-24 h-1 bg-manifesto" />
        </motion.div>

        {/* Experience Cards - Storytelling */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card p-6 brutal-border hover-lift"
            >
              <span className="text-xs font-body tracking-widest text-manifesto font-semibold">{exp.period}</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold mt-2">{exp.company}</h3>
              <p className="font-body text-base text-muted-foreground mt-1">{exp.role}</p>
              <p className="font-body text-sm text-muted-foreground mt-3 leading-relaxed">{exp.description}</p>
              
              {/* Client logos grid */}
              <div className="mt-4 pt-4 border-t border-border">
                <p className="font-body text-xs text-muted-foreground mb-2 tracking-wider">CLIENTES</p>
                <div className="flex flex-wrap gap-2">
                  {exp.clients.map((client, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 text-xs font-body font-medium bg-secondary brutal-border"
                    >
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-3">
            <GraduationCap className="w-6 h-6 text-hero" />
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">FORMACIÓN</h2>
          </div>
          <div className="w-24 h-1 bg-hero" />
        </motion.div>

        {/* Education Grid with Logos */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="bg-card p-6 brutal-border hover-lift flex items-center gap-5"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 bg-white brutal-border overflow-hidden flex items-center justify-center p-2">
                <img 
                  src={edu.logo} 
                  alt={edu.institution} 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div className="flex-1">
                <span className="text-xs font-body tracking-widest text-hero font-semibold">{edu.year}</span>
                <h3 className="font-display text-lg md:text-xl font-bold mt-1">{edu.degree}</h3>
                <p className="font-body text-sm text-muted-foreground">{edu.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Personal Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-about-green p-6 brutal-border"
        >
          <p className="font-script text-xl md:text-2xl text-center text-about-green-foreground leading-relaxed">
            "Empecé con la misma ilusión y acabé con la misma sensación, la de haber acertado de lleno y con muchas ganas de seguir aprendiendo."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;
