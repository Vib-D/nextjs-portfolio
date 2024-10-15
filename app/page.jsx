import { Button } from "../components/ui/button"
import { FiDownload } from 'react-icons/fi'
import Socials from '../components/Socials'
import React from "react"
import Photo from '../components/Photo';


const Home = () => {
  return (

    <section className="h-full" >
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-10 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl text-white/80 ">Software Developer</span>
            <h1 className="h1">Hello I&apos;m  <br /> <span className="text-teal-400">Vibhor Dass</span></h1>
            <p className="max-w-[550px] mb-9 mt-6 text-white/80" >
              Passionate developer skilled in transforming ideas into impactful web applications. <br />
              Proficient in both front-end and back-end development, with a focus on creating seamless, user-friendly digital experiences.
            </p>
            {/* Buttons and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="" download="Vibhor_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant='outline' size='lg' className='flex items-center mt-5 gap-2'>
                  <span> Download Resume </span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8  xl:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles='w-10 h-10 mt-5 border-[1.5px] border-teal-400 rounded-full flex justify-center items-center text-teal-400 hover:bg-teal-900 hover:text-teal-100 hover:transition-all duration-500' />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 mt-5 xl:mt-0 xl:mb-0" >
            <Photo />
          </div>
        </div>
      </div>
    </section>


  )
}

export default Home
