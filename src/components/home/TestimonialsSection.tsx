import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CTO, TechFlow',
    content: "Mindwhile transformed our legacy systems into a modern, scalable architecture. Their attention to security and rapid agile delivery exceeded our expectations. We saw a 40% increase in operational efficiency.",
    rating: 5,
    colorTheme: 'primary',
  },
  {
    name: 'David Chen',
    role: 'Founder, LogiTrack',
    content: "The custom logistics dashboard they built for us is phenomenal. Not only is it visually stunning, but it's incredibly fast. Their 24/7 support team is always just a message away.",
    rating: 5,
    colorTheme: 'accent2',
  },
  {
    name: 'Priya Sharma',
    role: 'Director, EduSmart',
    content: "Deploying OurSchoolERP revolutionized how we manage our campus. The seamless transition and post-launch maintenance gave us complete peace of mind. Highly recommended technology partner.",
    rating: 5,
    colorTheme: 'accent1',
  },
];

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const TestimonialsSection = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  const activeIndex = Math.abs(page % testimonials.length);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [page, isHovered]);

  return (
    <section className="section-padding bg-secondary/10 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="text-caption bg-primary/10 text-primary px-4 py-2 rounded-full mb-4 inline-flex items-center gap-2">
            <Star className="w-4 h-4 fill-primary" />
            Client Success
          </span>
          <h2 className="heading-2 mb-4">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-body">
            Don't just take our word for it. Here is what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="relative h-[400px] max-w-4xl mx-auto flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="absolute w-full max-w-2xl cursor-grab active:cursor-grabbing"
            >
              <div className="card-base !p-10 relative bg-background shadow-2xl border border-white/10 mx-4">
                <Quote className={`absolute top-8 right-8 w-16 h-16 opacity-10 text-transparent bg-clip-text bg-gradient-${testimonials[activeIndex].colorTheme}`} />
                
                <div className="flex gap-1 mb-8">
                  {[...Array(testimonials[activeIndex].rating)].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <p className="text-foreground text-xl md:text-2xl leading-relaxed mb-10 italic font-medium">
                  "{testimonials[activeIndex].content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-full bg-gradient-${testimonials[activeIndex].colorTheme} flex items-center justify-center text-white font-bold text-2xl shadow-lg`}>
                    {testimonials[activeIndex].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="heading-3 mb-1 text-lg">{testimonials[activeIndex].name}</h4>
                    <p className="text-body text-sm mt-0">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between z-10 pointer-events-none px-2 md:px-0">
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center shadow-lg hover:bg-secondary transition-colors pointer-events-auto -ml-2 md:-ml-6"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center shadow-lg hover:bg-secondary transition-colors pointer-events-auto -mr-2 md:-mr-6"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                const newDirection = idx > activeIndex ? 1 : -1;
                setPage([page + (idx - activeIndex), newDirection]);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'bg-primary scale-125' : 'bg-primary/20 hover:bg-primary/50'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
