import { motion } from 'framer-motion';
import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingActionButton } from '@/components/FloatingActionButton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (formData.phone && !/^\+?[0-9\s-]{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "11c32500-2c6c-4b40-ba1e-1d598de4016f",
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        toast({
          title: "Message Sent Successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        toast({
          title: "Submission Failed",
          description: result.message || "Something went wrong. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Failed to send message. Please check your connection.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <FloatingActionButton />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding relative overflow-hidden bg-background">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat -hue-rotate-15"
            style={{ backgroundImage: "url('/about_background.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/10 to-blue-500/10 mix-blend-overlay" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[80px] opacity-70 pointer-events-none mix-blend-screen" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[80px] opacity-70 pointer-events-none mix-blend-screen" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="text-caption bg-primary/10 text-primary px-4 py-2 rounded-full mb-4 inline-block">
                Contact Us
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 lg:mb-6 leading-tight tracking-tight text-foreground">
                Let's Start a
                <span className="gradient-text block mt-1">Conversation</span>
              </h1>
              <p className="text-body text-sm md:text-base max-w-3xl mx-auto">
                Ready to transform your business? Book a free technical consultation today. We'll discuss your requirements, provide a detailed project roadmap, and show you how our expertise can drive your growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="section-padding relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">

              {/* Contact Info (Moved to left for better reading flow if desired, or keep form left. Let's keep info left, form right, or simply upgrade inplace). Keeping Form Left: */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-accent/30 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="card-base !p-5 md:!p-10 relative">
                  <h2 className="heading-2 mb-2">Send us a Message</h2>
                  <p className="text-body mb-8">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>

                  {isSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="heading-3 mb-2">Thank You!</h3>
                      <p className="text-body">
                        Your message has been sent successfully. We'll be in touch soon.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                            Your Name *
                          </label>
                          <Input
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => {
                              setFormData({ ...formData, name: e.target.value });
                              if (errors.name) setErrors({ ...errors, name: '' });
                            }}
                            className={`h-12 md:h-14 rounded-xl bg-background/50 transition-colors ${errors.name ? 'border-red-500 focus:border-red-500 ring-red-500' : 'border-border focus:border-primary'}`}
                          />
                          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            type="text"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => {
                              setFormData({ ...formData, email: e.target.value });
                              if (errors.email) setErrors({ ...errors, email: '' });
                            }}
                            className={`h-12 md:h-14 rounded-xl bg-background/50 transition-colors ${errors.email ? 'border-red-500 focus:border-red-500 ring-red-500' : 'border-border focus:border-primary'}`}
                          />
                          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            type="text"
                            placeholder="+91 99999 99999"
                            value={formData.phone}
                            onChange={(e) => {
                              setFormData({ ...formData, phone: e.target.value });
                              if (errors.phone) setErrors({ ...errors, phone: '' });
                            }}
                            className={`h-12 md:h-14 rounded-xl bg-background/50 transition-colors ${errors.phone ? 'border-red-500 focus:border-red-500 ring-red-500' : 'border-border focus:border-primary'}`}
                          />
                          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                            Subject *
                          </label>
                          <Input
                            id="subject"
                            type="text"
                            placeholder="Project Discussion"
                            value={formData.subject}
                            onChange={(e) => {
                              setFormData({ ...formData, subject: e.target.value });
                              if (errors.subject) setErrors({ ...errors, subject: '' });
                            }}
                            className={`h-12 md:h-14 rounded-xl bg-background/50 transition-colors ${errors.subject ? 'border-red-500 focus:border-red-500 ring-red-500' : 'border-border focus:border-primary'}`}
                          />
                          {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Your Message *
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your project..."
                          value={formData.message}
                          onChange={(e) => {
                            setFormData({ ...formData, message: e.target.value });
                            if (errors.message) setErrors({ ...errors, message: '' });
                          }}
                          rows={6}
                          className={`rounded-xl bg-background/50 transition-colors resize-none ${errors.message ? 'border-red-500 focus:border-red-500 ring-red-500' : 'border-border focus:border-primary'}`}
                        />
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full h-12 md:h-14 text-base md:text-lg group"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col h-full justify-center lg:pl-8"
              >
                <h2 className="heading-2 mb-2">Get in Touch</h2>
                <p className="text-body mb-8">
                  Feel free to reach out through any of the following channels.
                </p>

                <div className="space-y-6 mb-10">
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-4 md:gap-6 p-4 md:p-6 card-base group hover:border-primary/30 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="icon-tile icon-tile-sm md:icon-tile-md bg-gradient-primary shrink-0 group-hover:scale-110 transition-transform duration-500">
                      <MapPin className="w-5 h-5 md:w-8 md:h-8 text-white relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
                    </div>
                    <div>
                      <h4 className="heading-3 mb-1 text-lg">Our Office</h4>
                      <p className="text-body text-sm md:text-base">
                        4th Floor, Mayuri Tech Park,<br />
                        Mangalagiri, AP 522503
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-4 md:gap-6 p-4 md:p-6 card-base group hover:border-accent2/30 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent2/0 via-accent2/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="icon-tile icon-tile-sm md:icon-tile-md bg-gradient-accent2 shrink-0 group-hover:scale-110 transition-transform duration-500">
                      <Mail className="w-5 h-5 md:w-8 md:h-8 text-white relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="heading-3 mb-1 text-lg">Email Us</h4>
                      <a href="mailto:mindwhile.itsolutionspvtltd@mindwhile.com" className="text-primary group-hover:text-purple-500 transition-colors text-xs sm:text-sm font-medium break-all">
                        mindwhile.itsolutionspvtltd@mindwhile.com
                      </a>
                      <p className="text-caption mt-1">We reply within 24 hours</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-4 md:gap-6 p-4 md:p-6 card-base group hover:border-accent1/30 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent1/0 via-accent1/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="icon-tile icon-tile-sm md:icon-tile-md bg-gradient-accent1 shrink-0 group-hover:scale-110 transition-transform duration-500">
                      <Phone className="w-5 h-5 md:w-8 md:h-8 text-white relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="heading-3 mb-1 text-lg">Call Us</h4>
                      <a href="tel:+917995526153" className="text-primary group-hover:text-emerald-500 transition-colors text-lg font-medium font-mono">
                        +91 79955 26153
                      </a>
                      <p className="text-caption mt-1">Mon-Sat, 9am-6pm IST</p>
                    </div>
                  </motion.div>
                </div>

                {/* SLA / Guarantees */}
                <div className="mb-10 bg-primary/5 border border-primary/20 rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
                  <h4 className="heading-3 mb-3 flex items-center gap-2 relative z-10 text-base">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Our Service Guarantee
                  </h4>
                  <ul className="space-y-3 text-body text-sm relative z-10">
                    <li className="flex items-center gap-2 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Response guaranteed within 24 hours
                    </li>
                    <li className="flex items-center gap-2 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Free technical consultation & roadmap
                    </li>
                    <li className="flex items-center gap-2 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Strict NDA protection for your ideas
                    </li>
                  </ul>
                </div>

                {/* Social Media */}
                <div className="mt-auto">
                  <h4 className="heading-3 text-base mb-4">Follow Us</h4>
                  <div className="flex gap-4">
                    {[
                      { 
                        icon: Instagram, 
                        href: '#', 
                        name: 'Instagram',
                        hoverStyle: 'hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:border-transparent hover:shadow-[0_0_15px_rgba(220,39,67,0.5)] group'
                      },
                      { 
                        icon: Facebook, 
                        href: '#', 
                        name: 'Facebook',
                        hoverStyle: 'hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] hover:shadow-[0_0_15px_rgba(24,119,242,0.5)] group'
                      },
                      { 
                        icon: Linkedin, 
                        href: '#', 
                        name: 'LinkedIn',
                        hoverStyle: 'hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] hover:shadow-[0_0_15px_rgba(10,102,194,0.5)] group'
                      },
                      { 
                        icon: ({ className }: { className?: string }) => (
                          <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
                            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
                          </svg>
                        ), 
                        href: '#', 
                        name: 'X (Twitter)',
                        hoverStyle: 'hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-black dark:hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] group'
                      },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        aria-label={`Visit our ${social.name} page`}
                        whileHover={{ y: -5, scale: 1.05 }}
                        className={`relative w-12 h-12 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${social.hoverStyle}`}
                      >
                        <social.icon className="w-5 h-5 text-slate-400 group-hover:text-white dark:group-hover:text-inherit transition-colors duration-300" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Live Google Map */}
        <section className="section-padding pt-0">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl overflow-hidden h-[300px] md:h-[500px] bg-secondary/30 relative card-base !p-0 shadow-2xl group"
            >
              {/* Added Google Maps Iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3826.965777717616!2d80.5613674!3d16.4265492!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f6b505eda9a7%3A0x78bc4cda0a07679e!2sMayuri%20Tech%20Park!5e0!3m2!1sen!2sin!4v1716382902931!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 z-10 w-full h-full"
              ></iframe>

              {/* Decorative overlay edge glow */}
              <div className="absolute inset-0 pointer-events-none border-[6px] border-white/10 dark:border-black/10 rounded-3xl z-20 mix-blend-overlay"></div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
