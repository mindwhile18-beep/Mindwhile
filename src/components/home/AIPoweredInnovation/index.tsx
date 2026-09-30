import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HeroExperience } from './HeroExperience';

import { DevelopmentTimeline } from './DevelopmentTimeline';
import { PremiumCTA } from './PremiumCTA';
import { InteractiveAIParticles } from './InteractiveAIParticles';

export const AIPoweredInnovation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full overflow-hidden bg-slate-950 text-white selection:bg-blue-500/30"
      id="ai-innovation"
    >
      {/* Cinematic Background Canvas */}
      <InteractiveAIParticles />
      
      {/* Subtle Glass Blur Overlays on top of the canvas but behind content */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px]" />
        {/* Subtle noise/texture overlay for a more physical feel */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      {/* Content Container */}
      <motion.div 
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12"
        style={{ opacity }}
      >
        <HeroExperience />

        <DevelopmentTimeline />
        <PremiumCTA />
      </motion.div>
    </section>
  );
};
