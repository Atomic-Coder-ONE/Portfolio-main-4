"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { useEffect, useRef } from "react"

export function ContactSection() {

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background is handled globally by Hyperspeed in page.tsx */}

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          {"Let's Work "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">Together</span>
        </h2>
        <p className="text-lg text-gray-200 mb-12 max-w-xl mx-auto drop-shadow">
          {
            "I'm currently pursuing my B.Tech in Computer Science at Sharda University. Open to collaborations, internships, and exciting projects in AI/ML, Graphics Programming, or Backend Development."
          }
        </p>

        <a
          href="mailto:rajput072008@gmail.com"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-medium hover:from-pink-400 hover:to-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] mb-12"
        >
          <Mail className="w-5 h-5" />
          Get in Touch
        </a>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/rishabh6866"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-cyan-950/50 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/70 hover:border-cyan-400 transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/rishabh6866/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-pink-950/50 backdrop-blur-sm border border-pink-500/30 text-pink-400 hover:text-pink-300 hover:bg-pink-950/70 hover:border-pink-400 transition-all hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        <p className="mt-16 text-sm text-gray-400/60 font-mono">© 2026 Rishabh Rajput </p>
      </div>
    </section>
  )
}
