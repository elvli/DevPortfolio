import React from "react";
import ProjectCard from "./ProjectCard"; // Import ProjectCard component

const Projects = () => {
  // Define your project data here
  const projectData = [
    {
      title: "BlackJackLab",
      description: "This is a black jack training tool",
      link: "#",
      skills: ["React", "TailwindCSS", "Azure App service"],
    },
    {
      title: "GeoCraft",
      description: "This is a map editing tool",
      link: "#",
      skills: ["React", "BootStrap", "MERN Stack"],
    },
    {
      title: "Playlister",
      description: "This is a playlist manager.",
      link: "#",
      skills: ["Material UI"],
    },
    {
      title: "Project 4",
      description: "This is a description of project 4.",
      link: "#",
      skills: ["asd"],
    },
  ];

  return (
    <section id="projects" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              skills={project.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
