"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "~/", path: "/" },
  { name: "~/about", path: "/about" },
  { name: "~/experience", path: "/experience" },
  { name: "~/projects", path: "/projects" },
  { name: "~/exhibition", path: "/exhibition" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-4 glass border-b-2 border-primary/20 backdrop-blur-md">
      <Link href="/" className="font-mono text-xl font-bold tracking-tighter flex items-center gap-2 group">
        <Terminal size={20} className="text-primary group-hover:animate-pulse" />
        yc<span className="text-primary animate-pulse">_</span>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-6">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`relative font-mono text-sm px-3 py-2 transition-colors ${
                isActive ? "text-primary font-bold" : "text-muted-foreground hover:text-white"
              }`}
            >
              {item.name}
              {isActive && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-b border-white/5 p-4 flex flex-col gap-2 md:hidden shadow-2xl bg-[#0d1117] backdrop-blur-xl"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`font-mono text-sm p-3 rounded-md transition-colors ${
                  pathname === item.path ? "bg-primary/10 text-primary font-bold" : "text-muted-foreground hover:bg-white/5"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
