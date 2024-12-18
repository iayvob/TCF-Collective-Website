import React from "react";
import { motion } from "framer-motion";
import { fadeInAnimationVariantsDiv } from "../lib/animations";
import { ThreeDCardExample } from "./snippets/3d-card-snippet";
import grap from "../../public/images/Events/youtube.png";

export default function Branches() {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={fadeInAnimationVariantsDiv}
      viewport={{
        once: true,
      }}
    >
      <div className="flex flex-col md:flex-row justify-between gap-x-4">
        <ThreeDCardExample
          header={"The Content School"}
          description={
            "A platform dedicated to equipping by tools needed to master the art of content creation."
          }
          img={grap}
          link={"https://www.youtube.com/@aburob"}
        />
        <ThreeDCardExample
          header={"TCF Service"}
          description={
            "Your trusted partner in delivering tailored services that meet the unique needs of businesses and individuals."
          }
          img={grap}
          link={"https://www.youtube.com/@aburob"}
        />
        <ThreeDCardExample
          header={"Arabfluence"}
          description={
            "Hub Drive impactful collaborations and authentic storytelling."
          }
          img={grap}
          link={"https://www.youtube.com/@aburob"}
        />
      </div>
    </motion.div>
  );
}
