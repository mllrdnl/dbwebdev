import React from "react";
import { motion } from "framer-motion";

const variants = {
  start: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  stop: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const LinkEach = () => {
  return (
    <motion.li variants={variants} whileHover={{ scale: 1.1 }}>
      <div className="invisible laptop:visible w-3.5 h-3.5 border-1 border-zinc-900 rounded-full bg-gradient-radial from-zinc-700 to-zinc-800 mb-1 ml-2.5">
        {" "}
      </div>
    </motion.li>
  );
};

export default LinkEach;
