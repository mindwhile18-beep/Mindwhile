import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingActionButton } from '@/components/FloatingActionButton';
import { NotifyMeModal } from '@/components/NotifyMeModal';
import { Button } from '@/components/ui/button';
import schoolErpImage from '@/assets/products/school-erp.png';
import jagoproImage from '@/assets/products/jagopro.png';
import rakshaAssistImage from '@/assets/products/raksha-assist.png';
import neurotalkImage from '@/assets/products/neurotalk.png';
import {
    GraduationCap,
    Car,
    Heart,
    Brain,
    ArrowRight,
    CheckCircle,
    Sparkles,
    Rocket,
    UtensilsCrossed,
    Building2,
    FolderSearch,
    Briefcase,
    ShoppingCart,
    ScrollText,
    Star,
    Zap,
    Shield,
    Users,
    Globe,
    ExternalLink,
    X,
    Clock,
    HeartPulse,
    TrendingUp,
    MessageCircle,
    MessageSquare,
} from 'lucide-react';

/* ───────────────────── Product Data ───────────────────── */

const products = [
    {
        id: 'school-management',
        icon: GraduationCap,
        title: 'OURSCHOOL ERP',
        tagline: 'Complete Digital Campus Solution',
        badge: 'explore',   // "explore" | "inprogress"
        badgeLabel: 'Explore',
        description:
            'A comprehensive school management system that digitizes every aspect of educational administration — from admissions and attendance to examinations, finance, and parent communication. Empower your institution with real-time insights and seamless workflows.',
        features: [
            'Student & Staff Management',
            'Attendance & Timetable',
            'Fee & Finance Module',
            'Examination & Report Cards',
            'Parent & Teacher Communication',
            'Inventory & Library Management',
        ],
        gradient: 'from-blue-500 to-cyan-500',
        colorTheme: 'blue-500',
        stats: [
            { label: 'Modules', value: '25+' },
            { label: 'Schools', value: '50+' },
            { label: 'Uptime', value: '99.9%' },
        ],
        exploreLink: 'https://staging.ourschoolerp.com/signin/index',
        brief: 'Our School Management System is a full-featured platform built to digitize every operation of a modern educational institution. It handles everything from student enrollment and attendance automation to exam management, fee collection, and real-time parent-teacher communication — all under one unified dashboard.',
    },
    {
        id: 'jago',
        icon: Car,
        title: 'Jago',
        tagline: 'Smart Bike & Cab Ride Platform',
        badge: 'explore',
        badgeLabel: 'Explore',
        description:
            'A next-generation ride-hailing platform for bikes and cabs — designed to make daily commute fast, affordable, and reliable. Jago connects riders with nearby drivers in seconds, offering real-time GPS tracking, flexible fare options, and a seamless booking experience like Rapido and Ola.',
        features: [
            'Instant Bike & Cab Booking',
            'Real-time GPS Tracking',
            'Flexible Fare & Surge Pricing',
            'Driver & Rider Dashboards',
            'In-app Payments & Wallet',
            'Ratings & Safety Features',
        ],
        gradient: 'from-orange-400 to-red-500',
        colorTheme: 'orange-500',
        stats: [
            { label: 'Rides/Day', value: '500+' },
            { label: 'Drivers', value: '200+' },
            { label: 'Cities', value: '5+' },
        ],
        exploreLink: 'https://jagopro.org',
        brief: 'Jago is a revolutionary ride-hailing platform designed for speed and reliability. It seamlessly connects riders with bike and cab drivers, offering real-time tracking, transparent fare calculations, and a secure in-app payment system for effortless daily commutes.',
    },
    {
        id: 'bulk-whatsapp',
        icon: MessageCircle,
        title: 'Bulk WhatsApp',
        tagline: 'Automated WhatsApp Marketing',
        badge: 'explore',
        badgeLabel: 'Explore',
        description:
            'Reach your audience instantly with our powerful Bulk WhatsApp marketing platform. Send personalized messages, automated replies, and multimedia content to thousands of customers securely and efficiently.',
        features: [
            'Automated Messaging',
            'Contact Management',
            'Media Attachments',
            'Analytics Dashboard',
            'API Integration',
            'Smart Chatbots',
        ],
        gradient: 'from-green-500 to-emerald-500',
        colorTheme: 'green-500',
        stats: [
            { label: 'Messages/Sec', value: '1K+' },
            { label: 'Delivery', value: '99%' },
            { label: 'Clients', value: '500+' },
        ],
        exploreLink: 'http://bwa.mindwhile.com/login.php',
        brief: 'Our Bulk WhatsApp platform empowers businesses to connect with their audience at scale. With features like personalized messaging, multimedia support, and advanced analytics, it is the perfect tool for running highly engaging marketing campaigns and providing instant customer support.',
    },
    {
        id: 'bulk-sms',
        icon: MessageSquare,
        title: 'Bulk SMS',
        tagline: 'Reliable SMS Gateway',
        badge: 'explore',
        badgeLabel: 'Explore',
        description:
            'Ensure high deliverability for your transactional and promotional messages with our robust Bulk SMS gateway. Designed for scale, speed, and real-time tracking across global networks.',
        features: [
            'High Delivery Rate',
            'Promotional & OTP',
            'Real-time Reports',
            'Custom Sender ID',
            'API & Webhooks',
            'Contact Grouping',
        ],
        gradient: 'from-blue-500 to-indigo-500',
        colorTheme: 'blue-500',
        stats: [
            { label: 'Delivery Rate', value: '99.9%' },
            { label: 'Latency', value: '<2s' },
            { label: 'Countries', value: '190+' },
        ],
        exploreLink: 'https://smslogin.co/v3/',
        brief: 'Our Bulk SMS gateway is built for enterprises that demand high-speed and reliable message delivery. Whether you are sending critical OTPs, transactional alerts, or large-scale promotional campaigns, our robust API and tracking tools ensure your messages reach their destination instantly.',
    },
    {
        id: 'neurotalk',
        icon: Brain,
        title: 'NeuroTalk',
        tagline: 'AI-Powered Real-Time Call Translation',
        badge: 'explore',
        badgeLabel: 'Explore',
        description:
            'Advanced AI communication tool that enables real-time call translation across 22 languages — with voice cloning technology that translates using your own voice, making global conversations feel completely natural.',
        features: [
            '22 Languages Supported',
            'Voice Cloning AI',
            'Real-time Translation',
            'Global Connectivity',
            'Seamless Integration',
            'Privacy-first Design',
        ],
        gradient: 'from-violet-500 to-purple-500',
        colorTheme: 'violet-500',
        stats: [
            { label: 'Languages', value: '22+' },
            { label: 'Accuracy', value: '98%' },
            { label: 'Latency', value: '<1s' },
        ],
        exploreLink: 'https://neuratalk.in',
        brief: 'NeuroTalk breaks down global language barriers with advanced AI real-time translation. Featuring revolutionary voice cloning technology, it translates your speech while retaining your natural tone across 22 languages, ensuring privacy and seamless connectivity for international calls.',
    },
    {
        id: 'raksha-assist',
        icon: HeartPulse,
        title: 'Raksha Assist',
        tagline: 'Comprehensive Health Insurance Platform',
        badge: 'explore',
        badgeLabel: 'Explore',
        description:
            'A cutting-edge health insurance platform that streamlines policy management, claims processing, and customer assistance — making healthcare coverage transparent, accessible, and seamless for every user.',
        features: [
            'Policy Management',
            'Claims Processing',
            'Customer Portal',
            'Healthcare Network',
            'Secure Data Vault',
            'Real-time Assistance',
        ],
        gradient: 'from-rose-500 to-pink-500',
        colorTheme: 'rose-500',
        stats: [
            { label: 'Policy Types', value: '20+' },
            { label: 'Partners', value: '15+' },
            { label: 'Processing', value: '24/7' },
        ],
        exploreLink: 'https://rakshaassist.com/',
        brief: 'Raksha Assist transforms health insurance management by providing a centralized, user-friendly portal. Users can easily manage policies, submit and track claims in real-time, and access a comprehensive healthcare network with 24/7 assistance and transparent data security.',
    },
];

