import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Landmark,
  HeartPulse,
  GraduationCap,
  Factory,
  Megaphone,
  ArrowUpRight
} from 'lucide-react';

const industries = [
  {
    icon: HeartPulse,
    title: 'Healthcare Solutions',
    description: 'HIPAA-compliant healthcare software. Next-generation EMR/EHR systems, telemedicine platforms, and smart patient management.',
    colorTheme: 'primary',
    colSpan: 'col-span-1 md:col-span-2 lg:col-span-3 h-[240px] sm:h-[280px] md:h-[360px]',
  },
  {
    icon: GraduationCap,
    title: 'Education Solutions',
    description: 'Transforming EdTech. Immersive learning management systems, virtual classrooms, and interactive student engagement tools.',
    colorTheme: 'accent2',
    colSpan: 'col-span-1 md:col-span-2 lg:col-span-3 h-[240px] sm:h-[280px] md:h-[360px]',
  },
  {
    icon: Factory,
    title: 'Manufacturing Solutions',
    description: 'Industry 4.0 innovations. Seamless IoT integration, automated supply chains, and predictive maintenance.',
    colorTheme: 'accent1',
    colSpan: 'col-span-1 md:col-span-2 lg:col-span-3 h-[240px] sm:h-[280px] md:h-[360px]',
  },
  {
    icon: Megaphone,
    title: 'Marketing & Networking',
    description: 'Data-driven growth. Marketing automation, intelligent CRM systems, and real-time social analytics platforms.',
    colorTheme: 'primary',
    colSpan: 'col-span-1 md:col-span-2 lg:col-span-3 h-[240px] sm:h-[280px] md:h-[360px]',
  },
];

export const IndustrySolutions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px' });

  return (
    <section className="section-padding relative overflow-hidden bg-background">
      {/* Background Soft Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[80px] opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[80px] opacity-70 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
        >
          <span className="text-caption bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 inline-block shadow-sm">
            Who We Serve
          </span>
          <h2 className="heading-2 mb-6 leading-tight">
            Tailored for <br className="hidden md:block" />
            <span className="gradient-text">Your Industry</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Specialized software products built to solve the unique challenges of your sector.
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-6 xl:gap-8 cursor-pointer"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.98 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className={`group relative [perspective:1500px] ${industry.colSpan}`}
            >
              <div className="relative w-full h-full transition-transform duration-700 md:duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl hover:shadow-2xl rounded-3xl md:rounded-[2.5rem]">

                {/*
                  =================
                  FRONT FACE
                  =================
                */}
                <div className="absolute inset-0 card-base !p-4 sm:!p-6 md:!p-10 flex flex-col items-center justify-center overflow-hidden border border-border/40 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] z-20 text-center bg-white dark:bg-card">
                  <div className={`absolute inset-0 bg-gradient-${industry.colorTheme} opacity-[0.03] group-hover:opacity-0 transition-opacity duration-500`} />

                  {/* Deep watermark background */}
                  <industry.icon className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 w-32 h-32 md:w-64 md:h-64 opacity-[0.03] text-foreground pointer-events-none group-hover:scale-110 transition-transform duration-700" />

                  <div className={`icon-tile bg-gradient-${industry.colorTheme} shadow-lg mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <industry.icon className="w-6 h-6 md:w-10 md:h-10 text-white relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
                  </div>

                  <h3 className="text-sm sm:text-lg md:text-2xl font-bold transition-transform duration-500 leading-tight">
                    {industry.title}
                  </h3>
                </div>

                {/*
                  =================
                  BACK FACE
                  =================
                */}
                <div className="absolute inset-0 card-base !p-4 sm:!p-6 md:!p-10 flex flex-col justify-center overflow-hidden border border-border/40 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)] z-10 bg-white dark:bg-card">
                  {/* Rich back face gradients */}
                  <div className={`absolute inset-0 bg-gradient-${industry.colorTheme} opacity-[0.08]`} />
                  <div className={`absolute -right-10 -top-10 md:-right-20 md:-top-20 w-32 h-32 md:w-64 md:h-64 bg-gradient-${industry.colorTheme} opacity-20 blur-[80px] rounded-full`} />

                  <div className="relative z-10 flex justify-between items-start mb-3 sm:mb-4 md:mb-6">
                    <div className={`icon-tile bg-gradient-${industry.colorTheme} shadow-lg rounded-xl md:rounded-2xl w-8 h-8 md:w-16 md:h-16 flex items-center justify-center`}>
                      <industry.icon className="w-4 h-4 md:w-8 md:h-8 text-white relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
                    </div>
                    <div className={`w-6 h-6 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-${industry.colorTheme === 'primary' ? 'primary' : industry.colorTheme === 'accent1' ? 'emerald-500' : 'purple-500'}/10`}>
                      <ArrowUpRight className={`w-3 h-3 md:w-5 md:h-5 text-${industry.colorTheme === 'primary' ? 'primary' : industry.colorTheme === 'accent1' ? 'emerald-500' : 'purple-500'}`} />
                    </div>
                  </div>

                  <div className="relative z-10 flex-1 flex flex-col justify-end pb-1 md:pb-2">
                    <h3 className="text-sm sm:text-lg md:text-2xl font-bold mb-1 sm:mb-2 md:mb-3 leading-tight">
                      {industry.title}
                    </h3>
                    <p className="text-body text-[10px] sm:text-xs md:text-base font-medium leading-snug">
                      {industry.description}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
