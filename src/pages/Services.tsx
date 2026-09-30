import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingActionButton } from '@/components/FloatingActionButton';
import { Button } from '@/components/ui/button';
import {
  Code,
  Palette,
  Smartphone,
  Apple,
  Megaphone,
  Search,
  ArrowRight,
  CheckCircle,
  Layers,
  Database,
  Cloud,
  Shield,
  Cpu,
  GitBranch,
  Sparkles,
  Zap
} from 'lucide-react';
import { MaintenanceSupport } from '@/components/services/MaintenanceSupport';

const services = [
  {
    icon: Code,
    title: 'Website Design & Development',
    description: 'Custom websites, dashboards, scalable web apps using latest technologies.',
    detailedDescription: 'Our comprehensive web development services cover everything from striking frontend designs to robust backend architectures. We build fast, secure, and scalable digital solutions tailored to your unique business needs, ensuring a flawless user experience across all devices.',
    features: ['React & Next.js', 'Node.js Backend', 'Responsive Design', 'E-commerce Solutions'],
    techStack: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL'],
    deliverables: ['Custom Source Code', 'Admin Dashboard', 'API Documentation', 'Deployment Setup'],
    businessValue: 'Enhance your digital footprint with a scalable, high-performance web solution that drives engagement and conversions.',
    colorTheme: 'primary',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centric designs, wireframes, prototypes, product UX research.',
    detailedDescription: 'We craft intuitive and visually stunning interfaces that captivate users and drive engagement. By blending extensive user research with modern design aesthetics, we create seamless user journeys that elevate your brand and improve conversion rates.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    techStack: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision'],
    deliverables: ['High-Fidelity Mockups', 'Interactive Prototypes', 'Design System', 'User Journey Maps'],
    businessValue: 'Boost user satisfaction and retention through intuitive, beautiful, and accessible product designs.',
    colorTheme: 'accent2',
  },
  {
    icon: Smartphone,
    title: 'Android Development',
    description: 'High performance Android apps using modern frameworks.',
    detailedDescription: 'Tap into the massive Android user base with our expertly crafted mobile applications. We utilize the latest frameworks and native technologies to deliver high-performance, feature-rich apps that provide a smooth and engaging experience on any Android device.',
    features: ['Native Apps', 'Cross-Platform', 'Material Design', 'Play Store Publishing'],
    techStack: ['Kotlin', 'React Native', 'Flutter', 'Firebase', 'SQLite'],
    deliverables: ['APK/AAB Files', 'App Store Listing Assets', 'Source Code', 'Technical Documentation'],
    businessValue: 'Expand your market reach and engage with millions of Android users through a fast and reliable mobile app.',
    colorTheme: 'accent1',
  },
  {
    icon: Apple,
    title: 'iOS Development',
    description: 'Secure & scalable iOS applications for the Apple ecosystem.',
    detailedDescription: "Establish a premium presence on the App Store with our specialized iOS development services. We build elegant, secure, and highly scalable applications that leverage the full potential of Apple's ecosystem, ensuring a pristine experience for your users.",
    features: ['Swift Development', 'SwiftUI', 'App Store Publishing', 'Apple Guidelines'],
    techStack: ['Swift', 'SwiftUI', 'Objective-C', 'Core Data', 'CloudKit'],
    deliverables: ['IPA Files', 'App Store Connect Setup', 'Source Code', 'Design Assets'],
    businessValue: 'Target high-value customers with a premium, seamless iOS application that adheres strictly to Apple standards.',
    colorTheme: 'primary',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Growth marketing, paid ads, brand strategy for online presence.',
    detailedDescription: 'Accelerate your business growth with our data-driven digital marketing strategies. From targeted social media campaigns to comprehensive brand strategies, we help you reach the right audience, increase brand awareness, and maximize your ROI across digital channels.',
    features: ['Bulk SMS, Email & WhatsApp', 'Social Media Marketing', 'PPC Campaigns', 'Content Strategy'],
    techStack: ['Google Ads', 'Meta Ads', 'Analytics', 'HubSpot', 'Mailchimp'],
    deliverables: ['Marketing Strategy Document', 'Ad Campaign Setup', 'Monthly Performance Reports', 'Content Calendar'],
    businessValue: 'Maximize ROI and accelerate revenue growth through targeted, data-driven marketing campaigns.',
    colorTheme: 'accent2',
    isPremium: true,
  },
  {
    icon: Search,
    title: 'SEO Services',
    description: 'Search ranking optimization, content strategy, and performance SEO.',
    detailedDescription: 'Dominate search engine results and drive organic traffic with our proven SEO methodologies. We provide comprehensive on-page and technical optimization, strategic link building, and high-quality content strategies to ensure your business stands out online.',
    features: ['On-Page SEO', 'Technical SEO', 'Link Building', 'Content Optimization'],
    techStack: ['Ahrefs', 'SEMrush', 'Moz', 'Google Search Console', 'Screaming Frog'],
    deliverables: ['SEO Audit Report', 'Keyword Strategy', 'Backlink Profile', 'Monthly Ranking Updates'],
    businessValue: 'Achieve long-term, sustainable organic growth and outrank competitors in search engine results.',
    colorTheme: 'accent1',
    isPremium: true,
  },
];

