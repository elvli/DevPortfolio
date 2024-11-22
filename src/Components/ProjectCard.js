import React from "react";

const ProjectCard = ({ title, description, link, skills }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-2">{description}</p>

        {link !== "#" && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {link}
          </a>
        )}

        <div className="flex flex-wrap gap-2 mt-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 text-gray-800 text-sm font-medium rounded-full px-3 py-1"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
