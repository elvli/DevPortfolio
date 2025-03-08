import React from "react";

function Experience() {
  const experiences = [
    {
      role: "Software Developer",
      company: "InkWorks Printing Inc.",
      duration: "January 2025 - Present",
      link: "https://inkworksprinting.shop",
      description: [
        `Developed a modern, responsive web interface, optimizing user experience across all devices.`
        `Integrated Stripe for secure and seamless payment processing, enhancing transaction efficiency.`,
        `Building an interactive design lab that enables users to create and customize t-shirt designs for print.`,
        `Designed and managed a MongoDB database with 200+ product listings, ensuring efficient data organization and retrieval.`,
      ],
    },
    {
      role: "IT Intern",
      company: "MDRC",
      duration: "July 2024 - August 2024",
      link: "https://www.mdrc.org/",
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
      description: [
        `Conducted in-depth research and price analysis of water and sewer rates across 20 Mid-Atlantic cities.`,
        `Researched and evaluated innovative technologies for potential implementation within NYC DEP.`,
        `Collaborated closely with the procurement team to perform technology audits and facilitate the sourcing of
          resources and materials for staff and supervisors.`,
      ],
    },
  ];

  return (
    <section id="experience" className="bg-gray-100 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">My Experience</h2>
      <div className="container mx-auto px-14">
        <ol className="relative border-s border-gray-200">
          {experiences.map((exp) => (
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white" />
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                {exp.duration}
              </time>
              <h3 className="text-2xl font-semibold text-gray-900">
                {exp.role}
              </h3>
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-md font-semibold text-gray-600 hover:text-blue-700"
              >
                {exp.company}
              </a>
              <ul className="list-disc ml-4">
                {exp.description.map((bullet) => (
                  <li className="text-base font-normal text-gray-500">
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
