import React from "react";
import { motion } from "framer-motion";
import { Award, ArrowUpRight } from "lucide-react";

// The section and its navbar link stay hidden while this list is empty.
// Fill in date (e.g. "Nov 2026") and url (Credly badge link) when you have them.
export const certs = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "",
    url: "",
  },
];

export default function CertsSection() {
  if (certs.length === 0) return null;

  return (
    <section id="certs" className="py-32 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-violet-400 text-sm tracking-[0.2em] uppercase mb-4 font-medium">
            Credentials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Certifications
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {certs.map((cert) => (
            <div
              key={cert.name}
              className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-400/40 transition-colors duration-300"
            >
              <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-violet-500/10 border border-violet-400/20 flex items-center justify-center">
                <Award size={18} className="text-violet-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold leading-snug">
                  {cert.name}
                </h3>
                <p className="text-white/40 text-sm mt-1">
                  {cert.issuer}
                  {cert.date && ` · ${cert.date}`}
                </p>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-sm text-white/40 hover:text-violet-400 transition-colors duration-300"
                  >
                    Verify
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