const futureProducts = [
    {
        id: 'matrimony',
        icon: Heart,
        title: 'Matrimony App',
        tagline: 'Find Your Perfect Match',
        description:
            'AI-powered matchmaking platform with advanced profile verification, compatibility scoring, and secure communication features.',
        gradient: 'from-pink-500 to-rose-400',
    },
    {
        id: 'food-delivery',
        icon: UtensilsCrossed,
        title: 'Food Delivery App',
        tagline: 'Delicious Food, Delivered Fast',
        description:
            'End-to-end food delivery solution with real-time tracking, restaurant management, and seamless payment integration.',
        gradient: 'from-amber-500 to-orange-400',
    },
    {
        id: 'real-estate',
        icon: Building2,
        title: 'Real Estate Script',
        tagline: 'Property Marketplace Platform',
        description:
            'Feature-rich property listing and management platform with virtual tours, agent dashboards, and smart search filters.',
        gradient: 'from-blue-500 to-indigo-500',
    },
    {
        id: 'directory',
        icon: FolderSearch,
        title: 'Directory Script',
        tagline: 'Business Directory Solutions',
        description:
            'Local business directory platform with reviews, ratings, map integration, and promotional listing features.',
        gradient: 'from-emerald-500 to-teal-500',
    },
    {
        id: 'job-portal',
        icon: Briefcase,
        title: 'Job Portal',
        tagline: 'Connect Talent with Opportunity',
        description:
            'Modern job portal with AI resume parsing, employer dashboards, applicant tracking, and smart job recommendations.',
        gradient: 'from-sky-500 to-blue-500',
    },
    {
        id: 'ecommerce',
        icon: ShoppingCart,
        title: 'E-commerce Platform',
        tagline: 'Sell Anything, Anywhere',
        description:
            'Scalable e-commerce solution with multi-vendor support, inventory management, payment gateways, and analytics dashboard.',
        gradient: 'from-violet-500 to-purple-500',
    },
    {
        id: 'marriage-biodata',
        icon: ScrollText,
        title: 'Marriage Biodata',
        tagline: 'Beautiful Biodata Maker',
        description:
            'Elegant biodata creation tool with premium templates, photo editing, PDF export, and shareable digital biodata.',
        gradient: 'from-rose-400 to-pink-500',
    },
];

