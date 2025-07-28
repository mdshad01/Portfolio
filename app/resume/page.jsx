"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaFigma, FaJava } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongoose,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import { motion } from "framer-motion";

// about data
const about = {
  title: "About me",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum blanditiis nisi exercitationem dolor.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "MD Shad Alam",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 7295867560",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "shad.01",
    },
    {
      fieldName: " Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "shadalam0024@gmail.com",
    },
    {
      fieldName: "Freelancer",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi",
    },
  ],
};

// Experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum blanditiis nisi exercitationem.",
  items: [
    {
      company: "Tech Solution Inc.",
      position: "Full Stack Developer",
      duration: "2023 - present",
    },
    {
      company: "Web Design Studio",
      position: "Front End Developer Intern",
      duration: "Summer 2022",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "2021 - 2022",
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2020 - 2021",
    },
    {
      company: "Digital Agency",
      position: "UI/UX Designer",
      duration: "2019 - 2020",
    },
    {
      company: " Software Development Dirm",
      position: " Junior Developer",
      duration: "2018 - 2019",
    },
  ],
};

// Education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum blanditiis nisi exercitationem.",
  items: [
    {
      institution: "Netaji Subhas University",
      degree: " Bachelors of computer application (BCA)",
      duration: "2023 - 2026",
    },
    {
      institution: "Youtube",
      degree: "Next.js",
      duration: "2025 - present",
    },
    {
      institution: "Online Course Platform",
      degree: " Full Stack Web Development",
      duration: "2024 - 2025",
    },
    {
      institution: "Online Course ",
      degree: "DSA in Java",
      duration: "2023 - 2024",
    },
  ],
};

// Skills data

const skills = {
  title: "My Skills",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum blanditiis nisi exercitationem dolor.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <SiJavascript />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.CSS",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiExpress />,
      name: "express.js",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiMongoose />,
      name: "mongoose",
    },
    {
      icon: <FaJava />,
      name: "java",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    // {
    //   icon: <FaFigma />,
    //   name: "figma",
    // },
  ],
};
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto max-w-6xl">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 ">
            <TabsTrigger value="experience">Experience </TabsTrigger>
            <TabsTrigger value="education">Education </TabsTrigger>
            <TabsTrigger value="skills">Skills </TabsTrigger>
            <TabsTrigger value="about">About me </TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[80vh] w-full ">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-start">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-start">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* Dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-x-6 xl:gap-y-5 gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="h-[125px] w-full bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-400">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 min-w-[620px] mx-auto lg:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center lg:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName} : </span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
