"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaJava, FaNodeJs, FaPython } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs, SiMysql, SiMongodb, SiCplusplus, SiSpringboot, SiTypescript, SiAngular, SiGit, SiKubernetes, SiPostman } from 'react-icons/si'

//about data
const about = {
  title: "About Me",
  description: "Full-stack software developer and Assistant System Engineer at TCS, skilled in building scalable, secure, and responsive web applications using React, Angular, Node.js, Next.js, Spring Boot, and MongoDB.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Vibhor Dass"
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 9811476601"
    },
    {
      fieldName: "Email",
      fieldValue: "vibhordass2@gmail.com"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi"
    },

  ]
}

// experience data
const experience = {
  icon: "/app/assets/image/about/html5.svg",
  title: "My Experience",
  items: [
    {
      company: "Tata Consultancy Services",
      position: "Associate System Engineer",
      duration: "May 2025 - Present"
    },
    {
      company: "Beebom Media Pvt. Ltd.",
      position: "Product Data Engineer",
      duration: "Nov 2024 - May 2025"
    },
    {
      company: "Merchit Technologies Pvt. Ltd.",
      position: "Business Operation",
      duration: "Mar 2024 - Jul 2024"
    },
    {
      company: "CariKture India Pvt. Ltd.",
      position: "Web Developer",
      duration: "Sep 2022 - Nov 2022"
    },
  ]
};

// education
const education = {
  icon: "/app/assets/image/about/html5.svg",
  title: "My Education",
  items: [
    {
      institute: "Maharaja Agrasen Institute of Technology",
      position: "B.Tech - Information Technology",
      score: "CGPA: 8.67",
      duration: "2020 - 2024"
    },
  ]
};

// skills
const skills = {
  title: "My Skills",
  skillList: [
    {
      icon: <FaJava />,
      name: "Java"
    },
    {
      icon: <SiCplusplus />,
      name: "C++"
    },
    {
      icon: <FaPython />,
      name: "Python"
    },
    {
      icon: <SiSpringboot />,
      name: "Spring Boot"
    },
    {
      icon: <FaJs />,
      name: "JavaScript"
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript"
    },
    {
      icon: <FaReact />,
      name: "React"
    },
    {
      icon: <SiAngular />,
      name: "Angular"
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js"
    },
    {
      icon: <SiNextdotjs />,
      name: "NextJS"
    },
    {
      icon: <SiMysql />,
      name: "MySQL"
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB"
    },
    {
      icon: <SiGit />,
      name: "Git"
    },
    {
      icon: <SiKubernetes />,
      name: "Kubernetes"
    },
    {
      icon: <SiPostman />,
      name: "Postman"
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../components/ui/tooltip';
import { ScrollArea } from '../../components/ui/scroll-area'
import { motion } from "framer-motion";


const Resume = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.3, ease: "easeIn" }, }}
      className="min-h-[80vh] flex items-center xl:mt-3 mt-0 justify-center py-8 xl:py-0"
    >
      <div className="container mt-0 mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]" >
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6' >
            <TabsTrigger value='experience' >Experience</TabsTrigger>
            <TabsTrigger value='education' >Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About me</TabsTrigger>
          </TabsList>

          {/*Content */}
          <div className="min-h-[55vh] w-full " >
            {/* experience */}
            <TabsContent value='experience' className='w-full' >
              <div className="flex flex-col gap-[30px] text-center xl:text-left " >
                <h3 className="text-4xl font-bold" >
                  {experience.title}
                </h3>
                <ScrollArea className='h-[400px]' >
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]" >
                    {experience.items.map((item, index) => {
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <li key={index} className="bg-[#232329] h-[150px] lg:h-[150px] py-5 px-5 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1" >
                          <span className="text-teal-400" >{item.duration}</span>
                          <h3 className="text-xl max-w-[300px] min-h-[35px] text-center lg:text-left" >{item.position}</h3>
                          <div className="flex items-center gap-3" >
                            <span className="w-[6px] h-[6px] rounded-full bg-teal-400"></span>
                            <p className="text-white/70" >{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>



            {/* education */}
            <TabsContent value='education' className='w-full '>
              <div className="flex flex-col gap-[30px] text-center xl:text-left " >
                <h3 className="text-4xl font-bold" >
                  {education.title}
                </h3>
                <ScrollArea className='h-[400px]' >
                  <ul className="grid grid-cols-1 lg:grid-cols-1  gap-[30px]" >
                    {education.items.map((item, index) => {
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <li key={index} className="bg-[#232329] lg:h-[200px] lg:w-[480px] py-5 px-5 rounded-xl flex flex-col justify-center items-center sm:items-center lg:items-start gap-1" >
                          <span className="text-teal-400" >{item.duration}</span>
                          <h3 className="text-xl lg:max-w-[380px] min-h-[35px] text-center lg:text-left" >{item.position}</h3>
                          <div className="flex items-center gap-3" >
                            <span className="w-[6px] h-[6px] rounded-full mb-[30px]  lg:mb-0 bg-teal-400"></span>
                            <p className="text-white/70" >{item.institute}</p>
                          </div>
                          <div className="flex items-center gap-3" >
                            <span className="w-[6px] h-[6px] rounded-full"></span>
                            <p className="text-white/70" >{item.score}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>




            {/* skills */}
            <TabsContent value='skills' className='w-full'>
              <div className="flex flex-col gap-[30px] " >
                <div className="flex flex-col gap-[30px] text-center xl:text-left" >
                  <h3 className="text-4xl font-bold" >{skills.title}</h3>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[10px] gap-4" >
                  {skills.skillList.map((skill, index) => {
                    return (<li key={index} >
                      <TooltipProvider delayDuration={50} >
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[130px] bg-[#232329] rounded-xl flex justify-center items-center group" >
                            <div className="text-6xl group-hover:text-teal-400" >{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent >
                            <p>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>)
                  })}
                </ul>
              </div>
            </TabsContent>





            {/* about */}
            <TabsContent value='about' className='w-full text-center xl:text-left'>
              <div className="flex flex-col gap-[30px]" >
                <h3 className="text-4xl font-bold" >{about.title}</h3>
                <p className="max-w-[600px] text-white/70 text-lg mx-auto xl:mx-0 " >{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[720px] mx-auto xl:mx-0" >
                  {about.info.map((item, index) => {
                    return (<li key={index} className="flex items-center justify-center xl:justify-start gap-4" >
                      <span className="text-white/70" >{item.fieldName}:  </span>
                      <span className="text-xl" >{item.fieldValue}</span>
                    </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>

    </motion.div>
  )
}

export default Resume
