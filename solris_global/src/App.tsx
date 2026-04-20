/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef, useState, useEffect } from "react";
import { 
  motion, 
  useScroll, 
  useTransform 
} from "framer-motion";
import { 
  Zap, 
  TrendingUp, 
  Users,
  Award,
  Shield,
  Youtube,
  MessageSquare,
  Globe,
  Instagram,
  Twitter,
  Linkedin,
  Mail
} from "lucide-react";

// --- Components ---

const SolrisIcon = ({ color = "var(--color-electric-blue)", className = "", opacity }: { color?: string, className?: string, opacity?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} opacity={opacity}>
    <path 
      d="M50 20 C33.4 20 20 33.4 20 50 C20 66.6 33.4 80 50 80 C66.6 80 80 66.6 80 50 C80 43 77.6 36.5 73.5 31.3 L85 15 L68.7 26.5 C63.5 22.4 57 20 50 20Z" 
      stroke={color} 
      strokeWidth="4" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    <path 
      d="M50 30 C39 30 30 39 30 50 C30 61 39 70 50 70 C61 70 70 61 70 50 C70 45 68.5 41 66 38 L72 32" 
      stroke={color} 
      strokeWidth="2" 
      opacity="0.5"
    />
  </svg>
);

const RestingSilhouette = () => (
  <div className="relative w-full max-w-[70vw] md:max-w-2xl h-auto">
    {/* The Electric Blue Tree - Data-line branches pulsing in the background */}
    <svg viewBox="0 0 400 300" className="absolute inset-0 z-0 opacity-40">
      <motion.g
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <path 
          d="M180 250 L180 100 M180 200 L140 160 M180 180 L220 140 M180 150 L150 120" 
          stroke="var(--color-electric-blue)" 
          strokeWidth="2" 
          strokeLinecap="round"
          strokeDasharray="4 8"
        />
        {/* Glowing data nodes on branches */}
        {[
          { x: 180, y: 100 }, { x: 140, y: 160 }, { x: 220, y: 140 }, { x: 150, y: 120 }
        ].map((pt, i) => (
          <motion.circle
            key={i}
            cx={pt.x}
            cy={pt.y}
            r="3"
            fill="var(--color-electric-blue)"
            animate={{ r: [3, 5, 3], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </motion.g>
    </svg>

    <svg viewBox="0 0 400 300" className="relative z-10 w-full h-auto drop-shadow-[0_0_30px_rgba(230,0,0,0.4)]">
      {/* Setting: Leaning against the trunk */}
      <path 
        d="M180 250 L200 150 Q210 120 230 130 Q250 140 240 160 L220 250 L250 250 Q280 250 280 230 L280 150 Q280 120 310 110 Q340 100 340 130 L340 250 L380 250" 
        fill="var(--color-fierce-red)"
        className="opacity-40"
      />
      {/* Body leaning - back rest */}
      <path 
        d="M200 250 Q200 200 180 150 Q170 120 190 110 Q220 100 230 130 Q240 160 220 250" 
        fill="var(--color-fierce-red)"
      />
      {/* Head resting back */}
      <circle cx="215" cy="90" r="28" fill="var(--color-fierce-red)" />
    </svg>
  </div>
);

const FlowerBed = () => {
  const flowers = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    color: Math.random() > 0.6 ? "var(--color-fierce-red)" : "#22c55e",
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 2
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      {flowers.map(f => (
        <motion.div
          key={f.id}
          className="absolute rounded-full"
          style={{
            left: `${f.x}%`,
            top: `${f.y}%`,
            width: f.size,
            height: f.size,
            backgroundColor: f.color,
            boxShadow: f.color === "var(--color-fierce-red)" ? `0 0 10px ${f.color}` : 'none'
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.7, 0.2],
            filter: ["brightness(1)", "brightness(1.8)", "brightness(1)"]
          }}
          transition={{
            duration: f.duration,
            repeat: Infinity,
            delay: f.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

const Footer = () => (
  <footer className="bg-oled-black border-t border-brilliant-white/5 pt-20 pb-12 px-6 md:px-8 relative z-50">
    <div className="max-w-7xl mx-auto">
      {/* Top CTA Section */}
      <div className="flex flex-col items-center text-center mb-24">
        <SolrisIcon className="w-16 h-16 md:w-24 md:h-24 mb-8 md:mb-12" />
        <h2 className="font-serif text-3xl md:text-7xl font-bold text-fierce-red glow-red mb-6 md:mb-8 uppercase">
          Architect Your Fame
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mb-12">
          <button className="bg-fierce-red text-brilliant-white px-8 md:px-12 py-3 md:py-4 rounded-full font-display font-bold text-xs md:text-sm tracking-[0.2em] hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(230,0,0,0.4)] active:scale-95">
            ENTER THE PORTAL
          </button>
          <button className="border border-brilliant-white/20 text-brilliant-white px-8 md:px-12 py-3 md:py-4 rounded-full font-display font-bold text-xs md:text-sm tracking-[0.2em] hover:bg-electric-blue hover:border-electric-blue transition-all active:scale-95">
            CONTACT COLLECTIVE
          </button>
        </div>
      </div>

      {/* Main Footer Links Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-24 border-t border-brilliant-white/5 pt-20">
        <div className="col-span-2 lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <SolrisIcon className="w-8 h-8" />
            <span className="font-serif font-bold text-xl tracking-tight text-fierce-red uppercase">SOLRIS</span>
          </div>
          <p className="text-brilliant-white/40 text-sm leading-relaxed max-w-xs mb-8">
            The world's first cinematic syndication network. We edit, manage, and distribute your vision across the SOLRIS grid with zero-risk partnership agreements.
          </p>
          <div className="flex gap-4">
            {[Instagram, Twitter, Linkedin, Mail].map((Icon, idx) => (
              <a key={idx} href="#" className="w-10 h-10 rounded-full bg-brilliant-white/5 flex items-center justify-center text-brilliant-white/40 hover:text-electric-blue hover:bg-electric-blue/10 transition-all">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-[10px] tracking-[0.3em] text-brilliant-white mb-8 uppercase">Collective</h4>
          <ul className="space-y-4 text-sm text-brilliant-white/40 font-medium">
            <li className="hover:text-electric-blue transition-colors cursor-pointer">Manifesto</li>
            <li className="hover:text-electric-blue transition-colors cursor-pointer">The Hall</li>
            <li className="hover:text-electric-blue transition-colors cursor-pointer">Accelerator</li>
            <li className="hover:text-electric-blue transition-colors cursor-pointer">Careers</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-[10px] tracking-[0.3em] text-brilliant-white mb-8 uppercase">Support</h4>
          <ul className="space-y-4 text-sm text-brilliant-white/40 font-medium">
            <li className="hover:text-electric-blue transition-colors cursor-pointer flex items-center gap-2">
              <MessageSquare className="w-4 h-4" /> Help Center
            </li>
            <li className="hover:text-electric-blue transition-colors cursor-pointer flex items-center gap-2">
              <Shield className="w-4 h-4" /> Security
            </li>
            <li className="hover:text-electric-blue transition-colors cursor-pointer flex items-center gap-2">
              <Globe className="w-4 h-4" /> Status
            </li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1">
          <h4 className="font-display font-bold text-[10px] tracking-[0.3em] text-brilliant-white mb-8 uppercase">Updates</h4>
          <p className="text-brilliant-white/40 text-xs mb-4">Get the latest from the collective.</p>
          <div className="flex">
            <input 
              type="text" 
              placeholder="EMAIL" 
              className="bg-brilliant-white/5 border border-brilliant-white/10 px-4 py-2 text-[10px] tracking-[0.2em] font-bold text-brilliant-white focus:outline-none focus:border-electric-blue/50 w-full"
            />
            <button className="bg-electric-blue text-brilliant-white px-4 py-2 hover:bg-brilliant-white hover:text-black transition-all">
              <Zap className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brilliant-white/5 pt-8 flex flex-col md:flex-row justify-between gap-6">
        <div className="flex gap-8 text-[9px] tracking-[0.2em] font-bold text-brilliant-white/20 uppercase">
          <span className="hover:text-brilliant-white cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-brilliant-white cursor-pointer transition-colors">Terms of Service</span>
          <span className="hover:text-brilliant-white cursor-pointer transition-colors">Cookies</span>
        </div>
        <span className="text-[9px] tracking-[0.2em] font-bold text-brilliant-white/20 uppercase">
          © 2026 SOLRIS GLOBAL ENTERTAINMENT • ENGINEERED FOR FAME
        </span>
      </div>
    </div>
  </footer>
);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Device context for responsive scroll adjustments
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  // Mobile Journey Compression: Touch users move through the story much faster
  const mobileRange = (r: number[]) => isMobile ? r.map(v => v * 0.75) : r;

  // Responsive values for smooth transformations
  // Push them slightly apart on mobile but ensure no boundary clipping
  const textXValue = isMobile ? "-8%" : isTablet ? "-8%" : "-15%";
  const silhouetteXValue = isMobile ? "12%" : isTablet ? "10%" : "20%";
  const silhouetteScaleBase = isMobile ? 0.6 : 0.85;
  const silhouetteScaleMax = isMobile ? 1.0 : 1.25;

  // Transformations for scrollytelling - Sequential Dominance (850vh span, 450vh on mobile)
  
  // Phase 0: Initial Title (Starts fading almost immediately to reduce "dead" scroll)
  const initialTitleOpacity = useTransform(scrollYProgress, mobileRange([0, 0.05, 0.15]), [1, 1, 0]);
  const heroY = useTransform(scrollYProgress, mobileRange([0, 0.15]), [0, -800]);
  
  // Synchronized Scrollytelling Sequence (Tightened for immediate impact)
  const syncRange = mobileRange([0.02, 0.15, 0.5, 0.68]);
  const commonYRange = [isMobile ? 200 : 500, 0, 0, -1200];
  const commonOpacityRange = [0, 1, 1, 0];

  // Phase 1: Red Man
  const silhouetteOpacity = useTransform(scrollYProgress, mobileRange([0.02, 0.12, 0.5, 0.68]), [0, 1, 1, 0]);
  const silhouetteY = useTransform(scrollYProgress, syncRange, commonYRange);
  const silhouetteScale = useTransform(scrollYProgress, mobileRange([0.02, 0.15, 0.5]), [silhouetteScaleBase, 1.0, silhouetteScaleMax]);
  const silhouetteX = silhouetteXValue;
  
  // Phase 2: The Question
  const dreamerTextOpacity = useTransform(scrollYProgress, mobileRange([0.05, 0.15, 0.5, 0.68]), [0, 1, 1, 0]);
  const dreamerTextY = useTransform(scrollYProgress, syncRange, commonYRange);
  const dreamerTextX = textXValue;
  // Heavily blurred exit for the 'dreamy' cinematic effect
  const dreamerBlur = useTransform(
    scrollYProgress, 
    mobileRange([0.02, 0.15, 0.45, 0.68]), 
    ["blur(12px)", "blur(0px)", "blur(0px)", "blur(40px)"]
  );

  // Phase 3: The Icon Rotation
  // Locked to persist until the end of the scrollytelling container
  const logoOpacity = useTransform(scrollYProgress, mobileRange([0.5, 0.6]), [0, 1]);
  const logoScale = useTransform(scrollYProgress, mobileRange([0.5, 0.65, 0.85]), [0.4, 1.1, 1.0]);
  const logoRotate = useTransform(scrollYProgress, mobileRange([0.5, 1.0]), [0, 1800]);
  const logoY = useTransform(scrollYProgress, mobileRange([0.5, 0.65, 0.85]), [200, 0, 0]);

  // Phase 4: Manifesto Cards (Final resting position)
  const manifestoOpacity = useTransform(scrollYProgress, mobileRange([0.65, 0.85]), [0, 1]);
  const manifestoY = useTransform(scrollYProgress, mobileRange([0.65, 0.85]), [150, 0]);

  // Background Continuity - Stays completely solid at the end of tracking
  const dreamAuraOpacity = useTransform(scrollYProgress, mobileRange([0.02, 0.9]), [0, 0.6]);
  const flowerBedOpacity = useTransform(scrollYProgress, mobileRange([0.02, 0.1, 0.9]), [0, 1, 1]);
  
  // Header State - Appears early and stays solid
  const headerOpacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);

  return (
    <div className="bg-oled-black">
      <div 
        ref={containerRef} 
        className={`relative ${isMobile ? 'h-[320vh]' : 'h-[800vh]'} bg-oled-black`}
        id="main-container"
      >
      {/* Persistent Background Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{ 
        backgroundImage: `linear-gradient(var(--color-electric-blue) 1px, transparent 1px), linear-gradient(90deg, var(--color-electric-blue) 1px, transparent 1px)`,
        backgroundSize: isMobile ? '50px 50px' : '100px 100px'
      }} />

      {/* Mobile Scroll Indicator - Desktop users don't need this reminder */}
      <motion.div 
        className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[60] flex flex-col items-center gap-2 md:hidden"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
      >
        <div className="w-1 h-12 rounded-full bg-electric-blue/20 overflow-hidden relative">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-electric-blue"
            animate={{ y: ["0%", "100%", "0%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <span className="text-[10px] tracking-[0.3em] font-bold text-electric-blue uppercase">SCROLL</span>
      </motion.div>

      {/* Morphing Header / Thought Bubble Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4 md:py-6 flex justify-between items-center pointer-events-none"
        style={{ opacity: headerOpacity }}
      >
        <div className="flex items-center gap-2 md:gap-4 pointer-events-auto cursor-pointer group">
          <motion.div 
            className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center translate-y-1"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <SolrisIcon className="w-6 h-6 md:w-10 md:h-10" />
          </motion.div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg md:text-2xl tracking-tight text-fierce-red leading-none">
              SOLRIS
            </span>
            <span className="text-[6px] md:text-[8px] tracking-[0.2em] font-bold text-brilliant-white opacity-60 uppercase -mt-0.5">
              GLOBAL
            </span>
          </div>
        </div>
        <div className="hidden lg:flex gap-12 font-display text-sm font-medium tracking-widest pointer-events-auto">
          {["DREAM", "MANIFESTO", "FAME", "ACCELERATOR"].map(item => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="hover:text-electric-blue transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-electric-blue group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
        <button className="pointer-events-auto bg-electric-blue/10 border border-electric-blue text-electric-blue px-4 md:px-6 py-1.5 md:py-2 rounded-full font-display text-[10px] md:text-xs font-bold tracking-widest hover:bg-electric-blue hover:text-brilliant-white transition-all shadow-lg active:scale-95">
          {isMobile ? "JOIN" : "JOIN PORTAL"}
        </button>
      </motion.nav>

      {/* Main Scrollytelling Stage */}
      <section className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center px-6">
          
          {/* Phase 0: The Hero Title */}
          <motion.div
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none z-50 w-full px-12"
             style={{ y: heroY, opacity: initialTitleOpacity }}
          >
            <h1 className="font-serif text-[15vw] font-bold leading-tight tracking-normal text-fierce-red glow-red uppercase">
              SOLRIS<br/>
              <span className="text-[10vw] block">GLOBAL</span>
            </h1>
            <p className="font-display text-[1.2vw] tracking-[0.4em] text-brilliant-white mt-8 uppercase font-bold opacity-80">
              Global Entertainment Accelerator
            </p>
          </motion.div>

          {/* Phase 2: The Question - Cinematic Aura Layer (Offset for Readability) */}
          <motion.div 
            style={{ 
              opacity: dreamerTextOpacity, 
              y: dreamerTextY,
              x: dreamerTextX,
              filter: dreamerBlur
            }}
            className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
          >
            <div className="text-left flex flex-col items-start max-w-full md:max-w-2xl px-6 md:px-12">
              <h2 className="flex flex-col items-start leading-none gap-2">
                <span className="font-display text-[11vw] md:text-[6.5vw] text-brilliant-white font-black tracking-tighter">
                  TIRED TO BE
                </span>
                <span className="font-serif italic text-fierce-red text-[5vw] md:text-[2.2vw] my-2 md:my-4 opacity-90 pl-1 md:pl-2">just a</span>
                <span className="font-display text-[13vw] md:text-[8vw] text-fierce-red font-black tracking-tight glow-red">
                  DREAMER?
                </span>
              </h2>
            </div>
          </motion.div>

          {/* Phase 1: Red Man - Independent Layer (Offset to the right) */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
            style={{ 
              opacity: silhouetteOpacity, 
              scale: silhouetteScale, 
              y: silhouetteY,
              x: silhouetteX
            }}
          >
            <div className="relative w-full max-w-[80vw] md:max-w-2xl flex items-center justify-center">
              <RestingSilhouette className="w-full h-auto" />
            </div>
          </motion.div>

          {/* Persistent Background Continuity (Flowers) */}
          <motion.div 
            className="absolute inset-x-0 bottom-0 h-full w-full pointer-events-none z-0"
            style={{ opacity: flowerBedOpacity }}
          >
             <FlowerBed />
          </motion.div>

          {/* Phase 3: The Rotating Icon */}
          <motion.div
            className="absolute pointer-events-none z-20 flex items-center justify-center"
            style={{ 
              scale: logoScale, 
              rotate: logoRotate,
              y: logoY,
              opacity: logoOpacity,
              filter: `drop-shadow(0 0 ${isMobile ? '30px' : '60px'} rgba(0, 209, 255, 0.7))`
            }}
          >
            <SolrisIcon className="w-48 h-48 md:w-[40vw] md:h-[40vw]" />
          </motion.div>

      {/* Phase 4: Manifesto (Cards) */}
          <motion.div 
            id="manifesto" 
            className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none px-4"
            style={{ opacity: manifestoOpacity, y: manifestoY }}
          >
            {/* Optimized grid for mobile: no overflow-y to prevent conflicting with page scroll */}
            <div className={`w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 pointer-events-auto`}>
              {[
                { icon: Zap, title: "Syndication", desc: "You upload on your platforms—we edit, optimize, and showcase on ours with total copyright immunity." },
                { icon: TrendingUp, title: "No-Loss Model", desc: "A unique partnership where you carry no risk. We invest in your vision so you focus on creation." },
                { icon: Youtube, title: "The Channel", desc: "Instant placement on the official SOLRIS portal and YouTube grid for maximum trial impact.", id: "card-network", highlight: true },
                { icon: Shield, title: "Strike-Free", desc: "Ironclad mutual agreements. No copyright strikes, no disputes—just 100% legal content unity." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  id={item.id}
                  className={`p-5 md:p-8 border border-brilliant-white/10 bg-oled-black/90 backdrop-blur-3xl rounded-xl md:rounded-3xl hover:border-electric-blue/50 transition-all group shadow-2xl active:scale-[0.98] pointer-events-auto ${item.highlight ? 'ring-1 ring-fierce-red/20 shadow-fierce-red/10' : ''}`}
                >
                  <item.icon className={`w-7 h-7 md:w-10 md:h-10 mb-3 md:mb-6 group-hover:scale-110 transition-transform ${item.highlight ? 'text-fierce-red' : 'text-electric-blue'}`} />
                  <h3 className={`font-display font-bold text-base md:text-xl uppercase tracking-widest mb-1.5 md:mb-3 group-hover:text-electric-blue duration-300 ${item.highlight ? 'text-fierce-red glow-red' : 'text-brilliant-white'}`}>
                    {item.title}
                  </h3>
                  <p className="text-[10px] md:text-sm text-brilliant-white/60 leading-relaxed group-hover:text-brilliant-white transition-colors">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Background Aura */}
          <motion.div 
            className="absolute inset-0 bg-radial-gradient(circle, rgba(0, 163, 224, 0.1) 0%, transparent 70%) pointer-events-none z-0"
            style={{ opacity: dreamAuraOpacity }}
          />
        </div>
      </section>
      </div>

      <Footer />
    </div>
  );
}
