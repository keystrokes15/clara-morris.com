"use client"
import React, { useTransition, useState } from "react";
import Image from "next/image"
import TabButtons from "./TabButtons"
import { motion } from "framer-motion"

const TABS_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Massachusetts Institute of Technology</li>
        <li>University of Cambridge</li>
      </ul>
    )
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>React</li>
        <li>JavaScript</li>
        <li>Rust</li>
        <li>AWS</li>
        <li>Google Cloud Services</li>
      </ul>
    )
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Senior developer at Google</li>
        <li>UI/UX Designer</li>
        <li>Web developer</li>
      </ul>
    )  
  }
]

const About = () => {
    const [tab, setTab] = useState("education");
    const [isPending, startTransition] = useTransition();
  
    const tabChange = (id) => {
      startTransition(() => {
        setTab(id);
      })
    } // starts transition without blocking  ui

// JSX for the About section
return (
  <section className="text-white" id="about">
    {/* Motion div with initial and animate animations */}
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.7 }} className="col-span-7 place-self-center text-center sm:text-left">
      <div className="md:grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* Image component */}
        <Image src="/images/fancy-picture.jpg" width={650} height={650} alt='aesthetic pink image' priority />
        {/* Text content */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-2">About Me</h2>
          <p className="text-base">I&apos;m a dedicated developer immersing myself in the digital world. I enjoy the challenges of coding, from debugging to designing user interfaces. With my coffee by my side, I tackle algorithms and aim to boost performance every day.</p>
          {/* Tab buttons */}
          <div className="flex flex-row justify-start mt-8">
            <TabButtons selectTab={() => tabChange("education")} active={tab === "education"}>
              {" "}
              Education{" "}
            </TabButtons>
            <TabButtons selectTab={() => tabChange("skills")} active={tab === "skills"}>
              {" "}
              Skills{" "}
            </TabButtons>
            <TabButtons selectTab={() => tabChange("experience")} active={tab === "experience"}>
              {" "}
              Experience{" "}
            </TabButtons>
          </div>
          {/* Content based on active tab */}
          <div className="mt-3 min-h-48">{TABS_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </motion.div>
  </section>
);
};

export default About;
