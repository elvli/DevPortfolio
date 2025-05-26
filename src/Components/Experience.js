import SectionTitle from "./SectionTitle";

import InkWorksLogo from "../Assets/Experience/InkWorks-logo.png";
import MDRCLogo from "../Assets/Experience/MDRC-logo.png";
import NYCDEPLogo from "../Assets/Experience/NYCDEP-logo.png";

function Experience() {
  const experiences = [
    {
      role: "Full-Stack Developer",
      company: "InkWorks Printing Inc.",
      duration: "January 2025 - Present",
      link: "https://inkworksprinting.shop",
      logo: InkWorksLogo,
      description: [
        `Developed a responsive web interface using React, Redux, and Tailwind CSS, optimizing user experience
          across all devices while ensuring accessibility and search engine friendliness.`,
        `Integrated Stripe API for secure and seamless payment processing, enhancing transaction efficiency and user trust.`,
        `Built an interactive design lab that allows users to create, customize, and preview t-shirt designs in real time,
          improving user engagement and purchase confidence.`,
        `Designed and managed a MongoDB database with 200+ product listings, ensuring efficient data organization,
          fast retrieval, and scalability.`,
        `Implemented Google OAuth authentication, allowing users to securely sign in with their Google accounts, enhancing
          convenience and security while reducing friction during onboarding.`,
        `Set up a CI/CD pipeline using GitHub Actions, automating testing, building, and deployment processes.`,
      ],
    },
    {
      role: "IT Intern",
      company: "MDRC",
      duration: "July 2024 - August 2024",
      link: "https://www.mdrc.org/",
      logo: MDRCLogo,
      description: [
        `Provided technical support for issues related to systems, software, and hardware 
          by utilizing Ivanti ITSM to track, prioritize, and resolve 200+ support requests efficiently.`,
        `Performed maintenance and repairs on 50+ laptops, including diagnosing issues and replacing faulty components.`,
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
