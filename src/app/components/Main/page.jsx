"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Main() {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ duration: 1 }}
      className="flex justify-center flex-col"
    >
      <div>
        <p className="font-mono text-sm md:text-2xl text-gray-500 mt-20 mb-5 md:mt-30 md:mb-5">
          Hello! I'm Kartik
        </p>
        <div className="text-sm md:text-[97.5px] font-extrabold flex flex-col justify-center gap-0 leading-none">
          <h1 className="m-0">I HELP BUSINESSES BUILD FAST,</h1>
          <h1 className="m-0">SCALABLE AND STUNNING</h1>
          <h1 className="text-gray-400 m-0 mb-10">WEB PRODUCTS.</h1>
        </div>
      </div>
      <div className="flex justify-between items-center mt-30 w-[calc(100vw - 100px)]">
        <Link href="/Contact">
          <button className="bg-black w-50 h-15 border-2 border-black text-white text-2xl flex justify-center items-center gap-2 rounded-4xl hover:cursor-pointer">
            let's talk{" "}
            <img
              className="w-10 h-10 text-white"
              src="/white-arrow.png"
              alt=""
            />
          </button>
        </Link>
        <div className="flex flex-col font-mono text-2xl">
          <p>Performance-driven full-stack development for</p>
          <p>modern digital products</p>
        </div>
      </div>
    </motion.div>
  );
}
