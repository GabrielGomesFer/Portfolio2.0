import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Me from "../images/me.jpg";

import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name is Gabriel Gomes",
      "<GuyWhoLovesToCode>",
      "And-Love-to-learn.ts",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div
      className="h-screen flex flex-col items-center justify-center text-center
		space-y-8 overflow-hidden"
    >
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://media.licdn.com/dms/image/C4D03AQHpC7x-tgNVYA/profile-displayphoto-shrink_800_800/0/1664206825316?e=1676505600&v=beta&t=FXvOPLQKyvweK-pqbUckpcAOMFwnw03FIF9ZH6axlYI"
        alt=""
      />
      <div className="z-20">
        <h2 className="test-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Full Stack Developer
        </h2>
        <h1 className="text-5xl lg:6xl front-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#AB51E3" />
        </h1>

        <div className="pt-5">
          <Link href='#about'>
            <button className="heroButton">About</button>
          </Link>
          <Link href='#experience'>
            <button className="heroButton">Experience</button>
          </Link>
          <Link href='#skills'>
            <button className="heroButton">Skills</button>
          </Link>
          <Link href='#projects'>
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
