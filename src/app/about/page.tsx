"use client";

import { motion } from "framer-motion";
import { Server, Zap, Brain, AppWindow, GraduationCap } from "lucide-react";

const skills = [
  { name: "Backend", icon: <Server size={24} />, desc: "Python, FastAPI, Node.js, Express, WebRTC, WebSockets, REST APIs" },
  { name: "Infrastructure", icon: <Zap size={24} />, desc: "AWS (EC2, S3, Lambda, auto-scaling, load balancing), Terraform, Docker, CI/CD, PostgreSQL, Redis, MongoDB, Linux" },
  { name: "Machine Learning", icon: <Brain size={24} />, desc: "Agentic AI, LangChain, AutoGen, RAG, PyTorch, Transformers, DeepSpeed, Slurm, Scikit-learn, Fine-tuning LLMs, Quantization" },
  { name: "Frontend", icon: <AppWindow size={24} />, desc: "React, Next.js, Flutter, Three.js" },
];

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About <span className="text-muted-foreground">Me</span></h1>

        <div className="prose prose-invert max-w-none text-lg text-muted-foreground leading-relaxed mb-16">
          <p className="mb-6">
            I’m a software engineer with over four years of experience building secure, large-scale backend systems. My core stack includes AWS, Node.js, and Python. As an AWS Certified Solutions Architect, I spend a lot of my time focused on the critical mechanics of a system: keeping uptime high, tracking down latency bottlenecks, and using Terraform so deployments are actually painless.
          </p>
          <p>
            Recently, I’ve been heavily focused on machine learning engineering. I'm taking my background in robust infrastructure and applying it to fine-tuning LLMs, optimizing GPU workloads, and building AI-driven applications. Ultimately, I enjoy the challenge of taking complex architectures and making them run smoothly and reliably in production.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-8">Education</h2>
        <div className="flex flex-col gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass p-6 rounded-2xl flex items-start gap-4 hover:border-white/20 transition-all"
          >
            <div className="p-3 bg-white/5 rounded-full text-white shrink-0">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Master of Science in Natural Language Processing</h3>
              <p className="text-primary/80 mb-2 flex flex-wrap items-center gap-2">
                <span>University of California, Santa Cruz</span>
                <span className="text-white/30 hidden sm:inline">•</span>
                <span className="text-white/80 font-mono text-sm bg-white/5 px-2 py-0.5 rounded border border-white/10">GPA: 3.85/4.0</span>
              </p>
              <p className="text-muted-foreground text-sm">Relevant Coursework: Deep Learning, Machine Learning, Conversational Agents.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass p-6 rounded-2xl flex items-start gap-4 hover:border-white/20 transition-all"
          >
            <div className="p-3 bg-white/5 rounded-full text-white shrink-0">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Bachelor of Science in Mathematics</h3>
              <p className="text-primary/80 mb-2 flex flex-wrap items-center gap-2">
                <span>University of South Dakota</span>
                <span className="text-white/30 hidden sm:inline">•</span>
                <span className="text-white/80 font-mono text-sm bg-white/5 px-2 py-0.5 rounded border border-white/10">GPA: 3.4/4.0</span>
              </p>
              <p className="text-muted-foreground text-sm">Relevant Coursework: Linear Algebra, Abstract Algebra, Real Analysis, Numerical Analysis, Advanced Calculus.</p>
            </div>
          </motion.div>
        </div>

        <h2 className="text-2xl font-semibold mb-8">Core Competencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors"
            >
              <div className="text-white mb-4">{skill.icon}</div>
              <h3 className="text-xl font-medium text-white mb-2">{skill.name}</h3>
              <p className="text-muted-foreground">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
