import React from "react";
import { motion } from "framer-motion";
import { fadeInAnimationVariantsDiv } from "../lib/animations";
import { ThreeDCardExample } from "./snippets/3d-card-snippet";
import img from "../../public/images/companies/sss.png";

const companies = [
  {
    header: "The Content School",
    description:
      "A platform dedicated to equipping by tools needed to master the art of content creation.",
    img: img,
    link: "https://www.youtube.com/@aburob",
  },
  {
    header: "TCF Service",
    description:
      "Your trusted partner in delivering tailored services that meet the unique needs of businesses and individuals.",
    img: img,
    link: "https://www.youtube.com/@aburob",
  },
  {
    header: "Arabfluence",
    description:
      "Hub Drive impactful collaborations and authentic storytelling.",
    img: img,
    link: "https://www.youtube.com/@aburob",
  },
];

export default function Branches() {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={fadeInAnimationVariantsDiv}
      viewport={{
        once: true,
      }}
      className="flex w-full flex-col items-center"
    >
      <div className="max-w-[90%] flex flex-col md:flex-row justify-between gap-x-4">
        {companies.map((companie, index) => (
          <ThreeDCardExample
            key={index}
            header={companie.header}
            description={companie.description}
            img={companie.img}
            link={companie.link}
          />
        ))}
      </div>
    </motion.div>
  );
}
