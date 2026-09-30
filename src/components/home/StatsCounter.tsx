import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { Briefcase, Clock, Users, Lightbulb } from 'lucide-react';

const stats = [
  {
    icon: Briefcase,
    value: 5,
    textValue: undefined,
    suffix: '',
    label: 'Projects Completed',
    colorTheme: 'primary',
  },
  {
    icon: Clock,
    value: 0,
    suffix: '',
    textValue: '∞',
    label: 'Hours Support',
    colorTheme: 'accent1',
  },
  {
    icon: Users,
    value: 100,
    textValue: undefined,
    suffix: '+',
    label: 'Satisfied Clients',
    colorTheme: 'accent2',
  },
  {
    icon: Lightbulb,
    value: 15,
    textValue: undefined,
    suffix: '+',
    label: 'Smart Solutions',
    colorTheme: 'primary',
  },
];

interface CounterProps {
  value: number;
  suffix: string;
  isInView: boolean;
}

const Counter = ({ value, suffix, isInView }: CounterProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (v) => setDisplayValue(v));
    return () => unsubscribe();
  }, [rounded]);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2.5,
        ease: 'easeOut',
      });
      return () => controls.stop();
    }
  }, [isInView, value, count]);

  return (
    <span>
      {displayValue.toLocaleString()}{suffix}
    </span>
  );
};

export const StatsCounter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-caption bg-white/10 text-white px-4 py-2 rounded-full mb-4 inline-block backdrop-blur">
            Our Achievements
          </span>
          <h2 className="heading-2 text-white mb-4">
            Numbers That Speak
          </h2>
          <p className="text-body text-white/70 max-w-2xl mx-auto">
            Our track record of excellence and commitment to delivering outstanding results.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="text-center group"
            >
              <div className="relative inline-block mb-6">
                {/* Icon Container */}
                <div className={`icon-tile icon-tile-lg bg-gradient-${stat.colorTheme} mx-auto group-hover:scale-110 transition-transform duration-500 relative z-10`}>
                  <stat.icon className="w-10 h-10 text-white relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
                </div>
                {/* Glow Effect */}
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`absolute inset-0 rounded-2xl bg-gradient-${stat.colorTheme} blur-xl opacity-40`}
                />
              </div>

              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3, duration: 0.5, type: 'spring' }}
                className="text-4xl md:text-5xl font-bold text-white mb-2"
              >
                {stat.textValue ? (
                  <span>{stat.textValue}</span>
                ) : (
                  <Counter value={stat.value} suffix={stat.suffix} isInView={isInView} />
                )}
              </motion.div>
              <p className="text-white/70 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
