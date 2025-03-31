"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    href: "/web-development",
  },
  {
    num: "02",
    title: "Web Design",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    href: "/web-design",
  },
  {
    num: "03",
    title: "UX/UI",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    href: "/ux-ui",
  },
  {
    num: "04",
    title: "SEO",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    href: "/seo",
  },
];
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, ease: "easeIn", delay: 2.4 },
          }}
          className="grid grid-cols-1 gap-[60px] md:grid-cols-2 "
        >
          {services?.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex items-center justify-between">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex items-center justify-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl " />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
