"use client";

import { useRef } from "react";
import Navbar from "@/src/components/navbar";
import SliderOne from "@/src/components/ui/slider";
import Link from "next/link";
import { motion } from "framer-motion";
import Brands from "../components/brands";
import WhoWeAre from "../components/whoWeAre";
import FAQS from "../components/faq";
import { fadeInAnimationVariantsDiv } from "../lib/animations";
import BranchesSection from "../components/branches-section";
import OurChannels from "../components/our-channels";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div className="w-full items-center justify-center bg-black antialiased bg-grid-white/[0.02] relative">
      <Navbar />
      <div className="mx-auto relative z-10 w-full">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={fadeInAnimationVariantsDiv}
          viewport={{
            once: true,
          }}
          className="text-[1.8rem] pt-10 md:pt-20 md:text-7xl text-center font-bold font-Roboto bg-clip-text text-transparent bg-gradient-to-b from-[#6e00f1] to-[#ff003f] bg-neutral-400 bg-opacity-50"
        >
          T
          <Typewriter
            words={["he Content Factory Collective"]}
            loop={false}
            cursorColor="white"
            cursorBlinking={true}
            cursorStyle="|"
            typeSpeed={120}
            deleteSpeed={60}
            delaySpeed={4000}
          />
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={fadeInAnimationVariantsDiv}
          viewport={{
            once: true,
          }}
          className="my-8 text-[0.9rem] md:text-[1.5rem] font-normal text-neutral-300 max-w-4xl text-center mx-auto px-4"
        >
          Explore our ventures and see how we connect, create, and inspire.
          <p className="bg-clip-text block text-normal text-[#6e00f1]">
            Empowering Businesses with Innovation and Creativity
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          variants={fadeInAnimationVariantsDiv}
          viewport={{
            once: true,
          }}
          className="pb-10 md:pb-20"
        >
          <Link
            href={"/contact"}
            className="cursor-pointer text-[0.9rem] md:text-[1.5rem] md:h-12 h-9 flex items-center justify-center border rounded-full w-32 md:w-48 mx-auto text-white hover:text-gray-900 hover:bg-neutral-300 transition-all"
          >
            Get in Touch
          </Link>
        </motion.div>

        <div className="w-full">
          <SliderOne />
        </div>
        <section id="whoWeAre">
          <WhoWeAre />
          <BranchesSection />
        </section>
        <div id="ourChannels">
          <OurChannels />
        </div>
        <div id="brands">
          <Brands />
        </div>
        <div id="faq">
          <FAQS />
        </div>
      </div>
    </div>
  );
}
