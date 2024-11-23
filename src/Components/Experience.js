import React from "react";

function Experience() {
  const experiences = [
    {
      role: "IT Intern",
      company: "MDRC",
      duration: "July 2024 - August 2024",
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
      description: [
        "Conducted in-depth research and price analysis of water and sewer rates across 20 Mid-Atlantic cities.",
        "Researched and evaluated innovative technologies for potential implementation within NYC DEP.",
        `Collaborated closely with the procurement team to perform technology audits and facilitate the sourcing of
          resources and materials for staff and supervisors.`,
      ],
    },
  ];

  return (
    <section id="experience" className="bg-gray-100 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">My Experience</h2>
      <div className="container mx-auto px-14">
        <ol class="relative border-s border-gray-200 dark:border-gray-700">
          {experiences.map((exp) => (
            <li class="mb-10 ms-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-800">
                {exp.duration}
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                {exp.role}
              </h3>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                {exp.company}
              </h3>
              <ul className="list-disc ml-4">
                {exp.description.map((bullet) => (
                  <li className="text-base font-normal text-gray-500 dark:text-gray-400">
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
