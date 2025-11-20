import SectionTitle from "./SectionTitle";

import PlasticNxtLogo from "../Assets/Experience/PlasticsNxt-logo.png";
import InkWorksLogo from "../Assets/Experience/InkWorks-logo.png";
import MDRCLogo from "../Assets/Experience/MDRC-logo.png";
import NYCDEPLogo from "../Assets/Experience/NYCDEP-logo.png";

function Experience() {
  const experiences = [
    {
      role: "Full-Stack Developer",
      company: "PlasticsNxt",
      duration: "August 2025 - Present",
      link: "https://plasticsnxt.com",
      logo: PlasticNxtLogo,
      description: [
        `Driving the transformation and development of a B2B eCommerce plastics trading platform for a startup software company, with a focus on streamlining workflows, implementing history tracking, and modernizing the overall appearance and UX.`,
        `Translated owner requests into feasible feature implementations, developed project timelines, and held meetings to ensure alignment as one of only 2 developers within an Agile development workflow.`,
        `Revamped and modernized the landing page to display information about the site, user journey, userbase, and pricing.`,
        `Built and implemented new monetization features, including featured ad placements, paid listing enhancements, and subscription tiers to align the user experience with revenue goals.`,
        `Optimized UI/UX design for responsive performance across devices by compressing media, virtualizing lists for large datasets, integrating pagination, optimizing DOM structure, removing excessive nesting, and implementing skeleton screens.`,
        `Enhanced readability, maintainability, and long-term scalability by refactoring and modularizing large Laravel components.`,
        `Developed structured buyer/seller profiles and catalog pages showcasing certifications, transaction history, and product catalogs to strengthen marketplace credibility and trust across all aspects of the plastics industry.`,
        `Implemented cleaner routing, middleware, and controller structures to reorganize the application into smaller, single-purpose components, reduce code duplication, and increase the reusability of components.`,
      ],
    },
    {
      role: "Full-Stack Developer",
      company: "InkWorks Printing Inc.",
      duration: "January 2025 - August 2025",
      link: "https://inkworksprinting.shop",
      logo: InkWorksLogo,
      description: [
        `Designed and developed a responsive eCommerce platform from scratch that enables users to design and customize apparel while ensuring a smooth user experience, accessibility, and SEO optimization using React, Redux, and Tailwind CSS.`,
        `Implemented a custom design editor to support image uploads across image formats, text styling, and live previews on apparel templates, leveraging React and specialized npm libraries.`,
        `Reduced asset sizes, created new descriptive tags, and implemented skeleton states and loading animations to streamline the user experience, and improved accessibility by introducing ARIA roles and keyboard-friendly interactions.`,
        `Ensured secure and efficient client-server communication by building RESTful APIs with Node.js and Express for tracking inventory management, user authentication, and order processing.`,
        `Designed and optimized a MongoDB database with 200+ product listings by implementing schema design, indexing strategies, and query optimization to ensure efficient data organization, fast retrieval, and scalability.`,
        `Implemented a CI/CD pipeline using GitHub Actions to automate testing, building, and deployment processes, generating 6 hours of weekly time savings for the development team.`,
      ],
    },
    {
      role: "IT Intern",
      company: "MDRC",
      duration: "July 2024 - August 2024",
      link: "https://www.mdrc.org/",
      logo: MDRCLogo,
      description: [
        `Provided technical support for system, software, and hardware issues and successfully tracked, prioritized, and resolved 200+ support requests within defined SLAs using Ivanti ITSM and Active Directory.`,
        `Performed maintenance on 50+ laptops by diagnosing issues and replacing faulty components, and supported the onboarding process for new hardware and applications, such as Dell Latitudes and iPads.`,
        `Conducted a comprehensive network survey of office space using NetSpot, analyzing performance metrics to
          identify and address connectivity issues and optimize network efficiency.`,
        `Observed and participated in weekly data science team meetings, gaining insight into problem-solving
          approaches, project planning, and issue resolution strategies.`,
      ],
    },
    {
      role: "Executive Intern",
      company: "NYC Department of Environmental Protection",
      duration: "June 2023 - August 2023",
      link: "https://www.nyc.gov/site/dep/index.page",
      logo: NYCDEPLogo,
      description: [
        `Conducted in-depth research and price analysis of water and sewer rates across 20 Mid-Atlantic cities.`,
        `Researched and evaluated innovative technologies for potential implementation within NYC DEP.`,
        `Collaborated closely with the procurement team to perform technology audits and facilitate the sourcing of
          resources and materials for staff and supervisors.`,
      ],
    },
  ];

  return (
    <section id="experience" className="py-12 md:px-64">
      <SectionTitle title={"Experience"} />

      <div className="container mx-auto px-14">
        <ol className="relative border-s border-gray-200">
          {experiences.map((exp) => (
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 bg-white border border-white" />
              <time className="mb-1 text-md font-normal leading-none text-gray-400">
                {exp.duration}
              </time>
              <div className="flex items-center gap-3">
                {exp.logo && (
                  <a href={exp.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-16 h-16 object-contain"
                    />
                  </a>
                )}
                <div>
                  <h3 className="text-2xl font-semibold">{exp.role}</h3>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md font-semibold text-gray-400 hover:text-blue-700"
                  >
                    {exp.company}
                  </a>
                </div>
              </div>
              <ul className="list-disc ml-4">
                {exp.description.map((bullet) => (
                  <li className="text-base font-medium text-gray-400">
                    {bullet}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
