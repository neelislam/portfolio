"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Github, Linkedin, Mail, Instagram, Facebook, 
  Terminal, Code2, Cpu, Globe, BookOpen, Activity, Smartphone, 
  ExternalLink, Flame, X, ChevronLeft, ChevronRight 
} from "lucide-react";

// --- 🛠️ DATA SECTION 🛠️ ---
const portfolioData = {
  name: "Rabiul Islam",
  title: "Full Stack Engineer & UI Designer",
  bio: "I build pixel-perfect, engaging, and accessible digital experiences. Obsessed with performance and clean code.",
  location: "Bangladesh",
  email: "rabiul17.ri@gmail.com",
  socials: {
    github: "https://github.com/neelislam",
    linkedin: "https://www.linkedin.com/in/rabiul-islam-8399391aa/",
    instagram: "https://www.instagram.com/neel_islam_/",
    facebook: "https://www.facebook.com/rabiul.islam.apu.3",
  },
  topSkills: [
    { name: "Flutter", slug: "flutter", color: "#02569B" },
    { name: "Android Studio", slug: "androidstudio", color: "#3DDC84" }
  ],
  skills: [
    { name: "HTML", slug: "html5" },
    { name: "CSS", slug: "css3" },
    { name: "JavaScript", slug: "javascript" },
    { name: "Dart", slug: "dart" },
    { name: "Java", slug: "openjdk" },
    { name: "Python", slug: "python" },
    { name: "Django", slug: "django" },
    { name: "C", slug: "c" },
    { name: "C++", slug: "cplusplus" },
    { name: "PHP", slug: "php" },
    { name: "React", slug: "react" },
    { name: "Next.js", slug: "nextdotjs" },
    { name: "Tailwind", slug: "tailwindcss" },
    { name: "Firebase", slug: "firebase" },
    { name: "Git", slug: "git" },
    { name: "Linux", slug: "linux" },
    { name: "VS Code", slug: "visualstudiocode" },
  ],
  stats: [
    { label: "Years Exp", value: "4+" },
    { label: "Projects", value: "25+" },
    { label: "Commits", value: "3k+" },
  ],
  projects: [
    {
      title: "Soseu Web",
      description: "A complete web platform hosted on PythonAnywhere.",
      tags: ["Python", "Django", "Web"],
      link: "https://soseuweb.pythonanywhere.com/",
      image: "/soseu.jpg",
      icon: "globe",
      status: "LIVE NOW"
    },
    {
      title: "Bookshop App",
      description: "A feature-rich Android app for buying and selling books with AI integration.",
      tags: ["Android", "Java", "Firebase", "AI"],
      link: "https://github.com/neelislam/book_shop_online",
      image: "/Simple Home page copy.png", // <--- 📸 ADDED BACKGROUND IMAGE HERE
      icon: "book",
      gallery: [
        { img: "/Simple Home page.png", title: "Intuitive Home", desc: "A clean, modern interface designed for easy navigation and discovery." },
        { img: "/side drawer.png", title: "Navigation Drawer", desc: "Quick access to profile, settings, and orders with a smooth sliding drawer." },
        { img: "/find by category.png", title: "Smart Categorization", desc: "Browse books by genre, author, or popularity instantly." },
        { img: "/ai generated summary of books.png", title: "AI Book Summaries", desc: "Get instant, AI-powered summaries to decide your next read." },
        { img: "/cart.png", title: "Smart Cart", desc: "Manage your items with real-time price calculation and updates." },
        { img: "/online payment options.png", title: "Secure Payments", desc: "Integrated with multiple payment gateways for safe transactions." },
        { img: "/sell your books online.png", title: "Sell Your Books", desc: "A marketplace feature allowing users to list their own used books." },
        { img: "/pre-owned book section.png", title: "Pre-Owned Market", desc: "Dedicated section for affordable, pre-loved books." },
        { img: "/see preowned book status.png", title: "Condition Transparency", desc: "View detailed condition reports and verification for used books." },
        { img: "/easy sign in sign up.png", title: "Seamless Auth", desc: "Secure and fast login experience using Firebase Authentication." },
      ]
    },
    {
      title: "Patient History",
      description: "Digital medical record tracking system for doctors.",
      tags: ["Mobile", "Health", "Database"],
      link: "https://github.com/neelislam/patient_history_app",
      color: "from-red-500 to-pink-500",
      icon: "heart"
    },
    {
      title: "Phone Book BD",
      description: "A smart contact management application.",
      tags: ["Android", "SQLite", "Contacts"],
      link: "https://github.com/neelislam/phone_book_bd",
      color: "from-purple-500 to-indigo-500",
      icon: "phone"
    }
  ],
  certifications: [
    { name: "Flutter App Development", link: "https://ostad.app/share/certificate/c35493-rabiul-islam-apu" },
    { name: "Blockchain & Crypto", link: "https://ostad.app/share/certificate/c28697-rabiul-islam-apu" },
    { name: "PHP & Laravel", link: "https://ostad.app/share/certificate/c30151-rabiul-islam-apu" },
  ]
};

