import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
          subject: "Message from Home Page Contact Form",
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent Successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
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
    }
  };

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-caption bg-primary/10 text-primary px-4 py-2 rounded-full mb-4 inline-block">
            Get In Touch
          </span>
          <h2 className="heading-2 mb-4">Contact Us</h2>
          <p className="text-body max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="card-base !p-8 md:!p-10">
              <h3 className="heading-3 mb-6">Send us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-14 pl-5 rounded-xl bg-background/50 border-border focus:border-primary transition-colors"
                  />
                </div>

                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-14 pl-5 rounded-xl bg-background/50 border-border focus:border-primary transition-colors"
                  />
                </div>

                <div className="relative">
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-14 pl-5 rounded-xl bg-background/50 border-border focus:border-primary transition-colors"
                  />
                </div>

                <div className="relative">
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="pl-5 pt-4 rounded-xl bg-background/50 border-border focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full h-14 text-lg group"
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
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h3 className="heading-3 mb-8 text-2xl">Our Address</h3>

            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-6 card-base"
              >
                <div className="icon-tile icon-tile-md bg-gradient-primary shrink-0">
                  <MapPin className="w-6 h-6 text-white relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
                </div>
                <div>
                  <h4 className="heading-3 mb-1 text-lg">Our Location</h4>
                  <p className="text-body text-sm">
                    4th Floor, Mayuri Tech Park,<br />
                    Mangalagiri, Andhra Pradesh 522503
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-6 card-base"
              >
                <div className="icon-tile icon-tile-md bg-gradient-accent2 shrink-0">
                  <Mail className="w-6 h-6 text-white relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
                </div>
                <div>
                  <h4 className="heading-3 mb-1 text-lg">Email Us</h4>
                  <a href="mailto:mindwhile.itsolutionspvtltd@mindwhile.com" className="text-primary hover:underline font-medium text-xs sm:text-sm break-all">
                    mindwhile.itsolutionspvtltd@mindwhile.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-6 card-base"
              >
                <div className="icon-tile icon-tile-md bg-gradient-accent1 shrink-0">
                  <Phone className="w-6 h-6 text-white relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
                </div>
                <div>
                  <h4 className="heading-3 mb-1 text-lg">Call Us</h4>
                  <a href="tel:+917995526153" className="text-primary hover:underline font-medium font-mono">
                    +91 79955 26153
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Quick Response Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-8 flex items-center gap-3 text-muted-foreground"
            >
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>We typically respond within 24 hours</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
