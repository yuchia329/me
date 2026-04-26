"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "PyTorch Teaching Assistant",
    company: "University of California, Santa Cruz",
    period: "Nov 2024 - Jun 2025",
    location: "Santa Clara, CA",
    desc: [
      "Led workshops on PyTorch, Numpy, Transformers, RNN, LSTMs, and optimization techniques for deep learning",
      "Guided discussion sessions on DeepSeek-V3 and LLM optimization, bridging ML theory and engineering practice",
    ],
    tech: ["PyTorch", "Python", "DeepSpeed", "Pandas", "Numpy", "Quantization", "LoRA", "Slurm", "MLA", "KV Cache"]
  },
  {
    role: "Senior Software Engineer, Blockchain NFT",
    company: "ASUS",
    period: "Feb 2022 - Sep 2024",
    location: "Taipei, Taiwan",
    desc: [
      "Engineered ElasticSearch indexing architectures, configuring n-gram tokenization and tuning field-level search weights (titles, descriptions) to optimize search relevancy across varied entity types (users, collections, NFTs)",
      "Optimized Redis caching layers and search infrastructure, achieving a 70% latency reduction and ensuring high-throughput data retrieval for downstream applications",
      "Built high-traffic serverless APIs using AWS Lambda, API Gateway & DynamoDB, and designed scalable cloud infrastructure using Docker and Terraform",
      "Accelerated release cycles by replacing manual component validation with a custom CI/CD pipeline on on-premise GitLab, incorporating unit testing, RBAC, and blue-green deployments to mitigate P0 risks",
      "Spearheaded cross-functional risk assessments to identify and mitigate exploitation vulnerabilities in 3rd-party APIs"
    ],
    tech: ["Node.js", "TypeScript", "Solidity", "Python", "ethers.js", "ElasticSearch", "Redis", "RDBMS", "Message Queue", "Docker", "AWS", "Terraform", "Gitlab", "Linux", "Ethereum"]
  },
  {
    role: "Software Engineer",
    company: "EZTABLE (A leading Asian restaurant reservation platform)",
    period: "Jul 2020 - Feb 2022",
    location: "Taipei, Taiwan",
    desc: [
      "Designed and executed 10+ A/B testing experiments targeting user behavior (e.g., default booking dates), utilizing Google Analytics and Algolia ranking systems; identified 4 successful variants that drove a 5% increase in overall conversion rate",
      "Designed scalable RESTful APIs using Hapi.js and PostgreSQL, integrating OpenAPI (Swagger) specifications to standardize documentation and ensure seamless consumption by frontend clients",
      "Refactored a legacy PHP monolith to a Node.JS microservice architecture, improving reliability and deployment speed",
      "Centralized full-stack monitoring for 8 servers by implementing Datadog log-forwarding and tracing; engineered custom dashboards to track API errors and traffic, reducing incident triage time by 80%",
      "Spearheaded the rescue of a critical 4,000-line legacy service, eliminating 1 hour of daily downtime by restructuring database fetches and implementing safe rollback deployments"
    ],
    tech: ["Node.js", "Hapi.js", "React.js", "Python", "Golang", "PostgreSQL", "PHP", "Kubernetes", "Firebase", "Nginx", "Airflow", "Jenkins", "Datadog", "Algolia", "Google Analytics"]
  },
  {
    role: "Data Analyst",
    company: "Dell Technologies",
    period: "Sep 2019 - Mar 2020",
    location: "Taipei, Taiwan",
    desc: [
      "Engineered scripts to automate the extraction, consolidation, and transformation of weekly sales data from disparate internal databases, effectively eliminating manual toil and accelerating the reporting cycle",
      "Implemented cross-validation logic to reconcile individual component sales with parent-model metrics, ensuring high data reliability for downstream business analytics",
      "Analyzed complex procurement datasets, evaluating component performance metrics (such as attach rates and historical sales volume) against defined thresholds to identify unprofitable hardware",
      "Partnered cross-functionally with various teams to present findings on anomalous or questionable data, successfully driving data-backed proposals for the early retirement of inefficient computer parts",
      "Consolidated raw team data into comprehensive tracking workflows, surfacing key variances and trends to guide executive decision-making around hardware complexity"
    ],
    tech: ["Microsoft Excel", "Microsoft Power BI", "Microsoft PowerPoint", "VBA"]
  }
];

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-16">Experience</h1>

        <div className="relative border-l border-white/10 pl-8 ml-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 + 0.2 }}
              className="mb-12 relative"
            >
              <div className="absolute -left-[41px] top-1 p-2 bg-black border border-white/20 rounded-full text-white">
                <Briefcase size={16} />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
                <span className="flex items-center gap-2 text-sm text-muted-foreground mt-2 sm:mt-0">
                  <Calendar size={14} />
                  {exp.period}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <h4 className="text-lg text-primary/80">{exp.company}</h4>
                <span className="flex items-center gap-2 text-sm text-muted-foreground mt-1 sm:mt-0">
                  <MapPin size={14} />
                  {exp.location}
                </span>
              </div>
              <ul className="list-disc list-outside ml-5 text-muted-foreground leading-relaxed mb-4 space-y-2">
                {exp.desc.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map(t => (
                  <span key={t} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
