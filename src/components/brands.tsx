import Image from "next/image";
import React from "react";

import { Lora } from "next/font/google";
import { cn } from "@/src/lib/utils";

import comp from "../../public/images/companies/snap_inc_co_logo.jpeg";
import comp1 from "../../public/images/companies/client2.jpeg";
import comp2 from "../../public/images/companies/client3.jpeg";
import comp3 from "../../public/images/companies/client4.jpeg";
import comp4 from "../../public/images/companies/client5.jpeg";
import comp5 from "../../public/images/companies/client6.jpeg";
import { motion } from "framer-motion";
import { fadeInAnimationVariantsDiv } from "../lib/animations";

const font = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

const logos = [
  {
    image: comp,
  },
  {
    image: comp1,
  },
  {
    image: comp2,
  },
  {
    image: comp3,
  },
  {
    image: comp4,
  },
  {
    image: comp5,
  },
];

const Brands = () => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={fadeInAnimationVariantsDiv}
      viewport={{
        once: true,
      }}
    >
      <div className=" p-4 mx-auto relative z-10  w-full pt-20 md:pt-32">
        <div
          className="text-4xl md:pb-8 md:text-7xl text-center 
        bg-clip-text text-transparent bg-gradient-to-b from-[#ff003f] to-[#6e00f1] bg-opacity-50"
        >
          Recommended By
        </div>

        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto">
          The best brands in Arabe world and world wide recommend us
        </p>

        <div className="grid grid-cols-3  items-center justify-center  mx-auto md:w-3/5 cursor-pointer">
          {logos.map((logo, i) => (
            <div key={i} className="p-4 md:p-20">
              <Image
                priority
                src={logo.image}
                width={500}
                height={500}
                alt="logo"
                className="w-full h-auto max-w-full rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Brands;
