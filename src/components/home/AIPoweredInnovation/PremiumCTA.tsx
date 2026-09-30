import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const PremiumCTA = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="relative z-20 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Glass Panel Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-slate-900/60 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl" />
      
      {/* Animated Gradient Border */}
      <div className="absolute inset-[-1px] rounded-[25px] bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 opacity-20 animate-pulse -z-10" />

      <div className="relative p-10 md:p-16 flex flex-col items-center text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          Ready to Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">AI-Powered Products?</span>
        </h2>
        
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
          Transform your business with intelligent software solutions built using modern Artificial Intelligence, Machine Learning, Computer Vision, and Generative AI.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 pt-4">
          {/* Primary Button */}
          <motion.button 
            onClick={() => navigate('/contact')}
            className="group relative px-8 py-4 bg-white text-slate-900 font-semibold rounded-full overflow-hidden flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-cyan-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">Start Your AI Application</span>
            <ArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
