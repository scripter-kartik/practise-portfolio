"use client";

import Header from "@/app/components/Header/page";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./contact.module.css";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.98, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-white text-black flex flex-col justify-center h-screen px-50"
    >
      <Header
        src="/hamburger.png"
        href="/sections"
        img="/right-arrow.png"
        className="w-5 h-5"
      />
      <hr className="mt-10 text-gray-600" />
      <motion.div className="flex gap-90">
        <motion.div variants={itemVariants} className="leading-none mt-30">
          <h1
            className={`${styles.heading} text-[200px] font-extrabold font-serif text-gray-700`}
          >
            GET IN
          </h1>
          <div className="flex items-center">
            <img className="mr-20" src="/eye.jpeg" alt="" />
            <h1
              className={`${styles.heading} text-[200px] font-extrabold font-serif text-gray-900`}
            >
              TOUCH
            </h1>
          </div>
        </motion.div>
        <motion.div variants={itemVariants} className="mt-30">
          <p className="text-2xl text-gray-500">
            I genuinely care about you and your wellbeing. Let me know how I can
            serve you better.
          </p>
          <ul className="mt-20 text-2xl text-gray-600 flex flex-col justify-center gap-3">
            <strong>Social Links</strong>
            <Link href="https://x.com/dev_kartk">
              <motion.li
                className="cursor-pointer text-gray-500"
                whileHover={{ scale: 1.1, color: "black" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                twitter
              </motion.li>
            </Link>
            <Link href="">
              <motion.li
                className="cursor-pointer text-gray-500"
                whileHover={{ scale: 1.1, color: "black" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Github
              </motion.li>
            </Link>
            <Link href="">
              <motion.li
                className="cursor-pointer text-gray-500"
                whileHover={{ scale: 1.1, color: "black" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                LinkedIn
              </motion.li>
            </Link>
            <Link href="">
              <motion.li
                className="cursor-pointer text-gray-500"
                whileHover={{ scale: 1.1, color: "black" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Discord
              </motion.li>
            </Link>
          </ul>
        </motion.div>
      </motion.div>
      <motion.div variants={itemVariants} className="flex items-center gap-6">
        <p className="mt-30 text-2xl">
          I'm always open to new opportunities and collaborations, feel free to
          reach out:{" "}
        </p>
        <a
          className="mt-30 text-2xl text-blue-700 hover:underline"
          href="https://mail.google.com/mail/u/0/#sent?compose=new"
        >
          Email Me
        </a>
      </motion.div>
      <motion.div variants={itemVariants}>
        <p>
          Email address:{" "}
          <span className="text-blue-900 underline">
            agarwalkartik704@gmail.com
          </span>
        </p>
      </motion.div>
    </motion.div>
  );
}
