"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative lg:pr-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}>
        {/* image - cap the max size */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] lg:w-[380px] lg:h-[380px] xl:w-[420px] xl:h-[420px] mix-blend-lighten absolute">
          <Image src="/assets/photo.png" priority quality={100} fill alt="MD Shad Alam" className="object-contain" />
        </motion.div>

        {/* circle */}
        <motion.svg
          className="w-[300px] lg:w-[386px] xl:w-[426px] h-[300px] lg:h-[386px] xl:h-[426px]"
          fill="transparent"
          viewBox="0 0 426 426"
          xmlns="http://www.w3.org/2000/svg">
          <motion.circle
            cx="213"
            cy="213"
            r="210"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
