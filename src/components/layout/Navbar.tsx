import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') || localStorage.getItem('theme') === 'dark';
    }
    return false;
  });
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'glass py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="bg-white/95 dark:bg-white p-1.5 md:p-2 rounded-xl shadow-md border border-white/20 transition-transform hover:scale-105">
            <img
              src="https://res.cloudinary.com/kits/image/upload/v1771698132/mindwhile_log_lb2qxs.png"
              alt="Mindwhile IT Solutions Pvt.Ltd Logo"
              decoding="async"
              className="h-8 md:h-10 w-auto object-contain drop-shadow-sm"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-2 py-1.5 rounded-full border border-black/5 dark:border-white/10 shadow-sm transition-transform hover:scale-[1.01]">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative font-medium text-sm px-4 py-2 transition-all duration-300 rounded-full ${location.pathname === link.path
                ? 'text-primary font-semibold'
                : 'text-foreground/70 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5'
                }`}
            >
              {location.pathname === link.path && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-primary/10 rounded-full"
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 md:gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle theme"
            className="rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-sm hover:bg-white dark:hover:bg-slate-800 text-foreground transition-all duration-300 hover:scale-105"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Link to="/contact" className="hidden md:block">
            <Button className="btn-primary shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300">
              Get Started
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
            className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-sm rounded-full text-foreground hover:bg-white dark:hover:bg-slate-800 transition-all hover:scale-105"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="md:hidden fixed top-0 right-0 z-[70] w-[80vw] max-w-sm bg-white dark:bg-slate-900 rounded-l-3xl rounded-bl-3xl shadow-2xl flex flex-col border-l border-b border-white/20 pb-2"
            >
              <div className="flex items-center justify-between p-4 mb-2">
                <div className="bg-white/95 dark:bg-white p-1.5 rounded-xl shadow-sm border border-black/5">
                  <img
                    src="https://res.cloudinary.com/kits/image/upload/v1771698132/mindwhile_log_lb2qxs.png"
                    alt="Logo"
                    className="h-6 w-auto object-contain"
                  />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <nav className="flex flex-col p-4 gap-2 pt-0">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3.5 text-base rounded-2xl transition-colors ${location.pathname === link.path
                      ? 'bg-primary/10 text-primary font-bold'
                      : 'text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 font-semibold'
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
                
                <div className="mt-auto pt-6 pb-2">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="btn-primary w-full shadow-lg h-14 text-base rounded-2xl">Contact Now</Button>
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
