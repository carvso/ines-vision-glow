import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import HeroSection from "@/components/HeroSection";
import TransitionMarquee from "@/components/TransitionMarquee";
import ManifestoSection from "@/components/ManifestoSection";
import IntroSection from "@/components/IntroSection";
import TimelineSection from "@/components/TimelineSection";
import ProjectsSection from "@/components/ProjectsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-x-hidden"
    >
      {/* Hero & Transition Marquee - Stacking Card 1 */}
      <section 
        className={`relative ${!isMobile ? 'sticky top-0 min-h-screen' : ''} z-10`}
      >
        <HeroSection />
        <TransitionMarquee />
      </section>

      {/* Manifesto - Stacking Card 2 */}
      <section 
        className={`relative ${!isMobile ? 'sticky top-0' : ''} z-20`}
        style={{ boxShadow: !isMobile ? '0 -20px 60px -10px rgba(0,0,0,0.15)' : 'none' }}
      >
        <ManifestoSection />
      </section>

      {/* Intro Sections - Stacking Card 3 */}
      <section 
        className={`relative ${!isMobile ? 'sticky top-0' : ''} z-30`}
        style={{ boxShadow: !isMobile ? '0 -20px 60px -10px rgba(0,0,0,0.15)' : 'none' }}
      >
        <IntroSection />
      </section>

      {/* Timeline - Stacking Card 4 */}
      <section 
        className={`relative ${!isMobile ? 'sticky top-0' : ''} z-40`}
        style={{ boxShadow: !isMobile ? '0 -20px 60px -10px rgba(0,0,0,0.15)' : 'none' }}
      >
        <TimelineSection />
      </section>

      {/* Projects - Stacking Card 5 */}
      <section 
        className={`relative ${!isMobile ? 'sticky top-0' : ''} z-50`}
        style={{ boxShadow: !isMobile ? '0 -20px 60px -10px rgba(0,0,0,0.15)' : 'none' }}
      >
        <ProjectsSection />
      </section>

      {/* Footer - Final Card */}
      <section 
        className="relative z-[60]"
        style={{ boxShadow: !isMobile ? '0 -20px 60px -10px rgba(0,0,0,0.2)' : 'none' }}
      >
        <FooterSection />
      </section>
    </motion.main>
  );
};

export default Index;