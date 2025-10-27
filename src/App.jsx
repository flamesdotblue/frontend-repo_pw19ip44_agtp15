import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Shield, LayoutGrid, User2, Blocks, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top navigation */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="inline-flex items-center gap-2 font-semibold">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-cyan-500/10 text-cyan-300">
              <Shield className="h-4 w-4" />
            </span>
            SecureGarv
          </a>
          <div className="hidden items-center gap-1 sm:flex">
            <a href="#about" className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/5">
              <User2 className="h-4 w-4" /> About
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/5">
              <Blocks className="h-4 w-4" /> Projects
            </a>
            <a href="#blogs" className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/5">
              <LayoutGrid className="h-4 w-4" /> Blogs
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/5">
              <Mail className="h-4 w-4" /> Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
