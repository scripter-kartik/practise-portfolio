"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const socialLinks = [
    {
      name: "Twitter",
      username: "@dev_kartk",
      href: "https://x.com/dev_kartk",
      description: "Follow for daily updates"
    },
    {
      name: "GitHub",
      username: "github.com/kartik",
      href: "https://github.com",
      description: "Check out my code"
    },
    {
      name: "LinkedIn",
      username: "linkedin.com/in/kartik",
      href: "https://linkedin.com",
      description: "Let's connect professionally"
    },
    {
      name: "Discord",
      username: "kartik#1234",
      href: "https://discord.com",
      description: "Join the community"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
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
        <div className="max-w-6xl mx-auto px-6 py-6">
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
                  whileHover={{ y: -3 }}
                >
                  <Link 
                    href={link.href} 
                    className={link.label === "Contact" ? "text-white" : "text-gray-400 hover:text-white transition-colors"}
                  >
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
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="w-2 h-2 bg-gray-400 rounded-full" 
            />
            <span className="text-sm text-gray-500 font-mono uppercase tracking-wider">Let's Talk</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-7xl font-bold mb-8 tracking-tight"
          >
            <motion.span 
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent bg-[length:200%_auto]"
            >
              Get in Touch
            </motion.span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-2xl text-gray-400 max-w-2xl leading-relaxed"
          >
            I'm always open to new opportunities, collaborations, and interesting conversations. Let's build something great together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-2xl font-bold mb-8 text-gray-200"
            >
              Contact Information
            </motion.h2>
            
            <div className="space-y-8">
              {[
                { title: "Email", content: "agarwalkartik704@gmail.com", href: "mailto:agarwalkartik704@gmail.com", isLink: true },
                { title: "Location", content: "Remote • Available Worldwide", isLink: false },
                { title: "Response Time", content: "Usually within 24 hours", isLink: false }
              ].map((item, index) => (
                <motion.div 
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div 
                      whileHover={{ scaleY: 1.5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-1 h-8 bg-gray-700 group-hover:bg-white transition-colors" 
                    />
                    <h3 className="text-lg font-semibold text-gray-300">{item.title}</h3>
                  </div>
                  {item.isLink ? (
                    <motion.a 
                      href={item.href}
                      whileHover={{ scale: 1.02 }}
                      className="text-xl text-white hover:text-gray-400 transition-colors ml-7 inline-block"
                    >
                      {item.content}
                    </motion.a>
                  ) : (
                    <p className="text-xl text-gray-400 ml-7">{item.content}</p>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.02 }}
              className="mt-12 p-6 border border-gray-900 rounded-lg bg-gradient-to-br from-gray-950 to-black"
            >
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="text-gray-400 leading-relaxed"
              >
                I genuinely care about creating meaningful solutions and building strong professional relationships. Feel free to reach out for freelance opportunities, collaborations, or just to say hi.
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-2xl font-bold mb-8 text-gray-200"
            >
              Connect With Me
            </motion.h2>
            
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.03, x: 10 }}
                  onHoverStart={() => setHoveredSocial(social.name)}
                  onHoverEnd={() => setHoveredSocial(null)}
                  className="group block border border-gray-900 rounded-lg p-6 hover:border-gray-700 transition-all duration-300 bg-gradient-to-br from-gray-950 to-black"
                >
                  <motion.div 
                    animate={{ opacity: hoveredSocial === social.name ? 0.05 : 0 }}
                    className="absolute inset-0 bg-white rounded-lg pointer-events-none" 
                  />
                  
                  <div className="flex items-start justify-between mb-2">
                    <motion.h3 
                      animate={{ x: hoveredSocial === social.name ? 5 : 0 }}
                      className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors"
                    >
                      {social.name}
                    </motion.h3>
                    <motion.svg 
                      animate={{ 
                        x: hoveredSocial === social.name ? 5 : 0,
                        y: hoveredSocial === social.name ? -5 : 0,
                        rotate: hoveredSocial === social.name ? 45 : 0
                      }}
                      className="w-5 h-5 text-gray-600 group-hover:text-white transition-all" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </motion.svg>
                  </div>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="text-sm text-gray-500 font-mono mb-2"
                  >
                    {social.username}
                  </motion.p>
                  <motion.p 
                    animate={{ opacity: hoveredSocial === social.name ? 1 : 0.6 }}
                    className="text-sm text-gray-600"
                  >
                    {social.description}
                  </motion.p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="border-t border-gray-900 pt-16"
        >
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.7, type: "spring" }}
              className="text-4xl font-bold mb-6"
            >
              <motion.span 
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent bg-[length:200%_auto]"
              >
                Have a Project in Mind?
              </motion.span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9 }}
              className="text-gray-400 text-lg mb-8 leading-relaxed"
            >
              Whether you need a full-stack application, smart contract development, or consulting on your next big idea—I'm here to help bring your vision to life.
            </motion.p>
            <motion.a
              href="mailto:agarwalkartik704@gmail.com"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.1, type: "spring", stiffness: 150 }}
              whileHover={{ 
                scale: 1.1, 
                boxShadow: "0 0 40px rgba(255,255,255,0.5)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-5 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors text-lg"
            >
              Send Me an Email
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.3 }}
          className="mt-24 text-center"
        >
          <div className="inline-flex items-center gap-2 text-gray-600">
            <motion.div 
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [1, 0.5, 1]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-2 h-2 bg-green-500 rounded-full" 
            />
            <span className="text-sm font-mono">Currently available for freelance work</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}