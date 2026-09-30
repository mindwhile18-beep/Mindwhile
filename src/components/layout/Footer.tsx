import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-8 md:gap-10">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex flex-col items-start leading-none gap-[2px] mb-6">
              <span className="font-sans font-extrabold text-2xl tracking-widest text-primary uppercase">MINDWHILE</span>
              <span className="font-sans font-semibold text-[10px] tracking-[0.15em] text-foreground/70 uppercase">IT Solutions Pvt.Ltd</span>
            </div>
            <p className="text-background/70 mb-6">
              Transforming businesses with innovative IT solutions since 2021. Your trusted partner for digital excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 bg-background/5 border border-background/10 rounded-2xl p-4 md:p-6 hover:bg-background/10 transition-colors">
            <h4 className="font-semibold text-base md:text-lg mb-3 md:mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-background/70 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-background/70 hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-background/70 hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/products" className="text-background/70 hover:text-primary transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/70 hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Our Products */}
          <div className="col-span-1 bg-background/5 border border-background/10 rounded-2xl p-4 md:p-6 hover:bg-background/10 transition-colors">
            <h4 className="font-semibold text-base md:text-lg mb-3 md:mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
              Our Products
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-background/70 hover:text-primary transition-colors">School Management</Link>
              </li>
              <li>
                <Link to="/products" className="text-background/70 hover:text-primary transition-colors">Jago</Link>
              </li>
              <li>
                <Link to="/products" className="text-background/70 hover:text-primary transition-colors">Raksha Assist</Link>
              </li>
              <li>
                <Link to="/products" className="text-background/70 hover:text-primary transition-colors">NeuroTalk</Link>
              </li>
            </ul>
          </div>

          {/* Future Projects */}
          <div className="col-span-1 bg-background/5 border border-background/10 rounded-2xl p-4 md:p-6 hover:bg-background/10 transition-colors">
            <h4 className="font-semibold text-base md:text-lg mb-3 md:mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
              Future Projects
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-background/70 hover:text-primary transition-colors">Matrimony App</Link>
              </li>
              <li>
                <Link to="/products" className="text-background/70 hover:text-primary transition-colors">Food Delivery App</Link>
              </li>
              <li>
                <Link to="/products" className="text-background/70 hover:text-primary transition-colors">Real Estate Script</Link>
              </li>
              <li>
                <Link to="/products" className="text-background/70 hover:text-primary transition-colors">Directory Script</Link>
              </li>
              <li>
                <Link to="/products" className="text-background/70 hover:text-primary transition-colors">Job Portal</Link>
              </li>
              <li>
                <Link to="/products" className="text-background/70 hover:text-primary transition-colors">E-commerce</Link>
              </li>
              <li>
                <Link to="/products" className="text-background/70 hover:text-primary transition-colors">Marriage Biodata</Link>
              </li>
            </ul>
          </div>


          {/* Services */}
          <div className="col-span-1 bg-background/5 border border-background/10 rounded-2xl p-4 md:p-6 hover:bg-background/10 transition-colors">
            <h4 className="font-semibold text-base md:text-lg mb-3 md:mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
              Services
            </h4>
            <ul className="space-y-3">
              <li><Link to="/services?view=website" className="text-background/70 hover:text-primary transition-colors block">Website Development</Link></li>
              <li><Link to="/services?view=ui-ux" className="text-background/70 hover:text-primary transition-colors block">UI/UX Design</Link></li>
              <li><Link to="/services?view=mobile" className="text-background/70 hover:text-primary transition-colors block">Mobile App Development</Link></li>
              <li><Link to="/services?view=marketing" className="text-background/70 hover:text-primary transition-colors block">Digital Marketing</Link></li>
              <li><Link to="/services?view=seo" className="text-background/70 hover:text-primary transition-colors block">SEO Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="font-semibold text-base md:text-lg mb-3 md:mb-6">Contact Us</h4>
            <ul className="space-y-5">
              <li>
                <p className="text-background/50 text-xs font-semibold uppercase tracking-widest mb-2">Current Address</p>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-background/70 text-sm leading-relaxed">
                    4th Floor, Mayuri Tech Park,<br /> Mangalagiri, Andhra Pradesh 522503
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:mindwhile.itsolutionspvtltd@mindwhile.com" className="text-background/70 hover:text-primary transition-colors text-xs sm:text-sm break-all">
                  mindwhile.itsolutionspvtltd@mindwhile.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+917995526153" className="text-background/70 hover:text-primary transition-colors">
                  +91 79955 26153
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Registered Address & Bottom Banner */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/5 border border-background/10 hover:bg-background/10 transition-colors">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span className="text-background/50 text-xs font-semibold uppercase tracking-widest">Registered Office</span>
            </div>
            <span className="text-background/60 text-sm text-center">
              D.No 4-1583/1, Podili Road, Darsi-523247, Prakasam, Andhra Pradesh, India
            </span>
          </div>

          {/* India Banner */}
          <div className="bg-[#020e21] rounded-xl overflow-hidden relative shadow-2xl">
            {/* 3-color border */}
            <div className="absolute bottom-0 left-0 w-full h-1.5 flex">
              <div className="w-1/3 h-full bg-[#FF9933]"></div>
              <div className="w-1/3 h-full bg-white"></div>
              <div className="w-1/3 h-full bg-[#138808]"></div>
            </div>

            <div className="px-4 py-6 md:px-8 md:py-8 pb-8 md:pb-10 flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
              <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                {/* Flag */}
                <div className="w-12 h-12 rounded-full border-[1.5px] border-white/20 overflow-hidden shrink-0 relative bg-white shadow-inner">
                  <div className="absolute inset-0 flex flex-col">
                    <div className="h-1/3 bg-[#FF9933]"></div>
                    <div className="h-1/3 bg-white flex items-center justify-center">
                      <div className="w-3.5 h-3.5 rounded-full border-[0.5px] border-[#000080] flex items-center justify-center relative">
                        <div className="w-[0.5px] h-full bg-[#000080]/40 absolute"></div>
                        <div className="w-[0.5px] h-full bg-[#000080]/40 absolute rotate-45"></div>
                        <div className="w-[0.5px] h-full bg-[#000080]/40 absolute rotate-90"></div>
                        <div className="w-[0.5px] h-full bg-[#000080]/40 absolute -rotate-45"></div>
                      </div>
                    </div>
                    <div className="h-1/3 bg-[#138808]"></div>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-white font-bold text-base md:text-lg tracking-wide">Proudly Designed & Developed in India</span>
                  <span className="text-white/60 text-xs md:text-sm mt-1">© {new Date().getFullYear()} Mindwhile IT Solutions Pvt. Ltd. All Rights Reserved.</span>
                </div>
              </div>

              <div className="hidden lg:block w-[1px] h-12 bg-white/10"></div>

              <div className="flex items-center gap-4">
                {/* Heart */}
                <div className="relative w-8 h-8 shrink-0">
                   <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full drop-shadow-md">
                     <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="url(#heart-gradient)" />
                     <defs>
                       <linearGradient id="heart-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                         <stop offset="50%" stopColor="#FF9933" />
                         <stop offset="50%" stopColor="#138808" />
                       </linearGradient>
                     </defs>
                   </svg>
                </div>
                
                <div className="flex flex-col text-left">
                  <span className="text-white font-medium text-sm md:text-base leading-tight">Made with</span>
                  <span className="text-white font-medium text-sm md:text-base leading-tight">Passion in India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
