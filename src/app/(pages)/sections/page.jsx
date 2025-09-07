"use client";

import Header from "@/app/components/Header/page";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";

const pageVariants = {
  initial: { opacity: 0, y: 200 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.4, ease: "easeIn" } },
};

function drag(dets) {
  const Path = `d="M 0 80 Q ${dets.x} ${dets.y} 1500 80"`;
  gsap.to("line", {
    attr: { d: Path },
  });
}

export default function Section() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-black text-white min-h-screen flex flex-col justify-center gap-10 px-50 font-sans"
    >
      <Header
        src="/cross.png"
        href="/"
        img="/white-arrow.png"
        className="w-10 h-10"
      />
      <div className="string">
        <svg
          className="line"
          width="1500"
          height="160"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 0 80 Q 750 80 1500 80" stroke="white" fill="transparent" />
        </svg>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-6xl">Home</h1>
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            className="w-20 h-15 border-2 border-white flex justify-center items-center rounded-[50px]"
          >
            <img src="/white-arrow.png" alt="" />
          </motion.button>
        </Link>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-6xl">About Me</h1>
        <Link href="About">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            className="w-20 h-15 border-2 border-white flex justify-center items-center rounded-[50px]"
          >
            <img src="/white-arrow.png" alt="" />
          </motion.button>
        </Link>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-6xl">Work</h1>
        <Link href="Work">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            className="w-20 h-15 border-2 border-white flex justify-center items-center rounded-[50px]"
          >
            <img src="/white-arrow.png" alt="" />
          </motion.button>
        </Link>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-6xl">Contact Me</h1>
        <Link href="Contact">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            className="w-20 h-15 border-2 border-white flex justify-center items-center rounded-[50px]"
          >
            <img src="/white-arrow.png" alt="" />
          </motion.button>
        </Link>
      </div>
      <svg width="1500" height="160" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 80 Q 750 80 1500 80" stroke="white" fill="transparent" />
      </svg>
    </motion.div>
  );
}
