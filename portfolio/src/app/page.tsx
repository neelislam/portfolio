"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Github, Linkedin, Mail, Instagram, Facebook, 
  Terminal, Code2, Cpu, Globe, BookOpen, Activity, Smartphone, 
  ExternalLink, Flame, X, ChevronLeft, ChevronRight, Download,
  Sun, Moon, FileText, FlaskConical
} from "lucide-react";

// --- 🛠️ DATA SECTION 🛠️ ---
const portfolioData = {
  name: "Rabiul Islam Apu",
  title: "Software Engineer & AI Researcher",
  bio: "I build scalable mobile and web applications and design smart AI models. Whether I am managing Linux servers, developing complex databases, or organizing project data using MS Office, I focus on delivering clean code and reliable real-world solutions.",
  location: "Bangladesh",
  email: "rabiul17.ri@gmail.com",
  cv: "/rabiul_cv.pdf", 
  socials: {
    github: "https://github.com/neelislam",
    linkedin: "https://www.linkedin.com/in/rabiul-islam-8399391aa/",
    instagram: "https://www.instagram.com/neel_islam_/",
    facebook: "https://www.facebook.com/rabiul.islam.apu.3",
  },
  topSkills: [
    { name: "Flutter", slug: "flutter", color: "#02569B" },
    { name: "Django", slug: "django", color: "#092E20" }
  ],
  skills: [
    { name: "Python", slug: "python" },
    { name: "Dart", slug: "dart" },
    { name: "Java", slug: "openjdk" },
    { name: "C/C++", slug: "cplusplus" },
    { name: "React", slug: "react" },
    { name: "HTML/CSS", slug: "html5" },
    { name: "Tailwind", slug: "tailwindcss" },
    { name: "Firebase", slug: "firebase" },
    { name: "PostgreSQL", slug: "postgresql" },
    { name: "Linux", slug: "linux" },
    { name: "Git", slug: "git" },
    { name: "VS Code", slug: "visualstudiocode" },
  ],
  stats: [
    { label: "Platform Uptime", value: "99%" },
    { label: "Images Processed", value: "75k+" },
    { label: "Years Exp", value: "4+" },
  ],
  research: [
    {
      title: "Cross-Asset Framework for Tri-modal Based Altcoin Price Prediction Using Deep Learning",
      status: "Submitted",
      download: "/crypto.pdf",
      description: "A framework integrating public sentiment from social media, on-chain metrics, and historical data to predict altcoin prices using deep learning models (LSTM, GRU)[cite: 1]. Achieved a peak R² score of 0.9649 for LTC in 24-hour forecasting[cite: 1]."
    },
    {
      title: "A Machine Learning Framework for Multi-Class Diabetes Prediction Using Stacking Ensemble and SHAP Explainability",
      status: "Accepted Paper",
      download: "/SHAP.pdf",
      description: "An advanced machine learning framework focused on accurately classifying multi-class diabetes utilizing stacking ensembles."
    },
    {
      title: "EthnoFace – Developing a predictive model for facial attribute detection via Deep Learning.",
      status: "Ongoing Research",
      link: "https://github.com/neelislam/EthnoFace-AGEC",
      description: "Building an extensive deep learning pipeline utilizing the AGEC framework to precisely identify demographic characteristics from facial imagery."
    }
  ],
  projects: [
    {
      title: "Soseu Web",
      description: "Architected and managed a profitable e-commerce platform hosted on PythonAnywhere, ensuring 99% uptime.",
      tags: ["Python", "Django", "Web"],
      link: "https://soseuweb.pythonanywhere.com/",
      image: "/soseu.jpg",
      icon: "globe",
      status: "LIVE NOW",
      gallery: [
        { 
          img: "/soseu.jpg", 
          title: "Soseu E-commerce", 
          desc: "A fully functional e-commerce platform built with Python and Django." 
        }
      ]
    },
    {
      title: "AGEC Detector",
      description: "Spearheaded the ML lifecycle, scraping and processing 75,000+ images to train demographic classification models.",
      tags: ["Python", "CNNs", "Data Scraping"],
      link: "https://github.com/neelislam/EthnoFace-AGEC",
      color: "from-green-500 to-teal-500",
      icon: "cpu",
      image: "/agec_cover.png", 
      gallery: [
        { 
          img: "/agec_cover.png", 
          title: "EthnoFace-AGEC", 
          desc: "Facial attribute detection and demographic classification using Deep Learning." 
        }
      ]
    },
    {
      title: "Bookshop App",
      description: "A feature-rich Android app for buying and selling books with an AI-driven recommendation engine.",
      tags: ["Android", "Java", "Firebase", "AI"],
      link: "https://github.com/neelislam/book_shop_online",
      image: "/Simple Home page copy.png", 
      icon: "book",
      gallery: [
        { img: "/Simple Home page.png", title: "Intuitive Home", desc: "A clean, modern interface designed for easy navigation and discovery." },
        { img: "/ai generated summary of books.png", title: "AI Book Summaries", desc: "Get instant, AI-powered summaries to decide your next read." },
        { img: "/online payment options.png", title: "Secure Payments", desc: "Integrated with multiple payment gateways for safe transactions." },
        { img: "/sell your books online.png", title: "Sell Your Books", desc: "A marketplace feature allowing users to list their own used books." },
      ]
    },
    {
      title: "ConnectBD",
      description: "Pioneered a unified communication directory built simultaneously for iOS, Android, and Web platforms.",
      tags: ["Flutter", "Django", "Cross-Platform"],
      link: "https://github.com/neelislam",
      color: "from-blue-500 to-cyan-500",
      icon: "smartphone",
      status: "ONGOING"
    },
    {
      title: "Patient History",
      description: "Digital medical record tracking system prioritizing secure, real-time data storage for doctors.",
      tags: ["Mobile", "Health", "Firebase"],
      link: "https://github.com/neelislam/patient_history_app",
      color: "from-red-500 to-pink-500",
      icon: "heart",
      image: "/ph.png", 
      gallery: [
        { 
          img: "/ph.png", 
          title: "Patient History", 
          desc: "A digital medical record tracking system for secure, real-time data storage." 
        }
      ]
    }
  ],
  certifications: [
    { name: "Flutter App Development", link: "https://ostad.app/share/certificate/c35493-rabiul-islam-apu" },
    { name: "Blockchain & Crypto", link: "https://ostad.app/share/certificate/c28697-rabiul-islam-apu" },
    { name: "PHP & Laravel", link: "https://ostad.app/share/certificate/c30151-rabiul-islam-apu" },
  ]
};

