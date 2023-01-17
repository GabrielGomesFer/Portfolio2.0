import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-l items-center space-y57 flex-shrink-0 w-[500px] md:w-[600px] xl:w-full snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
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

        <p className="uppercase py-5">Feb 2022 - Feb 2023</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li> More than 1500 hours of formation </li>
          <li>Agile methodologies</li>
          <li>Front End</li>
          <li>Back End</li>
          <li>QA</li>
        </ul>
      </div>
    </article>
  );
}
