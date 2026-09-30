import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    title: 'Fintech Mobile App Revamp',
    client: 'NexusPay',
    metrics: ['200% Increase in Retention', '40% Faster Load Times'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    tags: ['React Native', 'Node.js', 'AWS'],
    colorTheme: 'primary'
  },
  {
    title: 'Enterprise Resource Planning System',
    client: 'GlobalLogistics',
    metrics: ['35% Cost Reduction', 'Automated 100+ Workflows'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    tags: ['React', 'Python', 'PostgreSQL'],
    colorTheme: 'accent1'
  },
  {
    title: 'Healthcare Patient Portal',
    client: 'HealthPlus Clinics',
    metrics: ['HIPAA Compliant', '50k+ Active Patients'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
    tags: ['Next.js', 'Go', 'Kubernetes'],
    colorTheme: 'accent2'
  }
];

export const CaseStudies = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div className="max-w-2xl">
            <span className="text-caption bg-primary/10 text-primary px-4 py-2 rounded-full mb-4 inline-flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Success Stories
            </span>
            <h2 className="heading-2 mb-4">
              Our <span className="gradient-text">Case Studies</span>
            </h2>
            <p className="text-body">
              Discover how we've helped businesses across industries overcome complex technical challenges and achieve exceptional growth.
            </p>
          </div>
          <Link to="/contact">
            <Button variant="outline" className="hidden md:flex group">
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-gap">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card-base !p-0 group cursor-pointer overflow-hidden flex flex-col"
            >
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={study.image} 
                  alt={study.title} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                  {study.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-semibold bg-background/90 backdrop-blur-md text-foreground rounded-full shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="mb-4">
                  <p className={`text-sm font-bold text-${study.colorTheme} uppercase tracking-wider mb-2`}>{study.client}</p>
                  <h3 className="heading-3 mb-0 group-hover:text-primary transition-colors">{study.title}</h3>
                </div>
                
                <div className="mt-auto pt-6 border-t border-border/50">
                  <ul className="space-y-2">
                    {study.metrics.map(metric => (
                      <li key={metric} className="flex items-center text-body text-sm font-medium">
                        <span className={`w-1.5 h-1.5 rounded-full bg-${study.colorTheme} mr-3`} />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <Link to="/contact">
            <Button className="w-full btn-primary group">
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
