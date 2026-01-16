export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
        About Me
      </h1>

      <p className="text-lg text-red-700 mb-8">
        I’m Kartik — a developer who loves turning ideas into real, working
        products. I don’t just learn technologies, I ship with them.
      </p>

      <div className="space-y-6 text-base leading-relaxed text-gray-700">
        <p>
          I work primarily as a{" "}
          <span className="font-medium">Full-Stack Developer</span>, building web
          applications with modern tools and clean architecture.
        </p>

        <p>
          Recently, I’ve been diving deeper into{" "}
          <span className="font-medium">Web3 and blockchain</span>, experimenting
          with smart contracts and on-chain logic.
        </p>

        <p>
          What sets me apart is consistency — showing up every day, building,
          breaking, and fixing things.
        </p>

        <p>
          I’m actively building projects and looking for opportunities to create
          meaningful software.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">What I Work With</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-600">
          <li>JavaScript / TypeScript</li>
          <li>React / Next.js</li>
          <li>Node.js</li>
          <li>Solidity</li>
          <li>MongoDB / SQL</li>
          <li>Git & GitHub</li>
        </ul>
      </div>
    </section>
  );
}
