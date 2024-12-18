"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import slide from "../../../public/images/hero/hero.jpeg";
import slide1 from "../../../public/images/hero/hero1.jpeg";
import slide2 from "../../../public/images/hero/hero2.jpeg";
import slide3 from "../../../public/images/hero/hero3.jpeg";
import slide4 from "../../../public/images/hero/hero4.jpeg";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fadeInAnimationVariantsDiv1 } from "@/src/lib/animations";

const SliderOne = () => {
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    className: "w-full mx-auto cursor-pointer center-mode",
  };

  if (isMediumScreen) {
    settings.slidesToShow = 1.67;
  } else if (isSmallScreen) {
    settings.slidesToShow = 1;
  }

  return (
    <div className="relative">
      {/* Top Black Background */}
      <div className="bg-black h-[50vh] w-full"></div>

      {/* Middle Slider */}
      <div className="absolute top-[50%] left-0 w-full transform -translate-y-1/2 z-10">
        <motion.div
          className="flex gap-3"
          initial="initial"
          whileInView="animate"
          variants={fadeInAnimationVariantsDiv1}
          viewport={{
            once: true,
          }}
        >
          <Slider {...settings}>
            <div className="rounded-md px-2 md:p-10">
              <Image
                priority
                src={slide}
                alt="slide"
                width={500}
                height={500}
                className="rounded-2xl"
              />
            </div>
            <div className="rounded-md px-2 md:p-10">
              <Image
                priority
                src={slide1}
                alt="slide"
                width={500}
                height={500}
                className="rounded-2xl"
              />
            </div>
            <div className="rounded-md px-2 md:p-10">
              <Image
                priority
                src={slide2}
                alt="slide"
                width={500}
                height={500}
                className="rounded-2xl"
              />
            </div>
            <div className="rounded-md px-2 md:p-10">
              <Image
                priority
                src={slide3}
                alt="slide"
                width={500}
                height={500}
                className="rounded-2xl"
              />
            </div>
            <div className="rounded-md px-2 md:p-10">
              <Image
                priority
                src={slide4}
                alt="slide"
                width={500}
                height={500}
                className="rounded-2xl"
              />
            </div>
          </Slider>
        </motion.div>
      </div>
      <div className="bg-gray-100 h-[50vh] w-full rounded-t-3xl"></div>
    </div>
  );
};

export default SliderOne;
