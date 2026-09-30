import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, ExternalLink, MessageCircle } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { FloatingActionButton } from '@/components/FloatingActionButton';

// Mock data (in a real app this would come from a database or API)
const productDatabase: Record<string, any> = {
  'school-management': {
    title: 'School Management ERP',
    tagline: 'Complete Digital Campus Solution',
    description: 'A comprehensive school management system that digitizes every aspect of educational administration — from admissions and attendance to examinations, finance, and parent communication.',
    gradient: 'from-blue-500 to-cyan-500',
    features: [
      {
        title: 'Student & Staff Management',
        desc: 'Centralized database for all student and staff records with role-based access control.',
      },
      {
        title: 'Attendance & Timetable',
        desc: 'Automated attendance tracking and dynamic timetable generation without conflicts.',
      },
      {
        title: 'Fee & Finance Module',
        desc: 'Streamlined fee collection, invoicing, and real-time financial reporting.',
      },
      {
        title: 'Examination & Report Cards',
        desc: 'Customizable grading systems and automated report card generation.',
      },
      {
        title: 'Parent Communication',
        desc: 'Dedicated parent portal and mobile app for real-time updates and messaging.',
      }
    ],
    stats: [
      { label: 'Modules', value: '25+' },
      { label: 'Schools', value: '50+' },
      { label: 'Uptime', value: '99.9%' },
    ],
    liveUrl: 'https://ourschoolerp.com/',
  },
  'jago': {
    title: 'Jago',
    tagline: 'Smart Bike & Cab Ride Platform',
    description: 'A next-generation ride-hailing platform for bikes and cabs — designed to make daily commute fast, affordable, and reliable. Connects riders with nearby drivers in seconds.',
    gradient: 'from-orange-400 to-red-500',
    features: [
      {
        title: 'Instant Booking',
        desc: 'Book a ride in seconds with intelligent driver matching algorithms.',
      },
      {
        title: 'Real-time GPS Tracking',
        desc: 'Track your ride in real-time with accurate ETA predictions.',
      },
      {
        title: 'Flexible Fare Pricing',
        desc: 'Dynamic surge pricing and flexible fare options based on demand.',
      },
      {
        title: 'In-app Wallet',
        desc: 'Seamless cashless payments with built-in wallet integration.',
      }
    ],
    stats: [
      { label: 'Rides/Day', value: '500+' },
      { label: 'Drivers', value: '200+' },
      { label: 'Cities', value: '5+' },
    ],
    liveUrl: '#',
  },
  'raksha-assist': {
    title: 'Raksha Assist',
    tagline: 'Comprehensive Health Insurance Platform',
    description: 'A cutting-edge health insurance platform that streamlines policy management, claims processing, and customer assistance.',
    gradient: 'from-rose-500 to-pink-500',
    features: [
      {
        title: 'Policy Management',
        desc: 'End-to-end digital lifecycle for health insurance policies.',
      },
      {
        title: 'Claims Processing',
        desc: 'Automated claim routing and settlement workflows.',
      },
      {
        title: 'Customer Portal',
        desc: 'Self-service portal for policyholders to manage coverage.',
      },
      {
        title: 'Secure Data Vault',
        desc: 'HIPAA compliant document storage and data protection.',
      }
    ],
    stats: [
      { label: 'Policy Types', value: '20+' },
      { label: 'Partners', value: '15+' },
      { label: 'Processing', value: '24/7' },
    ],
    liveUrl: '#',
  },
  'neurotalk': {
    title: 'NeuroTalk',
    tagline: 'AI-Powered Real-Time Call Translation',
    description: 'Advanced AI communication tool that enables real-time call translation across 22 languages — with voice cloning technology that translates using your own voice.',
    gradient: 'from-violet-500 to-purple-500',
    features: [
      {
        title: '22 Languages Supported',
        desc: 'Real-time translation across major global languages.',
      },
      {
        title: 'Voice Cloning AI',
        desc: 'Translates speech while maintaining your unique vocal characteristics.',
      },
      {
        title: 'Low Latency',
        desc: 'Sub-second translation latency for natural conversation flow.',
      },
      {
        title: 'Privacy-first Design',
        desc: 'End-to-end encryption ensuring conversations remain private.',
      }
    ],
    stats: [
      { label: 'Languages', value: '22+' },
      { label: 'Accuracy', value: '98%' },
      { label: 'Latency', value: '<1s' },
    ],
    liveUrl: '#',
  }
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? productDatabase[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="heading-2 mb-4">Product Not Found</h2>
          <Link to="/products">
            <Button variant="outline">Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingActionButton />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-5`} />
          <div className="container mx-auto px-4 relative z-10">
            <Link to="/products" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${product.gradient} text-white font-semibold text-sm mb-6`}>
                  {product.tagline}
                </div>
                <h1 className="heading-1 mb-6 text-5xl md:text-6xl">{product.title}</h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  {product.liveUrl !== '#' && (
                    <a href={product.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button className={`btn-primary bg-gradient-to-r ${product.gradient} text-white px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 text-lg`}>
                        Explore Live Product
                        <ExternalLink className="ml-2 w-5 h-5" />
                      </Button>
                    </a>
                  )}
                  <Link to="/contact">
                    <Button variant="outline" className="px-8 py-6 rounded-xl border-2 hover:bg-secondary transition-all text-lg">
                      Request Demo
                    </Button>
                  </Link>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-20 blur-[100px] rounded-full`} />
                <div className="glass p-8 rounded-3xl border border-white/10 relative z-10 shadow-2xl">
                  {/* Mockup Placeholder */}
                  <div className="aspect-video bg-secondary/50 rounded-xl overflow-hidden border border-border flex items-center justify-center">
                    <div className="text-muted-foreground/50 font-medium">Dashboard Interface Preview</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    {product.stats.map((stat: any, idx: number) => (
                      <div key={idx} className="text-center p-4 rounded-xl bg-background/50 border border-border/50">
                        <div className={`text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r ${product.gradient}`}>
                          {stat.value}
                        </div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feature Breakdown */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="heading-2 mb-4">Deep-dive Features</h2>
              <p className="text-body text-lg">
                Everything you need to scale your operations and provide exceptional experiences.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.features.map((feature: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-base p-8 hover:border-primary/30 transition-colors group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="heading-3 text-xl mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 border-t border-border/40 bg-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to see it in action?</h2>
              <p className="text-xl text-muted-foreground mb-10">
                Schedule a personalized demo to see how {product.title} can transform your business.
              </p>
              <Link to="/contact">
                <Button className={`btn-primary bg-gradient-to-r ${product.gradient} text-white px-10 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all text-lg`}>
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Request a Demo
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
