"use client";
import { motion } from "framer-motion";
import {
  fadeInAnimationVariantsChannel,
  fadeInAnimationVariantsDiv,
  fadeInAnimationVariantsDiv1,
  fadeInAnimationVariantsDiv2,
} from "../lib/animations";
import { StaticImageData } from "next/image";
import img from "../../public/images/Events/results.png";
import YoutubeChannel from "./ui/youtubeChannel";

type Props = {
  ChannelName: string;
  ChannelContent: string;
  channelLogo: StaticImageData;
  channelLink: "";
};

const channels: Props[] = [
  {
    ChannelName: "channel name",
    ChannelContent: "create animate regumate your udejnu juring and furing",
    channelLogo: img,
    channelLink: "",
  },
  {
    ChannelName: "channel name",
    ChannelContent: "create animate regumate your udejnu juring and furing",
    channelLogo: img,
    channelLink: "",
  },
  {
    ChannelName: "channel name",
    ChannelContent: "create animate regumate your udejnu juring and furing",
    channelLogo: img,
    channelLink: "",
  },
  {
    ChannelName: "channel name",
    ChannelContent: "create animate regumate your udejnu juring and furing",
    channelLogo: img,
    channelLink: "",
  },
  {
    ChannelName: "channel name",
    ChannelContent: "create animate regumate your udejnu juring and furing",
    channelLogo: img,
    channelLink: "",
  },
  {
    ChannelName: "channel name",
    ChannelContent: "create animate regumate your udejnu juring and furing",
    channelLogo: img,
    channelLink: "",
  },
  {
    ChannelName: "channel name",
    ChannelContent: "create animate regumate your udejnu juring and furing",
    channelLogo: img,
    channelLink: "",
  },
  {
    ChannelName: "channel name",
    ChannelContent: "create animate regumate your udejnu juring and furing",
    channelLogo: img,
    channelLink: "",
  },
];

const OurChannels = () => {
  return (
    <section className="mt-10 md:py-10 bg-[#f6f5f4] w-full rounded-3xl flex flex-col items-center">
      <div className="p-4 mx-auto relative z-10 w-full">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={fadeInAnimationVariantsDiv}
          viewport={{
            once: true,
          }}
          className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-[#ff003f] to-[#6e00f1] bg-opacity-50 font-bold"
        >
          Our Channels
        </motion.div>

        <motion.p
          initial="initial"
          whileInView="animate"
          variants={fadeInAnimationVariantsDiv}
          viewport={{
            once: true,
          }}
          className="mt-4 text-lg font-normal text-neutral-800 max-w-lg text-center mx-auto"
        >
          Explore a variety of YouTube channels showcasing diverse content.
        </motion.p>
      </div>
      <div className="w-full flex flex-col items-center mt-10">
        <div className="w-[80%] flex flex-col md:flex-row items-center justify-center flex-wrap gap-5">
          {channels.map((channel, index) => (
            <motion.div
              key={index}
              variants={fadeInAnimationVariantsChannel}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <YoutubeChannel
                ChannelName={channel.ChannelName}
                ChannelContent={channel.ChannelContent}
                channelLogo={channel.channelLogo}
                channelLink={channel.channelLink}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurChannels;
