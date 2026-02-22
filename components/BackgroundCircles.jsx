import React from "react";
import { motion } from "framer-motion";

const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="absolute top-1/2 left-1/2 flex justify-center items-center z-0"
    >
      <div className="absolute border border-[#333333] rounded-full h-[130px] w-[130px] animate-ping" />
      <div className="rounded-full border border-[#333333] h-[250px] w-[250px] absolute" />
      <div className="rounded-full border border-[#333333] h-[400px] w-[400px] absolute" />
      <div className="rounded-full border border-[#F7AB0A] opacity-20 h-[550px] w-[550px] absolute animate-pulse" />
      {/* <div className="rounded-full border border-[#333333] h-[600px] w-[600px] absolute mt-52" /> */}
    </motion.div>
  );
};

export default BackgroundCircles;
