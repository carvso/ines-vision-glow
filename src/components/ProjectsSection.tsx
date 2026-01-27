import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { StarDecoration, SparkleDecoration } from "./decorations/StarDecoration";

const projects = [
  {
    title: "KFC",
    category: "Brand Strategy",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&h=800&fit=crop",
    color: "bg-manifesto"
  },
  {
    title: "MIETIS",
    category: "Creative Campaign",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=800&fit=crop",
    color: "bg-hero"
  },
  {
    title: "LALIGA",
    category: "Social Strategy",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=800&fit=crop",
    color: "bg-about-green"
  },
  {
    title: "MCAUTO",
    category: "Digital Campaign",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=800&fit=crop",
    color: "bg-about-pink"
  }
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setHoveredIndex(index);
  };

  return (
    <section className="py-24 md:py-32 bg-secondary overflow-hidden relative">
      {/* Decorations */}
      <StarDecoration 
        className="absolute top-16 left-12 md:left-24 text-foreground" 
        size={45} 
        filled 
      />
      <SparkleDecoration 
        className="absolute top-32 right-16 md:right-32 text-foreground" 
        size={32} 
      />
      <StarDecoration 
        className="absolute bottom-24 right-20 text-foreground hidden md:block" 
        size={38} 
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header with script font */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-script text-7xl md:text-9xl text-foreground">
            Projects
          </h2>
          <div className="w-32 h-1 bg-manifesto mx-auto mt-4" />
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative aspect-[4/3] overflow-hidden brutal-border bg-card cursor-pointer">
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Color overlay on hover */}
                <div className={`absolute inset-0 ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300`} />

                {/* Click Here cursor */}
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute pointer-events-none z-20"
                    style={{
                      left: mousePosition.x - 40,
                      top: mousePosition.y - 40,
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <div className="w-20 h-20 rounded-full bg-foreground text-background flex items-center justify-center">
                      <span className="font-script text-lg">Click Here</span>
                    </div>
                  </motion.div>
                )}

                {/* Title overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground">{project.title}</h3>
                </div>

                {/* Corner accent */}
                <div className={`absolute top-0 left-0 ${project.color} px-4 py-2`}>
                  <span className="font-body text-sm font-semibold text-foreground tracking-wider">{String(index + 1).padStart(2, '0')}</span>
                </div>
              </div>

              {/* Title below */}
              <div className="mt-4">
                <h3 className="font-display text-2xl font-bold">{project.title}</h3>
                <p className="font-body text-muted-foreground">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
