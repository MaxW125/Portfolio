import React from "react";
import { motion } from "framer-motion";

import ABOUT_IMG from "../../assets/portfolio/about.jpg";

const skillGroups = [
  {
    label: "Languages",
    skills: ["Python", "JavaScript", "Java", "SQL"],
  },
  {
    label: "Cloud",
    skills: ["AWS", "Docker", "GitHub Actions", "Linux", "PostgreSQL"],
  },
  {
    label: "AI",
    skills: ["Claude API", "OpenAI API", "Ollama", "Multi-agent systems"],
  },
  {
    label: "Security",
    skills: ["Kali Linux", "Network security basics", "Secrets management"],
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-violet-500/20 to-indigo-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={ABOUT_IMG}
                alt="Max standing above a river valley on a hike"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-violet-400 text-sm tracking-[0.2em] uppercase mb-4 font-medium">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
              Building software
              <br />
              from the ground up
            </h2>
            <p className="text-white/50 leading-relaxed mb-8">
              I graduated from Texas State in August 2026 with a B.S. in Computer Science and a minor
              in Business. Lately most of what I build has an AI piece to it. I've built a Chrome
              extension that plans your class schedule, a tool that watches domains and explains why
              they went down, and a set of agents that run an online store on their own. I like the
              backend side the most: getting the data right, wiring up the APIs, and making it all
              run without me watching it. Right now I'm studying for the AWS Solutions Architect
              exam and looking for my first full-time software engineering job.
            </p>

            {/* Skills */}
            <div className="space-y-5">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-white/30 text-xs uppercase tracking-wider mb-2">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 text-sm text-white/70 bg-white/5 border border-white/10 rounded-full hover:border-violet-400/40 hover:text-violet-300 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}