import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

import HERO_BG from "../../assets/portfolio/hero.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Abstract geometric art background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight">
            Max Westmoreland
            </h1>
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Computer Science Student | Aspiring Software Engineer
            </span>
          
          <p className="mt-8 text-white/50 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            I build full-stack, frontend, and interactive software projects focused on clean design and real functionality.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16"
        >
          <button
            onClick={() =>
              document
                .querySelector("#about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-white/30 hover:text-white/60 transition-colors duration-300"
          >
            <ArrowDown size={24} className="animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}