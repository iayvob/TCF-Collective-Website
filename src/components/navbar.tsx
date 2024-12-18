"use client";
import { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import logoLg from "../../public/images/logo/logo1.png";
import logoSm from "../../public/images/logo/logo.ico";
import Image from "next/image";
import Link from "next/link";
import DropDownMenu from "./drop-down-menu";
import { motion } from "framer-motion";

interface NavbarProps {
  scrollToWhoWeAre: () => void;
  scrollToOurChannels: () => void;
  scrollToBrands: () => void;
  scrollToFaq: () => void;
}

const Navbar = ({
  scrollToWhoWeAre,
  scrollToOurChannels,
  scrollToBrands,
  scrollToFaq,
}: NavbarProps) => {
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
          className="cursor-pointer hidden 
            md:flex space-x-10 items-center
             text-slate-300 text-center 
             bg-clip-text text-transparent 
             bg-gradient-to-b from-neutral-50
              to bg-neutral-400 bg-opacity-50"
          initial={{ opacity: 0, y: "-80%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div onClick={scrollToWhoWeAre} className="hover:text-gray-50">
            Who We Are
          </div>
          <div onClick={scrollToOurChannels} className="hover:text-gray-50">
            Our Channels
          </div>

          <div onClick={scrollToBrands} className="hover:text-gray-50">
            Brands
          </div>

          <div onClick={scrollToFaq} className="hover:text-gray-50">
            FAQ
          </div>
        </motion.div>

        <div className="flex md:hidden">
          {isDropDownVisible ? (
            // display an x icon when the drop is visible
            <div
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            >
              <X />
              <DropDownMenu
                onClose={closeDropDown}
                scrollToServices={scrollToFaq} // Pass scrollToServices
              />
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
            inline-flex h-12 animate-shimmer items-center justify-center 
            rounded-md border border-slate-800 bg-[linear-gradient(110deg,#ff0048,45%,#6e00f1,55%,#ffc224)] 
            bg-[length:200%_100%] px-6 font-medium text-slate-900 transition-colors
             focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
              focus:ring-offset-slate-50

            "
          >
            Contact
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
