"use client";

import { useState, useEffect } from 'react';

export default function AboutPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const technologies = [
    { name: 'JavaScript', color: 'from-yellow-400 to-yellow-600', icon: 'JS' },
    { name: 'TypeScript', color: 'from-blue-400 to-blue-600', icon: 'TS' },
    { name: 'React', color: 'from-cyan-400 to-cyan-600', icon: '⚛' },
    { name: 'Next.js', color: 'from-gray-700 to-black', icon: '▲' },
    { name: 'Node.js', color: 'from-green-500 to-green-700', icon: 'N' },
    { name: 'Solidity', color: 'from-purple-500 to-purple-700', icon: '◆' },
    { name: 'MongoDB', color: 'from-green-600 to-green-800', icon: 'M' },
    { name: 'SQL', color: 'from-orange-500 to-orange-700', icon: 'DB' },
    { name: 'Git', color: 'from-red-500 to-red-700', icon: 'G' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white overflow-hidden relative">
      <div
        className="absolute inset-0 opacity-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 80%)`
        }}
      />

      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
      }} />

      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block">
            <h1 className="text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 animate-pulse">
              Kartik
            </h1>
            <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" />
          </div>

          <div className="mt-8 space-y-1">
            <div className="flex items-center gap-3 text-purple-300">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-mono">Available for opportunities</span>
            </div>
          </div>
        </div>

        <div className={`mt-16 grid md:grid-cols-2 gap-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="space-y-6">
            <div className="group">
              <h2 className="text-3xl font-bold mb-6 text-purple-300 group-hover:text-purple-200 transition-colors">
                About Me
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="hover:text-white transition-colors">
                  I&apos;m a developer who loves turning ideas into real, working products. I don&apos;t just learn technologies, <span className="text-purple-400 font-semibold">I ship with them</span>.
                </p>
                <p className="hover:text-white transition-colors">
                  I work primarily as a <span className="text-cyan-400 font-semibold">Full-Stack Developer</span>, building web applications with modern tools and clean architecture.
                </p>
                <p className="hover:text-white transition-colors">
                  Recently, I&apos;ve been diving deeper into <span className="text-purple-400 font-semibold">Web3 and blockchain</span>, experimenting with smart contracts and on-chain logic.
                </p>
                <p className="hover:text-white transition-colors">
                  What sets me apart is <span className="text-pink-400 font-semibold">consistency</span> — showing up every day, building, breaking, and fixing things.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all">
              <p className="text-lg text-purple-200">
                🚀 I&apos;m actively building projects and looking for opportunities to create meaningful software.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-purple-300">
              Tech Stack
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={tech.name}
                  className={`group relative transform transition-all duration-500 hover:scale-110 hover:z-10 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className={`p-6 rounded-xl bg-gradient-to-br ${tech.color} shadow-lg group-hover:shadow-2xl transition-shadow cursor-pointer`}>
                    <div className="text-3xl font-bold mb-2 text-white/90">
                      {tech.icon}
                    </div>
                    <div className="text-sm font-semibold text-white">
                      {tech.name}
                    </div>
                  </div>

                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-50 blur-xl transition-opacity -z-10`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`mt-20 text-center transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:from-purple-500 hover:to-pink-500 transform hover:scale-105 transition-all shadow-lg hover:shadow-purple-500/50">
              View Projects
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-semibold hover:bg-white/20 transform hover:scale-105 transition-all border border-white/20">
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-pink-400 rounded-full animate-pulse" />
      <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
}