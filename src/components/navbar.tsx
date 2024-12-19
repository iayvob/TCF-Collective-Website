"use client";
import { useState } from "react";
import { AlignJustify, ArrowRightIcon, X } from "lucide-react";
import logoLg from "../../public/images/logo/logo1.png";
import logoSm from "../../public/images/logo/logo.ico";
import Image from "next/image";
import Link from "next/link";
import DropDownMenu from "./drop-down-menu";
import { motion } from "framer-motion";
import { Url } from "../lib/utils";

const Navbar = () => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };

  return (
    <div>
      <div className="p-6 md:p-10 flex items-center justify-between z-50">
        <motion.div
          className="flex gap-3"
          initial={{ opacity: 0, x: "-80%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link className="cursor-pointer hidden md:flex" href="/">
            <Image
              priority
              src={logoLg}
              alt="Logo"
              width={200}
              height={100}
              className="w-20 h-10 md:w-14 md:h-14"
            />
          </Link>
          <Link className="cursor-pointer flex md:hidden" href="/">
            <Image
              priority
              src={logoSm}
              alt="Logo"
              width={100}
              height={100}
              className="w-10 h-10 md:w-14 md:h-14"
            />
          </Link>
        </motion.div>
        <motion.div
          className="cursor-pointer hidden md:flex space-x-10 items-center text-slate-300 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50"
          initial={{ opacity: 0, y: "-80%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href={`${Url}#whoWeAre`} className="hover:text-gray-50">
            Who We Are
          </Link>
          <Link href={`${Url}#ourChannels`} className="hover:text-gray-50">
            Our Channels
          </Link>

          <Link href={`${Url}#brands`} className="hover:text-gray-50">
            Brands
          </Link>

          <Link href={`${Url}#faq`} className="hover:text-gray-50">
            FAQ
          </Link>
        </motion.div>

        <div className="flex md:hidden">
          {isDropDownVisible ? (
            // display an x icon when the drop is visible
            <div
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            >
              <X />
              <DropDownMenu onClose={closeDropDown} />
            </div>
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            />
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, x: "80%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex"
        >
          <Link
            href="/contact"
            className="
            group items-center flex gap-2 justify-center rounded-xl border border-slate-800 bg-gradient-to-b from-[#6e00f1] to-[#ff003f] text-neutral-300 py-2 px-6"
          >
            Contact{" "}
            <ArrowRightIcon className="group-hover:translate-x-1 transition-all" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
