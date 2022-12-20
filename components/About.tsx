import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        src="https://media.licdn.com/dms/image/C4D03AQHpC7x-tgNVYA/profile-displayphoto-shrink_800_800/0/1664206825316?e=1676505600&v=beta&t=FXvOPLQKyvweK-pqbUckpcAOMFwnw03FIF9ZH6axlYI"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#AB51E3]/50">little</span>{" "}
          background:
        </h4>
        <p className="text-base">
          Ever since I was young, I’ve been in love with technology, in my
          teenage years I explored Javascript and HTML. For a little while there
          I distanced myself from the area, but now I see it as my passion. Now
          looking for challenges I’ve been studying a new segment: Full Stack
          Web Development on Trybe. I see technology as a important tool to
          change the world and I want to be a part of that.
        </p>
      </div>
    </motion.div>
  );
}
