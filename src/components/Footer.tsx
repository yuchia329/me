import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-auto py-12 glass relative z-10 bg-black/50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Yuchia. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/yuchia-chang-1b5058177" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
            <FaTwitter size={20} />
          </a>
          <a href="mailto:contact@yuchia.dev" className="text-muted-foreground hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