/* ─── Badge Component ─── */
const ProductBadge = ({ badge, badgeLabel }: { badge: string; badgeLabel: string }) => {
    if (badge === 'explore') {
        return (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-green-500 text-white text-[11px] font-bold uppercase tracking-wider shadow-lg shadow-green-500/30">
                <ExternalLink className="w-3 h-3" />
                {badgeLabel}
            </div>
        );
    }
    return (
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[11px] font-bold uppercase tracking-wider shadow-lg shadow-amber-500/30">
            <Clock className="w-3 h-3" />
            {badgeLabel}
        </div>
    );
};

/* ─── Explore Modal ─── */
const ExploreModal = ({ product, onClose }: { product: typeof products[0]; onClose: () => void }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-background/80 backdrop-blur-lg"
        onClick={onClose}
    >
        <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-card/95 backdrop-blur-2xl shadow-2xl"
        >
            <div className={`relative h-3 bg-gradient-to-r ${product.gradient}`} />

            <button
                onClick={onClose}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-secondary/80 hover:bg-secondary border border-border/50 flex items-center justify-center transition-all hover:scale-110 z-10"
            >
                <X className="w-4 h-4 text-muted-foreground" />
            </button>

            <div className="p-8 md:p-10">
                <div className="flex items-center gap-5 mb-6">
                    <div className={`icon-tile icon-tile-md bg-gradient-to-br ${product.gradient}`}>
                        <product.icon className="w-8 h-8 text-white drop-shadow-md relative z-10" />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
                    </div>
                    <div>
                        <h3 className="heading-3">{product.title}</h3>
                        <p className={`text-caption text-${product.colorTheme} mt-1`}>{product.tagline}</p>
                    </div>
                </div>

                <p className="text-body mb-8 border-l-4 border-primary/30 pl-4">
                    {product.brief}
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {product.features.map((f) => (
                        <div key={f} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 border border-border/40">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${product.gradient}`} />
                            <span className="text-sm font-medium text-foreground">{f}</span>
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-border/40">
                    <Button variant="outline" onClick={onClose} className="rounded-xl px-6">
                        Close
                    </Button>
                    {product.exploreLink && (
                        <a href={product.exploreLink} target="_blank" rel="noopener noreferrer">
                            <Button className={`btn-primary rounded-xl px-8 bg-gradient-to-r ${product.gradient} border-0 text-white shadow-xl group`}>
                                Explore Live
                                <ExternalLink className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                            </Button>
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    </motion.div>
);

/* ─── Animated Description ─── */
const AnimatedDesc = ({ text, className }: { text: string; className?: string }) => (
    <motion.div className={`flex flex-wrap gap-x-[0.3em] gap-y-1 ${className}`}>
        {text.split(' ').map((word, i) => (
            <motion.span
                key={i}
                initial={{ opacity: 0, y: 12, filter: 'blur(3px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.06 * i, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="inline-block"
            >
                {word}
            </motion.span>
        ))}
    </motion.div>
);

/* ─── Premium Product Card ─── */
const ProductCard = ({
    product,
    index,
    isReversed,
}: {
    product: typeof products[0];
    index: number;
    isReversed: boolean;
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 70 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-6 lg:gap-12`}
            >
                {/* Mobile Title Block */}
                <div className="w-full lg:hidden flex flex-col space-y-3 mb-2">
                    <motion.div
                        initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-3"
                    >
                        <span className={`text-sm font-bold tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r ${product.gradient}`}>
                            0{index + 1} // Product
                        </span>
                    </motion.div>

                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight"
                    >
                        {product.title}
                    </motion.h3>

                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.35 }}
                        className="flex items-center gap-3"
                    >
                        <div className={`w-8 md:w-12 h-[3px] rounded-full bg-gradient-to-r ${product.gradient}`} />
                        <p className={`text-sm md:text-lg font-medium text-${product.colorTheme}`}>
                            {product.tagline}
                        </p>
                    </motion.div>
                </div>

                {/* Visual Side */}
                <div className="w-full lg:w-5/12 relative group shrink-0">
                    <div className={`absolute -inset-1 bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-20 transition-all duration-700 rounded-[2rem] blur-2xl`} />

                    <div className={`card-base !p-0 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.18)]`}>
                        <div className={`h-1.5 w-full bg-gradient-to-r ${product.gradient}`} />

                        <div className="p-5 sm:p-8 md:p-10 relative">
                            <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700`} />
                            
                            <div className="absolute top-6 right-6 z-20">
                                <div onClick={() => product.badge === 'explore' && setShowModal(true)} className={product.badge === 'explore' ? 'cursor-pointer' : ''}>
                                    <ProductBadge badge={product.badge} badgeLabel={product.badgeLabel} />
                                </div>
                            </div>

                            <motion.div
                                animate={{ y: [-5, 5, -5], rotate: [0, 2, -2, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                                className="relative z-10 mb-6 md:mb-8 flex justify-center pt-8 md:pt-8"
                            >
                                <div className={`icon-tile w-12 h-12 md:w-20 md:h-20 rounded-xl md:rounded-2xl flex items-center justify-center bg-gradient-to-br ${product.gradient} shadow-2xl`}>
                                    <product.icon className="w-6 h-6 md:w-12 md:h-12 text-white drop-shadow-lg relative z-10" />
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
                                </div>
                            </motion.div>

                            <div className="relative z-10 grid grid-cols-3 gap-3">
                                {product.stats.map((stat, i) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, scale: 0.7 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ duration: 0.5, delay: 0.35 + i * 0.12, type: 'spring', stiffness: 200 }}
                                        className="relative text-center p-3 rounded-2xl overflow-hidden"
                                        style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.08)' }}
                                    >
                                        <div className={`text-xl md:text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r ${product.gradient} leading-none`}>
                                            {stat.value}
                                        </div>
                                        <div className="text-caption mt-1.5">
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-7/12 flex flex-col space-y-4 lg:space-y-6">
                    {/* Desktop Title Block */}
                    <div className="hidden lg:flex flex-col space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-flex items-center gap-3"
                        >
                            <span className={`text-sm font-bold tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r ${product.gradient}`}>
                                0{index + 1} // Product
                            </span>
                        </motion.div>

                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight"
                        >
                            {product.title}
                        </motion.h3>

                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.35 }}
                            className="flex items-center gap-3"
                        >
                            <div className={`w-8 md:w-12 h-[3px] rounded-full bg-gradient-to-r ${product.gradient}`} />
                            <p className={`text-sm md:text-lg font-medium text-${product.colorTheme}`}>
                                {product.tagline}
                            </p>
                        </motion.div>
                    </div>

                    <AnimatedDesc text={product.description} className="text-sm md:text-lg text-muted-foreground leading-relaxed py-1 md:py-2" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-4 pt-2 sm:pt-4"
                    >
                        {product.features.map((feature, i) => (
                            <motion.div
                                key={feature}
                                initial={{ opacity: 0, x: -12 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.4, delay: 0.5 + i * 0.07 }}
                                className={`flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-${product.colorTheme}/5 border border-${product.colorTheme}/10 hover:bg-${product.colorTheme}/10 transition-colors`}
                            >
                                <CheckCircle className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-${product.colorTheme}`} />
                                <span className="text-xs sm:text-sm font-semibold text-foreground">{feature}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="flex flex-wrap gap-4 pt-6"
                    >
                        {product.badge === 'explore' ? (
                            <>
                                <Link to={`/products/${product.id}`}>
                                    <button
                                        className={`inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-gradient-to-r ${product.gradient} text-white font-bold text-sm sm:text-base shadow-xl hover:opacity-90 hover:-translate-y-1 transition-all duration-300 group`}
                                    >
                                        Explore Platform
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </Link>
                                <a href={product.exploreLink!} target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline" className={`rounded-2xl px-6 sm:px-8 py-3 sm:py-4 h-auto font-bold text-sm sm:text-base border-2 transition-all group`}>
                                        <ExternalLink className={`mr-2 w-4 h-4 text-${product.colorTheme}`} />
                                        Visit Website
                                    </Button>
                                </a>
                            </>
                        ) : (
                            <div className={`inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-gradient-to-r ${product.gradient} text-white font-bold text-sm sm:text-base shadow-xl opacity-80`}>
                                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                                In Development
                            </div>
                        )}
                    </motion.div>
                </div>
            </motion.div>

            <AnimatePresence>
                {showModal && product.brief && (
                    <ExploreModal product={product} onClose={() => setShowModal(false)} />
                )}
            </AnimatePresence>
        </>
    );
};

/* ─── Future Product Card ─── */
const FutureProductCard = ({
    product,
    index,
    isReversed,
}: {
    product: typeof futureProducts[0];
    index: number;
    isReversed: boolean;
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`relative flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-4 lg:gap-10`}
            >
                {/* Small Card */}
            <div className="w-full lg:w-4/12 relative group">
                <div className="card-base !p-0">
                    {/* Top bar */}
                    <div className={`h-1 w-full bg-gradient-to-r ${product.gradient}`} />
                    <div className="p-4 sm:p-6 md:p-8">
                        <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-[0.04] group-hover:opacity-[0.1] transition-opacity duration-700`} />
                        <div className={`absolute -right-10 -top-10 w-28 h-28 bg-gradient-to-br ${product.gradient} opacity-20 rounded-full blur-3xl group-hover:opacity-40 transition-all duration-700`} />

                        {/* Coming Soon badge */}
                        <div className="flex justify-end mb-4">
                            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                                <Rocket className="w-3 h-3" />
                                Coming Soon
                            </div>
                        </div>

                        <motion.div
                            animate={{ y: [-3, 3, -3] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="relative z-10 flex justify-center"
                        >
                            <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center bg-gradient-to-br ${product.gradient} shadow-xl shadow-black/10`}>
                                <product.icon className="w-6 h-6 md:w-8 md:h-8 text-white drop-shadow-md relative z-10" />
                                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-8/12 space-y-4">
                <motion.div
                    initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-flex items-center gap-2"
                >
                    <span className={`text-caption bg-clip-text text-transparent bg-gradient-to-r ${product.gradient}`}>
                        Future Product
                    </span>
                    <div className={`w-8 h-[2px] bg-gradient-to-r ${product.gradient} rounded-full`} />
                </motion.div>

                <motion.h3
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="text-xl sm:text-2xl md:text-3xl font-bold"
                >
                    {product.title}
                </motion.h3>

                <AnimatedDesc text={product.description} className="text-sm md:text-base text-muted-foreground leading-relaxed" />

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="pt-2"
                >
                    <Button 
                        variant="outline" 
                        className="group rounded-xl px-6 py-5 h-auto border-border/60 hover:border-primary/40 hover:bg-primary/5 transition-all"
                        onClick={() => setIsModalOpen(true)}
                    >
                        <Sparkles className="mr-2 h-4 w-4 text-primary" />
                        Get Notified
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </motion.div>
            </div>
            </motion.div>
            <NotifyMeModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                productName={product.title}
            />
        </>
    );
};

/* ─── Main Products Page ─── */
const Products = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen">
            <Navbar />
            <FloatingActionButton />

            <main className="pt-20">
                {/* ━━ HERO SECTION ━━ */}
                <section className="section-padding relative overflow-hidden">
                    <div 
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat hue-rotate-15"
                        style={{ backgroundImage: "url('/about_background.png')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 mix-blend-multiply" />
                    <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/4 rounded-full blur-[80px] opacity-70 pointer-events-none" />
                    <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-accent/4 rounded-full blur-[80px] opacity-70 pointer-events-none" />

                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center max-w-4xl mx-auto"
                        >
                            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase mb-6 shadow-sm backdrop-blur-sm">
                                <Star className="w-4 h-4" />
                                Our Portfolio
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-foreground">
                                Products That
                                <br className="hidden md:block" />
                                <span className="gradient-text"> Drive Results</span>
                            </h1>
                            <p className="text-body text-base md:text-lg max-w-3xl mx-auto">
                                Each product is meticulously crafted with cutting-edge technology, intuitive design, and scalable architecture to deliver exceptional value and transform industries.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* ━━ PRODUCTS LIST SECTION ━━ */}
                <section className="section-padding relative">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="space-y-16 py-8">
                            {products.map((product, index) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    index={index}
                                    isReversed={index % 2 !== 0}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* ━━ DIVIDER ━━ */}
                <div className="container mx-auto px-4">
                    <div className="relative flex items-center justify-center py-4">
                        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                            className="mx-6 w-12 h-12 rounded-full border-2 border-dashed border-primary/30 flex items-center justify-center"
                        >
                            <Rocket className="w-5 h-5 text-primary" />
                        </motion.div>
                        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
                    </div>
                </div>

                {/* ━━ FUTURE PRODUCTS ━━ */}
                <section className="py-16 md:py-24 relative overflow-hidden bg-secondary/10">
                    <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[100px] pointer-events-none" />

                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16 max-w-3xl mx-auto"
                        >
                            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-sm font-semibold tracking-wide uppercase mb-6 shadow-sm">
                                <Rocket className="w-4 h-4" />
                                Coming Soon
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight tracking-tight">
                                Future Products
                                <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">In The Pipeline</span>
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                We're constantly innovating. Here's a glimpse of the exciting products we're building to shape the future of technology.
                            </p>
                        </motion.div>

                        <div className="space-y-20 md:space-y-28">
                            {futureProducts.map((product, index) => (
                                <FutureProductCard key={product.id} product={product} index={index} isReversed={index % 2 !== 0} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* ━━ CTA ━━ */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden"
                        >
                            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

                            <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 shadow-xl">
                                    <TrendingUp className="w-8 h-8 text-white" />
                                </div>
                            </motion.div>

                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 relative z-10">Have a Product Idea?</h2>
                            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto relative z-10">
                                Let's transform your vision into a powerful digital product. Our team is ready to bring your ideas to life.
                            </p>
                            <Link to="/contact">
                                <Button className="btn-primary group text-lg px-10 py-6 relative z-10">
                                    Let's Build Together
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Products;
