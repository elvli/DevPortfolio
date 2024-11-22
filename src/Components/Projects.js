import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

import { firestore } from "../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

const Projects = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const ref = collection(firestore, "Projects");
        const snapshot = await getDocs(ref);
        const projects = snapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .sort((a, b) => b.start - a.start);
        setProjectData(projects);
      } catch (error) {
        console.error("Error fetching projects: ", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              skills={project.skills}
              start={project.start}
              end={project.end}
              thumbnail={project.thumbnail}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

// const projectData = [
//   {
//     title: "BlackJackLab",
//     description: `
//   This is a blackjack training tool designed for players to refine
//   their strategy skills. It provides a platform where players can
//   simulate various games, experiment with different approaches,
//   and analyze outcomes in real time.
// `,
//     link: "https://blackjacklab.azurewebsites.net/",
//     skills: ["React", "Tailwind CSS", "Azure App Service"],
//   },

//   {
//     title: "GeoCraft",
//     description: `Geocraft is a web-based tool for users to create and
//     share customized map graphics. Users can easily place markers, customize
//     colors, and even upload their own geographical data.`,
//     link: "https://geocraftmaps.azurewebsites.net/",
//     skills: [
//       "MERN",
//       "BootStrap",
//       "MapBox API",
//       "GeoJSON",
//       "Azure App Service",
//     ],
//   },
//   {
//     title: "Playlister",
//     description: `This is a playlist manager that allows users to create, play,
//     and share playlists. Users engage with others by liking, disliking, and
//     commenting on shared playlists.`,
//     link: "#",
//     skills: ["MERN", "Material UI", "YouTube API"],
//   },
// ];
