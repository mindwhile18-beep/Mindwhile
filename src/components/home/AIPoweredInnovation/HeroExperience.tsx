import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Sparkles, Network, BrainCircuit, Cpu } from 'lucide-react';

export const HeroExperience = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position between -1 and 1
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-[80vh] flex flex-col sm:flex-row items-center justify-between gap-6 pt-10">
      
      {/* Left Content */}
      <motion.div 
        className="flex-1 space-y-6 md:space-y-8 z-10 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md"
          whileHover={{ scale: 1.05 }}
        >
          <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
          <span className="text-xs md:text-sm font-semibold tracking-wider text-blue-400 uppercase">
            Next-Gen AI Tech
          </span>
        </motion.div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Intelligent Software</span> Powered by AI
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mx-auto md:mx-0">
          We integrate Artificial Intelligence into modern software solutions to automate workflows, improve decision-making, and accelerate digital transformation.
        </p>
      </motion.div>

      {/* Right Content - 3D AI Core Visualization */}
      <div className="flex-1 relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
        {/* Parallax Container */}
        <motion.div 
          className="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] flex items-center justify-center scale-75 sm:scale-90 lg:scale-100"
          animate={{
            x: mousePosition.x * 10,
            y: mousePosition.y * 10,
            rotateX: mousePosition.y * 5,
            rotateY: mousePosition.x * -5,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Main AI Core */}
          <motion.div 
            className="absolute inset-0 m-auto w-48 h-48 rounded-full border border-blue-500/30 bg-blue-950/40 backdrop-blur-xl shadow-[0_0_80px_rgba(59,130,246,0.3)] flex items-center justify-center z-20"
            animate={{ 
              boxShadow: [
                "0 0 40px rgba(59,130,246,0.2)",
                "0 0 100px rgba(59,130,246,0.6)",
                "0 0 40px rgba(59,130,246,0.2)"
              ],
              rotate: 360
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <BrainCircuit className="w-20 h-20 text-blue-400 opacity-80" />
            
            {/* Inner Core Pulse */}
            <motion.div 
              className="absolute inset-0 rounded-full bg-blue-500/10"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Orbital Rings */}
          <motion.div 
            className="absolute w-[120%] h-[120%] rounded-full border border-dashed border-cyan-500/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute w-[150%] h-[150%] rounded-full border border-slate-700/50"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />

          {/* Floating Nodes */}
          {[
            { icon: <Network className="w-5 h-5 text-cyan-400" />, x: -120, y: -100, delay: 0 },
            { icon: <Cpu className="w-5 h-5 text-purple-400" />, x: 140, y: -60, delay: 0.5 },
            { icon: <Sparkles className="w-5 h-5 text-blue-400" />, x: -80, y: 140, delay: 1 },
            { icon: <BrainCircuit className="w-5 h-5 text-indigo-400" />, x: 120, y: 120, delay: 1.5 }
          ].map((node, index) => (
            <motion.div
              key={index}
              className="absolute w-12 h-12 bg-slate-900/80 border border-slate-700 rounded-xl backdrop-blur-md flex items-center justify-center z-30 shadow-lg"
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{ 
                x: node.x, 
                y: node.y, 
                opacity: 1,
                y: [node.y - 10, node.y + 10, node.y - 10]
              }}
              transition={{ 
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: node.delay },
                opacity: { duration: 1 },
                x: { duration: 1 }
              }}
            >
              {node.icon}
            </motion.div>
          ))}
          
          {/* Particle Emitters */}
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full blur-[1px]"
              initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
              animate={{
                x: (Math.random() - 0.5) * 300,
                y: (Math.random() - 0.5) * 300,
                opacity: 0,
                scale: 0,
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}

        </motion.div>
      </div>
    </div>
  );
};
