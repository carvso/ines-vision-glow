import { motion } from "framer-motion";

const TransitionMarquee = () => {
  const marqueeText = "STRATEGY • CREATIVITY • ADVERTISING • INSIGHTS • INNOVATION • ";
  
  return (
    <div className="bg-foreground overflow-hidden py-3">
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: [0, -1920] }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {[...Array(6)].map((_, i) => (
          <span key={i} className="font-display text-lg md:text-xl font-bold text-lime tracking-wider mx-4">
            {marqueeText}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default TransitionMarquee;
