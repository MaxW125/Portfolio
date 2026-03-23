import React from "react";
import { motion } from "framer-motion";

import ABOUT_IMG from "../../assets/portfolio/about.JPG";

const skills = [
  "Python",
  "React",
  "Java",
  "SQL",
  "REST APIs",
  "Database Design",
  "CRUD",
  "Git/GitHub",
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
                alt="Creative workspace"
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
              I’m a Computer Science student at Texas State University graduating in Summer 2026, 
              focused on backend development, databases, and practical software engineering. 
              I enjoy building systems from the ground up, including database design, API development, 
              and reliable application logic. My projects have given me hands-on experience with Python, 
              Java, SQL, REST APIs, CRUD operations, and object-oriented programming, and I’m looking 
              for an opportunity to continue growing as a software engineer.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm text-white/70 bg-white/5 border border-white/10 rounded-full hover:border-violet-400/40 hover:text-violet-300 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}