import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Car, 
  HeartPulse, 
  Brain,
  Heart,
  UtensilsCrossed,
  Building2
} from 'lucide-react';

const products = [
  { name: 'School Management', icon: GraduationCap, color: 'text-blue-600', bg: 'bg-blue-100' },
  { name: 'Jago', icon: Car, color: 'text-orange-600', bg: 'bg-orange-100' },
  { name: 'Raksha Assist', icon: HeartPulse, color: 'text-rose-600', bg: 'bg-rose-100' },
  { name: 'NeuroTalk', icon: Brain, color: 'text-violet-600', bg: 'bg-violet-100' },
  { name: 'Matrimony App', icon: Heart, color: 'text-pink-600', bg: 'bg-pink-100' },
  { name: 'Food Delivery App', icon: UtensilsCrossed, color: 'text-amber-600', bg: 'bg-amber-100' },
  { name: 'Real Estate Script', icon: Building2, color: 'text-indigo-600', bg: 'bg-indigo-100' },
];

export const ClientLogos = () => {
  // Duplicate products to ensure seamless continuous scrolling
  const duplicatedProducts = [...products, ...products, ...products, ...products];

  return (
    <section className="pb-16 bg-white dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-[#FAFAFA] dark:bg-secondary/20 rounded-3xl p-6 md:p-8 border border-gray-100 dark:border-border/50 overflow-hidden">
          <p className="text-xs font-bold text-gray-400 dark:text-muted-foreground uppercase tracking-wider mb-8 text-center">
            Discover Our Digital Products
          </p>
          
          <div className="relative flex overflow-hidden group">
            {/* Left and Right Fade Overlays for smoothness */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FAFAFA] dark:from-secondary/20 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FAFAFA] dark:from-secondary/20 to-transparent z-10 pointer-events-none" />

            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
              className="flex whitespace-nowrap gap-12 md:gap-16 items-center w-max"
            >
              {duplicatedProducts.map((product, index) => {
                const Icon = product.icon;
                return (
                  <div key={index} className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 cursor-pointer">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${product.bg} ${product.color} shadow-sm`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-sm md:text-base text-[#0A192F] dark:text-foreground">{product.name}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
