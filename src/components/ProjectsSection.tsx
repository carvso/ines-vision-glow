import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    title: "Brand Strategy",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop",
    color: "bg-lime"
  },
  {
    title: "Campaign Launch",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=800&fit=crop",
    color: "bg-foreground"
  },
  {
    title: "Social Strategy",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=800&fit=crop",
    color: "bg-lime"
  },
  {
    title: "Content Platform",
    category: "Media",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=800&fit=crop",
    color: "bg-foreground"
  },
  {
    title: "Brand Identity",
    category: "Retail",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=800&fit=crop",
    color: "bg-lime"
  },
  {
    title: "Digital Campaign",
    category: "Entertainment",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=600&h=800&fit=crop",
    color: "bg-foreground"
  }
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden">
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
          <div className="w-32 h-1 bg-lime mx-auto mt-4" />
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group ${index % 3 === 1 ? "md:mt-12" : ""}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative aspect-[3/4] overflow-hidden brutal-border bg-card cursor-click">
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      initial={false}
                      animate={hoveredIndex === index ? { scale: 1, rotate: 0 } : { scale: 0.8, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="font-display text-3xl md:text-4xl font-bold block">{project.title}</span>
                      <span className="font-body text-lime text-sm tracking-widest uppercase mt-2 block">{project.category}</span>
                    </motion.div>
                  </div>
                </div>

                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-16 h-16 ${project.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                  <span className="font-display text-2xl font-bold text-primary-foreground">{String(index + 1).padStart(2, '0')}</span>
                </div>
              </div>

              {/* Title below */}
              <div className="mt-4">
                <h3 className="font-display text-xl font-bold">{project.title}</h3>
                <p className="font-body text-muted-foreground text-sm">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="font-body text-lg tracking-widest border-2 border-foreground px-8 py-4 hover:bg-lime hover:border-lime hover:text-lime-foreground transition-all duration-300 brutal-shadow hover:brutal-shadow-lime">
            VIEW ALL PROJECTS
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;