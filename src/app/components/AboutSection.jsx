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
      <ul className="list-disc pl-5">
        <li>Leander High School, 3.8 GPA</li>
          <ul className="list-disc pl-8">
            <li>IB Diploma Candidate</li>
            <li>Honors/Advanced Placement Programs</li>
          </ul>
        <li>Texas A&M University, Corpus Christi,  4.0 GPA</li>
          <ul className="list-disc pl-8">
            <li>Currently enrolled as a freshman</li>
            <li>Computer Science, Systems Programming</li>
          </ul>
      </ul>
    )
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-5">
        <li>foo</li>
        <li>fi</li>
        <li>fo</li>
        <li>fum</li>
        <li>foo</li>
        <li>fi</li>
      </ul>
    )
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-5">
        <li>cool</li>
        <li>stuff</li>
        <li>ive</li>
        <li>done</li>
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
        <div className="relative overflow-hidden rounded-3xl border border-transparent">
          <div className="absolute top-0 left-0 right-0" style={{ marginTop: '-50px' }}>
            <Image className="object-cover" src="/images/beach.jpg" width={650} height={650} alt='aesthetic pink image' priority/>
          </div>
        </div>

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-2">About Me</h2>
          <p className="text-base">I&apos;m currently studying Computer Science in university, where I&apos;m exploring the world of programming and software development. My concentration is in systems programming, and I aspire to become a skilled developer in order to create efficient and impactful solutions to global issues.</p>
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
