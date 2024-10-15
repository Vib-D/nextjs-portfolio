"use client"

import { motion } from "framer-motion"
import React, { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip'
import Link from "next/link"
import Image from "next/image"
import SliderButton from "../../components/ui/SliderButton"



{/* Project assets */}
import project1 from '../assets/image/goblogs.png'
import project2 from '../assets/image/twitter.png'
import project3 from '../assets/image/gor.png'


const projects = [
  {
    num: '01',
    category: 'Frontend',
    title: 'GoBlogs',
    description: 'Developed a fully responsive blog platform using the MERN stack. The frontend integrates modern UI/UX principles with dynamic routing, ensuring a seamless user experience across devices.',
    stack: [
      { name: "React" },
      { name: "Express.js" },
      { name: "Node.js" },
      { name: "MongoDB" },
    ],
    image: project1,
    live: "https://goblogs-5wm7.onrender.com",
    github: "https://github.com/Vib-D/GoBlogs",
  },
  {
    num: '02',
    category: 'FullStack',
    title: 'X-Social Media',
    description: 'Built a feature-rich, responsive social media application using Next.js, TailwindCSS, and MongoDB for the database. The platform supports dynamic content, real-time interactions, and optimized UI for seamless performance across devices.',
    stack: [
      { name: "Next.js" },
      { name: "TailwindCSS" },
      { name: "MongoDB" },
    ],
    image: project2,
    live: "https://x-two-pi.vercel.app/",
    github: "https://github.com/Vib-D/X-SocialMedia",
  },
  {
    num: '03',
    category: 'Frontend',
    title: 'Gourmetia',
    description: 'Designed a fully responsive restaurant menu website using React, incorporating modern UI/UX principles from Figma designs.',
    stack: [
      { name: "React" },
      { name: "Figma" },
      { name: "TailwindCSS" },
    ],
    image: project3,
    live: "https://react-restaurant-ruby-six.vercel.app/",
    github: "https://github.com/Vib-D/react_restaurant",
  },

]


const Projects = () => {
  

  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);

  }

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.3, ease: "easeIn" }, }} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0" >
      <div className="container mx-auto" >
        <div className="flex flex-col xl:flex-row xl:gap[20px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
            <div className="flex flex-col gap-[20px] h-[50%]" >
              <div className="text-6xl leading-none text-white/70 font-bold text-outline" >
                {project.num}
              </div>
              <h2 className="text-[42px] mt-2 font-bold leading-none text-white group-hover:text-teal400 transition-all duration-500" >
                {project.title} 
                {/* <div className="flex text-xl text-teal-400/40 mt-1" >
                  <p>
                    {project.category} Project
                  </p>
                </div> */}
              </h2>
              <p className="text-white/70" >
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-5" >
                {project.stack.map((item, index) => {
                  return (<li key={index} className="text-xl text-teal-400">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>)
                })}
              </ul>
              <div className="border border-white/20" ></div>
              <div className="flex items-center gap-4" >
                {/* Link button */}
                <Link href={project.live} target="_blank" >
                  <TooltipProvider delayDuration={50} >
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-[#232329] flex justify-center items-center group" >
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-teal-400" />
                      </TooltipTrigger>
                      <TooltipContent >
                        <p >Live Link</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github button */}
                <Link href={project.github} target="_blank" >
                  <TooltipProvider delayDuration={50} >
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-[#232329] flex justify-center items-center group" >
                        <BsGithub className="text-white text-3xl group-hover:text-teal-400" />
                      </TooltipTrigger>
                      <TooltipContent >
                        <p >Github Link</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[400px] h-[300px] rounded-xl mb-12" onSlideChange={handleSlideChange} >
              {projects.map((project, index) => {
                return (<SwiperSlide key={index} className="w-full" >
                  <div className="h-[460px] relative group flex justify-center items-center bg-teal-100/30" >
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10" >

                    </div>
                    {/* image */}
                    <div className="relative w-full h-full" >
                      <Image src={project.image} fill className="object-cover" alt="Project Image" />
                    </div>
                  </div>

                </SwiperSlide>);

              })}
              {/* slider buttons */}
              <SliderButton containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_20px)] xl:bottom-50 z-20 w-full justify-between  xl:justify-none'
              btnStyles='bg-teal-400 hover:bg-teal-900 hover:text-teal-100 text-primary transition-all text-[22px] w-[40px] h-[40px] rounded-l rounded-r flex justify-center items-center ' iconsStyles={undefined}              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Projects
