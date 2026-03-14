import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import PROJECT_1 from "../../assets/portfolio/project-1.png";
import PROJECT_2 from "../../assets/portfolio/project-2.png";
import PROJECT_3 from "../../assets/portfolio/project-3.png";

const projects = [
  {
    title: "Inventory Tracker",
    description:
      "Full-stack inventory tracking application built to manage products and data reliably from end to end. Designed with REST APIs, CRUD functionality, and a normalized relational database schema to support data integrity and performance.",
    tags: ["Python", "SQL", "REST APIs", "CRUD", "Database Design"],
    image: PROJECT_1,
    githubUrl: "https://github.com/MaxW125/mountory-inventory",
    liveUrl: "",
  },
  {
    title: "Interactive Chess Engine",
    description:
      "Desktop-based chess game built in Java using object-oriented programming to manage game state and piece behavior. Implemented move validation for check, checkmate, stalemate, and castling, while improving runtime performance through move-generation optimization.",
    tags: ["Java", "Game Logic", "HTML/CSS", "Algorithms"],
    image: PROJECT_2,
    githubUrl: "https://github.com/MaxW125/ChessChamps",
    liveUrl: "",
  },
  {
    title: "More Projects Coming Soon",
    description:
      "I’m actively working on expanding this portfolio with additional software engineering projects. Future work will focus on backend development, databases, APIs, and practical full-stack applications.",
    tags: [],
    image: PROJECT_3,
    githubUrl: "",
    liveUrl: "",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-violet-400 text-sm tracking-[0.2em] uppercase mb-4 font-medium">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Featured Projects
          </h2>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                i % 2 !== 0 ? "md:direction-rtl" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`group relative ${i % 2 !== 0 ? "md:order-2" : ""}`}
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative overflow-hidden rounded-2xl border border-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Info */}
              <div className={i % 2 !== 0 ? "md:order-1" : ""}>
                <span className="text-violet-400/60 text-sm font-mono">
                  0{i + 1}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-4">
                  {project.title}
                </h3>
                <p className="text-white/50 leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs text-white/50 bg-white/5 rounded-full border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-white/60 hover:text-violet-400 transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      View Project
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-white/60 hover:text-violet-400 transition-colors duration-300"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}