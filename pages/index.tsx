import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

import styled from 'styled-components'
import {CodeAlt} from '@styled-icons/boxicons-regular/CodeAlt'

const PurpleCdde = styled(CodeAlt)`
  color: #8861de;
`


const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-scroll z-0 scrollbar
     scrollbar-track-gray-400/20 scrollbar-thumb-[#8861de]/80">
      <Head>
        <title>Gabriel Gomes</title>
      </Head>
      <Header />

      <section id='hero' className='snap-center'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='experience' className='snap-center'>
        <Experience />
      </section>

      <section id='skills' className='snap-center'>
        <Skills />
      </section>

      <section id='projects' className='snap-center'>
        <Projects />
      </section>

      <section id='contact' className='snap-center'>
        <Contact />
      </section>
      
      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <PurpleCdde className='h-10 w-10'/>
          </div>
        </footer>
      </Link>
    </div>

  )
}

export default Home
