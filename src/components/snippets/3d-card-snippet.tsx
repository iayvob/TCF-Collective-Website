"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/src/components/ui/3d-card";
import {
  PiArrowCircleRightFill,
  PiCheckCircle,
  PiYoutubeLogo,
} from "react-icons/pi";
import Link from "next/link";

type Props = {
  header: string;
  description: string;
  img: StaticImageData;
  link: string;
};

export function ThreeDCardExample({ header, description, img, link }: Props) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white flex items-center gap-3"
        >
          {header} <PiCheckCircle /> <PiYoutubeLogo />
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={img}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-4">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <Link
              href={link}
              className=" flex items-center gap-2"
            >
              More <PiArrowCircleRightFill />
            </Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
