import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { StarDecoration, SparkleDecoration } from "./decorations/StarDecoration";

const projects = [
  {
    title: "KFC",
    category: "Brand Strategy",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop",
    color: "bg-manifesto"
  },
  {
    title: "MIETIS",
    category: "Creative Campaign",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    color: "bg-hero"
  },
  {
    title: "LALIGA",
    category: "Social Strategy",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop",
    color: "bg-about-green"
  },
  {
    title: "McAuto",
    category: "Digital Campaign",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    color: "bg-about-pink"
  },
  {
    title: "Calendario Digital",
    category: "Content Strategy",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=300&fit=crop",
    color: "bg-hero"
  },
  {
    title: "Subaru",
    category: "Brand Positioning",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
    color: "bg-manifesto"
  },
  {
    title: "Ultima Affinity",
    category: "Strategic Planning",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop",
    color: "bg-about-green"
  }
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
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
    <section className="py-16 md:py-24 bg-secondary overflow-hidden relative">
      {/* Decorations */}
      <StarDecoration 
        className="absolute top-12 left-8 md:left-20 text-foreground" 
        size={35} 
        filled 
      />
      <SparkleDecoration 
        className="absolute top-24 right-12 md:right-24 text-foreground" 
        size={25} 
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header with script font */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2 className="font-script text-5xl md:text-7xl text-foreground">
            Projects
          </h2>
          <div className="w-24 h-1 bg-manifesto mx-auto mt-3" />
        </motion.div>

        {/* Compact Project Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative group"
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative aspect-[4/3] overflow-hidden brutal-border bg-card cursor-pointer">
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Color overlay on hover */}
                <div className={`absolute inset-0 ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-200`} />

                {/* Click Here cursor */}
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute pointer-events-none z-20"
                    style={{
                      left: mousePosition.x - 30,
                      top: mousePosition.y - 30,
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center">
                      <span className="font-script text-sm">Click</span>
                    </div>
                  </motion.div>
                )}

                {/* Title overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground text-center px-2">{project.title}</h3>
                </div>

                {/* Corner number */}
                <div className={`absolute top-0 left-0 ${project.color} px-2 py-1`}>
                  <span className="font-body text-xs font-semibold text-foreground">{String(index + 1).padStart(2, '0')}</span>
                </div>
              </div>

              {/* Title below */}
              <div className="mt-2">
                <h3 className="font-display text-sm md:text-base font-bold truncate">{project.title}</h3>
                <p className="font-body text-xs text-muted-foreground truncate">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
