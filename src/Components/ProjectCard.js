import React from "react";
import LinkLight from "../Assets/Icons/link-light.png";

const ProjectCard = ({
  title,
  description,
  link,
  skills,
  start,
  end,
  thumbnail,
}) => {
  const startDate =
    start.toDate().toLocaleString("default", { month: "long" }) +
    " " +
    start.toDate().getFullYear();

  const endDate = end
    ? end.toDate().toLocaleString("default", { month: "long" }) +
      " " +
      end.toDate().getFullYear()
    : "Present";

  return (
    <>
      {link === "#" ? (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col hover:-translate-y-3 hover:shadow-xl transition-all duration-300 ease-in-out">
          <div className="p-4 flex-grow">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm italic text-gray-700">
              {startDate} - {endDate}
            </p>
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
            {thumbnail && (
              <img
                className="mt-2 rounded border border-gray-900"
                src={thumbnail}
                alt="thumbnail"
              />
            )}
          </div>

          <div className="p-4 border-t mt-auto">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 text-gray-800 hover:bg-gray-300 text-sm font-medium rounded-full px-3 py-1 transition-all duration-100 ease-in-out"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col hover:-translate-y-3 hover:shadow-xl transition-all duration-300 ease-in-out"
        >
          <div className="p-4 flex-grow">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm italic text-gray-700">
              {startDate} - {endDate}
            </p>
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
            {thumbnail && (
              <img
                className="mt-2 rounded border border-gray-900"
                src={thumbnail}
                alt="thumbnail"
              />
            )}
          </div>

          <div className="p-4 border-t mt-auto">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 text-gray-800 hover:bg-gray-300 text-sm font-medium rounded-full px-3 py-1 transition-all duration-100 ease-in-out"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </a>
      )}
    </>
  );
};

export default ProjectCard;
