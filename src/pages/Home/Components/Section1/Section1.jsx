import React from "react";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import HomeButton from "../HomeButton/HomeButton";

export default function Section1() {
  return (
    <HeroHighlight
      className="h-screen w-full flex items-center justify-center px-4 text-white bg-black"
      data-theme="dark"
    >
      <motion.div
        className="text-center max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src="./imgs/right_white.png"
          alt=""
          className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
        />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
          className="text-3xl md:text-5xl font-bold leading-relaxed lg:leading-snug"
        >
          A Journey's &nbsp;
          <Highlight className="text-white ">End.</Highlight>
        </motion.h1>

        <motion.div
          className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm md:text-base text-gray-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <span>Web & App Development</span>
          <span className="text-gray-600">•</span>
          <span>Document Management</span>
          <span className="text-gray-600">•</span>
          <span>IT Support</span>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
      
        </motion.div>
      </motion.div>
    </HeroHighlight>
  );
}
