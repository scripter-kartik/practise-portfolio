"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AboutPage() {
  const [hoveredTech, setHoveredTech] = useState(null);

  const technologies = [
    { name: 'JavaScript', icon: 'JS' },
    { name: 'TypeScript', icon: 'TS' },
    { name: 'React', icon: '⚛' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Node.js', icon: 'N' },
    { name: 'Solidity', icon: '◆' },
    { name: 'MongoDB', icon: 'M' },
    { name: 'SQL', icon: 'DB' },
    { name: 'Git', icon: 'G' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    }
  };

  const techVariants = {
    hidden: { scale: 0, rotate: -180, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
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
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        className="relative border-b border-gray-900"
      >
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/" className="text-xl font-bold text-white hover:text-gray-400 transition-colors">
                K.
              </Link>
            </motion.div>
            <div className="flex gap-8">
              {[
                { href: "/", label: "Home" },
                { href: "/About", label: "About" },
                { href: "/Work", label: "Work" },
                { href: "/Contact", label: "Contact" }
              ].map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -3, scale: 1.05 }}
                >
                  <Link 
                    href={link.href} 
                    className={link.label === "About" ? "text-white" : "text-gray-400 hover:text-white transition-colors"}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      <div className="relative max-w-5xl mx-auto px-6 py-24">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-20"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <motion.div 
              animate={{ 
                scale: [1, 1.4, 1],
                rotate: [0, 360]
              }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="w-2 h-2 bg-gray-400 rounded-full" 
            />
            <span className="text-sm text-gray-500 font-mono uppercase tracking-wider">Developer & Builder</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
            className="text-8xl font-bold mb-6 tracking-tight"
          >
            <motion.span 
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent bg-[length:200%_auto]"
            >
              Kartik
            </motion.span>
          </motion.h1>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
            className="h-1 bg-gradient-to-r from-gray-200 to-transparent" 
          />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="lg:col-span-3 space-y-8"
          >
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="text-2xl font-bold mb-6 text-gray-200"
              >
                About
              </motion.h2>
              <div className="space-y-5 text-gray-400 text-lg leading-relaxed">
                {[
                  { text: "I'm a developer who loves turning ideas into real, working products. I don't just learn technologies—", highlight: "I ship with them" },
                  { text: "I work primarily as a ", highlight: "Full-Stack Developer", text2: ", building web applications with modern tools and clean architecture." },
                  { text: "Recently, I've been diving deeper into ", highlight: "Web3 and blockchain", text2: ", experimenting with smart contracts and on-chain logic." },
                  { text: "What sets me apart is ", highlight: "consistency", text2: "—showing up every day, building, breaking, and fixing things." }
                ].map((para, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + index * 0.15 }}
                  >
                    {para.text}
                    <motion.span 
                      whileHover={{ scale: 1.05 }}
                      className="text-white font-medium"
                    >
                      {para.highlight}
                    </motion.span>
                    {para.text2}
                  </motion.p>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8 }}
              whileHover={{ x: 10, borderColor: "rgb(156, 163, 175)" }}
              className="border-l-2 border-gray-800 pl-6 py-4 transition-colors"
            >
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="text-gray-300 text-lg"
              >
                Currently building projects and looking for opportunities to create meaningful software.
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="lg:col-span-2"
          >
            <div className="sticky top-8">
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="text-2xl font-bold mb-6 text-gray-200"
              >
                Status
              </motion.h2>
              <div className="space-y-4">
                {[
                  { label: "Availability", value: "Open", hasIndicator: true },
                  { label: "Location", value: "Remote", hasIndicator: false },
                  { label: "Focus", value: "Full-Stack", hasIndicator: false }
                ].map((item, index) => (
                  <motion.div 
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 + index * 0.1 }}
                    whileHover={{ x: 5, borderColor: "rgb(107, 114, 128)" }}
                    className="flex items-center justify-between py-3 border-b border-gray-900 transition-all"
                  >
                    <span className="text-gray-500 text-sm">{item.label}</span>
                    <span className="text-gray-300 flex items-center gap-2">
                      {item.hasIndicator && (
                        <motion.div 
                          animate={{ 
                            scale: [1, 1.4, 1],
                            opacity: [1, 0.6, 1]
                          }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="w-2 h-2 bg-green-500 rounded-full" 
                        />
                      )}
                      {item.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="mb-20"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.1 }}
            className="text-2xl font-bold mb-8 text-gray-200"
          >
            Tech Stack
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3"
          >
            {technologies.map((tech, index) => (
              <motion.div 
                key={tech.name} 
                variants={techVariants}
                whileHover={{ 
                  scale: 1.15, 
                  rotate: 5,
                  zIndex: 10
                }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setHoveredTech(tech.name)}
                onHoverEnd={() => setHoveredTech(null)}
                className="group relative"
              >
                <motion.div 
                  animate={{
                    boxShadow: hoveredTech === tech.name 
                      ? "0 0 30px rgba(255,255,255,0.3)" 
                      : "0 0 0px rgba(255,255,255,0)"
                  }}
                  className="aspect-square bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg flex flex-col items-center justify-center p-4 hover:border-gray-600 transition-all duration-300 cursor-pointer"
                >
                  <motion.div 
                    animate={{ 
                      rotate: hoveredTech === tech.name ? 360 : 0,
                      scale: hoveredTech === tech.name ? 1.2 : 1
                    }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="text-2xl font-bold text-gray-400 group-hover:text-white transition-colors mb-2"
                  >
                    {tech.icon}
                  </motion.div>
                  <motion.div 
                    animate={{ 
                      y: hoveredTech === tech.name ? -2 : 0
                    }}
                    className="text-xs text-gray-600 group-hover:text-gray-400 transition-colors font-medium text-center"
                  >
                    {tech.name}
                  </motion.div>
                </motion.div>
                <motion.div 
                  animate={{ 
                    opacity: hoveredTech === tech.name ? 0.15 : 0
                  }}
                  className="absolute inset-0 bg-white rounded-lg blur-xl -z-10 pointer-events-none" 
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          className="flex gap-4"
        >
          <Link href="/Work"> 
            <motion.button 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.7, type: "spring", stiffness: 150 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 30px rgba(255,255,255,0.4)",
                y: -3
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              View Projects
            </motion.button>
          </Link>
          <Link href="/Contact">
            <motion.button 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.9, type: "spring", stiffness: 150 }}
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgb(156, 163, 175)",
                y: -3
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg border border-gray-800 hover:bg-gray-800 transition-colors"
            >
              Get in Touch
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}