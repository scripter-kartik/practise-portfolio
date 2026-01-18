import Link from "next/link";

export default function AboutPage() {
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

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      <nav className="relative border-b border-gray-900">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-white hover:text-gray-400 transition-colors">
              K.
            </Link>
            <div className="flex gap-8">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/About" className="text-white">
                About
              </Link>
              <Link href="/Work" className="text-gray-400 hover:text-white transition-colors">
                Work
              </Link>
              <Link href="/Contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative max-w-5xl mx-auto px-6 py-24">
        <div className="mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-gray-400 rounded-full" />
            <span className="text-sm text-gray-500 font-mono uppercase tracking-wider">Developer & Builder</span>
          </div>
          
          <h1 className="text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Kartik
            </span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-gray-200 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-3 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-200">About</h2>
              <div className="space-y-5 text-gray-400 text-lg leading-relaxed">
                <p>
                  I'm a developer who loves turning ideas into real, working products. I don't just learn technologies—<span className="text-white font-medium">I ship with them</span>.
                </p>
                <p>
                  I work primarily as a <span className="text-white font-medium">Full-Stack Developer</span>, building web applications with modern tools and clean architecture.
                </p>
                <p>
                  Recently, I've been diving deeper into <span className="text-white font-medium">Web3 and blockchain</span>, experimenting with smart contracts and on-chain logic.
                </p>
                <p>
                  What sets me apart is <span className="text-white font-medium">consistency</span>—showing up every day, building, breaking, and fixing things.
                </p>
              </div>
            </div>

            <div className="border-l-2 border-gray-800 pl-6 py-4">
              <p className="text-gray-300 text-lg">
                Currently building projects and looking for opportunities to create meaningful software.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-200">Status</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-900">
                  <span className="text-gray-500 text-sm">Availability</span>
                  <span className="text-gray-300 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Open
                  </span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-900">
                  <span className="text-gray-500 text-sm">Location</span>
                  <span className="text-gray-300">Remote</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-900">
                  <span className="text-gray-500 text-sm">Focus</span>
                  <span className="text-gray-300">Full-Stack</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-gray-200">Tech Stack</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3">
            {technologies.map((tech) => (
              <div key={tech.name} className="group relative">
                <div className="aspect-square bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg flex flex-col items-center justify-center p-4 hover:border-gray-600 transition-all duration-300 cursor-pointer">
                  <div className="text-2xl font-bold text-gray-400 group-hover:text-white transition-colors mb-2">
                    {tech.icon}
                  </div>
                  <div className="text-xs text-gray-600 group-hover:text-gray-400 transition-colors font-medium text-center">
                    {tech.name}
                  </div>
                </div>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 rounded-lg blur-xl transition-opacity -z-10" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/Work"> 
            <button className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors">
              View Projects
            </button>
          </Link>
          <Link href="/Contact">
            <button className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg border border-gray-800 hover:bg-gray-800 transition-colors">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}