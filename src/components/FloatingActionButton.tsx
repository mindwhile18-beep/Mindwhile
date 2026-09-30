import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ id: number, text: string, sender: 'bot' | 'user', time: string }[]>([
    { id: 1, text: "Hi there! 👋 I'm the Mindwhile Assistant.", sender: 'bot', time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) },
    { id: 2, text: "How can I help you with your next big idea?", sender: 'bot', time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newUserMsg = {
      id: Date.now(),
      text: inputValue,
      sender: 'user' as const,
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    };

    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');

    // Simulate bot response with basic NLP/Intent matching
    setTimeout(() => {
      const lowerInput = inputValue.toLowerCase();
      let botResponse = "";

      if (/(hi|hello|hey|greetings|morning|afternoon)/i.test(lowerInput)) {
        botResponse = "Hi, thanks for contacting MindWhile IT Support! How can we help you today?";
      } else if (/(bye|goodbye|see you|cya|thanks|thank you)/i.test(lowerInput)) {
        botResponse = "Have a nice day! Feel free to reach out anytime.";
      } else if (/(product|prodct|service|offer|do you|what can you|ai|web|app|software|develop|design|cloud|solution)/i.test(lowerInput)) {
        botResponse = "MindWhile IT Solutions specializes in AI-powered software, custom web applications, mobile apps, and enterprise cloud solutions. You can explore our Services section for more details!";
      } else if (/(price|cost|quote|how much|fee)/i.test(lowerInput)) {
        botResponse = "Our pricing is tailored to your specific project needs. Please leave your email or call us for a detailed quote.";
      } else if (/(who are you|about|company|mindwhile|contact|phone|email)/i.test(lowerInput)) {
        botResponse = "We are MindWhile IT Solutions, a team of passionate developers and AI engineers. You can reach us at +91 79955 26153 or visit our Contact page.";
      } else {
        // Fallback for out-of-scope or unhandled queries
        botResponse = "I might not have the answer for that right now. For detailed inquiries, please contact us directly at +91 79955 26153 or visit our Contact page.";
      }

      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-[350px] sm:w-[380px] h-[500px] max-h-[80vh] bg-background border border-border shadow-2xl rounded-2xl mb-4 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-accent p-4 text-white flex items-center justify-between shadow-md relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/30 relative">
                  <User className="w-5 h-5 text-white" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-primary rounded-full" />
                </div>
                <div>
                  <h3 className="font-bold text-sm leading-tight">Mindwhile Support</h3>
                  <p className="text-white/80 text-xs">Typically replies in a few minutes</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-grow p-4 overflow-y-auto bg-secondary/30 flex flex-col gap-4">
              {messages.map(msg => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === 'user' 
                        ? 'bg-primary text-primary-foreground rounded-tr-sm' 
                        : 'bg-card border border-border text-foreground shadow-sm rounded-tl-sm'
                    }`}
                  >
                    {msg.text}
                    <div className={`text-[10px] mt-1 text-right ${msg.sender === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                      {msg.time}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-background border-t border-border">
              <form onSubmit={handleSend} className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow bg-secondary/50 border border-transparent focus:border-primary/50 focus:bg-background rounded-full px-4 py-2 text-sm outline-none transition-all"
                />
                <Button 
                  type="submit" 
                  size="icon" 
                  disabled={!inputValue.trim()}
                  className="rounded-full bg-primary hover:bg-primary/90 shrink-0"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </Button>
              </form>
            </div>
            
            {/* Branding Footer */}
            <div className="py-1.5 bg-secondary/30 text-center text-[10px] text-muted-foreground font-medium">
              Powered by <span className="text-foreground">Mindwhile</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={toggleMenu}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background group"
        aria-label="Toggle live chat"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0, scale: isOpen ? 0.8 : 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          {isOpen ? <X className="w-7 h-7" /> : <MessageSquare className="w-7 h-7" />}
        </motion.div>
        
        {/* Notification badge when closed */}
        {!isOpen && (
          <span className="absolute top-0 right-0 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-primary"></span>
          </span>
        )}
      </button>
    </div>
  );
};
