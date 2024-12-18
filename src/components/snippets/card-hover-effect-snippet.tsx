import { HoverEffect } from "@/src/components/ui/card-hover-effect";
import {
  PiAppStoreLogo,
  PiBrandy,
  PiHeadsetFill,
  PiLock,
  PiMegaphone,
  PiMonitor,
  PiPaintBrush,
  PiPrinter,
  PiStorefront,
  PiTarget,
  PiVideoCamera,
} from "react-icons/pi";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiTarget className="w-8 h-8 text-[#ffc224]" />
      </div>
    ),
    title: "Brand Strategy and Development",
    description:
      "Helping businesses define and build their brand identity, positioning, and messaging to stand out in competitive markets.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiPaintBrush className="w-8 h-8 text-[#ffc224]" />
      </div>
    ),
    title: "Creative Design Services",
    description:
      "This could include logo design, visual identity systems, and graphic design for both digital and print media to create a cohesive brand image.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiPrinter className="w-8 h-8 text-[#ffc224]" />
      </div>
    ),
    title: "Content Creation and Copywriting",
    description:
      "Crafting compelling content for websites, social media, and campaigns that aligns with the brand voice and goals.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiMegaphone className="w-8 h-8 text-[#ffc224]" />
      </div>
    ),
    title: "Social Media",
    description:
      "We offer social media management and ad creation services. We can help you grow your social media presence and reach new customers.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiVideoCamera className="w-8 h-8 text-[#ffc224]" />
      </div>
    ),
    title: "Video Production and Animation",
    description:
      "Creating promotional videos, brand films, and animated content that communicates the brand story effectively.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiHeadsetFill className="w-8 h-8 text-[#ffc224]" />
      </div>
    ),
    title: "Event Planning and Marketing",
    description:
      "Organizing branded events, product launches, and other promotional activities to engage customers directly.",
  },
];
