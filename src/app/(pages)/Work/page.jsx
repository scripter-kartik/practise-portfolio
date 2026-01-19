"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Work() {
  const [hoveredId, setHoveredId] = useState(null);

  const projects = [
    {
      id: 1,
      title: "DeFi Trading Platform",
      category: "Web3 • Blockchain",
      description: "A decentralized exchange built with Solidity and React. Features automated market making, liquidity pools, and real-time price feeds.",
      tech: ["Solidity", "React", "Ethers.js", "Hardhat"],
      year: "2024",
      featured: true
    },
    {
      id: 2,
      title: "SaaS Analytics Dashboard",
      category: "Full-Stack • SaaS",
      description: "Real-time analytics platform for tracking user behavior and business metrics. Built with Next.js and serverless architecture.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Vercel"],
      year: "2024",
      featured: true
    },
    {
      id: 3,
      title: "AI Content Generator",
      category: "AI • Web App",
      description: "Content creation tool powered by AI. Generates blog posts, social media content, and marketing copy with custom templates.",
      tech: ["React", "Node.js", "OpenAI", "MongoDB"],
      year: "2023",
      featured: false
    },
    {
      id: 4,
      title: "NFT Marketplace",
      category: "Web3 • E-commerce",
      description: "Full-featured NFT marketplace with minting, trading, and auction capabilities. Supports multiple blockchain networks.",
      tech: ["Solidity", "Next.js", "IPFS", "Polygon"],
      year: "2023",
      featured: true
    },
    {
      id: 5,
      title: "Task Management System",
      category: "Full-Stack • Productivity",
      description: "Collaborative project management tool with real-time updates, team chat, and advanced filtering capabilities.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      year: "2023",
      featured: false
    },
    {
      id: 6,
      title: "E-learning Platform",
      category: "EdTech • Full-Stack",
      description: "Online learning platform with video courses, interactive quizzes, progress tracking, and certification system.",
      tech: ["Next.js", "PostgreSQL", "AWS S3", "Stripe"],
      year: "2022",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        delay: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
        delay: 0.4
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" 
      />
      
      <motion.nav 
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className="relative border-b border-gray-900"
      >
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/" className="text-xl font-bold text-white hover:text-gray-400 transition-colors">
                K.
              </Link>
            </motion.div>
            <div className="flex gap-8">
              {[
                { href: "/", label: "Home", active: false },
                { href: "/About", label: "About", active: false },
                { href: "/Work", label: "Work", active: true },
                { href: "/Contact", label: "Contact", active: false }
              ].map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ y: -3 }}
                >
                  <Link href={link.href} className={link.active ? "text-white" : "text-gray-400 hover:text-white transition-colors"}>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      <div className="relative max-w-6xl mx-auto px-6 py-24">
        <motion.div 
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-2 h-2 bg-gray-400 rounded-full" 
            />
            <span className="text-sm text-gray-500 font-mono uppercase tracking-wider">Portfolio</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-7xl font-bold mb-6 tracking-tight"
          >
            <motion.span 
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              className="bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent bg-[length:200%_auto]"
            >
              Selected Work
            </motion.span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl text-gray-400 max-w-2xl"
          >
            A collection of projects that showcase my ability to build full-stack applications, smart contracts, and scalable web solutions.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-2xl font-bold mb-8 text-gray-200"
          >
            Featured Projects
          </motion.h2>
          <div className="space-y-6">
            {featuredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="group relative border border-gray-900 rounded-lg p-8 hover:border-gray-700 transition-all duration-300 bg-gradient-to-br from-gray-950 to-black cursor-pointer"
              >
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === project.id ? 0.1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-white rounded-lg pointer-events-none" 
                />
                
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <motion.h3 
                        animate={{ x: hoveredId === project.id ? 10 : 0 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="text-2xl font-bold text-white group-hover:text-gray-300 transition-colors"
                      >
                        {project.title}
                      </motion.h3>
                      <motion.span 
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 * index }}
                        className="text-xs text-gray-600 font-mono"
                      >
                        {project.year}
                      </motion.span>
                    </div>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 * index }}
                      className="text-sm text-gray-500 font-mono mb-4"
                    >
                      {project.category}
                    </motion.p>
                  </div>
                  <motion.div 
                    animate={{ 
                      rotate: hoveredId === project.id ? 360 : 0,
                      scale: hoveredId === project.id ? 1.2 : 1
                    }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="text-4xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors"
                  >
                    0{index + 1}
                  </motion.div>
                </div>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 * index }}
                  className="text-gray-400 mb-6 leading-relaxed max-w-3xl"
                >
                  {project.description}
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 * index }}
                  className="flex flex-wrap gap-2 mb-6"
                >
                  {project.tech.map((tech, techIndex) => (
                    <motion.span 
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 * index + 0.1 * techIndex }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      className="px-3 py-1 text-xs bg-gray-900 text-gray-400 rounded-full border border-gray-800 font-mono"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 * index }}
                  className="flex gap-4"
                >
                  <motion.button 
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-white text-black text-sm font-semibold rounded hover:bg-gray-200 transition-colors"
                  >
                    View Project
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05, borderColor: "rgb(156, 163, 175)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-transparent text-gray-400 text-sm font-semibold rounded border border-gray-800 hover:border-gray-600 hover:text-white transition-colors"
                  >
                    Source Code
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mb-16"
        >
          <motion.h2 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="text-2xl font-bold mb-8 text-gray-200"
          >
            Other Projects
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-6"
          >
            {otherProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                variants={itemVariants}
                whileHover={{ scale: 1.03, rotate: 1 }}
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="group border border-gray-900 rounded-lg p-6 hover:border-gray-700 transition-all duration-300 bg-gradient-to-br from-gray-950 to-black cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <motion.h3 
                    animate={{ x: hoveredId === project.id ? 5 : 0 }}
                    className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.span 
                    animate={{ rotate: hoveredId === project.id ? 180 : 0 }}
                    className="text-xs text-gray-600 font-mono"
                  >
                    {project.year}
                  </motion.span>
                </div>

                <p className="text-xs text-gray-500 font-mono mb-4">{project.category}</p>

                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span 
                      key={tech}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 + 0.1 * index + 0.05 * techIndex }}
                      whileHover={{ scale: 1.1 }}
                      className="px-2 py-1 text-xs bg-gray-900 text-gray-500 rounded font-mono"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <motion.button 
                  whileHover={{ x: 5 }}
                  className="text-sm text-gray-400 hover:text-white transition-colors font-semibold"
                >
                  Learn More →
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="border-t border-gray-900 pt-12"
        >
          <div className="text-center">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="text-gray-400 mb-6"
            >
              Interested in working together?
            </motion.p>
            <Link href="/Contact">
              <motion.button 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2.1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(255,255,255,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
              >
                Get in Touch
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}