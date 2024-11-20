"use client"
import React, { useState, useRef, useEffect } from "react";
import ProjectCards from "./ProjectCards";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectData = [
    { 
        id: 1, 
        title: "Weather App",
        description: "Stay ahead of the forecast: accurate, intuitive, and always at your fingertips",
        image: "./images/projects/space.jpg",
        tag: ["All", "Web", "Mobile"],
        gitURL: "/",
    },
    {
        id: 2,
        title: "App Icon Designs",
        description: "Our designs blend creativity with functionality: get instant recognition and user engagement on any device",
        image: "./images/projects/app-icons.jpg", 
        tag: ["All", "Mobile"],
        gitURL: "/",
    },
    {
        id: 3,
        title: "Notes App",
        description: "Effortlessly organize thoughts and ideas with our sleek notes app",
        image: "./images/projects/wownotes.jpg",
        tag: ["All", "Web"],
        gitURL: "/",
    },
    {
        id: 4, 
        title: "Productivity App",
        description: "Boost productivity with our all-in-one app: seamless, efficient, and tailored to your workflow",
        image: "/images/projects/productivity.jpg",
        tag: ["All", "Web"],
        gitURL: "/",
    },
    {
        id: 5, 
        title: "Pyro Coffee Company",
        description: "Experience the fiery passion of Pyro Coffee Company. It's the perfect fuel for your day",
        image: "/images/projects/coffee.jpg",
        tag: ["All", "Web", "Mobile"],
        gitURL: "/",
    },
    {
        id: 6,
        title: "Development Software",
        description: "Empower your projects with our cutting-edge software designed to streamline your workflow",
        image: "/images/projects/develop.jpg",
        tag: ["All", "Web"],
        gitURL: "/",
    },
    { 
      id: 7, 
      title: "Weather App",
      description: "Stay ahead of the forecast: accurate, intuitive, and always at your fingertips",
      image: "./images/projects/space.jpg",
      tag: ["All", "Web", "Mobile"],
      gitURL: "/",
  },
  {
      id: 8,
      title: "App Icon Designs",
      description: "Our designs blend creativity with functionality: get instant recognition and user engagement on any device",
      image: "./images/projects/app-icons.jpg", 
      tag: ["All", "Mobile"],
      gitURL: "/",
  },
  {
      id: 9,
      title: "Notes App",
      description: "Effortlessly organize thoughts and ideas with our sleek notes app",
      image: "./images/projects/wownotes.jpg",
      tag: ["All", "Web"],
      gitURL: "/",
  },
  {
      id: 10, 
      title: "Productivity App",
      description: "Boost productivity with our all-in-one app: seamless, efficient, and tailored to your workflow",
      image: "/images/projects/productivity.jpg",
      tag: ["All", "Web"],
      gitURL: "/",
  },
  {
      id: 11, 
      title: "Pyro Coffee Company",
      description: "Experience the fiery passion of Pyro Coffee Company. It's the perfect fuel for your day",
      image: "/images/projects/coffee.jpg",
      tag: ["All", "Web", "Mobile"],
      gitURL: "/",
  },
  {
      id: 12,
      title: "Development Software",
      description: "Empower your projects with our cutting-edge software designed to streamline your workflow",
      image: "/images/projects/develop.jpg",
      tag: ["All", "Web"],
      gitURL: "/",
  }
]

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [animationComplete, setAnimationComplete] = useState(false);
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setAnimationComplete(true);
      }, 1400);
  
      return () => clearTimeout(timeout);
    }, []);
  
    const tagChange = (newTag) => {
      setTag(newTag);
    };
  
    const filterProjects = projectData.filter((project) =>
      project.tag.includes(tag)
    );
  
    return (
      <section id="projects" className="pt-8">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView && animationComplete ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-4xl font-bold text-white"
        >
          My Projects
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView && animationComplete ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white flex flex-row justify-center items-center gap-2 py-6"
        >
          <ProjectTag
            onClick={tagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={tagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={tagChange}
            name="Mobile"
            isSelected={tag === "Mobile"}
          />
        </motion.div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-10">
          {filterProjects.map((project, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView && animationComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCards
                key={project.id}
                title={project.title}
                description={project.description}
                imageURL={project.image}
                gitURL={project.gitURL}
              />
            </motion.li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default ProjectSection;