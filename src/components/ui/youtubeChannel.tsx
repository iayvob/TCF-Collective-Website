import { Avatar, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  ChannelName: string;
  ChannelContent: string;
  channelLogo: StaticImageData;
  channelLink: "";
};

export default function YoutubeChannel({
  ChannelName,
  ChannelContent,
  channelLogo,
  channelLink,
}: Props) {
  return (
    <div className="flex flex-col items-center space-y-5 cursor-pointer">
      <Link href={channelLink}></Link>
      <Avatar className="w-32 h-32 md:w-20 md:h-20">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      </Avatar>
      <div>
        <h3 className="text-xl md:text-2xl text-center font-bold font-Roboto bg-clip-text text-transparent bg-gradient-to-b from-[#ff003f] to-neutral-400 bg-opacity-50">
          {ChannelName}
        </h3>
        <p className="text-lg font-normal text-neutral-300 max-w-[20rem] text-center mx-auto px-4">
          {ChannelContent}
        </p>
      </div>
    </div>
  );
}
