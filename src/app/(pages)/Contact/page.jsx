import Link from "next/link";

export default function Contact() {
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
              <Link href="/Work" className="text-gray-400 hover:text-white transition-colors">
                Work
              </Link>
              <Link href="/Contact" className="text-white">
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
            <span className="text-sm text-gray-500 font-mono uppercase tracking-wider">Let's Talk</span>
          </div>
          
          <h1 className="text-7xl font-bold mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h1>
          
          <p className="text-2xl text-gray-400 max-w-2xl leading-relaxed">
            I'm always open to new opportunities, collaborations, and interesting conversations. Let's build something great together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-2xl font-bold mb-8 text-gray-200">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-1 h-8 bg-gray-700 group-hover:bg-white transition-colors" />
                  <h3 className="text-lg font-semibold text-gray-300">Email</h3>
                </div>
                <a 
                  href="mailto:agarwalkartik704@gmail.com"
                  className="text-xl text-white hover:text-gray-400 transition-colors ml-7 inline-block"
                >
                  agarwalkartik704@gmail.com
                </a>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-1 h-8 bg-gray-700 group-hover:bg-white transition-colors" />
                  <h3 className="text-lg font-semibold text-gray-300">Location</h3>
                </div>
                <p className="text-xl text-gray-400 ml-7">Remote • Available Worldwide</p>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-1 h-8 bg-gray-700 group-hover:bg-white transition-colors" />
                  <h3 className="text-lg font-semibold text-gray-300">Response Time</h3>
                </div>
                <p className="text-xl text-gray-400 ml-7">Usually within 24 hours</p>
              </div>
            </div>

            <div className="mt-12 p-6 border border-gray-900 rounded-lg bg-gradient-to-br from-gray-950 to-black">
              <p className="text-gray-400 leading-relaxed">
                I genuinely care about creating meaningful solutions and building strong professional relationships. Feel free to reach out for freelance opportunities, collaborations, or just to say hi.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-8 text-gray-200">Connect With Me</h2>
            
            <div className="space-y-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border border-gray-900 rounded-lg p-6 hover:border-gray-700 transition-all duration-300 bg-gradient-to-br from-gray-950 to-black"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors">
                      {social.name}
                    </h3>
                    <svg 
                      className="w-5 h-5 text-gray-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-500 font-mono mb-2">{social.username}</p>
                  <p className="text-sm text-gray-600">{social.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                Have a Project in Mind?
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Whether you need a full-stack application, smart contract development, or consulting on your next big idea—I'm here to help bring your vision to life.
            </p>
            <a
              href="mailto:agarwalkartik704@gmail.com"
              className="inline-block px-10 py-5 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors text-lg"
            >
              Send Me an Email
            </a>
          </div>
        </div>

        <div className="mt-24 text-center">
          <div className="inline-flex items-center gap-2 text-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-mono">Currently available for freelance work</span>
          </div>
        </div>
      </div>
    </div>
  );
}