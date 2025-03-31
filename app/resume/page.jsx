"use client";

import { FaHtml5, FaCss3, FaReact, FaJs, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// about data
const about = {
  title: "About me",
  description: "Wellcome to profile My self",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Luan Nguyen",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+84) 386 619 455",
    },
    {
      fieldName: "Experience",
      fieldValue: "+2 years",
    },
    {
      fieldName: "Email",
      fieldValue: "nguyendinhluan25@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Vietnamese",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Vietnamese",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Vietnamese",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Vietnamese",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "This is a description of my experience",
  items: [
    {
      company: "Company Name",
      position: "Frontend Developer",
      duration: "2022 - Present",
    },
    {
      company: "Company Name",
      position: "Freelance Web Developer",
      duration: "2021 - 2022",
    },
    {
      company: "Company Name",
      position: "Freelance Web Developer",
      duration: "2021 - 2022",
    },
    {
      company: "Company Name",
      position: "Frontend Developer",
      duration: "2022 - Present",
    },
    {
      company: "Company Name",
      position: "Freelance Web Developer",
      duration: "2021 - 2022",
    },
    {
      company: "Company Name",
      position: "Freelance Web Developer",
      duration: "2021 - 2022",
    },
    {
      company: "Company Name",
      position: "Freelance Web Developer",
      duration: "2021 - 2022",
    },
    {
      company: "Company Name",
      position: "Freelance Web Developer",
      duration: "2021 - 2022",
    },
    {
      company: "Company Name",
      position: "Freelance Web Developer",
      duration: "2021 - 2022",
    },
    {
      company: "Company Name",
      position: "Freelance Web Developer",
      duration: "2021 - 2022",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "This is a description of my education",
  items: [
    {
      institution: "Company Name",
      degree: "Frontend Developer",
      duration: "2023",
    },
    {
      institution: "Codecademy",
      degree: "Frontend Developer",
      duration: "2022",
    },
    {
      institution: "Design school",
      degree: "Frontend Developer",
      duration: "2018-2022",
    },
  ],
};

// skills data
const skills = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "This is a skill of my education",
  skillList: [
    {
      name: "HTML",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      icon: <FaCss3 />,
    },
    {
      name: "Javascript",
      icon: <FaJs />,
    },
    {
      name: "ReactJs",
      icon: <FaReact />,
    },
    {
      name: "NextJs",
      icon: <SiNextdotjs />,
    },
    {
      name: "Tailwind.css",
      icon: <SiTailwindcss />,
    },
    {
      name: "Figma",
      icon: <FaFigma />,
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[680px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                    {experience?.items?.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] px-10 rounded-xl flex flex-col justify-center items-center gap-1 lg:items-start"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
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
              {/* Education */}
              <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[680px] text-white/60 mx-auto xl:mx-0">
                    {education.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                      {education?.items?.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] px-10 rounded-xl flex flex-col justify-center items-center gap-1 lg:items-start"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.degree}
                            </h3>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">
                                {item.institution}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full">
              {/* Skills */}
              <TabsContent value="skills" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left mb-3">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[680px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills?.skillList?.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
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
              </TabsContent>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className=" text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
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
