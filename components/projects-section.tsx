"use client"

import { useRef, useEffect, useCallback, useState } from "react"
import { ProjectCard } from "./project-card"

const projects = [
  {
    id: 1,
    title: "DAM",
    description: "Neural Network Library",
    longDescription:
      "A lightweight neural network library built from scratch in Python and NumPy, designed as both an educational resource and a practical implementation of deep learning fundamentals. Features modular layers to support flexible model construction with numerical stability and efficiency through vectorized NumPy operations.",
    image: "/neural-network-deep-learning-visualization-dark-th.jpg",
    technologies: ["Python", "NumPy", "Git"],
    link: "https://github.com/rishabh6866/DAMAIN/tree/main/DAM-main",
    
  },
  {
    id: 2,
    title: "Face Recognition System",
    description: "Detects and identifies human faces in images or real-time video",
    longDescription:
      "A face recognition system built with OpenCV is a computer-vision setup that detects a human face in an image or video and then identifies whose face it is by comparing it with stored data",
    image: "/facerecog.jpg",
    technologies: ["OpenCV", "Python", "Machine Learning concepts", "Image processing techniques",],
    link: "https://github.com/rishabh6866/Face-Reco-Sysytem-main.git",
  },
  {
    id: 3,
    title: "Space Shooter ",
    description: "3D Game using Unity Engine",
    longDescription:
      "A 3D space shooter game built using the Unity engine. Features player movement, enemy AI, shooting mechanics, and particle effects.",
    image: "/spaceshooter.jpg",
    technologies: ["Unity", "C#", "Game Development"],
    link: "https://github.com/rishabh6866/Space-Shooter-main.git",
  },
  {
    id: 4,
    title: "Smart Dustbin Dashboard",
    description: "A smart waste management platform that monitors dustbin fill levels in real-time.",
    longDescription:
      "A smart waste management platform that monitors dustbin fill levels in real-time. Uses sensor data and user reports to detect when bins are full, allow complaints, and automatically assign workers and drivers for cleaning and maintenance.",
    image: "/smartdustbin.png",
    technologies: ["Next.js", "TypeScript", "IoT Sensors", "MongoDB", "Machine Learning"],
    link: "https://github.com/rishabh6866/SmartDustbinDashboard-main.git",
  },
]

interface ProjectsSectionProps {
  onComplete: () => void
  onGoBack: () => void
  isActive: boolean
  controlledIndex: number
  onIndexChange: (index: number) => void
}

export function ProjectsSection({
  onComplete,
  onGoBack,
  isActive,
  controlledIndex,
  onIndexChange,
}: ProjectsSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const lastScrollTime = useRef(0)

  const currentProject = controlledIndex

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (!isActive) return

      const now = Date.now()
      if (now - lastScrollTime.current < 800) return

      if (e.deltaY > 0) {
        if (currentProject < projects.length - 1) {
          e.preventDefault()
          e.stopPropagation()
          lastScrollTime.current = now
          onIndexChange(currentProject + 1)
        } else {
          e.preventDefault()
          e.stopPropagation()
          lastScrollTime.current = now
          onComplete()
        }
      } else {
        if (currentProject > 0) {
          e.preventDefault()
          e.stopPropagation()
          lastScrollTime.current = now
          onIndexChange(currentProject - 1)
        } else {
          e.preventDefault()
          e.stopPropagation()
          lastScrollTime.current = now
          onGoBack()
        }
      }
    },
    [currentProject, isActive, onComplete, onGoBack, onIndexChange],
  )

  useEffect(() => {
    const container = containerRef.current
    if (!container || !isActive) return

    container.addEventListener("wheel", handleWheel, { passive: false })
    return () => container.removeEventListener("wheel", handleWheel)
  }, [handleWheel, isActive])

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Transparent overlay so hyperspeed is visible */}
      <div className="absolute inset-0 bg-transparent"></div>

      <div className="relative z-10 h-full">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`absolute inset-0 transition-all duration-700 ease-out ${
              index === currentProject
                ? "opacity-100 translate-y-0"
                : index < currentProject
                  ? "opacity-0 -translate-y-full"
                  : "opacity-0 translate-y-full"
            }`}
          >
            <ProjectCard project={project} isActive={index === currentProject} />
          </div>
        ))}
      </div>

      {/* Project navigation dots - cyan themed */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => onIndexChange(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentProject 
                ? "bg-cyan-400 scale-150 shadow-[0_0_10px_rgba(6,182,212,0.5)]" 
                : "bg-cyan-500/30 hover:bg-cyan-400/50"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>

      {/* Project counter - cyan themed */}
      <div className="absolute bottom-8 left-8 z-20 font-mono text-sm">
        <span className="text-cyan-400 font-bold">{String(currentProject + 1).padStart(2, "0")}</span>
        <span className="mx-2 text-gray-500">/</span>
        <span className="text-gray-400">{String(projects.length).padStart(2, "0")}</span>
      </div>
    </section>
  )
}
