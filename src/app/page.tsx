"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, MapPin, Mail, Briefcase, Terminal } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Data
const recentNews = [
  { date: "Mar 2026", text: "Rebuilt my WebRTC side project HubStream integrated with SFU feature with Coding Agent's help." },
  { date: "Dec 2025", text: "Graduated Master's in NLP at UC Santa Cruz." },
  { date: "Sep 2024", text: "Started Master's in NLP at UC Santa Cruz." },
  { date: "Sep 2024", text: "Finished my tenure as a Senior Software Engineer at ASUS." },
];

const featuredProjects = [
  {
    title: "HubStream",
    desc: "A globally distributed WebRTC Selective Forwarding Unit (SFU) platform for scalable video conferencing.",
    link: "https://hubstream.yuchia.dev/",
  },
  {
    title: "K8S Observability Platform",
    desc: "Built a comprehensive monitoring stack for a WebRTC application, implementing metrics collection, visualization, and alerting to ensure high availability and performance.",
    link: "https://grafana.yuchia.dev/d/hubstream-webrtc-01/hubstream-webrtc-dashboard?orgId=1&from=now-1d&to=now&timezone=browser&var-kind=$__all&refresh=30s",
  },
  // {
  //   title: "LLM4Subjects",
  //   desc: "Fine-tuned LLMs for the SemEval'25 extreme multi-label classification challenge. Engineered solutions to predict over 200,000 document tags for bilingual (English & German) library literature across an 80k-record dataset.",
  //   link: "https://github.com/yuchia329/llms4subjects",
  // }
];

export default function Home() {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero Banner */}
      <div className="relative h-48 md:h-64 w-full bg-muted border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-16 md:-mt-24 relative z-10 w-full">
        {/* Profile Info */}
        <div className="flex flex-col md:flex-row md:items-end gap-6 mb-12">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-background overflow-hidden bg-muted relative shrink-0"
          >
            {/* The user's uploaded profile picture is placed here */}
            <img src="/assets/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
          </motion.div>

          <div className="pb-2">
            <h1 className="text-4xl md:text-5xl font-mono font-bold tracking-tight mb-2">Yuchia Chang</h1>
            <p className="text-xl text-primary font-mono mb-3">Software & Machine Learning Engineer</p>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-1 text-sm"><MapPin size={16} /> San Jose, CA</span>
              <div className="flex items-center gap-3 md:ml-2">
                <a href="https://github.com/yuchia329" className="hover:text-primary transition-colors"><FaGithub size={18} /></a>
                <a href="https://www.linkedin.com/in/yuchia-chang-1b5058177" className="hover:text-primary transition-colors"><FaLinkedin size={18} /></a>
                <a href="mailto:yuchia.chang@outlook.com" className="hover:text-primary transition-colors"><Mail size={18} /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Column */}
          <div className="col-span-1 lg:col-span-2 space-y-12">

            {/* Bio Terminal */}
            <section>
              <h2 className="terminal-prompt text-2xl font-bold mb-4 inline-block">whoami</h2>
              <div className="glass p-6 rounded-lg font-mono text-sm md:text-base leading-relaxed text-muted-foreground shadow-lg border-l-4 border-l-primary">
                <p className="mb-4">
                  <span className="text-primary">const</span> <span className="text-white">engineer</span> = {"{"}
                </p>
                <div className="pl-4 border-l border-border/50 ml-2">
                  <p className="mb-2"><span className="text-[#60a5fa] font-semibold">focus</span>: <span className="text-[#a7f3d0]">"Applied AI, ML Optimization, & Scalable Frameworks"</span>,</p>
                  <p className="mb-2"><span className="text-[#60a5fa] font-semibold">hobbies</span>: [<span className="text-[#a7f3d0]">"Interactive 3D"</span>, <span className="text-[#a7f3d0]">"Realtime Communication"</span>, <span className="text-[#a7f3d0]">"System Architecture"</span>],</p>
                  <p className="mb-0 text-[#9ca3af]">// Currently reverse-engineering how deep learning scaling works.</p>
                </div>
                <p className="mt-4">{"}"};</p>
              </div>
            </section>

            {/* Featured Projects */}
            <section>
              <h2 className="terminal-prompt text-2xl font-bold mb-4 inline-block">ls ./projects</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {featuredProjects.map((proj, i) => (
                  <Link href={proj.link} key={i} className="group" target={proj.link.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                    <div className="glass p-5 rounded-lg border border-border group-hover:border-primary/50 transition-colors h-full">
                      <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors mb-2 flex items-center gap-2">
                        <Code2 size={18} />
                        {proj.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3 font-sans">{proj.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <Link href="/projects" className="inline-flex items-center gap-2 text-primary font-mono text-sm mt-4 hover:underline group">
                View all projects <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </section>

            <section>
              <h2 className="terminal-prompt text-2xl font-bold mb-4 inline-block">cd ./exhibition</h2>
              <div className="glass p-6 rounded-lg border border-border flex flex-col md:flex-row items-center gap-6 justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Interactive WebGL Space</h3>
                  <p className="text-sm text-muted-foreground font-sans max-w-sm">A lightweight React Three Fiber demonstration showcasing 3D WebGL integration within Next.js contexts.</p>
                </div>
                <Link href="/exhibition" className="shrink-0 w-full md:w-auto">
                  <button className="w-full px-6 py-3 bg-primary text-black font-bold font-mono rounded hover:bg-orange-400 transition-colors">Enter Room</button>
                </Link>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="col-span-1 space-y-8">
            <section className="glass p-6 rounded-lg border border-border">
              <h2 className="text-lg font-mono font-bold text-white border-b border-border pb-2 mb-4 flex items-center gap-2">
                <Terminal size={18} className="text-primary" /> News_
              </h2>
              <ul className="space-y-6 relative before:content-[''] before:absolute before:left-[5px] before:top-2 before:bottom-2 before:w-[2px] before:bg-border">
                {recentNews.map((news, i) => (
                  <li key={i} className="text-sm relative pl-6">
                    <span className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
                    <span className="block text-primary font-mono mb-1">{news.date}</span>
                    <span className="text-muted-foreground font-sans">{news.text}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
