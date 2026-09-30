import { motion } from 'framer-motion';
import { Shield, Clock, Award, Zap, Code, Target, Rocket, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    desc: 'Bank-grade security protocols, regular audits, and strict compliance standards.',
    bg: 'bg-blue-50 dark:bg-blue-950/20',
    border: 'border-blue-100 dark:border-blue-900/30',
    iconBg: 'bg-blue-500',
    hoverGlow: 'hover:shadow-blue-500/20',
    textColor: 'text-blue-600 dark:text-blue-400'
  },
  {
    icon: Clock,
    title: '24/7 Dedicated Support',
    desc: 'Round-the-clock technical support with guaranteed fast response times.',
    bg: 'bg-emerald-50 dark:bg-emerald-950/20',
    border: 'border-emerald-100 dark:border-emerald-900/30',
    iconBg: 'bg-emerald-500',
    hoverGlow: 'hover:shadow-emerald-500/20',
    textColor: 'text-emerald-600 dark:text-emerald-400'
  },
  {
    icon: Zap,
    title: 'Agile & Fast Delivery',
    desc: 'Iterative development processes ensuring rapid time-to-market.',
    bg: 'bg-amber-50 dark:bg-amber-950/20',
    border: 'border-amber-100 dark:border-amber-900/30',
    iconBg: 'bg-amber-500',
    hoverGlow: 'hover:shadow-amber-500/20',
    textColor: 'text-amber-600 dark:text-amber-400'
  },
  {
    icon: Code,
    title: 'Modern Tech Stack',
    desc: 'Future-proof solutions built on highly scalable architectures.',
    bg: 'bg-purple-50 dark:bg-purple-950/20',
    border: 'border-purple-100 dark:border-purple-900/30',
    iconBg: 'bg-purple-500',
    hoverGlow: 'hover:shadow-purple-500/20',
    textColor: 'text-purple-600 dark:text-purple-400'
  },
  {
    icon: Target,
    title: 'Performance Focused',
    desc: 'Optimized algorithms and infrastructure for blazing-fast experiences.',
    bg: 'bg-rose-50 dark:bg-rose-950/20',
    border: 'border-rose-100 dark:border-rose-900/30',
    iconBg: 'bg-rose-500',
    hoverGlow: 'hover:shadow-rose-500/20',
    textColor: 'text-rose-600 dark:text-rose-400'
  },
  {
    icon: Rocket,
    title: 'Scalable Solutions',
    desc: 'Cloud-native apps that grow seamlessly alongside your business.',
    bg: 'bg-cyan-50 dark:bg-cyan-950/20',
    border: 'border-cyan-100 dark:border-cyan-900/30',
    iconBg: 'bg-cyan-500',
    hoverGlow: 'hover:shadow-cyan-500/20',
    textColor: 'text-cyan-600 dark:text-cyan-400'
  },
  {
    icon: TrendingUp,
    title: 'Future Growth',
    desc: "Built with extensibility in mind to support tomorrow's innovations.",
    bg: 'bg-indigo-50 dark:bg-indigo-950/20',
    border: 'border-indigo-100 dark:border-indigo-900/30',
    iconBg: 'bg-indigo-500',
    hoverGlow: 'hover:shadow-indigo-500/20',
    textColor: 'text-indigo-600 dark:text-indigo-400'
  },
  {
    icon: Award,
    title: 'Excellence Driven',
    desc: 'Uncompromising quality standards in every line of code we write.',
    bg: 'bg-pink-50 dark:bg-pink-950/20',
    border: 'border-pink-100 dark:border-pink-900/30',
    iconBg: 'bg-pink-500',
    hoverGlow: 'hover:shadow-pink-500/20',
    textColor: 'text-pink-600 dark:text-pink-400'
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white dark:bg-background relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold text-sm mb-6 shadow-sm">
            <Award className="w-4 h-4" />
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#0A192F] dark:text-foreground tracking-tight">
            The Right Partner for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Your Growth</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-muted-foreground leading-relaxed">
            We don't just write code; we deliver secure, scalable, and fully supported business solutions designed to drive revenue.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-7xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              className={`group relative flex flex-col items-start text-left p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-[2rem] border ${feature.border} ${feature.bg} shadow-sm hover:shadow-xl ${feature.hoverGlow} hover:-translate-y-2 transition-all duration-300 overflow-hidden cursor-default`}
            >
              {/* Top right watermark icon */}
              <feature.icon className={`absolute -right-2 -top-2 md:-right-4 md:-top-4 w-16 h-16 md:w-32 md:h-32 opacity-[0.03] dark:opacity-[0.02] ${feature.textColor} pointer-events-none group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500`} />
              
              <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl ${feature.iconBg} flex items-center justify-center mb-3 sm:mb-4 md:mb-6 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 relative z-10`}>
                <feature.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
              </div>
              
              <h3 className="text-sm sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 md:mb-3 text-[#0A192F] dark:text-white relative z-10 leading-tight">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm leading-snug md:leading-relaxed relative z-10">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
