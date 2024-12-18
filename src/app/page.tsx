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

export default function Home() {
  const whoWeAreRef = useRef<HTMLDivElement>(null);
  const ourChannelsRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const scrollToWhoWeAre = () => {
    whoWeAreRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const scrollToOurChannels = () => {
    ourChannelsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBrands = () => {
    brandsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFaq = () => {
    faqRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
        scrollToWhoWeAre={scrollToWhoWeAre}
        scrollToOurChannels={scrollToOurChannels}
        scrollToBrands={scrollToBrands}
        scrollToFaq={scrollToFaq}
      />
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={fadeInAnimationVariantsDiv}
          viewport={{
            once: true,
          }}
          className="text-4xl pb-5 md:text-7xl px-6 text-center font-bold font-Roboto bg-clip-text text-transparent bg-gradient-to-b from-[#ff003f] to-[#6e00f1] bg-neutral-400 bg-opacity-50"
        >
          The Content Factory Collective
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={fadeInAnimationVariantsDiv}
          viewport={{
            once: true,
          }}
          className="mt-4 text-lg font-normal text-neutral-300 max-w-xl text-center mx-auto px-4"
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
        >
          <Link
            href={"/contact"}
            className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 mx-auto my-6 text-white hover:text-gray-900 hover:bg-neutral-300 transition-all"
          >
            Get in Touch
          </Link>
        </motion.div>

        <div className="w-full pt-20">
          <SliderOne />
        </div>
        <div ref={whoWeAreRef}>
          <WhoWeAre />
          <BranchesSection />
        </div>
        <div ref={ourChannelsRef}>
          <OurChannels />
        </div>
        <div ref={brandsRef}>
          <Brands />
        </div>
        <div ref={faqRef}>
          <FAQS />
        </div>
      </div>
    </div>
  );
}
