import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import TransitionMarquee from "@/components/TransitionMarquee";
import ManifestoSection from "@/components/ManifestoSection";
import IntroSection from "@/components/IntroSection";
import TimelineSection from "@/components/TimelineSection";
import ProjectsSection from "@/components/ProjectsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-x-hidden"
    >
      <HeroSection />
      <TransitionMarquee />
      <ManifestoSection />
      <IntroSection />
      <TimelineSection />
      <ProjectsSection />
      <FooterSection />
    </motion.main>
  );
};

export default Index;