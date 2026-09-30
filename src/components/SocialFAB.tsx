import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft,
  ChevronRight,
  Phone,
  MessageCircle,
  Mail,
  MessageSquare
} from "lucide-react";

export function SocialFAB() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  // We use Lucide icons but style them to look similar to the requested design
  const socialLinks = [
    {
      id: "whatsapp",
      icon: (
        <div className="w-8 h-8 flex items-center justify-center">
          <MessageCircle className="w-5 h-5 text-primary-foreground" />
        </div>
      ),
      href: "https://wa.me/919494022475",
      label: "WhatsApp",
    },
    {
      id: "phone",
      icon: (
        <div className="w-8 h-8 flex items-center justify-center">
          <Phone className="w-5 h-5 text-primary-foreground" />
        </div>
      ),
      href: "tel:+917995526153",
      label: "Phone",
    },
    {
      id: "mail",
      icon: (
        <div className="w-8 h-8 flex items-center justify-center">
          <Mail className="w-5 h-5 text-primary-foreground" />
        </div>
      ),
      href: "mailto:mindwhile.itsolutionspvtltd@mindwhile.com",
      label: "Mail",
    },
    {
      id: "message",
      icon: (
        <div className="w-8 h-8 flex items-center justify-center">
          <MessageSquare className="w-5 h-5 text-primary-foreground" />
        </div>
      ),
      href: "sms:+917995526153",
      label: "Message",
    },
  ];

  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-0 z-50 flex items-center">
      <motion.div
        layout
        className="bg-gradient-to-b from-primary to-primary/80 backdrop-blur-md text-primary-foreground rounded-l-[1rem] shadow-2xl overflow-hidden flex flex-col items-center justify-center border-y border-l border-primary/20"
        initial={false}
        animate={{
          width: "2.25rem",
          paddingTop: "1.25rem",
          paddingBottom: "1.75rem",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <button
          onClick={toggleOpen}
          className="w-full flex flex-col items-center justify-center hover:opacity-80 transition-opacity outline-none py-3"
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? (
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          ) : (
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          )}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex flex-col items-center gap-7 mt-6"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:scale-110 transition-transform flex items-center justify-center"
                  aria-label={link.label}
                  title={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
