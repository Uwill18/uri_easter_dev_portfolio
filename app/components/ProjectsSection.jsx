"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard.jsx";
import ProjectTag from "./ProjectTag.jsx";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Gift of Faith Construction",
    description: "Civil Engineering Website",
    image: "/images/gof.png",
    tag: ["All Projects", "Client Work"],
    gitUrl: "https://gift-of-faith.netlify.app/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Junior's Essentials",
    description: "E-commerce Website",
    image: "/images/juniors_essentials.png",
    tag: ["All Projects", "Client Work"],
    gitUrl: "https://juniorspb.netlify.app/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Brancher",
    description: "Full-scale E-commerce application",
    // image: "/images/projects/3.png",
    tag: ["All Projects", "Client Work"],
    gitUrl: "https://brancher.vercel.app/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "MarketLink",
    description: "Website for Consulting Real Estate",
    image: "/images/",
    tag: ["All Projects", "Personal Projects"],
    gitUrl: "",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Best Bahn Mi E-commerce",
    description: "Coming Soon",
    image: "/images/best_bahn_mi.png",
    tag: ["All Projects", "Personal Projects"],
    gitUrl: "https://bestbahnmi.netlify.app/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "BlueJay Consulting Real Estate",
    description: "Website for Consulting Real Estate",
    image: "/images/brc.png",
    tag: ["All Projects", "Personal Projects"],
    gitUrl: "https://brc-demo-01.netlify.app/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" >
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All Projects"
          isSelected={tag === "All Projects"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Client Work"
          isSelected={tag === "Client Work"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Personal Projects"
          isSelected={tag === "Personal Projects"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3  gap-8 md:gap-12  sm:grid-cols-1">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
};

export default ProjectsSection;