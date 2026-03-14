import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setSending(true);

    try {
      const response = await fetch("https://formspree.io/f/mgonzjgz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        toast.success("Message sent successfully.");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Unable to send message right now.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-violet-400 leading-tight mb-6">
                Get In Touch
              </h2>
              <p className="text-white/40 leading-relaxed mb-10">
                I’m currently seeking software engineering opportunities and would be happy to connect about internships, entry-level roles, or technical projects. The best way to reach me is by email or LinkedIn.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Mail size={18} className="text-violet-400" />
                  </div>
                  <div>
                    <p className="text-white/30 text-xs uppercase tracking-wider">
                      Email
                    </p>
                    <p className="text-white/70 mt-0.5">mw.maxwestmoreland@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <MapPin size={18} className="text-violet-400" />
                  </div>
                  <div>
                    <p className="text-white/30 text-xs uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-white/70 mt-0.5">
                      Austin, Texas
                    </p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-4 mt-10">
                <a
                  href="https://github.com/MaxW125"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-white/30 hover:text-violet-400 transition-colors duration-300"
                >
                  GitHub
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href="https://www.linkedin.com/in/max-westmoreland-834570226"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-white/30 hover:text-violet-400 transition-colors duration-300"
                >
                  LinkedIn
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-white/30 hover:text-violet-400 transition-colors duration-300"
                >
                  Resume
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-white/30 text-xs uppercase tracking-wider block mb-2">
                    Name
                  </label>
                  <Input
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    placeholder="Your name"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-violet-400/50 h-12 rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-white/30 text-xs uppercase tracking-wider block mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="your@email.com"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-violet-400/50 h-12 rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-white/30 text-xs uppercase tracking-wider block mb-2">
                    Message
                  </label>
                  <Textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-violet-400/50 rounded-xl resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full h-12 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium transition-all duration-300"
                >
                  {sending ? (
                    "Sending..."
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message <Send size={16} />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}