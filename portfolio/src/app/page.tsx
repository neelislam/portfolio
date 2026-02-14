"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Code2, Terminal, Cpu, Globe, Instagram, Facebook } from "lucide-react";

// --- 🛠️ EDIT THIS DATA TO UPDATE YOUR PORTFOLIO 🛠️ ---
const portfolioData = {
  name: "Rabiul Islam",
  title: "Full Stack Engineer & UI Designer",
  bio: "I build pixel-perfect, engaging, and accessible digital experiences. Obsessed with performance and clean code.",
  location: "Bangladesh",
  email: "alex@example.com", // You can change this too!
  socials: {
    github: "https://github.com/neelislam",
    linkedin: "https://www.linkedin.com/in/rabiul-islam-8399391aa/",
    instagram: "https://www.instagram.com/neel_islam_/",
    facebook: "https://www.facebook.com/rabiul.islam.apu.3",
  },
  skills: [
    "React", "Next.js", "TypeScript", "Tailwind", "Python", "Django", "PostgreSQL", "Docker", "AWS"
  ],
  stats: [
    { label: "Years Exp", value: "4+" },
    { label: "Projects", value: "25+" },
    { label: "Commits", value: "3k+" },
  ],
  projects: [
    {
      title: "E-Commerce AI",
      description: "An AI-powered shopping assistant that recommends products.",
      tags: ["Next.js", "OpenAI", "Stripe"],
      link: "#",
      color: "from-blue-500 to-cyan-500"
    },
    // ... keep your other projects here
  ],
  certifications: [
    "AWS Certified Solutions Architect",
    "Google Professional Cloud Developer",
    "Meta Front-End Developer Certificate"
  ]
};

// --- 🎨 COMPONENTS (DO NOT TOUCH UNLESS YOU KNOW REACT) ---

const Card = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={`bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm rounded-3xl p-6 hover:border-zinc-700 transition-colors duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

const Badge = ({ text }: { text: string }) => (
  <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs font-medium text-zinc-300 border border-zinc-700">
    {text}
  </span>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 p-4 md:p-8 font-sans selection:bg-white/20">
      <div className="max-w-6xl mx-auto space-y-4">
        
        {/* HEADER SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Main Bio Card - Large */}
          <Card className="md:col-span-2 flex flex-col justify-center min-h-[200px]" delay={0.1}>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-zinc-400">Available for hire</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">
              Hey, I'm {portfolioData.name}.
            </h1>
            <p className="text-xl text-zinc-400 max-w-lg">
              {portfolioData.title}
            </p>
          </Card>

          {/* Socials & Photo Placeholder - Tall */}
          <Card className="md:col-span-1 flex flex-col justify-between" delay={0.2}>
            <div className="flex gap-4 flex-wrap">
  {/* GitHub */}
  <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" 
     className="p-2 bg-zinc-800 rounded-full hover:bg-white hover:text-black transition-all">
    <Github size={20} />
  </a>

  {/* LinkedIn */}
  <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" 
     className="p-2 bg-zinc-800 rounded-full hover:bg-blue-600 hover:text-white transition-all">
    <Linkedin size={20} />
  </a>

  {/* Facebook */}
  <a href={portfolioData.socials.facebook} target="_blank" rel="noopener noreferrer" 
     className="p-2 bg-zinc-800 rounded-full hover:bg-blue-500 hover:text-white transition-all">
    <Facebook size={20} />
  </a>

  {/* Instagram */}
  <a href={portfolioData.socials.instagram} target="_blank" rel="noopener noreferrer" 
     className="p-2 bg-zinc-800 rounded-full hover:bg-pink-600 hover:text-white transition-all">
    <Instagram size={20} />
  </a>

  {/* Email */}
  <a href={`mailto:${portfolioData.email}`} 
     className="p-2 bg-zinc-800 rounded-full hover:bg-green-500 hover:text-white transition-all">
    <Mail size={20} />
  </a>
</div>
          </Card>
        </div>

        {/* BENTO GRID SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
          {/* Tech Stack - Tall */}
          <Card className="md:col-span-1 md:row-span-2" delay={0.3}>
            <div className="flex items-center gap-2 mb-6">
              <Terminal size={20} className="text-blue-400" />
              <h3 className="font-bold text-lg">Stack</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {portfolioData.skills.map((skill, i) => (
                <Badge key={i} text={skill} />
              ))}
            </div>
          </Card>

          {/* Featured Projects - Wide */}
          <Card className="md:col-span-3" delay={0.4}>
            <div className="flex items-center gap-2 mb-6">
              <Code2 size={20} className="text-purple-400" />
              <h3 className="font-bold text-lg">Featured Projects</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {portfolioData.projects.map((project, i) => (
                <div key={i} className="group relative bg-zinc-800/50 p-4 rounded-2xl border border-zinc-700/50 hover:bg-zinc-800 transition-all cursor-pointer overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color}`} />
                  <h4 className="font-bold text-white mb-2 mt-2">{project.title}</h4>
                  <p className="text-xs text-zinc-400 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="text-[10px] px-2 py-0.5 bg-zinc-900 rounded text-zinc-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Stats - Small */}
          <Card className="md:col-span-2 flex justify-between items-center" delay={0.5}>
            {portfolioData.stats.map((stat, i) => (
               <div key={i} className="text-center">
                 <h4 className="text-2xl font-bold text-white">{stat.value}</h4>
                 <p className="text-xs text-zinc-500 uppercase tracking-wider">{stat.label}</p>
               </div>
            ))}
          </Card>

          {/* Certifications - Small */}
          <Card className="md:col-span-1" delay={0.6}>
            <div className="flex items-center gap-2 mb-4">
              <Cpu size={20} className="text-orange-400" />
              <h3 className="font-bold text-sm">Certs</h3>
            </div>
            <ul className="space-y-2">
              {portfolioData.certifications.map((cert, i) => (
                <li key={i} className="text-xs text-zinc-400 border-l-2 border-zinc-700 pl-2">
                  {cert}
                </li>
              ))}
            </ul>
          </Card>

        </div>

        {/* FOOTER */}
        <div className="pt-8 pb-4 text-center text-zinc-600 text-sm">
          <p>© {new Date().getFullYear()} {portfolioData.name}. Built with Next.js & Tailwind.</p>
        </div>

      </div>
    </div>
  );
}