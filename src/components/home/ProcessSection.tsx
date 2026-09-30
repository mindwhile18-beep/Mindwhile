import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Discovery & Planning',
    desc: 'We analyze your requirements, target audience, and business goals to formulate a comprehensive project strategy.',
    icon: Search,
    gradient: 'from-blue-500 to-indigo-600',
    shadow: 'shadow-blue-500/30',
  },
  {
    num: '02',
    title: 'UI/UX Design',
    desc: 'Our design team creates intuitive, user-centric interfaces with interactive prototypes for your approval.',
    icon: PenTool,
    gradient: 'from-purple-500 to-pink-500',
    shadow: 'shadow-purple-500/30',
  },
  {
    num: '03',
    title: 'Development & Testing',
    desc: 'We build your product using agile methodologies, ensuring rigorous quality assurance and testing at every sprint.',
    icon: Code2,
    gradient: 'from-emerald-400 to-teal-500',
    shadow: 'shadow-emerald-500/30',
  },
  {
    num: '04',
    title: 'Deployment & Support',
    desc: 'Smooth deployment to production environments followed by SLA-backed maintenance and dedicated support.',
    icon: Rocket,
    gradient: 'from-orange-400 to-rose-500',
    shadow: 'shadow-orange-500/30',
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#0A192F] dark:text-foreground tracking-tight">
            How We Bring <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Ideas to Life</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-muted-foreground leading-relaxed">
            A transparent, agile, and results-driven development methodology tailored for modern businesses.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated Connecting Line (Desktop only) */}
          <div className="hidden lg:block absolute top-[50%] left-[10%] right-[10%] h-[2px] bg-gray-200 dark:bg-gray-800 -translate-y-1/2 z-0">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
            />
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
                  className="relative group h-full"
                >
                  {/* Card */}
                  <div className={`h-full flex flex-col p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br ${step.gradient} text-white shadow-xl ${step.shadow} hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 relative overflow-hidden`}>
                    
                    {/* Background number watermark */}
                    <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 text-5xl md:text-8xl font-black text-white/10 select-none group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                      {step.num}
                    </div>

                    {/* Icon container */}
                    <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center mb-4 md:mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      <Icon className="w-5 h-5 md:w-8 md:h-8 text-white drop-shadow-md" />
                    </div>
                    
                    <h3 className="text-sm sm:text-lg md:text-2xl font-bold mb-2 md:mb-4 drop-shadow-sm leading-tight">{step.title}</h3>
                    <p className="text-white/80 text-[10px] sm:text-sm leading-snug md:leading-relaxed mb-4 md:mb-6 flex-grow">
                      {step.desc}
                    </p>

                    {/* Step indicator */}
                    <div className="mt-auto pt-3 md:pt-4 border-t border-white/20 flex items-center justify-between text-[10px] md:text-sm font-semibold tracking-wider uppercase">
                      <span>Step {step.num}</span>
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
