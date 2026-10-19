import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Personal Shopper",
    company: "H-E-B",
    period: "2023 – Present",
    description:
      "Used internal inventory and order management systems in a fast-paced environment, collaborated across teams to resolve operational issues in real time, and maintained high accuracy while adapting to workflow bottlenecks during peak periods.",
  },
  {
    role: "Attractions Cast Member",
    company: "Disney College Program",
    period: "Jan 2023 – Jun 2023",
    description:
      "Operated complex systems in a highly regulated environment, followed strict procedures and safety standards, and coordinated with multiple groups to resolve live operational issues with minimal disruption.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-32 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-violet-400 text-sm tracking-[0.2em] uppercase mb-4 font-medium">
            Career
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] md:left-[23px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/40 via-white/10 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 md:gap-8 group"
              >
                {/* Dot */}
                <div className="relative flex-shrink-0 mt-1.5">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-violet-400/40 group-hover:bg-violet-500/10 transition-all duration-500">
                    <Briefcase
                      size={16}
                      className="text-white/40 group-hover:text-violet-400 transition-colors duration-500"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="pb-2">
                  <p className="text-white/30 text-sm font-mono mb-1">
                    {exp.period}
                  </p>
                  <h3 className="text-xl font-semibold text-white">
                    {exp.role}
                  </h3>
                  <p className="text-violet-400/70 text-sm mt-0.5 mb-3">
                    {exp.company}
                  </p>
                  <p className="text-white/40 leading-relaxed text-sm">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}