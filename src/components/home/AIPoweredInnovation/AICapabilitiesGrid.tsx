import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, LineChart, Eye, Mic, 
  ScanText, FileSearch, Brain, Zap 
} from 'lucide-react';

const capabilities = [
  { title: "AI Chatbots", icon: Bot, desc: "Intelligent conversational agents providing 24/7 support." },
  { title: "Predictive Analytics", icon: LineChart, desc: "Forecast trends and make data-driven decisions." },
  { title: "Computer Vision", icon: Eye, desc: "Extract insights from images and video streams." },
  { title: "Speech Recognition", icon: Mic, desc: "Transcribe and analyze audio with high accuracy." },
  { title: "OCR", icon: ScanText, desc: "Digitize printed or handwritten text instantly." },
  { title: "Document Intelligence", icon: FileSearch, desc: "Automate document processing and data extraction." },
  { title: "Machine Learning", icon: Brain, desc: "Custom models tailored to your business needs." },
  { title: "Process Automation", icon: Zap, desc: "Streamline workflows with intelligent automation." }
];

export const AICapabilitiesGrid = () => {
  return (
    <div className="relative z-20 space-y-12">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-white">
          Intelligent Solutions Stack
        </h3>
        <p className="text-slate-400 text-lg">
          We leverage state-of-the-art AI technologies to build comprehensive solutions that solve complex business challenges.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {capabilities.map((cap, index) => {
          const Icon = cap.icon;
          return (
            <motion.div
              key={cap.title}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-slate-700 to-slate-800 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Gradient Border Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full bg-slate-900/90 backdrop-blur-xl rounded-2xl p-6 flex flex-col items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 group-hover:text-cyan-300 transition-colors duration-300">
                  <Icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <h4 className="text-xl font-semibold text-slate-100 group-hover:text-white transition-colors duration-300">
                  {cap.title}
                </h4>
                
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                  {cap.desc}
                </p>

                {/* Ambient Glow on Hover */}
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
