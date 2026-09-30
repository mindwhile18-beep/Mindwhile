import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import aboutTeam from '@/assets/about-team.png';

const highlights = [
  'Building long-lasting relationships',
  'Top vendor ratings consistently',
  'Customer success focused',
  'Innovation-driven approach',
];

export const AboutIntro = () => {
  return (
    <section className="section-padding overflow-hidden relative bg-card/10">
      {/* Content wrapper without generic blobs */}
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-caption bg-primary/10 text-primary px-4 py-2 rounded-full mb-4 inline-flex items-center gap-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Why Choose MindWhile?
            </span>
            <h2 className="heading-2 mb-6 leading-tight">
              A Strategic Product Partner,
              <span className="gradient-text block mt-1">Not Just a Vendor</span>
            </h2>
            <p className="text-body mb-8">
              We don't just write code; we build software products that scale your business. While others focus on delivering hours, we focus on delivering measurable business outcomes and long-term product success. Our clients consistently rank us as their top technology partner because we invest in their growth.
            </p>

            <div className="grid sm:grid-cols-2 grid-gap mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background"
                  />
                ))}
              </div>
              <div>
                <p className="font-semibold text-foreground">100+ Happy Clients</p>
                <p className="text-sm text-muted-foreground">Trust us with their projects</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:pl-10"
          >
            <div className="relative group">
              {/* Main Image */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10 transition-transform duration-700 group-hover:scale-[1.02] group-hover:rotate-1"
              >
                <img
                  src={aboutTeam}
                  alt="Mindwhile Team"
                  loading="lazy"
                  decoding="async"
                  className="rounded-[2.5rem] shadow-2xl w-full object-cover border border-white/5"
                />
                <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-white/10" />
              </motion.div>

              {/* Image cleanly framed without generic decorative shapes behind it */}

              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5, type: 'spring' }}
                className="absolute -bottom-6 md:-bottom-8 -left-2 md:-left-12 card-base !p-4 md:!p-8 z-20 group-hover:-translate-y-2 transition-transform duration-500"
              >
                <div className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-primary mb-1 md:mb-2 drop-shadow-sm">Since 2021</div>
                <p className="text-foreground/80 font-medium text-[10px] md:text-base tracking-wide uppercase">Delivering Excellence</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
