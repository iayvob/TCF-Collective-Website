"use client";

import { motion } from "framer-motion";
import grap from "../../public/images/Events/youtube.png";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import result from "../../public/images/Events/results.png";
import { ThreeDCardExample } from "./snippets/3d-card-snippet";
import {
  fadeInAnimationVariantsDiv,
  fadeInAnimationVariantsDiv1,
  fadeInAnimationVariantsDiv2,
} from "../lib/animations";

const CEO = () => {
  return (
    <div className="p-4 mx-auto relative z-10 w-full pt-20 md:pt-32">
      <div className="text-4xl md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-[#ff003f] to-[#6e00f1] bg-opacity-50">
        <Typewriter
          words={["Chief Exclusive Officer"]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>

      <motion.p
        initial="initial"
        whileInView="animate"
        variants={fadeInAnimationVariantsDiv}
        viewport={{
          once: true,
        }}
        className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto"
      >
        Ahmad Aburob, with 8.89M followers, is a top content creator skilled in
        growing audiences. His expertise will help TCF boost visibility, attract
        new followers, and significantly increase engagement and subscriptions.
      </motion.p>

      <div className="md:flex justify-center md:mx-auto md:space-x-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={fadeInAnimationVariantsDiv1}
          viewport={{
            once: true,
          }}
          className="px-10 md:px-0"
        >
          <ThreeDCardExample
            header={"Ahmad Aburob"}
            description={
              "Unleash the power of Your ideas and alive it with our expertises"
            }
            img={grap}
            link={"https://www.youtube.com/@aburob"}
          />
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={fadeInAnimationVariantsDiv2}
          viewport={{
            once: true,
          }}
          className="px-10 md:px-0 flex flex-col gap-y-5 items-center text-center"
        >
          <h1 className="from-[#ff003f] to-[#6e00f1] bg-clip-text text-transparent bg-gradient-to-b bg-opacity-50 text-4xl -mb-12 mt-16">
            Results Please!
          </h1>
          <Image alt="Testimonial" src={result} width={500} height={600} />
        </motion.div>
      </div>
    </div>
  );
};

export default CEO;
