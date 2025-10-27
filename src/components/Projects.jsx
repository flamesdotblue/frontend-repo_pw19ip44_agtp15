import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Shield, Code2, BookText } from 'lucide-react';

const projects = [
  {
    title: 'Secure Web App UI Kit',
    tag: 'Frontend • Security-first',
    description:
      'A modular component system with access controls, audit-friendly patterns, and animated interactions.',
    link: '#',
    icon: <Shield className="h-5 w-5 text-cyan-400" />,
  },
  {
    title: 'Mini SOC Dashboard',
    tag: 'Visualization',
    description:
      'Lightweight dashboard concept to visualize alerts, events, and response workflows.',
    link: '#',
    icon: <Code2 className="h-5 w-5 text-indigo-400" />,
  },
];

const blogs = [
  {
    title: 'Hardening Frontend: Practical Tips',
    description: 'Headers, CSP, safe state, and patterns that actually help.',
    link: '#',
  },
  {
    title: 'From Logs to Insight: Blue Team Basics',
    description: 'Thought process when triaging incidents and investigating anomalies.',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Projects</h2>
          <p className="mt-3 text-slate-300">Selected builds that balance usability, performance, and security.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href={p.link}
              target={p.link.startsWith('http') ? '_blank' : undefined}
              rel={p.link.startsWith('http') ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group block rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                {p.icon}
                <div className="text-lg font-semibold">{p.title}</div>
              </div>
              <div className="mt-1 text-xs text-cyan-300">{p.tag}</div>
              <p className="mt-2 text-sm text-slate-300">{p.description}</p>
              <div className="mt-3 inline-flex items-center gap-1 text-sm text-cyan-300">
                View details <ExternalLink className="h-4 w-4" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Blogs */}
        <div id="blogs" className="mx-auto mt-16 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <BookText className="h-4 w-4 text-amber-300" /> Latest Writing
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {blogs.map((b, i) => (
              <motion.a
                key={i}
                href={b.link}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group rounded-lg border border-white/10 bg-white/5 p-4 text-left backdrop-blur transition hover:border-white/20 hover:bg-white/10"
              >
                <div className="font-medium text-white group-hover:text-amber-200">{b.title}</div>
                <p className="mt-1 text-sm text-slate-300">{b.description}</p>
                <div className="mt-2 inline-flex items-center gap-1 text-xs text-amber-300">
                  Read <ExternalLink className="h-3 w-3" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
