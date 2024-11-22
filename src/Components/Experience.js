import React from "react";

function Experience() {
  const experiences = [
    {
      role: "IT Intern",
      company: "MDRC",
      duration: "July 2024 - August 2024",
      description:
        "Developed scalable web applications and optimized performance.",
    },
    {
      role: "Executive Intern",
      company: "NYC Department of Environmental Protection",
      duration: "June 2023 - August 2023",
      description:
        "Worked on frontend development and assisted with code reviews.",
    },
  ];

  return (
    <section id="experience" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300"></div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex justify-start">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full shadow-md"></div>
                <div className="ml-8 md:ml-20">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                    <p className="text-gray-500 text-sm">{exp.duration}</p>
                    <p className="mt-4 text-gray-700">{exp.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full shadow-md"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
