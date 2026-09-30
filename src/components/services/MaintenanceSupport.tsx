import { motion } from 'framer-motion';
import { ShieldCheck, Activity, RefreshCw, LifeBuoy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const benefits = [
  {
    icon: Activity,
    title: 'Proactive Monitoring',
    desc: '24/7 system health checks to detect and resolve issues before they affect your users.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: ShieldCheck,
    title: 'Security Updates',
    desc: 'Regular patching and security audits to protect against emerging vulnerabilities.',
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    icon: RefreshCw,
    title: 'Continuous Optimization',
    desc: 'Performance tuning and codebase updates to ensure your app scales smoothly.',
    gradient: 'from-purple-500 to-pink-500'
  }
];

export const MaintenanceSupport = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden border-t border-border/10">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/15 text-primary text-sm font-semibold tracking-wide uppercase mb-6">
              <LifeBuoy className="w-4 h-4" />
              Post-Launch Care
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
              Maintenance & <br/>
              <span className="gradient-text">Premium Support</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We don't just launch your project and walk away. Our comprehensive SLA-backed maintenance plans guarantee that your application remains secure, blazing fast, and always online.
            </p>
            
            <div className="space-y-6 mb-8">
              {benefits.map((benefit, i) => (
                <motion.div 
                  key={benefit.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shrink-0 shadow-lg`}>
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-1">{benefit.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link to="/contact">
              <Button className="btn-primary group rounded-xl px-8 py-5 h-auto text-base">
                View Maintenance Plans
              </Button>
            </Link>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass rounded-[2rem] p-8 border border-white/5 bg-card/40 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-400 to-teal-500" />
              
              <div className="flex items-center justify-between mb-8 pb-8 border-b border-border/40">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">System Status</p>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xl font-bold text-emerald-500">All Systems Operational</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">Uptime SLA</p>
                  <span className="text-2xl font-black text-foreground">99.99%</span>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: 'API Response Time', value: '45ms', status: 'Healthy' },
                  { label: 'Database Sync', value: 'Up to date', status: 'Healthy' },
                  { label: 'Security Firewall', value: 'Active', status: 'Secured' }
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between p-4 rounded-xl bg-secondary/30">
                    <span className="text-foreground font-medium">{stat.label}</span>
                    <div className="text-right">
                      <div className="text-foreground font-bold">{stat.value}</div>
                      <div className="text-xs text-emerald-500 font-semibold">{stat.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl -z-10 blur-2xl opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
