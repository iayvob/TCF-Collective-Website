"use client";

import { fadeInAnimationVariantsDiv } from "../lib/animations";
import { CardHoverEffectDemo } from "./snippets/card-hover-effect-snippet";
import { motion } from "framer-motion";

const OurChannels = () => {
  return (
    <div className="w-full bg-gray-100 rounded-3xl py-3">
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={fadeInAnimationVariantsDiv}
        viewport={{
          once: true,
        }}
        className="max-w-5xl mx-auto"
      >
        <div
          className="text-4xl md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
         from-[#ff003f] to-[#6e00f1] bg-opacity-50 mt-20"
        >
          Our Channels
        </div>
        <p
          className="mt-6 text-lg font-normal
          text-gray-950 max-w-lg 
          text-center mx-auto"
        >
          Explore a variety of YouTube channels showcasing diverse content.
        </p>
        <CardHoverEffectDemo />
      </motion.div>
    </div>
  );
};

export default OurChannels;
