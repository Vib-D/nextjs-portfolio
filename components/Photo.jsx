"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import pic from '../app/assets/image/vib.png'


const Photo = () => {
  return (
    <div className="w-full h-full relative" >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.85,
          transition: { delay: 0.2, duration: 0.2, ease: "easeIn" },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.85,
            transition: { delay: 0.5, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[270px] h-[275px] xl:w-[450px] xl:h-[450px] mt-3 ml-3.5 xl:ml-6 xl:mt-6  absolute"
        >
          <Image className="object-contain rounded-full" src={pic} priority={true} quality={100} fill sizes="any" alt="Me" />
        </motion.div>

        {/*Circle */}
        <motion.svg className='w-[300px] xl:w-[500px] h-[300px] xl:h-[500px]' fill='transparent' viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg' >
          <motion.circle cx='250' cy='250' r='245' stroke='#2DD4BF' strokeWidth='4' strokeLinecap='round' strokeLinejoin='round' initial={{
            strokeDasharray: '24 10 0 0'
          }} 
          animate={{
            strokeDasharray: ["15 120 25 25", "16 20 92 72", "4 230 22 22"],
            rotate: [120, 360]
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          />
          <motion.circle cx='250' cy='250' r='235' stroke='#2DD4BF' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round' initial={{
            strokeDasharray: '20 10 0 0'
          }} 
          animate={{
            strokeDasharray: ["15 110 18 25", "16 25 72 72", "4 250 52 22"],
            rotate: [180, 360]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          />
        </motion.svg>
      </motion.div>
    </div>
  )
}

export default Photo
