import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is your development process?",
    answer: "Our agile process includes Discovery, Planning, Design, Development, Testing, Deployment, and ongoing Support. We maintain transparent communication and deliver working software in iterative sprints so you can see progress constantly."
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer: "Absolutely. We offer comprehensive SLA-backed maintenance packages. This includes security patches, performance monitoring, bug fixes, and feature updates to ensure your product scales smoothly."
  },
  {
    question: "How do you ensure data security?",
    answer: "Security is built into our architecture from day one. We use modern encryption, secure authentication (OAuth/JWT), follow OWASP secure coding guidelines, and deploy on compliant cloud infrastructure (AWS/GCP)."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. A standard web application takes 8-12 weeks, while a complex enterprise solution might take 4-6 months. We will provide a detailed timeline during the discovery phase."
  },
  {
    question: "How much does a custom software solution cost?",
    answer: "Costs depend entirely on the scope, features, and required technologies. We offer a free technical consultation to understand your needs, after which we provide a transparent, detailed proposal with no hidden fees."
  }
];

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#FAFAFA] dark:bg-background relative overflow-hidden" id="faq">
      {/* Premium Background Effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Column - Sticky Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 lg:sticky lg:top-32"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold text-sm mb-6 shadow-sm">
              <HelpCircle className="w-4 h-4" />
              Frequently Asked Questions
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#0A192F] dark:text-foreground tracking-tight leading-tight">
              Got Questions?
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">We Have Answers</span>
            </h2>
            <p className="text-lg text-gray-500 dark:text-muted-foreground leading-relaxed mb-8">
              Find answers to common questions about our services, process, and support. Can't find what you're looking for? Reach out to our team directly.
            </p>
            
            <button className="bg-[#0A192F] dark:bg-white text-white dark:text-[#0A192F] px-8 py-4 rounded-full font-bold hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              Contact Support
            </button>
          </motion.div>

          {/* Right Column - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3 space-y-4 w-full"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`bg-white dark:bg-secondary/10 border ${isOpen ? 'border-blue-500 shadow-blue-500/10 shadow-lg' : 'border-gray-200 dark:border-border/50 hover:border-blue-300'} rounded-3xl transition-all duration-500 overflow-hidden`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                  >
                    <span className={`text-lg md:text-xl font-bold pr-8 transition-colors duration-300 ${isOpen ? 'text-blue-600 dark:text-blue-400' : 'text-[#0A192F] dark:text-foreground'}`}>
                      {faq.question}
                    </span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ${isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-blue-50 dark:bg-secondary text-blue-600 dark:text-blue-400'}`}>
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <div className="p-6 md:p-8 pt-0 text-gray-600 dark:text-muted-foreground text-base md:text-lg leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
