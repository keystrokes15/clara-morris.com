"use client"
import React, { useState, useRef, useEffect } from "react";
import ProjectCards from "./ProjectCards";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectData = [
    { 
        id: 1, 
        title: "Weather App",
        description: "Project 5 description",
        image: "/images/projects/space.jpg",
        tag: ["All", "Web", "Mobile"],
        gitURL: "/",
    },
    {
        id: 2,
        title: "App Icon Designs",
        description: "Project 1 description",
        image: "/images/projects/app-icons.jpg",
        tag: ["All", "Mobile"],
        gitURL: "/",
    },
    {
        id: 3,
        title: "Notes App",
        description: "Project 3 description",
        image: "/images/projects/wownotes.jpg",
        tag: ["All", "Web"],
        gitURL: "/",
    },
    {
        id: 4, 
        title: "Productivity App",
        description: "Project 4 description",
        image: "/images/projects/productivity.jpg",
        tag: ["All", "Web"],
        gitURL: "/",
    },
    {
        id: 5, 
        title: "Pyro Coffee Company",
        description: "Project 2 description",
        image: "/images/projects/coffee.jpg",
        tag: ["All", "Web", "Mobile"],
        gitURL: "/",
    },
    {
        id: 6,
        title: "Development Software",
        description: "Project 6 description",
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
      <section id="projects">
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