import Link from "next/link";

export default function Work() {
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

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      <nav className="relative border-b border-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-white hover:text-gray-400 transition-colors">
              K.
            </Link>
            <div className="flex gap-8">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/About" className="text-gray-400 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/Work" className="text-white">
                Work
              </Link>
              <Link href="/Contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative max-w-6xl mx-auto px-6 py-24">
        <div className="mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-gray-400 rounded-full" />
            <span className="text-sm text-gray-500 font-mono uppercase tracking-wider">Portfolio</span>
          </div>
          
          <h1 className="text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Selected Work
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl">
            A collection of projects that showcase my ability to build full-stack applications, smart contracts, and scalable web solutions.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-200">Featured Projects</h2>
          <div className="space-y-6">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="group relative border border-gray-900 rounded-lg p-8 hover:border-gray-700 transition-all duration-300 bg-gradient-to-br from-gray-950 to-black"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-2xl font-bold text-white group-hover:text-gray-300 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs text-gray-600 font-mono">{project.year}</span>
                    </div>
                    <p className="text-sm text-gray-500 font-mono mb-4">{project.category}</p>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                    0{index + 1}
                  </div>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed max-w-3xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs bg-gray-900 text-gray-400 rounded-full border border-gray-800 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="px-6 py-2 bg-white text-black text-sm font-semibold rounded hover:bg-gray-200 transition-colors">
                    View Project
                  </button>
                  <button className="px-6 py-2 bg-transparent text-gray-400 text-sm font-semibold rounded border border-gray-800 hover:border-gray-600 hover:text-white transition-colors">
                    Source Code
                  </button>
                </div>

                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.02] rounded-lg transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-200">Other Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project) => (
              <div 
                key={project.id}
                className="group border border-gray-900 rounded-lg p-6 hover:border-gray-700 transition-all duration-300 bg-gradient-to-br from-gray-950 to-black"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-gray-600 font-mono">{project.year}</span>
                </div>

                <p className="text-xs text-gray-500 font-mono mb-4">{project.category}</p>

                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 text-xs bg-gray-900 text-gray-500 rounded font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="text-sm text-gray-400 hover:text-white transition-colors font-semibold">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-900 pt-12">
          <div className="text-center">
            <p className="text-gray-400 mb-6">
              Interested in working together?
            </p>
            <Link href="/Contact">
              <button className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}