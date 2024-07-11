import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ClickedChain = () => {
  return (
    <div className="w-full absolute -bottom-6 laptop:-bottom-34 right-32 col-start-1 z-0 hover:cursor-pointer">
      <Image
        src="/chain_on.png"
        alt="dbwebdev neon light turned off"
        width={200}
        height={200}
      />
    </div>
  );
};

export default ClickedChain;
