"use client";

import usePersistState from "../lib/usePersistState";
import Image from "next/image";
import Link from "next/link";
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
  // const [isClicked, setIsClicked] = useState(false);
  const [isClicked, setIsClicked] = useState(() => {
    return JSON.parse(localStorage.getItem("clicked_state")!) || "";
  });

  const handleToggle = () => {
    setIsClicked(!isClicked);
    console.log(isClicked);
  };

  useEffect(() => {
    localStorage.setItem("clicked_state", JSON.stringify(isClicked));
  }, [isClicked]);

  // useEffect(() => {
  //   const data = window.localStorage.getItem("clicked_state");
  //   if (data !== null) setIsClicked(JSON.parse(data));
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem("clicked_state", JSON.stringify(isClicked));
  // }, [isClicked]);

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
          className="absolute desktop:col-start-5 pointer-events-auto smphone:visible phone:visible desktop:col-span-1 desktop:w-1/2  desktop:-bottom-32 smphone:-bottom-6 smphone:-right-8 smphone:col-span-1 smphone:col-start-6 smphone: phone:col-span-1 phone:w-1/2 phone:col-start-6 phone:-bottom-8 tablet:col-span-1 tablet:col-start-6 tablet:-bottom-24 tablet:right-28 laptop:-bottom-32 laptop:right-26 desktop:right-4 phone:right-0 z-0 hover:cursor-pointer"
          whileHover={{ scale: 1.1, x: 10, y: 40 }}
          // onHoverStart={(e) => {}}
          // onHoverEnd={(e) => {}}
          whileTap={{ y: 90 }}
          transition={{ type: "spring", stiffness: 600, damping: 20 }}
          onClick={handleToggle}
        >
          {isClicked ? <ClickedChain /> : <UnClickedChain />}
        </motion.div>
      </div>
      <div className="flex flex-row w-full h-full max-w-7xl tablet:overflow-auto justify-between mt-12 smphone:mt-2 smphone:mx-auto smphone:p-6  phone:mx-auto desktop:p-12 smphone:flex-col phone:flex-col desktop:flex-row">
        <div className="smphone:w-64 phone:mx-auto tablet:w-80 laptop:w-1/2 desktop:w-80">
          {isClicked ? (
            <div className="hover:scale-125 cursor-pointer transition ease-in-out z-10">
              <Link
                href="/about"
                className="hover:scale-125 cursor-pointer transition ease-in-out"
              >
                <Image src={aboutPoster} alt="about me poster" />
              </Link>
            </div>
          ) : (
            <Image src={aboutOff} alt="about me poster" />
          )}
        </div>
        <div className="smphone:w-64 phone:mx-auto tablet:w-80 laptop:w-1/2 desktop:w-80">
          {isClicked ? (
            <div className="hover:scale-125 cursor-pointer transition ease-in-out">
              <Link href="/portfolio">
                <Image src={portfolioPoster} alt="portfolio poster" />
              </Link>
            </div>
          ) : (
            <Image src={portfolioOff} alt="portfolio poster" />
          )}
        </div>
        <div className="smphone:w-64 phone:mx-auto tablet:w-80 laptop:w-1/2 desktop:w-80">
          {isClicked ? (
            <div className="hover:scale-125 cursor-pointer transition ease-in-out">
              <Link href="/contact">
                <Image src={contactPoster} alt="portfolio poster" />
              </Link>
            </div>
          ) : (
            <Image src={contactOff} alt="portfolio poster" />
          )}
        </div>
      </div>
    </div>
  );
}
