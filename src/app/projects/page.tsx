"use client";

import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const projects = [
  {
    title: "Yapper",
    desc: "An AI platform that turns any movie or video clip into a punchy funny-commentary track (短片解說 style) — condensed footage plays under an AI voiceover that retells and riffs on the story. A 12-stage resumable pipeline runs ASR, scene detection, multimodal LLM scripting, and voice-cloned TTS, orchestrated across GPU/CPU queues.",
    img: "/assets/yapper.png",
    tech: [
      "FastAPI",
      "Celery",
      "Kubernetes",
      "gRPC",
      "WhisperX",
      "CosyVoice2",
      "Terraform",
      "Grafana",
    ],
    github: "https://github.com/yuchia329/yapper",
    live: "https://yapper.yuchia.dev/",
  },
  {
    title: "HubStream",
    desc: "A globally distributed WebRTC Selective Forwarding Unit (SFU) platform for scalable video conferencing. Features real-time mesh routing and low-latency streaming.",
    img: "/assets/hubstream.webp",
    tech: [
      "Mediasoup",
      "WebRTC",
      "Next.js",
      "Node.js",
      "Docker",
      "Terraform",
      "AWS",
    ],
    github: "https://github.com/yuchia329/hubstream",
    live: "https://hubstream.yuchia.dev/",
  },
  {
    title: "K8S Observability Platform",
    desc: "Built a comprehensive monitoring stack for a WebRTC application, implementing metrics collection, visualization, and alerting to ensure high availability and performance.",
    img: "/assets/monitoring-stack.webp",
    tech: [
      "Pormetheus",
      "Grafana",
      "Loki",
      "Promtail",
      "Kubernetes",
      "Helm",
      "Linux",
      "Node.js",
    ],
    github: "https://github.com/yuchia329/k8s-scaler-dashboard",
    live: "https://grafana.yuchia.dev/d/hubstream-webrtc-01/hubstream-webrtc-dashboard?orgId=1&from=now-1d&to=now&timezone=browser&var-kind=$__all&refresh=30s",
  },
  {
    title: "LLM4Subjects",
    desc: "Fine-tuned LLMs for the SemEval'25 extreme multi-label classification challenge. Engineered solutions to predict over 200,000 document tags for bilingual (English & German) library literature across an 80k-record dataset.",
    img: "/assets/llm4subjects.jpg",
    tech: [
      "PyTorch",
      "Transformers",
      "Llama3",
      "BERT",
      "RoBERTa",
      "Scikit-Learn",
      "DeepSpeed",
    ],
    github: "https://github.com/yuchia329/llms4subjects",
    live: "#",
  },
  {
    title: "Video Semantic Search",
    desc: "An end-to-end distributed system for querying video content using natural language. Features a Go backend, Next.js frontend, and Python ML infrastructure with Whisper and Qwen3-VL.",
    img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop",
    tech: [
      "Go",
      "Next.js",
      "Python",
      "Whisper",
      "Qwen3-VL",
      "PostgreSQL",
      "Kafka",
    ],
    github: "https://github.com/yuchia329/video_semantic_search",
    live: "https://vss.yuchia.dev",
  },
  {
    title: "UCSC RAG",
    desc: "A RAG chat system for UCSC public inaccessible course materials.",
    img: "/assets/ucsc_rag.png",
    tech: ["LangChain", "ChromaDB", "FastAPI", "PyTorch", "Gemini"],
    github: "https://github.com/yuchia329/UCSC_RAG",
    live: "#",
  },
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-16">
          Selected <span className="text-muted-foreground">Projects</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const mainLink =
              project.live !== "#" ? project.live : project.github;
            const isClickable = mainLink !== "#";
            const isGithubLink = project.live === "#" && project.github !== "#";

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.2 }}
                className="group glass rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col"
              >
                {isClickable ? (
                  <Link
                    href={mainLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block focus:outline-none cursor-pointer group/link relative z-10"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 transition-opacity duration-300 group-hover/link:opacity-80" />
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/link:scale-110"
                      />
                      <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover/link:opacity-100 transition-all duration-300 bg-black/40 backdrop-blur-[2px]">
                        <div className="bg-primary text-black px-4 py-2 rounded-full flex items-center gap-2 font-bold transform translate-y-4 group-hover/link:translate-y-0 shadow-[0_0_20px_rgba(251,146,60,0.4)] transition-transform duration-300">
                          {isGithubLink ? (
                            <>
                              <FaGithub size={18} />{" "}
                              <span className="text-sm">Visit Github</span>
                            </>
                          ) : (
                            <>
                              <ExternalLink size={18} />{" "}
                              <span className="text-sm">Visit Project</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="block h-48 overflow-hidden relative z-10">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                <div className="px-6 pt-6 relative z-20 -mt-12 pointer-events-none">
                  <h3 className="text-2xl font-bold text-white mb-3 pointer-events-auto">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 line-clamp-6 pointer-events-auto">
                    {project.desc}
                  </p>
                </div>

                <div className="px-6 pb-6 relative z-20 flex-grow flex flex-col justify-end">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <Link
                      href={project.github}
                      className="text-muted-foreground hover:text-white transition-colors flex items-center gap-2 text-sm"
                    >
                      <FaGithub size={18} />
                      Code
                    </Link>
                    {project.live !== "#" && (
                      <Link
                        href={project.live}
                        className="text-muted-foreground hover:text-white transition-colors flex items-center gap-2 text-sm"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
