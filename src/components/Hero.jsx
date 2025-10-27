import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, Sparkles } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Decorative gradient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 md:flex-row md:gap-8 md:py-24">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="z-10 w-full md:w-[52%]"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-300 backdrop-blur">
            <Shield size={14} />
            Cybersecurity Fresher • CEH v12, CND v3
          </div>

          <h1 className="text-balance font-bold tracking-tight text-white">
            <span className="text-4xl sm:text-5xl md:text-6xl">Secure by design.</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-4xl sm:text-5xl md:text-6xl text-transparent">
              Building sleek web experiences.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-sm/6 text-slate-300 sm:text-base/7">
            I’m Garv — exploring SOC and defensive security while crafting modern, animated, and accessible frontends.
            I also ship light backends with Express.js when projects need it.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2.5 font-medium text-slate-900 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400 hover:shadow-cyan-400/30"
            >
              Explore Projects
              <ArrowRight size={18} />
            </a>
            <a
              href="https://www.securegarv.me/" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 font-medium text-white/90 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
            >
              Current Portfolio
            </a>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <Sparkles size={14} /> Real-time 3D hero
            </span>
          </div>
        </motion.div>

        {/* Right 3D scene */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative z-10 w-full md:w-[48%]"
        >
          <div className="h-[360px] w-full rounded-xl border border-white/10 bg-black/30 shadow-inner md:h-[520px]">
            <Spline
              scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
