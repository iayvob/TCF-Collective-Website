"use client";

import { motion } from "framer-motion";
import {
  fadeInAnimationVariantsDiv,
  fadeInAnimationVariantsDiv1,
  fadeInAnimationVariantsDiv2,
} from "../lib/animations";

const WhoWeAre = () => {
  return (
    <div className="bg-gray-100 rounded-b-3xl py-10 md:py-20 pb-16 flex flex-col items-center">
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={fadeInAnimationVariantsDiv}
        viewport={{
          once: true,
        }}
        className="mx-auto relative z-10 w-full"
      >
        <div className="text-4xl  md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-[#ff003f] to-[#6e00f1] bg-opacity-50">
          Who We Are <br />
        </div>
      </motion.div>

      <div className="flex flex-col mt-3 w-full md:max-w-[80%] md:flex-row justify-between">
        <div className="w-full flex flex-col items-center mt-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeInAnimationVariantsDiv1}
            viewport={{
              once: true,
            }}
            className="flex flex-col items-center text-center w-[80%] md:w-[70%]"
          >
            <h1 className="text-2xl md:text-5xl text-center text-[#6e00f1] bg-opacity-50">
              Our Mission
            </h1>
            <p className="mt-4 text-lg font-normal text-gray-900 max-w-lg text-center mx-auto">
              To connect and empower brands, creators, and audiences by
              delivering innovative solutions and fostering a global community.
            </p>
          </motion.div>
        </div>

        <div className="w-full flex flex-col items-center mt-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeInAnimationVariantsDiv2}
            viewport={{
              once: true,
            }}
            className="flex flex-col items-center text-center py-2 w-[80%] md:w-[70%]"
          >
            <h1 className="text-2xl md:text-5xl text-center text-[#ff003f] bg-opacity-50">
              Our Vision
            </h1>
            <p className="mt-4 text-lg font-normal text-gray-900 max-w-lg text-center mx-auto">
              To become a leading global network of transformative companies
              that redefine industries and inspire a new era of growth and
              innovation.{" "}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
