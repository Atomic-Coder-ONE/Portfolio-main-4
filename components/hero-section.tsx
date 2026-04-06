"use client"

import { ChevronDown } from "lucide-react"

interface HeroSectionProps {
  onScrollDown: () => void
}

export function HeroSection({ onScrollDown }: HeroSectionProps) {
  const skills = {
    Languages: ["Python", "C++", "Go", "C#"],
    Web: ["HTML", "CSS", "JavaScript", "React"],
    ML: ["NumPy", "Pandas", "scikit-learn"]
  }

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 drop-shadow-lg">
          Rishabh <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">Rajput</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-6 drop-shadow">
          Driven computer science student with strong problem-solving skills. Building projects in AI/ML and Web Development.
        </p>

        {/* Skills Section */}
        <div className="space-y-3 mb-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="flex flex-wrap items-center justify-center gap-2">
              <span className="text-sm font-semibold text-cyan-400">{category}</span>
              {items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 text-xs font-mono bg-pink-950/40 backdrop-blur-sm border border-cyan-500/30 rounded-md text-gray-200 hover:border-cyan-400 hover:bg-cyan-950/60 transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-8 mt-8">
          <div className="text-center backdrop-blur-sm bg-pink-950/30 px-6 py-3 rounded-lg border border-cyan-500/30 hover:border-cyan-400 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">1033</div>
            <div className="text-xs text-gray-300 font-mono">Codeforces</div>
          </div>
          <a
            href="https://codolio.com/profile/Rishabh6866"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center backdrop-blur-sm bg-cyan-950/30 px-6 py-3 rounded-lg border border-pink-500/30 hover:border-pink-400 transition-all hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]"
          >
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">150+</div>
            <div className="text-xs text-gray-300 font-mono">Codolio</div>
          </a>
        </div>
      </div>

      <button
        onClick={onScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors cursor-pointer group"
        aria-label="Scroll to projects"
      >
        <span className="text-sm font-medium">View Work</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  )
}
