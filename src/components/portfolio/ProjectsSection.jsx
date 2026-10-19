import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import PROJECT_1 from "../../assets/portfolio/project-1.png";
import PROJECT_2 from "../../assets/portfolio/project-2.png";
import PROJECT_3 from "../../assets/portfolio/project-3.png";

const projects = [
  {
    title: "Bobcat Plus",
    problem:
      "Signing up for classes at Texas State means going back and forth between DegreeWorks and Banner. You figure out what you still need, then hunt for open sections that don't overlap.",
    built:
      "A Chrome extension that does that for you and builds a schedule from what's actually open. We were a team of four. I wrote the first version of the background script that pulls your degree audit, searches Banner for sections, and checks prereqs. Later I sped up the analysis by running the prereq checks in parallel and caching course descriptions, and I fixed bugs where saved calendar blocks disappeared on refresh or carried over between plans.",
    result: "It's published on the Chrome Web Store for Texas State students.",
    tags: ["JavaScript", "Chrome Extension (MV3)", "OpenAI API", "Banner / DegreeWorks"],
    image: PROJECT_1,
    githubUrl: "https://github.com/BobcatPlus/BobcatPlus",
    liveUrl: "",
  },
  {
    title: "HosterWatch",
    problem:
      "A lot of site owners don't find out their domain is down or their cert expired until someone else tells them.",
    built:
      "A domain monitoring app that checks DNS, HTTPS, TLS cert expiry, and open ports on a schedule and emails you when something changes. When an incident opens, it asks Claude for a likely root cause so the alert tells you why, not just that it broke. Port scans only run after you prove you own the domain with a DNS TXT record.",
    result: "Built with a team of three as our senior capstone and presented to faculty.",
    tags: ["Node.js", "Express", "PostgreSQL", "React", "Claude API"],
    image: PROJECT_2,
    githubUrl: "https://github.com/Bluefrostbite8/capstone",
    liveUrl: "",
  },
  {
    title: "Zurg",
    problem:
      "I wanted to see if a team of AI agents could run a small print-on-demand store with me only approving things.",
    built:
      "A multi-agent system with separate agents for research, design, publishing, pricing, analytics, and support. The researcher picks a niche, the designer generates the art with Google Imagen, and once I approve it over WhatsApp the factory agent creates the product in Printify and lists it on Shopify and Etsy. The agents write nightly reports and I get a briefing every morning.",
    result: "It runs on its own schedule and has listed products on both stores without me touching them.",
    tags: ["Python", "FastAPI", "Claude API", "Google Imagen", "Shopify / Etsy APIs"],
    image: PROJECT_3,
    githubUrl: "https://github.com/MaxW125/zurg",
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
                <dl className="space-y-4 mb-6">
                  {[
                    ["Problem", project.problem],
                    ["Built", project.built],
                    ["Result", project.result],
                  ].map(([label, text]) => (
                    <div key={label}>
                      <dt className="text-white/30 text-xs uppercase tracking-wider mb-1">
                        {label}
                      </dt>
                      <dd className="text-white/50 leading-relaxed">{text}</dd>
                    </div>
                  ))}
                </dl>
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