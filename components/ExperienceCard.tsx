import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-l items-center space-y57 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          y:0
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{
          once: true,
        }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://media.licdn.com/dms/image/D4D0BAQHo1GZmhutd4A/company-logo_200_200/0/1664308283764?e=1679529600&v=beta&t=KO0WAaa_TfajelGxgpbEgejgkMmF250jbTho_b7GqQc"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Full Stack Developer student at Trybe</h4>
        <p className="font-bold text-xl2 mt-1">Trybe</p>
        <div className="flex space-x-2 my-2">
          <img className="h-10 w-10 rounded-full" src="https://user-images.githubusercontent.com/52508045/208267256-6ee2b2f7-0854-4cab-b25b-246cc16c62d7.png" alt="" />
          <img className="h-8 w-8 mt-1" src="https://user-images.githubusercontent.com/52508045/208267318-b5ff2f40-f41c-4f16-8495-4b3da1b93b5b.png" alt="" />
          {/* Techs */}
          {/* Techs */}
          {/* Techs */}
        </div>
        <p className="uppercase py-5">Feb 2022 - Feb 2023</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Sumary points</li>
          <li>Sumary points</li>
          <li>Sumary points</li>
          <li>Sumary points</li>
          <li>Sumary points</li>
        </ul>
      </div>
    </article>
  );
}
