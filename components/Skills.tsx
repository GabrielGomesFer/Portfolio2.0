import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

export default function Skills({}: Props) {
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

		className="flex relative flex-col text-center md:text xl:flex-row max-x-[2000px] min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Skills
			</h3>

			<h3 className="absolute top-36 uppercase tracking-[20px] text-gray-500 text-sm">
				Hover over a skill for currency level of proficiency
			</h3>

			<div className="grid grid-cols-4 gap-5 ">
				{/* FRONT-END */}
				{/* javascript */}
				<Skill imgLink="https://user-images.githubusercontent.com/52508045/208267256-6ee2b2f7-0854-4cab-b25b-246cc16c62d7.png" directionLeft={true} percent="100"/>
				{/* Html */}
				<Skill imgLink="https://user-images.githubusercontent.com/52508045/208267318-b5ff2f40-f41c-4f16-8495-4b3da1b93b5b.png" directionLeft={true} percent="100"/>
				{/* css */}
				<Skill imgLink="https://user-images.githubusercontent.com/52508045/208763674-f12af6fe-7a6f-4d87-a852-26cd3a7c657a.png" directionLeft={true} percent="80"/>
				{/* react */}
				<Skill imgLink="https://user-images.githubusercontent.com/52508045/208764363-fcde75c2-3eb3-4c98-b027-2566facdac6f.png" directionLeft={true} percent="100"/>
				{/* tailwind */}
				<Skill imgLink="https://user-images.githubusercontent.com/52508045/208765037-bb7a2121-6f02-43a1-a372-74ef9e161a49.png" percent="75"/>

				{/* BACK-END */}
				{/* node.js */}
				<Skill imgLink="https://user-images.githubusercontent.com/52508045/208768517-b104c8af-331b-4f6b-9a89-c4de16ce6288.png" percent="100"/>
				{/* MYSQL */}
				<Skill imgLink="https://user-images.githubusercontent.com/52508045/208753204-91c0fe91-4665-416c-a65d-efb128ffc87e.png" percent="80"/>
				{/* mongoDB */}
				<Skill imgLink="https://user-images.githubusercontent.com/52508045/208768799-389e1b72-605f-4dd0-9f32-d5670c8234f0.png" percent="80"/>
				{/* jest */}
				<Skill imgLink="https://user-images.githubusercontent.com/52508045/208769164-0098624e-bc8f-42fc-b2ba-ae7f0ca71639.png" directionLeft={true} percent="80"/>
				{/* RTL */}
				<Skill imgLink="https://user-images.githubusercontent.com/52508045/208769609-08a3d701-4151-4a60-9af6-0357c346956b.png" directionLeft={true} percent="80"/>
				{/* MOCHA */}
				<Skill imgLink="https://user-images.githubusercontent.com/52508045/208769863-2a707f42-90e0-423d-bb7c-c5a5078d1f47.svg" directionLeft={true} percent="80"/>
				{/* CHAI */}
				<Skill imgLink="https://user-images.githubusercontent.com/52508045/208770034-990430b7-115d-4235-b47b-c26be4a8db9e.png" directionLeft={true} percent="80"/>
				{/* DOCKER */}
				<Skill imgLink="https://user-images.githubusercontent.com/52508045/208770375-c308c586-1cfd-447e-af89-40a7e916d298.png" percent="100"/>

			</div>
    </motion.div>
  );
}
