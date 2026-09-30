import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section className="relative w-full pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/kits/video/upload/v1782729875/Create_a_premium_cinematic_her_ye155d.mp4" type="video/mp4" />
        </video>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-white/70 dark:bg-background/70 backdrop-blur-[2px]" />
      </div>

      {/* Ultra-soft background gradient orb for a premium feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[400px] md:h-[600px] bg-blue-50/50 dark:bg-primary/5 rounded-[100%] blur-[100px] md:blur-[120px] pointer-events-none z-0" />

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center max-w-4xl"
        >
          {/* Minimalist Centered Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 leading-[1.1] mb-8">
            Building Digital Solutions
          </h1>

          {/* Clean Subheading */}
          <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-12 max-w-2xl leading-relaxed font-medium">
            Mindwhile IT Solutions
          </p>

          {/* Elegant Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-medium rounded-full bg-[#0A192F] dark:bg-white text-white dark:text-[#0A192F] hover:bg-blue-600 dark:hover:bg-gray-200 transition-colors duration-300">
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            
            <Link to="/services" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-medium rounded-full border-gray-200 dark:border-white/20 bg-white dark:bg-transparent text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-300">
                <Play className="mr-2 w-4 h-4" />
                Explore Our Work
              </Button>
            </Link>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
