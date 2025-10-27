import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Code, Server, Lock, Cpu, Globe, Terminal } from 'lucide-react';

const skills = [
  { icon: <ShieldCheck className="h-5 w-5" />, label: 'Defensive Security' },
  { icon: <Code className="h-5 w-5" />, label: 'React / Next.js' },
  { icon: <Server className="h-5 w-5" />, label: 'Express.js (light)' },
  { icon: <Lock className="h-5 w-5" />, label: 'Auth & Best Practices' },
  { icon: <Cpu className="h-5 w-5" />, label: 'Performance' },
  { icon: <Globe className="h-5 w-5" />, label: 'Web Standards' },
  { icon: <Terminal className="h-5 w-5" />, label: 'SOC Tooling' },
];

const timeline = [
  {
    title: 'Cybersecurity Exploration — SOC & Blue Team',
    period: 'Present',
    detail: 'Hands-on learning in incident response, log analysis, and defensive strategy.',
  },
  {
    title: 'CEH v12 • CND v3',
    period: 'Certifications',
    detail: 'Ethical Hacking and Network Defense foundations with modern methodologies.',
  },
  {
    title: 'Frontend Engineering',
    period: 'Ongoing',
    detail: 'Designing sleek, animated, and accessible interfaces with React/Next.js.',
  },
  {
    title: 'Backend (Light) — Express.js',
    period: 'Project-ready',
    detail: 'Simple APIs, auth flows, and integrations to power frontends securely.',
  },
];

const About = () => {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">About</h2>
          <p className="mt-3 text-slate-300">
            I’m focused on building secure, performant, and delightful web experiences. My background blends
            blue-team mindset with product-driven frontend craftsmanship.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
            Validations: CEH v12 • CND v3
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4"
        >
          {skills.map((s, i) => (
            <div key={i} className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-slate-200 backdrop-blur transition hover:border-white/20 hover:bg-white/10">
              <span className="text-cyan-300">{s.icon}</span>
              <span>{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Compact Timeline */}
        <div className="mx-auto mt-14 max-w-4xl">
          <div className="relative pl-6">
            <div className="absolute left-2 top-0 h-full w-px bg-white/10" />
            {timeline.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="relative mb-8 rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur"
              >
                <div className="absolute -left-[7px] top-4 h-3 w-3 rounded-full border border-cyan-400/40 bg-cyan-400/50" />
                <div className="text-sm text-cyan-300">{t.period}</div>
                <div className="text-base font-semibold text-white">{t.title}</div>
                <p className="mt-1 text-sm text-slate-300">{t.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
