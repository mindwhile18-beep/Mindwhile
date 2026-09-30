import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { StatsCounter } from '@/components/home/StatsCounter';
import { FloatingActionButton } from '@/components/FloatingActionButton';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  Globe,
  Sparkles,
  ArrowRight,
  Rocket,
  TrendingUp,
  Layers,
  GraduationCap,
  Car,
  BrainCircuit,
  Target
} from 'lucide-react';
import aboutTeam from '@/assets/about-team.png';

/* ─── Product Focus ─── */
const products = [
  {
    icon: GraduationCap,
    title: 'School ERP',
    description: 'A comprehensive, cloud-based School Management System transforming how educational institutions operate, from admissions to alumni management.',
    colorTheme: 'primary',
    link: '/products'
  },
  {
    icon: Car,
    title: 'Jago',
    description: 'A next-generation ride-hailing platform designed to make daily commuting fast, affordable, and reliable across cities.',
    colorTheme: 'accent2',
    link: '/products'
  },
  {
    icon: BrainCircuit,
    title: 'NeuroTalk',
    description: 'An innovative AI-powered communication and mental wellness platform pushing the boundaries of accessible healthcare.',
    colorTheme: 'accent1',
    link: '/products'
  }
];

/* ─── Milestones ─── */
const milestones = [
  {
    year: '2021',
    title: 'The Inception',
    description: 'Mindwhile IT Solutions was founded with a singular vision: to build scalable, high-impact products that solve real-world problems.',
    icon: Rocket,
    colorTheme: 'primary',
  },
  {
    year: '2022',
    title: 'School ERP Launch',
    description: 'Successfully launched OurSchoolERP, rapidly onboarding 50+ educational institutions and digitizing their operations.',
    icon: GraduationCap,
    colorTheme: 'accent2',
  },
  {
    year: '2023',
    title: 'Jago Development',
    description: 'Entered the mobility sector with the development and beta launch of Jago, our smart bike and cab ride platform.',
    icon: Car,
    colorTheme: 'accent1',
  },
  {
    year: '2024',
    title: 'NeuroTalk & Scaling',
    description: 'Began building NeuroTalk to revolutionize mental healthcare, while scaling our existing platforms to 100+ active clients.',
    icon: BrainCircuit,
    colorTheme: 'primary',
  },
  {
    year: '2025+',
    title: 'Global Ecosystem',
    description: 'Expanding our product ecosystem internationally, aiming to impact millions of daily users across multiple countries.',
    icon: Globe,
    colorTheme: 'accent2',
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <FloatingActionButton />

      <main className="pt-24">

        {/* ━━ HERO ━━ */}
        <section className="section-padding relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/about_background.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 mix-blend-overlay" />
          <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.14, 0.06] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[80px] opacity-70 pointer-events-none" />
          <motion.div animate={{ scale: [1.1, 1, 1.1], opacity: [0.04, 0.10, 0.04] }} transition={{ duration: 10, repeat: Infinity }} className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[80px] opacity-70 pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="text-caption bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 inline-flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Product Innovators
              </motion.span>

              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 lg:mb-6 leading-tight tracking-tight text-foreground">
                We Build Products That
                <span className="gradient-text block mt-1">Change the World</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="text-body text-sm md:text-base max-w-3xl mx-auto">
                At Mindwhile IT Solutions Pvt Ltd, we don't just write code — we incubate, build, and scale revolutionary SaaS platforms like School ERP, Jago, and NeuroTalk.
              </motion.p>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="flex flex-wrap justify-center gap-4 mt-10">
                <Link to="/products">
                  <Button className="btn-primary group px-6 py-4 lg:px-8 lg:py-5 h-auto text-sm lg:text-base rounded-2xl">
                    Explore Our Products
                    <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="px-6 py-4 lg:px-8 lg:py-5 h-auto text-sm lg:text-base rounded-2xl border-2">
                    Partner With Us
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ━━ OUR STORY ━━ */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-caption bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 inline-flex items-center gap-2">
                  <Target className="w-3.5 h-3.5" />
                  Our Mission
                </span>
                <h2 className="heading-2 mb-6">
                  A Relentless Focus on
                  <span className="gradient-text block">Scalable Products</span>
                </h2>
                <p className="text-body mb-5">
                  Mindwhile IT Solutions emerged with a clear, singular vision: to build powerful, scalable software products that solve massive, real-world problems. Rather than spreading ourselves thin, we focus entirely on perfecting our core ecosystem.
                </p>
                <p className="text-body mb-8">
                  Today, our entire team is dedicated to innovating and scaling three major platforms: our flagship School ERP system, the Jago ride-hailing network, and our upcoming AI healthcare platform, NeuroTalk. 
                </p>

                <div className="grid grid-cols-2 gap-3 lg:gap-4 mt-6">
                  {[
                    'Product-Led Growth',
                    'Continuous Innovation',
                    'User-Centric Design',
                    'Scalable Architecture',
                    'Data-Driven Decisions',
                    'Market Disruption',
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium text-foreground text-xs lg:text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative order-1 lg:order-2"
              >
                <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
                  <img 
                    src={aboutTeam} 
                    alt="Mindwhile Team building products" 
                    loading="lazy"
                    decoding="async"
                    className="rounded-3xl shadow-2xl w-full object-cover" 
                  />
                  <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
                </motion.div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-2xl -z-10 opacity-60 blur-xl" />

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: 'spring' }}
                  className="absolute -bottom-6 -left-6 card-base !p-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="icon-tile icon-tile-sm bg-gradient-accent1">
                      <Rocket className="w-6 h-6 text-white relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
                    </div>
                    <div>
                      <p className="text-lg font-black text-transparent bg-clip-text bg-gradient-accent1">Product</p>
                      <p className="text-caption">Incubator</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ━━ OUR PRODUCTS ━━ */}
        <section className="section-padding bg-secondary/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 max-w-3xl mx-auto"
            >
              <span className="text-caption bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 inline-flex items-center gap-2">
                <Layers className="w-3.5 h-3.5" />
                Our Ecosystem
              </span>
              <h2 className="heading-2 mb-4">The Platforms We Build</h2>
              <p className="text-body">Our entire organization is uniquely structured around building, scaling, and perfecting these three flagship platforms.</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-4 lg:gap-8">
              {products.map((p, index) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="card-base !p-5 md:!p-8 text-left group flex flex-col h-full"
                >
                  <div className={`absolute inset-0 bg-gradient-${p.colorTheme} opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500`} />
                  <div className={`icon-tile icon-tile-sm md:icon-tile-md bg-gradient-${p.colorTheme} mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <p.icon className="w-5 h-5 md:w-8 md:h-8 text-white relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
                  </div>
                  <h3 className="heading-3 text-base md:text-xl mb-2 lg:mb-3">{p.title}</h3>
                  <p className="text-body text-xs md:text-base mb-4 lg:mb-6 flex-grow">{p.description}</p>
                  
                  <Link to={p.link} className={`inline-flex items-center text-sm font-bold text-${p.colorTheme === 'primary' ? 'primary' : p.colorTheme === 'accent1' ? 'emerald-500' : 'purple-500'} group-hover:translate-x-2 transition-transform`}>
                    Learn more <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━ JOURNEY / MILESTONES ━━ */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[80px] opacity-70 pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 max-w-3xl mx-auto"
            >
              <span className="text-caption bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 inline-flex items-center gap-2">
                <TrendingUp className="w-3.5 h-3.5" />
                Our Journey
              </span>
              <h2 className="text-3xl font-bold mb-3">Product Evolution</h2>
              <p className="text-sm text-foreground/80">From a single idea to a multi-product ecosystem.</p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/40 via-accent/30 to-transparent hidden md:block" style={{ transform: 'translateX(-50%)' }} />

              <div className="space-y-12">
                {milestones.map((m, index) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.1 }}
                    className={`relative flex flex-col md:flex-row items-center gap-6 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* Content card */}
                    <div className="w-full md:w-5/12">
                      <div className="card-base !p-4 lg:!p-6 hover:-translate-y-1 transition-transform duration-300">
                        <h3 className="heading-3 mb-2 text-base lg:text-lg">{m.title}</h3>
                        <p className="text-body text-xs lg:text-sm leading-relaxed">{m.description}</p>
                      </div>
                    </div>

                    {/* Centre dot */}
                    <div className={`w-10 h-10 rounded-full bg-gradient-${m.colorTheme} flex items-center justify-center shadow-xl z-10 shrink-0`}>
                      <m.icon className="w-5 h-5 text-white" />
                    </div>

                    {/* Spacer */}
                    <div className="hidden md:block w-5/12" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ━━ STATS ━━ */}
        <div className="bg-secondary/10 pt-8 pb-16">
          <StatsCounter />
        </div>

        {/* ━━ CTA ━━ */}
        <section className="section-padding bg-secondary/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-base text-center max-w-4xl mx-auto"
            >
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

              <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 4, repeat: Infinity }} className="relative z-10 flex justify-center">
                <div className="icon-tile icon-tile-md bg-gradient-primary mb-6">
                  <Rocket className="w-8 h-8 text-white relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
                </div>
              </motion.div>

              <h2 className="heading-2 mb-4 relative z-10">Experience Our Products</h2>
              <p className="text-body mb-8 max-w-2xl mx-auto relative z-10">
                Join thousands of users who rely on School ERP, Jago, and NeuroTalk to power their daily lives.
              </p>
              <div className="flex flex-wrap justify-center gap-4 relative z-10">
                <Link to="/products">
                  <Button className="btn-primary group text-sm lg:text-base px-6 py-4 lg:px-8 lg:py-5 h-auto rounded-2xl shadow-xl shadow-primary/20">
                    Explore Ecosystem
                    <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="text-sm lg:text-base px-6 py-4 lg:px-8 lg:py-5 h-auto rounded-2xl border-2 hover:bg-secondary/50">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
