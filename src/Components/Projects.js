import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

import BlackJackTN from "../Assets/Project Thumbnails/BlackjackLab_screenshot.jpg";
import PersonalWebsiteTN from "../Assets/Project Thumbnails/PersonalWebsite_screenshot.jpg";
import GeocraftTN from "../Assets/Project Thumbnails/Geocraft_screenshot.jpg";
import PlaylisterTN from "../Assets/Project Thumbnails/Playlister_screenshot.jpg";

// import { firestore } from "../firebaseConfig";
// import { getDocs, collection } from "firebase/firestore";

const Projects = () => {
  const projectData = [
    {
      title: "BlackjackLab",
      description: `
  This is a blackjack training tool designed for players to refine
  their strategy skills. It provides a platform where players can
  simulate various games, experiment with different approaches,
  and analyze outcomes in real time. It's not gambling I swear.
`,
      link: "https://blackjacklab.azurewebsites.net/",
      skills: ["React", "Tailwind CSS", "Azure App Service"],
      start: "May 2025",
      end: "Present",
      thumbnail: BlackJackTN,
    },

    {
      title: "Personal Website",
      description: `
  This is my personal site where I showcase my experience, projects,
  and skills as a developer. It highlights the work I've done, provides
  ways to connect with me, and serves as a hub for everything
  I'm building or learning.
`,
      link: "https://elvenli.com",
      skills: [
        "Next.js",
        "Tailwind CSS",
        "Vercel",
        "PostgreSQL",
        "Neon",
        "Prisma ORM",
      ],
      start: "September 2024",
      end: "When cats with thumbs take over",
      thumbnail: PersonalWebsiteTN,
    },

    {
      title: "GeoCraft",
      description: `Geocraft is a web-based tool for users to create and
    share customized map graphics. Users can easily place markers, customize
    colors, and even upload their own geographical data.`,
      link: "https://geocraftmaps.azurewebsites.net/",
      skills: [
        "MERN",
        "BootStrap",
        "MapBox API",
        "GeoJSON",
        "Azure App Service",
      ],
      start: "August 2023",
      end: "December 2023",
      thumbnail: GeocraftTN,
    },
    {
      title: "Playlister",
      description: `This is a playlist manager that allows users to create, play,
    and share playlists. Users engage with others by liking, disliking, and
    commenting on shared playlists.`,
      link: "#",
      skills: ["MERN", "Material UI", "YouTube API"],
      start: "August 2022",
      end: "December 2022",
      thumbnail: PlaylisterTN,
    },
  ];

  return (
    <section id="projects" className="py-12">
      <SectionTitle title={"Projects"} />

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

// const [projectData, setProjectData] = useState([]);

// useEffect(() => {
//   const fetchProjects = async () => {
//     try {
//       const ref = collection(firestore, "Projects");
//       const snapshot = await getDocs(ref);
//       const projects = snapshot.docs
//         .map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }))
//         .sort((a, b) => b.start - a.start);
//       setProjectData(projects);
//     } catch (error) {
//       console.error("Error fetching projects: ", error);
//     }
//   };

//   fetchProjects();
// }, []);
