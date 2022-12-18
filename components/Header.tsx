import React from "react";
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"


type Props = {};

export default function Header({}: Props) {
    return (
      <>
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
          <motion.div  //animação dos icones esqueda => direita
          initial ={{
            x: -500,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }} 
          transition={{
            duration:1.5
          }}
          className="flex flex-row items-center">
            <SocialIcon url="https://linkedin.com/in/gabrielgomesfer" fgColor="transparent" bgColor="gray" />
            <SocialIcon url="https://github.com/gabrielgomesfer" fgColor="gray" bgColor="transparent" style={{ height: 99, width: 99 }}/>
            <SocialIcon url="https://instagram.com/gabriel_japson" fgColor="transparent" bgColor="gray" />
          </motion.div>

          <motion.div //animação do contact esqueda <= direita
          initial ={{
            x: 500,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }} 
          transition={{
            duration:1.5
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer">
           <SocialIcon className="cursor-pointer" network="email" fgColor="gray" bgColor="transparent" />
           <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Contact Me</p>
          </motion.div>
        </header>
      </>
  
    )
  }
    