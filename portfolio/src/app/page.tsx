"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Github, Linkedin, Mail, Instagram, Facebook, 
  Terminal, Code2, Cpu, Globe, BookOpen, Activity, Smartphone, ExternalLink, Flame, Radio 
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
  // 🌟 GOLD TIER SKILLS (Top, Glowing)
  topSkills: [
    { name: "Flutter", slug: "flutter", color: "#02569B" },
    { name: "Android Studio", slug: "androidstudio", color: "#3DDC84" }
  ],
  // 🔧 STANDARD SKILLS (Bottom, List)
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
      color: "from-blue-500 to-cyan-500",
      icon: "globe",
      // 🔥 ADDED: Status for this specific project
      status: "LIVE NOW"
    },
    {
      title: "Bookshop App",
      description: "An online book buying platform for Android.",
      tags: ["Android", "Java", "Firebase"],
      link: "https://github.com/neelislam/book_shop_online",
      color: "from-emerald-500 to-green-500",
      icon: "book"
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

// --- 🌊 BACKGROUND ANIMATION COMPONENT 🌊 ---
const BackgroundWaves = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-black" />
    <motion.div 
      animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.1, 0.2, 0.1] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-purple-900/30 rounded-full blur-[100px]"
    />
    <motion.div 
      animate={{ scale: [1, 1.5, 1], x: [-50, 50, -50], opacity: [0.1, 0.15, 0.1] }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[20%] right-[0%] w-[50vw] h-[50vw] bg-blue-900/20 rounded-full blur-[120px]"
    />
    <motion.div 
      animate={{ y: [0, -50, 0], opacity: [0.05, 0.1, 0.05] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-cyan-900/20 rounded-full blur-[100px]"
    />
  </div>
);

// --- 🎨 UI COMPONENTS ---
const Card = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={`bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-md rounded-3xl p-6 hover:border-zinc-600 hover:bg-zinc-900/60 transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

const ProjectIconAnimation = ({ icon }: { icon: string }) => {
  if (icon === "globe") return <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute right-4 top-4 text-zinc-700 opacity-20"><Globe size={64} /></motion.div>;
  if (icon === "book") return <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute right-4 top-4 text-zinc-700 opacity-20"><BookOpen size={64} /></motion.div>;
  if (icon === "heart") return <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="absolute right-4 top-4 text-zinc-700 opacity-20"><Activity size={64} /></motion.div>;
  if (icon === "phone") return <motion.div animate={{ rotate: [-10, 10, -10] }} transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }} className="absolute right-4 top-4 text-zinc-700 opacity-20"><Smartphone size={64} /></motion.div>;
  return null;
};

export default function Portfolio() {
  return (
    <div className="min-h-screen text-zinc-100 p-4 md:p-8 font-sans selection:bg-cyan-500/30 relative">
      <BackgroundWaves />
      <div className="max-w-6xl mx-auto space-y-4 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="md:col-span-2 flex flex-col justify-center min-h-[200px]" delay={0.1}>
            <div className="flex items-center space-x-2 mb-4">
              <span className="relative flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span></span>
              <span className="text-sm text-zinc-400 font-medium tracking-wide">Available for hire</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">Hey, I'm {portfolioData.name}.</h1>
            <p className="text-xl text-zinc-400 max-w-lg leading-relaxed">{portfolioData.title}</p>
          </Card>

          <Card className="md:col-span-1 flex flex-col justify-between overflow-hidden" delay={0.2}>
            <div>
               <div className="relative w-20 h-20 mb-6 group">
                  <div className="absolute inset-0 bg-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <img src="/me.jpg" alt="Profile" className="relative w-full h-full rounded-2xl object-cover border-2 border-zinc-800 shadow-xl" />
               </div>
               <p className="text-zinc-400 text-sm mb-6 leading-relaxed border-l-2 border-zinc-700 pl-3">{portfolioData.bio}</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <a href={portfolioData.socials.github} target="_blank" className="p-2 bg-zinc-800/50 rounded-full hover:bg-white hover:text-black transition-all border border-zinc-700"><Github size={18} /></a>
              <a href={portfolioData.socials.linkedin} target="_blank" className="p-2 bg-zinc-800/50 rounded-full hover:bg-blue-600 hover:text-white transition-all border border-zinc-700"><Linkedin size={18} /></a>
              <a href={portfolioData.socials.facebook} target="_blank" className="p-2 bg-zinc-800/50 rounded-full hover:bg-blue-500 hover:text-white transition-all border border-zinc-700"><Facebook size={18} /></a>
              <a href={portfolioData.socials.instagram} target="_blank" className="p-2 bg-zinc-800/50 rounded-full hover:bg-pink-600 hover:text-white transition-all border border-zinc-700"><Instagram size={18} /></a>
              <a href={`mailto:${portfolioData.email}`} className="p-2 bg-zinc-800/50 rounded-full hover:bg-green-500 hover:text-white transition-all border border-zinc-700"><Mail size={18} /></a>
            </div>
          </Card>
        </div>

        {/* BENTO GRID SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
          {/* 🌟 SKILLS SECTION */}
          <Card className="md:col-span-1 md:row-span-2 flex flex-col gap-6" delay={0.3}>
            {/* 🔥🔥🔥 FLAMING MASTERY TIER 🔥🔥🔥 */}
            <div className="flex flex-col gap-3">
               <div className="flex items-center gap-2 mb-1">
                  <motion.div animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.1, 1] }} transition={{ duration: 0.5, repeat: Infinity }}>
                    <Flame size={16} className="text-orange-500" />
                  </motion.div>
                  <h3 className="font-bold text-sm text-orange-500 uppercase tracking-widest">Mastery</h3>
               </div>
               <div className="grid grid-cols-2 gap-3">
                  {portfolioData.topSkills.map((skill, i) => (
                    <div key={i} className="relative group flex flex-col items-center justify-center p-3 rounded-xl border border-orange-500/30 bg-gradient-to-b from-orange-900/20 to-transparent shadow-[0_0_15px_rgba(249,115,22,0.1)] hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] transition-all">
                       <motion.div
                          className="absolute top-1 right-1"
                          animate={{ opacity: [0.6, 1, 0.7, 1, 0.8], scale: [1, 1.1, 1.05, 1.15, 1] }}
                          transition={{ duration: 0.2, repeat: Infinity, repeatType: "reverse" }}
                        >
                         <Flame size={14} className="text-red-500 drop-shadow-[0_0_5px_rgba(239,68,68,0.8)]" />
                       </motion.div>
                       <img 
                          src={`https://cdn.simpleicons.org/${skill.slug}`} 
                          alt={skill.name} 
                          className="w-10 h-10 mb-2 drop-shadow-md transition-transform group-hover:scale-110" 
                       />
                       <span className="text-[10px] font-bold text-orange-100">{skill.name}</span>
                    </div>
                  ))}
               </div>
            </div>

            {/* NORMAL TIER: Other Skills */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Terminal size={16} className="text-zinc-500" />
                <h3 className="font-bold text-xs text-zinc-500 uppercase tracking-widest">Toolkit</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800/50 rounded-lg border border-zinc-700/50 hover:bg-zinc-800 hover:border-zinc-600 transition-colors">
                    <img 
                      src={`https://cdn.simpleicons.org/${skill.slug}/white`} 
                      alt={skill.name} 
                      className="w-3.5 h-3.5 opacity-70" 
                    />
                    <span className="text-xs text-zinc-400">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="md:col-span-3 min-h-[300px]" delay={0.4}>
            <div className="flex items-center gap-2 mb-6">
              <Code2 size={20} className="text-purple-400" />
              <h3 className="font-bold text-lg">Featured Projects</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {portfolioData.projects.map((project, i) => (
                <a key={i} href={project.link} target="_blank" rel="noopener noreferrer" className="group relative bg-black/40 p-5 rounded-2xl border border-zinc-800 hover:border-zinc-600 transition-all cursor-pointer overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color}`} />
                  <ProjectIconAnimation icon={project.icon || ""} />
                  
                  {/* 🔥 NEW: PULSING LIVE STATUS INDICATOR 🔥 */}
                  {project.status && (
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 bg-green-900/60 border border-green-500/50 rounded-full z-20 backdrop-blur-md shadow-[0_0_10px_rgba(34,197,94,0.3)]">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      <span className="text-[10px] font-bold text-green-100 tracking-wider uppercase">{project.status}</span>
                    </div>
                  )}

                  <div className="relative z-10 mt-2">
                    <h4 className="font-bold text-white text-lg mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h4>
                    <p className="text-sm text-zinc-400 mb-4 h-10">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, j) => <span key={j} className="text-[10px] px-2 py-1 bg-zinc-800 rounded text-zinc-400 border border-zinc-700">{tag}</span>)}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </Card>

          <Card className="md:col-span-2 flex justify-between items-center" delay={0.5}>
            {portfolioData.stats.map((stat, i) => (
               <div key={i} className="text-center w-full hover:bg-zinc-800/30 py-2 rounded-xl transition-colors">
                 <h4 className="text-3xl font-bold text-white">{stat.value}</h4>
                 <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold mt-1">{stat.label}</p>
               </div>
            ))}
          </Card>

          {/* CERTIFICATIONS SECTION */}
          <Card className="md:col-span-1" delay={0.6}>
            <div className="flex items-center gap-2 mb-4">
              <Cpu size={20} className="text-orange-400" />
              <h3 className="font-bold text-sm">Certs</h3>
            </div>
            <ul className="space-y-3">
              {portfolioData.certifications.map((cert, i) => (
                <li key={i} className="text-xs text-zinc-400 border-l-2 border-zinc-700 pl-3 py-1 hover:border-orange-400 hover:text-zinc-200 transition-colors">
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group">
                    <span>{cert.name}</span>
                    <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </Card>

        </div>
        <div className="pt-8 pb-4 text-center text-zinc-600 text-xs tracking-wider uppercase">
          <p>© {new Date().getFullYear()} {portfolioData.name} • Built with Next.js & Tailwind</p>
        </div>
      </div>
    </div>
  );
}