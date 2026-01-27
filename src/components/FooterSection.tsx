import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Sparkles, Star } from "lucide-react";

const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer ref={ref} className="bg-lime py-24 md:py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-12 left-12 md:top-20 md:left-20"
      >
        <Star className="w-12 h-12 md:w-16 md:h-16 text-lime-foreground" fill="currentColor" />
      </motion.div>
      
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-12 right-12 md:bottom-20 md:right-20"
      >
        <Sparkles className="w-10 h-10 md:w-14 md:h-14 text-lime-foreground" />
      </motion.div>

      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute top-1/3 right-1/4 hidden md:block"
      >
        <Star className="w-8 h-8 text-lime-foreground" />
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-1/3 left-1/4 hidden md:block"
      >
        <Sparkles className="w-6 h-6 text-lime-foreground" />
      </motion.div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
        {/* Smiley face */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="mb-8"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto border-4 border-lime-foreground rounded-full flex items-center justify-center">
            <span className="text-5xl md:text-6xl">☺</span>
          </div>
        </motion.div>

        {/* Gracias */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-display text-7xl md:text-9xl lg:text-[12rem] font-bold text-lime-foreground leading-none"
        >
          Gracias
        </motion.h2>

        {/* Contact links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12"
        >
          <a 
            href="mailto:hello@inescimcard.com"
            className="flex items-center gap-3 font-body text-lg text-lime-foreground hover:underline underline-offset-4 transition-all group"
          >
            <Mail className="w-5 h-5 group-hover:animate-wiggle" />
            hello@inescimcard.com
          </a>
          
          <a 
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 font-body text-lg text-lime-foreground hover:underline underline-offset-4 transition-all group"
          >
            <Linkedin className="w-5 h-5 group-hover:animate-wiggle" />
            LinkedIn Profile
          </a>
        </motion.div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 font-body text-sm text-lime-foreground/70"
        >
          © 2026 Ines Cimcard Novella. All rights reserved.
        </motion.p>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 py-4 border-t-2 border-lime-foreground/20 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="font-display text-2xl text-lime-foreground/30 mx-8">
              STRATEGY • CREATIVITY • ADVERTISING • INSIGHTS •
            </span>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;