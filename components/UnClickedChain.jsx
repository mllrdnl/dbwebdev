import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const UnClickedChain = () => {
  return (
    <div className="w-full absolute -bottom-6 laptop:-bottom-34 right-32 col-start-1 z-0 hover:cursor-pointer">
      <Image
        src="/chain_off3.png"
        alt="dbwebdev neon light turned off"
        width={100}
        height={180}
      />
    </div>
  );
};

export default UnClickedChain;
