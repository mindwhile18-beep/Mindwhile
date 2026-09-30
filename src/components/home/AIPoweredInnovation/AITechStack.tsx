import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  "OpenAI", "Claude", "Gemini", "Llama", 
  "LangChain", "Hugging Face", "TensorFlow", "PyTorch", 
  "Pinecone", "Weaviate", "ChromaDB", "Ollama", 
  "Azure AI", "AWS Bedrock", "Google Vertex AI"
];

export const AITechStack = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-10 relative z-20">
      <motion.div 
        className="text-center space-y-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-semibold text-white">
          Powered by Modern AI Technologies
        </h3>
        <p className="text-slate-400">Enterprise-grade infrastructure for scalable AI solutions</p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech}
            className="px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md cursor-default shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderColor: "rgba(59, 130, 246, 0.5)",
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
              y: -5
            }}
            animate={{
              y: [0, -4, 0],
            }}
            style={{
              animation: `float 3s ease-in-out infinite`,
              animationDelay: `${index * 0.1}s`
            }}
          >
            <span className="text-slate-200 font-medium tracking-wide">{tech}</span>
          </motion.div>
        ))}
      </div>
      
      {/* Adding global keyframes for floating if not defined in tailwind */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
};
