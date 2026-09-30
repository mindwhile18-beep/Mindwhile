import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Search, PenTool, Brain, Code, CheckCircle, Rocket, LineChart } from 'lucide-react';

const steps = [
  { title: "Discover", icon: Search },
  { title: "Design", icon: PenTool },
  { title: "Train AI", icon: Brain },
  { title: "Build", icon: Code },
  { title: "Test", icon: CheckCircle },
  { title: "Deploy", icon: Rocket },
  { title: "Optimize", icon: LineChart },
];

export const DevelopmentTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Track progress as state to re-render steps
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    return scrollYProgress.onChange((v) => setProgress(v));
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} className="relative z-20 py-10 overflow-hidden">
      <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
        <h3 className="text-3xl md:text-4xl font-bold text-white">
          AI Development Process
        </h3>
        <p className="text-slate-400 text-lg">
          Our proven methodology for delivering robust, intelligent applications from concept to continuous optimization.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 custom-scrollbar">
          <div className="relative min-w-[800px] md:min-w-0 py-4">
            {/* Background Line */}
            <div className="absolute top-1/2 left-4 right-4 h-1 bg-slate-800 -translate-y-1/2 rounded-full" />
            
            {/* Animated Fill Line */}
            <motion.div 
              className="absolute top-1/2 left-4 right-4 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 -translate-y-1/2 origin-left rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)]"
              style={{ scaleX, width: 'calc(100% - 32px)' }}
            />

            <div className="relative flex flex-row justify-between items-center gap-4 px-4">
              {steps.map((step, index) => {
                const stepThreshold = index / (steps.length - 1);
                const isActive = progress >= stepThreshold - 0.05;
                
                return (
                  <TimelineStep 
                    key={step.title} 
                    step={step} 
                    isActive={isActive} 
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TimelineStep = ({ step, isActive }: { step: any, isActive: boolean }) => {
  return (
    <motion.div 
      className="relative flex flex-col items-center gap-4 z-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.div 
        className="w-14 h-14 rounded-full flex items-center justify-center border-2 bg-slate-900 transition-colors duration-500"
        animate={{
          borderColor: isActive ? '#38bdf8' : '#334155',
          boxShadow: isActive ? '0 0 20px rgba(56, 189, 248, 0.4)' : 'none',
        }}
      >
        <motion.div
          animate={{
            color: isActive ? '#38bdf8' : '#64748b'
          }}
        >
          <step.icon className="w-6 h-6" />
        </motion.div>
      </motion.div>
      <motion.span 
        className="text-sm font-semibold whitespace-nowrap transition-colors duration-500"
        animate={{
          color: isActive ? '#f1f5f9' : '#64748b'
        }}
      >
        {step.title}
      </motion.span>
    </motion.div>
  );
};
