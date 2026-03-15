
      "use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Main() {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col justify-center px-6 md:px-16"
    >
      <div>
        <p className="font-mono text-sm md:text-2xl text-gray-500 mt-20 mb-5">
          Hello! I'm Kartik
        </p>

        <div className="text-2xl md:text-[80px] font-extrabold flex flex-col leading-none">
          <h1>I HELP BUSINESSES BUILD FAST,</h1>
          <h1>SCALABLE AND STUNNING</h1>
          <h1 className="text-gray-400 mb-10">WEB PRODUCTS.</h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-10 mt-20 w-full">
        <Link href="/contact">
          <button className="bg-black px-8 py-4 border-2 border-black text-white text-lg md:text-2xl flex items-center gap-3 rounded-full hover:opacity-80 transition">
            let's talk
            <Image
              src="/white-arrow.png"
              alt="arrow"
              width={40}
              height={40}
            />
          </button>
        </Link>

        <div className="flex flex-col font-mono text-lg md:text-2xl text-center md:text-left">
          <p>Performance-driven full-stack development for</p>
          <p>modern digital products</p>
        </div>
      </div>
    </motion.div>
  );
}