"use client";

import { fadeInAnimationVariantsDiv } from "../lib/animations";
import { CardHoverEffectDemo } from "./snippets/card-hover-effect-snippet";
import { motion } from "framer-motion";

const Services = () => {
  return (
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
        className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
         from-[#ff003f] to-[#6e00f1] bg-opacity-50 mt-20"
      >
        Services
      </div>
      <p
        className="mt-4 text-lg font-normal
          text-neutral-300 max-w-lg 
          text-center mx-auto"
      >
        From social media management to graphic design and Video Production, We
        offer a wide range of services to help you grow your business.
      </p>

      <CardHoverEffectDemo />
    </motion.div>
  );
};

export default Services;
