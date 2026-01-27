import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { StarDecoration, SparkleDecoration } from "./decorations/StarDecoration";

const experiences = [
  {
    role: "Departamento de Estrategia",
    company: "Padre",
    period: "2025 - 2026",
    description: "Subaru, La Salve, InPost, Ecoembes, Ultima"
  },
  {
    role: "Departamento de Estrategia",
    company: "TBWA",
    period: "2025",
    description: "Focus on Disruption. Clients: Apple, McDonald's, Plenitude"
  }
];

const education = [
  {
    degree: "Máster en Estrategia",
    institution: "Miami Ad School Madrid",
    year: "2023 - 2024"
  },
  {
    degree: "Grado en Publicidad y RRPP",
    institution: "Universidad de Valladolid",
    year: "2019 - 2023"
  }
];

const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorations */}
      <StarDecoration 
        className="absolute top-20 right-12 md:right-32 text-foreground" 
        size={40} 
        filled 
      />
      <SparkleDecoration 
        className="absolute bottom-32 left-12 md:left-24 text-foreground" 
        size={30} 
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Experience Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <Briefcase className="w-8 h-8 text-manifesto" />
            <h2 className="font-display text-5xl md:text-7xl font-bold">EXPERIENCIA</h2>
          </div>
          <div className="w-32 h-1 bg-manifesto" />
        </motion.div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card p-8 brutal-border hover-lift"
            >
              <span className="text-sm font-body tracking-widest text-manifesto font-semibold">{exp.period}</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold mt-3">{exp.company}</h3>
              <p className="font-body text-lg text-muted-foreground mt-1">{exp.role}</p>
              <p className="font-body text-muted-foreground mt-4 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Education Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <GraduationCap className="w-8 h-8 text-hero" />
            <h2 className="font-display text-5xl md:text-7xl font-bold">FORMACIÓN</h2>
          </div>
          <div className="w-32 h-1 bg-hero" />
        </motion.div>

        {/* Education Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-card p-8 brutal-border hover-lift"
            >
              <span className="text-sm font-body tracking-widest text-hero font-semibold">{edu.year}</span>
              <h3 className="font-display text-xl md:text-2xl font-bold mt-3">{edu.degree}</h3>
              <p className="font-body text-muted-foreground mt-1">{edu.institution}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
