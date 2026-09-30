import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 50, suffix: "+", label: "AI Projects" },
  { value: 15, suffix: "+", label: "AI Technologies" },
  { value: 100, suffix: "%", label: "Scalable Solutions" },
  { value: 24, suffix: "/7", label: "Intelligent Automation" }
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = Math.max(duration / end, 16); // max 60fps
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
      
      return () => clearInterval(timer);
    }
  }, [value, isInView]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

export const AnimatedStats = () => {
  return (
    <div className="relative z-20 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-slate-800/50 bg-slate-900/30 backdrop-blur-sm rounded-3xl">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="flex flex-col items-center justify-center space-y-2"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h4 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]">
            <Counter value={stat.value} suffix={stat.suffix} />
          </h4>
          <p className="text-slate-400 font-medium text-center">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};
