"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInAnimationVariantsDiv } from "../lib/animations";
import Branches from "./branches";

export default function BranchesSection() {
  return (
    <div className="pt-10 pb-16 flex flex-col items-center w-full">
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={fadeInAnimationVariantsDiv}
        viewport={{
          once: true,
        }}
        className="mx-auto relative z-10 w-full"
      >
        <motion.h1
          initial="initial"
          whileInView="animate"
          variants={fadeInAnimationVariantsDiv}
          viewport={{
            once: true,
          }}
          className="text-4xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-[#ff003f] to-[#6e00f1] bg-opacity-50"
        >
          More Here
        </motion.h1>
        <motion.p
          initial="initial"
          whileInView="animate"
          variants={fadeInAnimationVariantsDiv}
          viewport={{
            once: true,
          }}
          className="mt-6 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto"
        >
          Ahmad Aburob, with 8.89M followers, is a top content creator skilled
          in growing audiences. His expertise will help TCF boost visibility,
          attract new followers, and significantly increase engagement and
          subscriptions.
        </motion.p>
        <Branches />
      </motion.div>
    </div>
  );
}
