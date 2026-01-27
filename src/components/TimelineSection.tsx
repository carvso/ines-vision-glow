import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    role: "Creative Strategist",
    company: "Agency Name",
    period: "2023 - Present",
    description: "Leading brand strategy initiatives for Fortune 500 clients. Developing consumer insights and creative platforms."
  },
  {
    role: "Junior Strategist",
    company: "Creative Studio",
    period: "2021 - 2023",
    description: "Conducted market research, competitive analysis, and contributed to pitch decks for new business."
  },
  {
    role: "Strategy Intern",
    company: "Digital Agency",
    period: "2020 - 2021",
    description: "Supported senior strategists in developing social media strategies and content calendars."
  }
];

const education = [
  {
    degree: "Master in Strategic Communication",
    institution: "Universidad de Barcelona",
    year: "2020"
  },
  {
    degree: "Bachelor in Advertising",
    institution: "Universidad Complutense",
    year: "2018"
  }
];

const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Experience Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <Briefcase className="w-8 h-8 text-lime" />
            <h2 className="font-display text-5xl md:text-7xl font-bold">EXPERIENCIA</h2>
          </div>
          <div className="w-32 h-1 bg-lime" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative pl-8 md:pl-0 pb-12 md:pb-16 ${
                index % 2 === 0 ? "md:pr-[calc(50%+2rem)] md:text-right" : "md:pl-[calc(50%+2rem)]"
              }`}
            >
              {/* Dot */}
              <div className={`absolute w-4 h-4 bg-lime rounded-none top-2 left-0 md:left-1/2 md:-translate-x-1/2 brutal-border`} />
              
              <div className="bg-card p-6 md:p-8 brutal-border hover-lift">
                <span className="text-sm font-body tracking-widest text-lime">{exp.period}</span>
                <h3 className="font-display text-2xl md:text-3xl font-bold mt-2">{exp.role}</h3>
                <p className="font-body text-lg text-muted-foreground mt-1">{exp.company}</p>
                <p className="font-body text-muted-foreground mt-4 leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12 mt-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <GraduationCap className="w-8 h-8 text-lime" />
            <h2 className="font-display text-5xl md:text-7xl font-bold">FORMACIÓN</h2>
          </div>
          <div className="w-32 h-1 bg-lime" />
        </motion.div>

        {/* Education Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="bg-card p-6 md:p-8 brutal-border hover-lift"
            >
              <span className="text-sm font-body tracking-widest text-lime">{edu.year}</span>
              <h3 className="font-display text-xl md:text-2xl font-bold mt-2">{edu.degree}</h3>
              <p className="font-body text-muted-foreground mt-1">{edu.institution}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;