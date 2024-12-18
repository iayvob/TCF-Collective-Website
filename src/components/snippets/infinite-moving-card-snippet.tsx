"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/src/components/ui/infinite-moving-cards";
import { motion } from "framer-motion";
import { fadeInAnimationVariantsDiv1 } from "@/src/lib/animations";

export function InfiniteMovingCardsDemo() {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={fadeInAnimationVariantsDiv1}
      viewport={{
        once: true,
      }}
      className="pb-40 rounded-md flex flex-col antialiased my-4 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
    >
      <div
        className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
         from-[#ff003f] to-[#6e00f1] bg-opacity-50 mt-20"
      >
        Testimonials
      </div>
      <p
        className="mt-4 text-lg font-normal
          text-neutral-300 max-w-lg 
          text-center mx-auto mb-20"
      >
        Some reviews about our services
      </p>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </motion.div>
  );
}

const testimonials = [
  {
    quote:
      "I am excited to share that I have started a course with The Content Factory in collaboration with وزارة الشباب‎الأردنية The course aims to teach the fundamentals of creating exceptional content, which will enhance my skills in crafting engaging and effective content. I look forward to applying what I learn to my upcoming projects and further developing my skills in this area. ++",
    name: "Sadeel Hamam",
    title: "Marketing Student",
  },
  {
    quote:
      "I'm thrilled to be in The Content Factory's content creation course with the Jordanian Ministry of Youth Best moments Influencer Ahmad Aburob: His story inspired me to chase my dreams. Coach Yousef Salem: His guidance has been invaluable. Grateful for this opportunity and excited for the journey ahead!",
    name: "Aya A.",
    title: "Sales representative",
  },
  {
    quote:
      "nobody will remember:-your salary-how busy you were -how many hours you workedpeople will remember:- The Great content you created with The Content Factory- The Influencer campaigns you made with The Content FactoryWant people to remember you drop me a message",
    name: "Hareth Hijazi",
    title: "Entrepreneur CEO @Belbio",
  },
];
