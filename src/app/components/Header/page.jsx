"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Header({ src, href, img, className }) {
  return (
    <header>
      <div className="flex justify-between items-center font-serif mt-10">
        <h1 className="text-4xl font-bold">KARTIK</h1>
        <div className="flex gap-[20px] font-light">
          <motion.button
            whileHover={{ scale: 1.1 }}
            onHoverStart={() => console.log("hover started!")}
            className="w-45 h-15 border-1 text-2xl rounded-4xl"
          >
            <Link href="/Contact">
              <div className="flex items-center justify-center gap-2 p-1">
                <h1>let's talk</h1>
                <img className="w-5 h-5" src={img} alt="" />
              </div>
            </Link>
          </motion.button>
          <Link href={href}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => console.log("hover started!")}
              className="w-20 h-15 border-1 text-2xl rounded-4xl flex items-center justify-center"
            >
              <img className={className} src={src} alt="" />
            </motion.button>
          </Link>
        </div>
      </div>
    </header>
  );
}
