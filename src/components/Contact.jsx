import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, FileText } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Let’s connect</h2>
          <p className="mt-3 text-slate-300">
            Open to internships, collaborations, and security-focused frontend work.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:hello@securegarv.me"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2.5 font-medium text-slate-900 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400 hover:shadow-cyan-400/30"
            >
              <Mail className="h-5 w-5" /> Email Me
            </a>
            <a
              href="https://github.com/" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 font-medium text-white/90 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
            >
              <Github className="h-5 w-5" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 font-medium text-white/90 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
            >
              <Linkedin className="h-5 w-5" /> LinkedIn
            </a>
            <a
              href="#" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 font-medium text-white/90 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
            >
              <FileText className="h-5 w-5" /> Resume
            </a>
          </div>
        </motion.div>

        <div className="mt-14 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Garv • Security x Frontend
        </div>
      </div>
    </section>
  );
};

export default Contact;
