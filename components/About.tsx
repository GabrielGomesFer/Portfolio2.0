import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
	initial={{
		opacity: 0
	}}
	whileInView={{
		opacity:1,
	}}
	transition={{
		duration: 1.5
	}}
	className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
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
          Sou apaixonado por tecnologia desde cedo, na adolescência comecei a me
          aventurar com Javascript e HTML, acabei me distanciando da área por um
          tempo, mas percebi que esta é minha paixão. Buscando novos desafios,
          agora, estou estudando um novo segmento: Desenvolvimento Web Full
          Stack na Trybe. Vejo a tecnologia como uma importante ferramenta para
          mudarmos o mundo e quero contribuir para isso.
        </p>
      </div>
    </motion.div>
  );
}
