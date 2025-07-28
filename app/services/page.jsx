"use client";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web Developmentt",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, optio.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Desiginer",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, optio.",
    href: "",
  },
  {
    num: "03",
    title: "Logo Desiginer",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, optio.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, optio.",
    href: "",
  },
];

import { motion } from "framer-motion";
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col  justify-center py-12 md:py-0">
      <div className="container md:max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {services.map((service, index) => {
            return (
              <div key={index} className="flex flex-1 flex-col justify-center gap-6 group ">
                {/* Top */}
                <div className="w-full flex items-center justify-between">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500 ">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-16 h-16 rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex items-center justify-center hover:-rotate-45 ">
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* Title */}
                <h2 className="text-4xl text-white group-hover:text-accent font-bold leading-none duration-500 transition-all ">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
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
