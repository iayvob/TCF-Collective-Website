import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { HoverEffect } from "@/src/components/ui/card-hover-effect";

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
      <Avatar className="w-32 h-32 md:w-20 md:h-20">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      </Avatar>
    ),
    title: "TCF Development",
    description:
      "Helping businesses define and build their brand identity, positioning, and messaging to stand out in competitive markets.",
  },
  {
    icon: (
      <Avatar className="w-32 h-32 md:w-20 md:h-20">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      </Avatar>
    ),
    title: "TCF Services",
    description:
      "This could include logo design, visual identity systems, and graphic design for both digital and print media to create a cohesive brand image.",
  },
  {
    icon: (
      <Avatar className="w-32 h-32 md:w-20 md:h-20">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      </Avatar>
    ),
    title: "TCF Copywriting",
    description:
      "Crafting compelling content for websites, social media, and campaigns that aligns with the brand voice and goals.",
  },
];
