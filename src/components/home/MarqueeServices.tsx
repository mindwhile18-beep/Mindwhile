import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Car, 
  ShieldCheck, 
  BrainCircuit, 
  HeartHandshake, 
  Utensils,
  Home
} from 'lucide-react';

const services = [
  { icon: GraduationCap, title: 'School Management', desc: 'Comprehensive school management systems.', gradient: 'from-blue-600 to-indigo-600', shadow: 'hover:shadow-blue-500/40' },
  { icon: Car, title: 'Jago', desc: 'Smart bike and cab ride platforms.', gradient: 'from-purple-600 to-pink-500', shadow: 'hover:shadow-purple-500/40' },
  { icon: ShieldCheck, title: 'Raksha Assist', desc: 'Reliable emergency and roadside assistance.', gradient: 'from-emerald-500 to-teal-600', shadow: 'hover:shadow-emerald-500/40' },
  { icon: BrainCircuit, title: 'NeuroTalk', desc: 'AI-powered communication and wellness.', gradient: 'from-orange-500 to-rose-500', shadow: 'hover:shadow-orange-500/40' },
  { icon: HeartHandshake, title: 'Matrimony App', desc: 'Secure and feature-rich matchmaking.', gradient: 'from-cyan-500 to-blue-500', shadow: 'hover:shadow-cyan-500/40' },
  { icon: Utensils, title: 'Food Delivery App', desc: 'Seamless food ordering and delivery.', gradient: 'from-violet-600 to-fuchsia-600', shadow: 'hover:shadow-violet-500/40' },
  { icon: Home, title: 'Real Estate Script', desc: 'Property management and listing solutions.', gradient: 'from-rose-500 to-orange-500', shadow: 'hover:shadow-rose-500/40' },
];

const Row = ({ items, reverse = false, speed = 40 }: { items: typeof services, reverse?: boolean, speed?: number }) => {
  const duplicated = [...items, ...items, ...items, ...items];
  
  return (
    <div className="relative flex overflow-hidden py-3 w-full group">
      {/* Subtle fade edges for the marquee */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-r from-gray-50 dark:from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-l from-gray-50 dark:from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
          transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
          className="flex whitespace-nowrap gap-4 w-max px-2"
        >
        {duplicated.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div 
              key={idx} 
              className={`flex items-center gap-3 bg-gradient-to-br ${item.gradient} p-3 rounded-2xl shadow-lg ${item.shadow} hover:-translate-y-1.5 hover:scale-[1.02] transition-all duration-300 w-[240px] md:w-[280px] cursor-pointer`}
            >
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shrink-0 shadow-inner">
                <Icon className="w-5 h-5 text-white drop-shadow-md" />
              </div>
              <div className="flex flex-col whitespace-normal">
                <h4 className="font-bold text-white text-sm md:text-base tracking-wide drop-shadow-sm line-clamp-1">{item.title}</h4>
                <p className="text-xs text-white/85 line-clamp-2 leading-relaxed mt-0.5 font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export const MarqueeServices = () => {
  const row1 = [...services];
  const row2 = [...services].reverse();
  const row3 = [...services.slice(2), ...services.slice(0, 2)];

  return (
    <section className="py-16 bg-gray-50 dark:bg-background relative overflow-hidden" id="services">
      <div className="container mx-auto px-4 text-center mb-10 relative z-10">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold text-sm mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          Our Portfolio
        </span>
        <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#0A192F] dark:text-foreground tracking-tight">
          Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Digital Products</span>
        </h2>
        <p className="text-lg text-gray-500 dark:text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Explore our diverse range of innovative, ready-to-deploy products designed to empower your business across various industries.
        </p>
      </div>

      <div className="flex flex-col gap-0 relative w-full left-0 right-0 max-w-[100vw] overflow-hidden pb-8">
        <Row items={row1} speed={45} />
        <Row items={row2} speed={35} reverse={true} />
        <Row items={row3} speed={40} />
      </div>
    </section>
  );
};
