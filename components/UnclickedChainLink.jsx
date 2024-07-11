import React from "react";
import { motion } from "framer-motion";

const UnclickedChainLink = ({ start, mid, end }) => {
  // const linkXposition = {
  //   start: [0, 0, 0, -10, -15, -20, -25, -30, -35, -40],
  //   mid: [0, 0, 0, 10, 15, 20, 25, 30, 35, 40],
  //   end: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  // };

  return (
    <motion.div
      className="invisible laptop:visible w-3.5 h-3.5 border-1 border-zinc-900 rounded-full bg-gradient-radial from-zinc-700 to-zinc-800 mb-1 ml-2.5"
      animate={{
        x: [start, mid, end],
        ease: "easeIn",
        times: [0, 0.5, 0.5, 1],
        repeat: Infinity,
        repeatDelay: 2,
      }}
    >
      {" "}
    </motion.div>
  );
};

export default UnclickedChainLink;
