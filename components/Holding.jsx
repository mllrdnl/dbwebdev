"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import LinkEach from "../components/LinkEach";

const eachLink = [
  {
    id: 0,
    start: 0,
    mid: 0,
    end: 0,
  },
  {
    id: 1,
    start: 0,
    mid: 0,
    end: 0,
  },
  {
    id: 2,
    start: 0,
    mid: 0,
    end: 0,
  },
  {
    id: 3,
    start: 0,
    mid: 0,
    end: 0,
  },
  {
    id: 4,
    start: -10,
    mid: 10,
    end: 0,
  },
  {
    id: 5,
    start: -15,
    mid: 15,
    end: 0,
  },
  {
    id: 6,
    start: -20,
    mid: 20,
    end: 0,
  },
  {
    id: 7,
    start: -25,
    mid: 25,
    end: 0,
  },
  {
    id: 8,
    start: -30,
    mid: 30,
    end: 0,
  },
  {
    id: 9,
    start: -35,
    mid: 35,
    end: 0,
  },
];

const staggerChainLinks = stagger(0.1, { startDelay: 0.15 });

const linkIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function useChainAnimation(isClicked) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate("li", isClicked ? { y: [15, 0] } : { x: [-10, 0, 10] }, {
      duration: 1,
      delay: isClicked ? 0 : staggerChainLinks,
      // initial: isClicked ? { y: 0 } : { x: 10 },
    });
  }, [isClicked]);

  return scope;
}

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);

  const scope = useChainAnimation(isClicked);

  const chainLinks = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5];

  return (
    <div className="w-full h-full flex flex-col">
      {/* IMAGE CONTAINER */}
      <div className="relative max-w-7xl grid grid-cols-6 mx-auto" ref={scope}>
        <div className="w-2/3 max-w-7xl h-full mx-auto mb-0 p-0 col-span-full z-10">
          <Image
            src="/sign_logo_off.png"
            alt="dbwebdev neon light turned off"
            width={1200}
            height={581}
          />
        </div>

        <motion.ul
          // CHAIN LINK CONTAINER
          className="invisible phone:visible col-span-1 w-full absolute -bottom-32 laptop:-bottom-34 right-4 col-start-5 z-0 hover:cursor-pointer"
          whileHover={{ scale: 1.1 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          onClick={() => setIsClicked(!isClicked)}
        >
          {/* {chainLinks.map((link, i) => (
            <li
              className="invisible laptop:visible w-3.5 h-3.5 border-1 border-zinc-900 rounded-full bg-gradient-radial from-zinc-700 to-zinc-800 mb-1 ml-2.5"
              key={i}
            >
              {" "}
            </li>
          ))} */}

          <li className="invisible laptop:visible w-3.5 h-3.5 border-1 border-zinc-900 rounded-full bg-gradient-radial from-zinc-700 to-zinc-800 mb-1 ml-2.5">
            {" "}
          </li>
          <li className="invisible laptop:visible w-3.5 h-3.5 border-1 border-zinc-900 rounded-full bg-gradient-radial from-zinc-700 to-zinc-800 mb-1 ml-2.5">
            {" "}
          </li>
          <li className="invisible laptop:visible w-3.5 h-3.5 border-1 border-zinc-900 rounded-full bg-gradient-radial from-zinc-700 to-zinc-800 mb-1 ml-2.5">
            {" "}
          </li>
          <li className="invisible laptop:visible w-3.5 h-3.5 border-1 border-zinc-900 rounded-full bg-gradient-radial from-zinc-700 to-zinc-800 mb-1 ml-2.5">
            {" "}
          </li>
          <li className="invisible laptop:visible w-3.5 h-3.5 border-1 border-zinc-900 rounded-full bg-gradient-radial from-zinc-700 to-zinc-800 mb-1 ml-2.5">
            {" "}
          </li>
          <li className="invisible laptop:visible w-3.5 h-3.5 border-1 border-zinc-900 rounded-full bg-gradient-radial from-zinc-700 to-zinc-800 mb-1 ml-2.5">
            {" "}
          </li>
          <li className="invisible laptop:visible w-3.5 h-3.5 border-1 border-zinc-900 rounded-full bg-gradient-radial from-zinc-700 to-zinc-800 mb-1 ml-2.5">
            {" "}
          </li>
          <li className="invisible laptop:visible w-3.5 h-3.5 border-1 border-zinc-900 rounded-full bg-gradient-radial from-zinc-700 to-zinc-800 mb-1 ml-2.5">
            {" "}
          </li>
          <li className="invisible laptop:visible w-3.5 h-3.5 border-1 border-zinc-900 rounded-full bg-gradient-radial from-zinc-700 to-zinc-800 mb-1 ml-2.5">
            {" "}
          </li>
          <li className="invisible laptop:visible w-3.5 h-3.5 border-1 border-zinc-900 rounded-full bg-gradient-radial from-zinc-700 to-zinc-800 mb-1 ml-2.5">
            {" "}
          </li>
          <li className="w-6 h-6 ml-1.5 border border-yellow-950 rounded-full bg-gradient-radial from-yellow-900 to-yellow-950">
            {" "}
          </li>
        </motion.ul>
      </div>
      <div className="flex flex-row justify-center mt-0 align-top"></div>
    </div>
  );
}
