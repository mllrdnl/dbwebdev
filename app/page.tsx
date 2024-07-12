"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useAnimate, useTransform } from "framer-motion";
import UnClickedChain from "../components/UnClickedChain";
import ClickedChain from "../components/ClickedChain";
import aboutPoster from "../public/AboutPoster_On4.png";
import portfolioPoster from "../public/PortfolioPoster_On.png";
import contactPoster from "../public/ContactPoster_On.png";
import aboutOff from "../public/AboutPoster_Off.png";
import portfolioOff from "../public/PortfolioPoster_Off.png";
import contactOff from "../public/ContactPoster_Off.png";

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="w-full h-full flex flex-col">
      {/* IMAGE CONTAINER */}
      <div className="relative max-w-7xl grid grid-cols-6 mx-auto">
        <div className="w-2/3 max-w-7xl h-full mx-auto mb-0 p-0 col-span-full z-10">
          <Image
            src={isClicked ? "/sign_logo_on.png" : "/sign_logo_off.png"}
            alt="dbwebdev neon light turned off"
            width={1200}
            height={581}
          />
        </div>
        <motion.div
          className="col-start-5 invisible phone:visible col-span-1 w-1/2 absolute -bottom-32 laptop:-bottom-34 right-4 z-0 hover:cursor-pointer"
          whileHover={{ scale: 1.1, x: 10, y: 40 }}
          // onHoverStart={(e) => {}}
          // onHoverEnd={(e) => {}}
          whileTap={{ y: 90 }}
          transition={{ type: "spring", stiffness: 600, damping: 20 }}
          onClick={() => setIsClicked(!isClicked)}
        >
          {isClicked ? <ClickedChain /> : <UnClickedChain />}
        </motion.div>
      </div>
      <div className="flex flex-row w-full justify-between mt-12 px-48">
        <div className="w-80">
          {isClicked ? (
            <Image src={aboutPoster} alt="about me poster" />
          ) : (
            <Image src={aboutOff} alt="about me poster" />
          )}
        </div>
        <div className="w-80">
          {isClicked ? (
            <Image src={portfolioPoster} alt="portfolio poster" />
          ) : (
            <Image src={portfolioOff} alt="portfolio poster" />
          )}
        </div>
        <div className="w-80">
          {isClicked ? (
            <Image src={contactPoster} alt="portfolio poster" />
          ) : (
            <Image src={contactOff} alt="portfolio poster" />
          )}
        </div>
      </div>
      {/* <div className="flex flex-row justify-center mt-0 align-top"></div> */}
    </div>
  );
}