// --- 🌊 BACKGROUND COMPONENT 🌊 ---
const LiquidPlasmaBackground = ({ isDark }: { isDark: boolean }) => (
  <div className={`fixed inset-0 -z-10 overflow-hidden transition-colors duration-700 ${isDark ? 'bg-black' : 'bg-slate-100'}`}>
    <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none z-50" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
    <motion.div animate={{ scale: [1, 1.5, 1], rotate: [0, 90, 0], x: [0, 100, -100, 0], y: [0, 50, -50, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} className={`absolute top-[-10%] left-[-20%] w-[80vw] h-[80vw] rounded-full mix-blend-hard-light blur-[80px] ${isDark ? 'bg-[#FF0080] opacity-40' : 'bg-pink-300 opacity-50'}`} />
    <motion.div animate={{ scale: [1.2, 1, 1.2], rotate: [0, -60, 0], x: [0, -150, 150, 0], y: [0, 100, -100, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className={`absolute bottom-[-20%] right-[-10%] w-[90vw] h-[90vw] rounded-full mix-blend-hard-light blur-[80px] ${isDark ? 'bg-[#7928CA] opacity-40' : 'bg-purple-300 opacity-50'}`} />
    <motion.div animate={{ scale: [1, 1.3, 1], x: [-50, 100, -50], y: [50, -100, 50] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} className={`absolute top-[20%] right-[20%] w-[70vw] h-[70vw] rounded-full mix-blend-hard-light blur-[90px] ${isDark ? 'bg-blue-600 opacity-30' : 'bg-blue-300 opacity-40'}`} />
  </div>
);

// --- 🎨 UI COMPONENTS ---
const Card = ({ children, className, delay = 0, onClick }: { children: React.ReactNode; className?: string; delay?: number; onClick?: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    onClick={onClick}
    className={`bg-white/60 dark:bg-black/30 border border-slate-200 dark:border-white/10 backdrop-blur-md rounded-3xl p-6 hover:bg-white/80 dark:hover:bg-black/40 shadow-lg dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-xl dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] transition-all duration-300 ${className} ${onClick ? 'cursor-pointer' : ''}`}
  >
    {children}
  </motion.div>
);

const ProjectIconAnimation = ({ icon }: { icon: string }) => {
  if (icon === "globe") return <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute right-4 top-4 text-slate-400 dark:text-white opacity-20 dark:opacity-10"><Globe size={64} /></motion.div>;
  if (icon === "book") return <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute right-4 top-4 text-slate-400 dark:text-white opacity-20 dark:opacity-10"><BookOpen size={64} /></motion.div>;
  if (icon === "heart") return <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="absolute right-4 top-4 text-slate-400 dark:text-white opacity-20 dark:opacity-10"><Activity size={64} /></motion.div>;
  if (icon === "smartphone") return <motion.div animate={{ rotate: [-5, 5, -5] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="absolute right-4 top-4 text-slate-400 dark:text-white opacity-20 dark:opacity-10"><Smartphone size={64} /></motion.div>;
  if (icon === "cpu") return <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="absolute right-4 top-4 text-slate-400 dark:text-white opacity-20 dark:opacity-10"><Cpu size={64} /></motion.div>;
  return null;
};

// --- 🖼️ PROJECT DETAILS MODAL COMPONENT 🖼️ ---
const ProjectModal = ({ project, onClose, isDark }: { project: any, onClose: () => void, isDark: boolean }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === project.gallery.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? project.gallery.length - 1 : prev - 1));
  };

  if (!project) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 dark:bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-zinc-900/95 border border-slate-200 dark:border-zinc-700 w-full max-w-5xl h-[85vh] md:h-[70vh] rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 z-50 p-2 bg-slate-200 dark:bg-black/50 rounded-full hover:bg-red-500 hover:text-white transition-colors text-slate-600 dark:text-white">
          <X size={20} />
        </button>

        {project.gallery ? (
          <div className="w-full md:w-2/3 h-1/2 md:h-full relative bg-slate-100 dark:bg-black flex items-center justify-center group">
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentSlide}
                src={project.gallery[currentSlide].img}
                alt={project.gallery[currentSlide].title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="max-h-full max-w-full object-contain"
              />
            </AnimatePresence>
            
            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 dark:bg-black/50 rounded-full hover:bg-slate-200 dark:hover:bg-white/20 text-slate-800 dark:text-white transition-all shadow-md opacity-0 group-hover:opacity-100">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 dark:bg-black/50 rounded-full hover:bg-slate-200 dark:hover:bg-white/20 text-slate-800 dark:text-white transition-all shadow-md opacity-0 group-hover:opacity-100">
              <ChevronRight size={24} />
            </button>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {project.gallery.map((_: any, idx: number) => (
                <div key={idx} className={`w-2 h-2 rounded-full transition-all ${idx === currentSlide ? "bg-blue-600 dark:bg-white w-4" : "bg-slate-400 dark:bg-white/30"}`} />
              ))}
            </div>
          </div>
        ) : (
          <div className={`w-full md:w-2/3 h-1/2 md:h-full flex items-center justify-center ${project.color ? `bg-gradient-to-br ${project.color}` : 'bg-gradient-to-br from-slate-200 to-slate-300 dark:from-gray-900 dark:to-black'}`}>
             <ProjectIconAnimation icon={project.icon} />
          </div>
        )}

        <div className="w-full md:w-1/3 p-8 flex flex-col justify-between overflow-y-auto bg-slate-50 dark:bg-zinc-900/50">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">{project.title}</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag: string, i: number) => (
                 <span key={i} className="text-xs px-2 py-1 bg-slate-200 dark:bg-white/10 rounded text-slate-700 dark:text-zinc-300 border border-slate-300 dark:border-white/10">{tag}</span>
              ))}
            </div>
            
            {project.gallery ? (
               <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{project.gallery[currentSlide].title}</h3>
                  <p className="text-slate-600 dark:text-zinc-400 leading-relaxed text-sm">
                    {project.gallery[currentSlide].desc}
                  </p>
               </div>
            ) : (
               <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">{project.description}</p>
            )}
          </div>

          <div className="mt-8">
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)]"
            >
              View Project <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen font-sans relative overflow-hidden selection:bg-blue-500/30 ${isDarkMode ? "dark" : ""}`}>
      <div className="text-slate-900 dark:text-zinc-100 transition-colors duration-500">
        <LiquidPlasmaBackground isDark={isDarkMode} />
        
        {/* THEME TOGGLE BUTTON */}
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="fixed top-6 right-6 z-50 p-3 bg-white/80 dark:bg-black/50 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-full text-slate-800 dark:text-white shadow-lg hover:scale-110 transition-transform"
        >
          {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>

        <AnimatePresence>
          {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} isDark={isDarkMode} />}
        </AnimatePresence>

        <div className="max-w-6xl mx-auto space-y-4 relative z-10 p-4 md:p-8 pt-20 md:pt-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="md:col-span-2 flex flex-col justify-center min-h-[200px]" delay={0.1}>
              <div className="flex items-center space-x-2 mb-4">
                <span className="relative flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span></span>
                <span className="text-sm text-slate-600 dark:text-zinc-300 font-medium tracking-wide">Available for hire</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white drop-shadow-sm dark:drop-shadow-lg">Hey, I'm {portfolioData.name}.</h1>
              <p className="text-xl text-slate-700 dark:text-zinc-300 max-w-lg leading-relaxed mb-6">{portfolioData.title}</p>
              
              <div className="flex">
                <a
                  href={portfolioData.cv}
                  download="Rabiul_Islam_Apu_CV.pdf"
                  className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-black font-bold rounded-xl hover:bg-slate-800 dark:hover:bg-zinc-200 transition-all duration-300 shadow-[0_4px_14px_0_rgba(0,0,0,0.39)] dark:shadow-[0_0_15px_rgba(255,255,255,0.2)] dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
                >
                  <Download size={20} />
                  Download CV
                </a>
              </div>
            </Card>

            <Card className="md:col-span-1 flex flex-col justify-between overflow-hidden" delay={0.2}>
              <div>
                 <div className="relative w-20 h-20 mb-6 group">
                    <div className="absolute inset-0 bg-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <img src="/me.jpg" alt="Profile" className="relative w-full h-full rounded-2xl object-cover border-2 border-slate-200 dark:border-zinc-700 shadow-xl" />
                 </div>
                 <p className="text-slate-600 dark:text-zinc-300 text-sm mb-6 leading-relaxed border-l-2 border-blue-500 dark:border-zinc-700 pl-3">{portfolioData.bio}</p>
              </div>
              <div className="flex gap-3 flex-wrap">
                <a href={portfolioData.socials.github} target="_blank" className="p-2 bg-slate-100 dark:bg-white/5 rounded-full hover:bg-slate-200 dark:hover:bg-white text-slate-700 dark:text-white dark:hover:text-black transition-all border border-slate-200 dark:border-white/10"><Github size={18} /></a>
                <a href={portfolioData.socials.linkedin} target="_blank" className="p-2 bg-slate-100 dark:bg-white/5 rounded-full hover:bg-blue-600 hover:text-white transition-all border border-slate-200 dark:border-white/10 dark:text-white text-slate-700 hover:shadow-[0_0_15px_rgba(37,99,235,0.5)]"><Linkedin size={18} /></a>
                <a href={portfolioData.socials.facebook} target="_blank" className="p-2 bg-slate-100 dark:bg-white/5 rounded-full hover:bg-blue-500 hover:text-white transition-all border border-slate-200 dark:border-white/10 dark:text-white text-slate-700 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"><Facebook size={18} /></a>
                <a href={portfolioData.socials.instagram} target="_blank" className="p-2 bg-slate-100 dark:bg-white/5 rounded-full hover:bg-pink-600 hover:text-white transition-all border border-slate-200 dark:border-white/10 dark:text-white text-slate-700 hover:shadow-[0_0_15px_rgba(219,39,119,0.5)]"><Instagram size={18} /></a>
                <a href={`mailto:${portfolioData.email}`} className="p-2 bg-slate-100 dark:bg-white/5 rounded-full hover:bg-green-500 hover:text-white transition-all border border-slate-200 dark:border-white/10 dark:text-white text-slate-700 hover:shadow-[0_0_15px_rgba(34,197,94,0.5)]"><Mail size={18} /></a>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            
            <Card className="md:col-span-1 md:row-span-2 flex flex-col gap-6" delay={0.3}>
              <div className="flex flex-col gap-3">
                 <div className="flex items-center gap-2 mb-1">
                    <motion.div animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.1, 1] }} transition={{ duration: 0.5, repeat: Infinity }}><Flame size={16} className="text-orange-500" /></motion.div>
                    <h3 className="font-bold text-sm text-orange-600 dark:text-orange-500 uppercase tracking-widest">Mastery</h3>
                 </div>
                 <div className="grid grid-cols-2 gap-3">
                    {portfolioData.topSkills.map((skill, i) => (
                      <div key={i} className="relative group flex flex-col items-center justify-center p-3 rounded-xl border border-orange-200 dark:border-orange-500/30 bg-orange-50 dark:bg-orange-900/10 shadow-sm dark:shadow-[0_0_15px_rgba(249,115,22,0.1)] hover:shadow-md dark:hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] transition-all">
                         <motion.div className="absolute top-1 right-1" animate={{ opacity: [0.6, 1, 0.7, 1, 0.8], scale: [1, 1.1, 1.05, 1.15, 1] }} transition={{ duration: 0.2, repeat: Infinity, repeatType: "reverse" }}><Flame size={14} className="text-red-500 drop-shadow-[0_0_5px_rgba(239,68,68,0.8)]" /></motion.div>
                         <img src={`https://cdn.simpleicons.org/${skill.slug}`} alt={skill.name} className="w-10 h-10 mb-2 drop-shadow-md transition-transform group-hover:scale-110" />
                         <span className="text-[10px] font-bold text-orange-900 dark:text-orange-100">{skill.name}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3"><Terminal size={16} className="text-slate-500 dark:text-zinc-400" /><h3 className="font-bold text-xs text-slate-500 dark:text-zinc-400 uppercase tracking-widest">Toolkit</h3></div>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-white/5 rounded-lg border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/30 transition-all">
                      <img src={`https://cdn.simpleicons.org/${skill.slug}/${isDarkMode ? 'white' : 'black'}`} alt={skill.name} className="w-3.5 h-3.5 opacity-70" />
                      <span className="text-xs text-slate-700 dark:text-zinc-300">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="md:col-span-3 min-h-[300px]" delay={0.4}>
              <div className="flex items-center gap-2 mb-6"><Code2 size={20} className="text-blue-600 dark:text-purple-400" /><h3 className="font-bold text-lg text-slate-900 dark:text-white">Featured Projects</h3></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {portfolioData.projects.map((project, i) => (
                  <div 
                    key={i} 
                    onClick={() => setSelectedProject(project)}
                    className="group relative bg-white/50 dark:bg-black/50 p-5 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-white/30 transition-all cursor-pointer overflow-hidden shadow-sm hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                  >
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="absolute top-0 left-0 w-full h-full object-cover opacity-20 dark:opacity-50 group-hover:opacity-10 dark:group-hover:opacity-30 transition-opacity" />
                    ) : (
                      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color}`} />
                    )}
                    
                    <ProjectIconAnimation icon={project.icon || ""} />
                    
                    {project.status && (
                      <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 bg-green-100/90 dark:bg-green-900/80 border border-green-300 dark:border-green-500/50 rounded-full z-20 backdrop-blur-md shadow-sm dark:shadow-[0_0_10px_rgba(34,197,94,0.5)]">
                        <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 dark:bg-green-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-green-600 dark:bg-green-500"></span></span>
                        <span className="text-[10px] font-bold text-green-800 dark:text-green-100 tracking-wider uppercase">{project.status}</span>
                      </div>
                    )}

                    <div className="relative z-10 mt-2">
                      <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h4>
                      <p className="text-sm text-slate-600 dark:text-zinc-300 mb-4 h-10 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, j) => <span key={j} className="text-[10px] px-2 py-1 bg-slate-200 dark:bg-white/10 rounded text-slate-700 dark:text-zinc-300 border border-slate-300 dark:border-white/10">{tag}</span>)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="md:col-span-2 flex justify-between items-center" delay={0.5}>
              {portfolioData.stats.map((stat, i) => (
                 <div key={i} className="text-center w-full hover:bg-slate-100 dark:hover:bg-white/5 py-2 rounded-xl transition-colors">
                   <h4 className="text-3xl font-bold text-slate-900 dark:text-white drop-shadow-sm">{stat.value}</h4>
                   <p className="text-[10px] sm:text-xs text-slate-500 dark:text-zinc-400 uppercase tracking-widest font-semibold mt-1">{stat.label}</p>
                 </div>
              ))}
            </Card>

            <Card className="md:col-span-1" delay={0.6}>
              <div className="flex items-center gap-2 mb-4"><Cpu size={20} className="text-orange-500 dark:text-orange-400" /><h3 className="font-bold text-sm text-slate-900 dark:text-white">Certs</h3></div>
              <ul className="space-y-3">
                {portfolioData.certifications.map((cert, i) => (
                  <li key={i} className="text-xs text-slate-600 dark:text-zinc-300 border-l-2 border-slate-300 dark:border-zinc-700 pl-3 py-1 hover:border-orange-500 dark:hover:border-orange-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group">
                      <span>{cert.name}</span>
                      <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
            
            {/* RESEARCH & PUBLICATIONS SECTION */}
            <Card className="md:col-span-4" delay={0.7}>
              <div className="flex items-center gap-2 mb-6">
                <FlaskConical size={22} className="text-teal-600 dark:text-teal-400" />
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">Research & Publications</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {portfolioData.research.map((item, i) => (
                  <div key={i} className="flex flex-col justify-between p-6 bg-white/50 dark:bg-black/40 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all shadow-sm hover:shadow-[0_0_20px_rgba(20,184,166,0.15)] group">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md border shadow-sm ${
                          item.status === 'Accepted Paper' ? 'bg-green-100 text-green-700 border-green-300 dark:bg-green-900/30 dark:text-green-300 dark:border-green-500/30' : 
                          item.status === 'Submitted' ? 'bg-yellow-100 text-yellow-700 border-yellow-300 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-500/30' :
                          'bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-500/30'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      <h4 className="font-semibold text-sm md:text-base text-slate-900 dark:text-zinc-100 leading-snug mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        {item.title}
                      </h4>
                      {item.description && (
                         <p className="text-xs text-slate-600 dark:text-zinc-400 mb-6 leading-relaxed">
                           {item.description}
                         </p>
                      )}
                    </div>
                    
                    {item.download ? (
                      <a 
                        href={item.download} 
                        download
                        className="self-start flex items-center gap-2 text-xs font-semibold px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-black rounded-lg hover:bg-slate-700 dark:hover:bg-zinc-200 transition-all shadow-md dark:shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                      >
                        <FileText size={14} /> Download Paper
                      </a>
                    ) : (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="self-start flex items-center gap-2 text-xs font-semibold px-4 py-2 bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-white rounded-lg hover:bg-slate-300 dark:hover:bg-white/20 transition-all border border-transparent dark:border-white/5 hover:border-slate-400 dark:hover:border-white/20"
                      >
                        <Github size={14} /> View Repository
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </Card>

          </div>
          <div className="pt-8 pb-4 text-center text-slate-500 dark:text-zinc-500 text-xs tracking-wider uppercase">
            <p>© {new Date().getFullYear()} {portfolioData.name} • Built with Next.js & Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
}