const processSteps = [
  {
    icon: Layers,
    title: 'Discovery',
    description: 'Understanding your requirements, goals, and target audience.',
    colorTheme: 'primary',
  },
  {
    icon: GitBranch,
    title: 'Planning',
    description: 'Creating detailed roadmaps and architecture designs.',
    colorTheme: 'accent2',
  },
  {
    icon: Cpu,
    title: 'Development',
    description: 'Agile development with regular updates and feedback loops.',
    colorTheme: 'accent1',
  },
  {
    icon: Shield,
    title: 'Testing',
    description: 'Rigorous QA and security testing for reliability.',
    colorTheme: 'primary',
  },
  {
    icon: Cloud,
    title: 'Deployment',
    description: 'Seamless deployment and continuous integration.',
    colorTheme: 'accent2',
  },
  {
    icon: Database,
    title: 'Support',
    description: 'Ongoing maintenance and 24/7 support services.',
    colorTheme: 'accent1',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  },
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedService, setSelectedService] = useState<any>(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const view = params.get('view');
    if (view) {
      let activeService = null;
      if (view === 'website') activeService = services.find(s => s.title.includes('Website'));
      if (view === 'ui-ux') activeService = services.find(s => s.title.includes('UI/UX'));
      if (view === 'mobile') activeService = services.find(s => s.title.includes('Android')); // Defaults to Android for mobile
      if (view === 'marketing') activeService = services.find(s => s.title.includes('Digital Marketing'));
      if (view === 'seo') activeService = services.find(s => s.title.includes('SEO'));

      if (activeService) {
        setSelectedService(activeService);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [location.search]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <FloatingActionButton />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/it_services_background.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 mix-blend-overlay" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="text-caption bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 inline-block">
                Our Services
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 lg:mb-6 leading-tight tracking-tight text-foreground">
                Comprehensive IT
                <span className="gradient-text block mt-1">Solutions & Services</span>
              </h1>
              <p className="text-body text-sm md:text-base max-w-3xl mx-auto">
                From web development to digital marketing, we provide end-to-end technology
                solutions to help your business thrive in the digital age.
              </p>
            </motion.div>
          </div>
        </section>

        
        {/* Services List */}
        <section className="section-padding">
          <div className="container mx-auto px-4 space-y-8 lg:space-y-24">
            {services.map((service, index) => {
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8 }}
                  className="card-base !p-4 lg:!p-8"
                >
                  <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                    {/* Header Side */}
                    <div className="w-full lg:w-1/3">
                      <div className="flex items-center lg:items-start gap-3 lg:gap-5 mb-4 lg:mb-6">
                        <div className={`icon-tile icon-tile-sm lg:icon-tile-md bg-gradient-${service.colorTheme}`}>
                          <service.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white relative z-10" />
                          <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
                        </div>
                        <div>
                          <h3 className="heading-3 text-lg lg:text-2xl mb-1 lg:mb-2">{service.title}</h3>
                          {service.isPremium && (
                            <span className="text-caption bg-gradient-accent1 text-white px-3 py-1 rounded-full shadow-sm">
                              Premium
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-body text-sm lg:text-base mb-4 lg:mb-6">
                        {service.description}
                      </p>
                      
                      <div className="mb-4 lg:mb-6">
                        <h4 className="text-xs lg:text-sm font-bold uppercase tracking-widest text-foreground/80 mb-2 lg:mb-3 flex items-center gap-2">
                           Built With
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.techStack.map((tech) => (
                            <span key={tech} className="px-3 py-1.5 bg-secondary text-secondary-foreground text-xs font-semibold rounded-lg border border-border/50">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <Link to="/contact">
                        <Button className="w-full mt-4 btn-primary group rounded-xl">
                          Request Service
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-2 lg:mt-0">
                      {/* Features */}
                      <div>
                        <h4 className="text-xs lg:text-sm mb-3 lg:mb-4 font-bold uppercase tracking-widest flex items-center gap-2 text-foreground/80">
                          <CheckCircle className="w-4 h-4 text-primary" /> Key Capabilities
                        </h4>
                        <ul className="grid grid-cols-2 md:grid-cols-1 gap-2 lg:gap-0 lg:space-y-3">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3">
                              {feature.includes('Bulk') ? (
                                <Sparkles className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              ) : (
                                <div className={`w-2 h-2 rounded-full bg-gradient-${service.colorTheme} shrink-0 mt-1.5`} />
                              )}
                              <span className="text-foreground text-xs lg:text-sm font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-6 lg:space-y-8">
                         {/* Deliverables */}
                        <div>
                          <h4 className="text-xs lg:text-sm font-bold uppercase tracking-widest text-foreground/80 mb-3 lg:mb-4 flex items-center gap-2">
                            <Layers className="w-4 h-4 text-primary" /> Deliverables
                          </h4>
                          <ul className="grid grid-cols-2 md:grid-cols-1 gap-2 lg:gap-0 lg:space-y-3">
                            {service.deliverables.map((deliverable) => (
                              <li key={deliverable} className="flex items-start gap-3">
                                <CheckCircle className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                                <span className="text-muted-foreground text-xs lg:text-sm font-medium">{deliverable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Business Value */}
                        <div>
                          <h4 className="text-xs lg:text-sm font-bold uppercase tracking-widest text-foreground/80 mb-2 lg:mb-3 flex items-center gap-2">
                            <Zap className="w-4 h-4 text-primary" /> Business Value
                          </h4>
                          <p className="text-foreground text-xs lg:text-sm leading-relaxed p-3 lg:p-4 rounded-xl bg-secondary/50 border border-border/50">
                            {service.businessValue}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>


        {/* Process Section */}
        <section className="section-padding bg-background relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-semibold tracking-wide uppercase mb-6 shadow-sm">
                <Layers className="w-4 h-4" /> Our Process
              </span>
              <h2 className="heading-2 mb-4">How We Work</h2>
              <p className="text-body max-w-2xl mx-auto">
                A proven methodology that ensures quality delivery and client satisfaction.
              </p>
            </motion.div>

            <div className="relative w-full max-w-7xl mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`card-base !p-4 lg:!p-8 group overflow-hidden flex flex-col justify-between h-full`}
                  >
                    {/* Background Big Number */}
                    <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 text-[80px] lg:text-[120px] font-black text-foreground/[0.03] dark:text-foreground/[0.02] pointer-events-none select-none z-0 group-hover:text-foreground/[0.05] transition-colors duration-500 leading-none">
                      0{index + 1}
                    </div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-4 lg:mb-8">
                        <div className={`icon-tile icon-tile-sm lg:icon-tile-md bg-gradient-${step.colorTheme} shadow-xl shadow-${step.colorTheme}/20`}>
                          <step.icon className="w-4 h-4 lg:w-7 lg:h-7 text-white" />
                          <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
                        </div>
                        <span className={`text-[10px] lg:text-sm font-bold bg-clip-text text-transparent bg-gradient-${step.colorTheme}`}>
                          STEP 0{index + 1}
                        </span>
                      </div>
                      
                      <div className="mt-auto">
                        <h3 className="text-sm md:text-base lg:text-xl font-bold mb-1.5 lg:mb-3 group-hover:-translate-y-1 transition-transform duration-300">{step.title}</h3>
                        <p className="text-[11px] lg:text-sm text-muted-foreground leading-snug lg:leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <MaintenanceSupport />

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-base text-center max-w-4xl mx-auto"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
              <h2 className="heading-2 mb-4 relative z-10">
                Ready to Transform Your <span className="gradient-text">Business?</span>
              </h2>
              <p className="text-body mb-8 max-w-2xl mx-auto relative z-10">
                Schedule a free technical consultation to discuss your project requirements, timeline, and how our expertise can drive your growth.
              </p>
              <div className="relative z-10">
                <Link to="/contact">
                  <Button className="btn-primary group text-lg px-10 py-6 rounded-2xl shadow-xl shadow-primary/20">
                    Schedule Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
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

export default Services;
