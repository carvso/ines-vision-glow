import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Phone } from "lucide-react";
import { StarDecoration, SparkleDecoration, SmileyDecoration } from "./decorations/StarDecoration";

const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer ref={ref} className="bg-lime py-24 md:py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <StarDecoration 
        className="absolute top-12 left-8 md:left-20 text-lime-foreground" 
        size={50} 
        filled 
      />
      <SparkleDecoration 
        className="absolute top-20 right-12 md:right-32 text-lime-foreground" 
        size={35} 
      />
      <StarDecoration 
        className="absolute bottom-32 right-16 md:right-24 text-lime-foreground" 
        size={40} 
      />
      <SparkleDecoration 
        className="absolute bottom-40 left-20 md:left-40 text-lime-foreground" 
        size={28} 
      />
      <SmileyDecoration 
        className="absolute top-1/3 left-8 md:left-16 text-lime-foreground" 
        size={70} 
      />
      <SmileyDecoration 
        className="absolute bottom-1/4 right-8 md:right-20 text-lime-foreground hidden md:block" 
        size={60} 
      />

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
        {/* Gracias */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-7xl md:text-9xl lg:text-[12rem] font-bold text-lime-foreground leading-none"
        >
          Gracias
        </motion.h2>

        {/* Contact links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10"
        >
          <a 
            href="mailto:inesgimenovella@gmail.com"
            className="flex items-center gap-3 font-body text-lg text-lime-foreground hover:underline underline-offset-4 transition-all group"
          >
            <Mail className="w-5 h-5 group-hover:animate-wiggle" />
            inesgimenovella@gmail.com
          </a>
          
          <a 
            href="https://linkedin.com/in/inesgimenovella"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 font-body text-lg text-lime-foreground hover:underline underline-offset-4 transition-all group"
          >
            <Linkedin className="w-5 h-5 group-hover:animate-wiggle" />
            Inés Gimeno Novella
          </a>
          
          <a 
            href="tel:+34680968416"
            className="flex items-center gap-3 font-body text-lg text-lime-foreground hover:underline underline-offset-4 transition-all group"
          >
            <Phone className="w-5 h-5 group-hover:animate-wiggle" />
            680 968 416
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 font-body text-sm text-lime-foreground/70"
        >
          © 2026 Inés Gimeno Novella. All rights reserved.
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
            <span key={i} className="font-display text-2xl md:text-3xl text-lime-foreground/40 mx-8 tracking-wider">
              STRATEGY • CREATIVITY • ADVERTISING • INSIGHTS •
            </span>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