// --- 🌊 BACKGROUND COMPONENT 🌊 ---
const LiquidPlasmaBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
    <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none z-50" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
    <motion.div animate={{ scale: [1, 1.5, 1], rotate: [0, 90, 0], x: [0, 100, -100, 0], y: [0, 50, -50, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[-10%] left-[-20%] w-[80vw] h-[80vw] bg-[#FF0080] rounded-full mix-blend-hard-light blur-[80px] opacity-60" />
    <motion.div animate={{ scale: [1.2, 1, 1.2], rotate: [0, -60, 0], x: [0, -150, 150, 0], y: [0, 100, -100, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute bottom-[-20%] right-[-10%] w-[90vw] h-[90vw] bg-[#7928CA] rounded-full mix-blend-hard-light blur-[80px] opacity-60" />
    <motion.div animate={{ scale: [1, 1.3, 1], x: [-50, 100, -50], y: [50, -100, 50] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[20%] right-[20%] w-[70vw] h-[70vw] bg-blue-600 rounded-full mix-blend-hard-light blur-[90px] opacity-50" />
    <motion.div animate={{ x: [0, 200, -200, 0], y: [0, -100, 100, 0], scale: [1, 0.8, 1] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[10%] left-[10%] w-[40vw] h-[40vw] bg-cyan-500 rounded-full mix-blend-hard-light blur-[60px] opacity-40" />
  </div>
);

// --- 🎨 UI COMPONENTS ---
const Card = ({ children, className, delay = 0, onClick }: { children: React.ReactNode; className?: string; delay?: number; onClick?: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    onClick={onClick}
    className={`bg-black/30 border border-white/10 backdrop-blur-md rounded-3xl p-6 hover:border-white/20 hover:bg-black/40 transition-all duration-300 shadow-xl ${className} ${onClick ? 'cursor-pointer' : ''}`}
  >
    {children}
  </motion.div>
);

const ProjectIconAnimation = ({ icon }: { icon: string }) => {
  if (icon === "globe") return <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute right-4 top-4 text-white opacity-10"><Globe size={64} /></motion.div>;
  if (icon === "book") return <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute right-4 top-4 text-white opacity-10"><BookOpen size={64} /></motion.div>;
  if (icon === "heart") return <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="absolute right-4 top-4 text-white opacity-10"><Activity size={64} /></motion.div>;
  if (icon === "phone") return <motion.div animate={{ rotate: [-10, 10, -10] }} transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }} className="absolute right-4 top-4 text-white opacity-10"><Smartphone size={64} /></motion.div>;
  return null;
};

// --- 🖼️ PROJECT DETAILS MODAL COMPONENT 🖼️ ---
const ProjectModal = ({ project, onClose }: { project: any, onClose: () => void }) => {
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
        className="bg-zinc-900/90 border border-zinc-700 w-full max-w-5xl h-[85vh] md:h-[70vh] rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button onClick={onClose} className="absolute top-4 right-4 z-50 p-2 bg-black/50 rounded-full hover:bg-red-500/80 transition-colors text-white">
          <X size={20} />
        </button>

        {/* LEFT SIDE: CAROUSEL (Only if gallery exists) */}
        {project.gallery ? (
          <div className="w-full md:w-2/3 h-1/2 md:h-full relative bg-black flex items-center justify-center">
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
            
            {/* NAVIGATION ARROWS */}
            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-white/20 text-white transition-all">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-white/20 text-white transition-all">
              <ChevronRight size={24} />
            </button>
            
            {/* DOT INDICATORS */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {project.gallery.map((_: any, idx: number) => (
                <div key={idx} className={`w-2 h-2 rounded-full transition-all ${idx === currentSlide ? "bg-white w-4" : "bg-white/30"}`} />
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full md:w-2/3 h-1/2 md:h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
             <ProjectIconAnimation icon={project.icon} />
          </div>
        )}

        {/* RIGHT SIDE: DETAILS */}
        <div className="w-full md:w-1/3 p-8 flex flex-col justify-between overflow-y-auto bg-zinc-900/50">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag: string, i: number) => (
                 <span key={i} className="text-xs px-2 py-1 bg-white/10 rounded text-zinc-300 border border-white/10">{tag}</span>
              ))}
            </div>
            
            {project.gallery ? (
               <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-400">{project.gallery[currentSlide].title}</h3>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    {project.gallery[currentSlide].desc}
                  </p>
               </div>
            ) : (
               <p className="text-zinc-400 leading-relaxed">{project.description}</p>
            )}
          </div>

          <div className="mt-8">
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all"
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

  return (
    <div className="min-h-screen text-zinc-100 p-4 md:p-8 font-sans bg-transparent relative overflow-hidden selection:bg-purple-500/30">
      <LiquidPlasmaBackground />
      
      {/* MODAL POPUP */}
      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto space-y-4 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="md:col-span-2 flex flex-col justify-center min-h-[200px]" delay={0.1}>
            <div className="flex items-center space-x-2 mb-4">
              <span className="relative flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span></span>
              <span className="text-sm text-zinc-300 font-medium tracking-wide">Available for hire</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white drop-shadow-lg">Hey, I'm {portfolioData.name}.</h1>
            <p className="text-xl text-zinc-300 max-w-lg leading-relaxed">{portfolioData.title}</p>
          </Card>

          <Card className="md:col-span-1 flex flex-col justify-between overflow-hidden" delay={0.2}>
            <div>
               <div className="relative w-20 h-20 mb-6 group">
                  <div className="absolute inset-0 bg-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <img src="/me.jpg" alt="Profile" className="relative w-full h-full rounded-2xl object-cover border-2 border-zinc-700 shadow-xl" />
               </div>
               <p className="text-zinc-300 text-sm mb-6 leading-relaxed border-l-2 border-zinc-700 pl-3">{portfolioData.bio}</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <a href={portfolioData.socials.github} target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all border border-white/10"><Github size={18} /></a>
              <a href={portfolioData.socials.linkedin} target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-blue-600 hover:text-white transition-all border border-white/10"><Linkedin size={18} /></a>
              <a href={portfolioData.socials.facebook} target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-blue-500 hover:text-white transition-all border border-white/10"><Facebook size={18} /></a>
              <a href={portfolioData.socials.instagram} target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-pink-600 hover:text-white transition-all border border-white/10"><Instagram size={18} /></a>
              <a href={`mailto:${portfolioData.email}`} className="p-2 bg-white/5 rounded-full hover:bg-green-500 hover:text-white transition-all border border-white/10"><Mail size={18} /></a>
            </div>
          </Card>
        </div>

        {/* BENTO GRID SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
          {/* SKILLS SECTION */}
          <Card className="md:col-span-1 md:row-span-2 flex flex-col gap-6" delay={0.3}>
            <div className="flex flex-col gap-3">
               <div className="flex items-center gap-2 mb-1">
                  <motion.div animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.1, 1] }} transition={{ duration: 0.5, repeat: Infinity }}><Flame size={16} className="text-orange-500" /></motion.div>
                  <h3 className="font-bold text-sm text-orange-500 uppercase tracking-widest">Mastery</h3>
               </div>
               <div className="grid grid-cols-2 gap-3">
                  {portfolioData.topSkills.map((skill, i) => (
                    <div key={i} className="relative group flex flex-col items-center justify-center p-3 rounded-xl border border-orange-500/30 bg-orange-900/10 shadow-[0_0_15px_rgba(249,115,22,0.1)] hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] transition-all">
                       <motion.div className="absolute top-1 right-1" animate={{ opacity: [0.6, 1, 0.7, 1, 0.8], scale: [1, 1.1, 1.05, 1.15, 1] }} transition={{ duration: 0.2, repeat: Infinity, repeatType: "reverse" }}><Flame size={14} className="text-red-500 drop-shadow-[0_0_5px_rgba(239,68,68,0.8)]" /></motion.div>
                       <img src={`https://cdn.simpleicons.org/${skill.slug}`} alt={skill.name} className="w-10 h-10 mb-2 drop-shadow-md transition-transform group-hover:scale-110" />
                       <span className="text-[10px] font-bold text-orange-100">{skill.name}</span>
                    </div>
                  ))}
               </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3"><Terminal size={16} className="text-zinc-400" /><h3 className="font-bold text-xs text-zinc-400 uppercase tracking-widest">Toolkit</h3></div>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                    <img src={`https://cdn.simpleicons.org/${skill.slug}/white`} alt={skill.name} className="w-3.5 h-3.5 opacity-70" />
                    <span className="text-xs text-zinc-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* FEATURED PROJECTS (CLICKABLE CARDS) */}
          <Card className="md:col-span-3 min-h-[300px]" delay={0.4}>
            <div className="flex items-center gap-2 mb-6"><Code2 size={20} className="text-purple-400" /><h3 className="font-bold text-lg">Featured Projects</h3></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {portfolioData.projects.map((project, i) => (
                <div 
                  key={i} 
                  // Clicking the card opens the Modal
                  onClick={() => setSelectedProject(project)}
                  className="group relative bg-black/50 p-5 rounded-2xl border border-white/10 hover:border-white/30 transition-all cursor-pointer overflow-hidden"
                >
                  {/* PROJECT IMAGE OR GRADIENT */}
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="absolute top-0 left-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity" />
                  ) : (
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color}`} />
                  )}
                  
                  <ProjectIconAnimation icon={project.icon || ""} />
                  
                  {project.status && (
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 bg-green-900/80 border border-green-500/50 rounded-full z-20 backdrop-blur-md shadow-[0_0_10px_rgba(34,197,94,0.5)]">
                      <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span></span>
                      <span className="text-[10px] font-bold text-green-100 tracking-wider uppercase">{project.status}</span>
                    </div>
                  )}

                  <div className="relative z-10 mt-2">
                    <h4 className="font-bold text-white text-lg mb-2 group-hover:text-blue-400 transition-colors drop-shadow-md">{project.title}</h4>
                    <p className="text-sm text-zinc-300 mb-4 h-10 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, j) => <span key={j} className="text-[10px] px-2 py-1 bg-white/10 rounded text-zinc-300 border border-white/10">{tag}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="md:col-span-2 flex justify-between items-center" delay={0.5}>
            {portfolioData.stats.map((stat, i) => (
               <div key={i} className="text-center w-full hover:bg-white/5 py-2 rounded-xl transition-colors">
                 <h4 className="text-3xl font-bold text-white drop-shadow-md">{stat.value}</h4>
                 <p className="text-xs text-zinc-400 uppercase tracking-widest font-semibold mt-1">{stat.label}</p>
               </div>
            ))}
          </Card>

          <Card className="md:col-span-1" delay={0.6}>
            <div className="flex items-center gap-2 mb-4"><Cpu size={20} className="text-orange-400" /><h3 className="font-bold text-sm">Certs</h3></div>
            <ul className="space-y-3">
              {portfolioData.certifications.map((cert, i) => (
                <li key={i} className="text-xs text-zinc-300 border-l-2 border-zinc-700 pl-3 py-1 hover:border-orange-400 hover:text-white transition-colors">
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group">
                    <span>{cert.name}</span>
                    <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </Card>

        </div>
        <div className="pt-8 pb-4 text-center text-zinc-500 text-xs tracking-wider uppercase">
          <p>© {new Date().getFullYear()} {portfolioData.name} • Built with Next.js & Tailwind</p>
        </div>
      </div>
    </div>
  );
}