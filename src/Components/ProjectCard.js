import { useState } from "react";
import LinkLight from "../Assets/Icons/link-light.png";
// import LinkDark from "../Assets/Icons/link-dark.png";

const ProjectCard = ({
  title,
  description,
  link,
  skills,
  start,
  end,
  thumbnail,
}) => {
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });

  function handleMouseMove(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const maxTilt = 0.5;

    const rotateX = ((y - centerY) / centerY) * maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setRotation({ rotateX: -rotateX, rotateY });
  }

  function handleMouseLeave() {
    setRotation({ rotateX: 0, rotateY: 0 });
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(600px) rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`,
      }}
      className="rounded-2xl bg-neutral-600/15 py-[2px] px-[3px] backdrop-blur-lg border-t-2 border-b-2 border-indigo-700/50 border-t-neutral-400/25 hover:bg-neutral-400/15 transition-colors duration-300 ease-in-out"
    >
      <div className="relative h-full shadow-xl rounded-xl overflow-hidden flex flex-col hover:shadow-2xl border-t border-t-indigo-300/50 border-b border-b-gray-200/25 border-l-2 border-l-gray-300/25 border-r-2 border-r-indigo-100/45">
        {link !== "#" && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img
              src={LinkLight}
              alt="Project Link"
              className="h-6 w-6 hover:opacity-50 absolute top-4 right-4"
            />
          </a>
        )}

        <div className="p-4">
          <h3 className="text-xl font-semibold tracking-wide">{title}</h3>
          <p className="text-sm italic text-gray-300 border-b pb-2">
            {start} - {end}
          </p>
          <p className="text-gray-300 my-2">{description}</p>

          {thumbnail && (
            <img
              className="mt-2 rounded border border-gray-200"
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
                className="inline-block bg-gray-800/35 text-gray-200 tracking-wide hover:bg-indigo-900 text-sm font-medium rounded-full px-3 py-1 transition-all duration-100 ease-in-out"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

// const startDate =
//   start.toDate().toLocaleString("default", { month: "long" }) +
//   " " +
//   start.toDate().getFullYear();

// const endDate = end
//   ? end.toDate().toLocaleString("default", { month: "long" }) +
//     " " +
//     end.toDate().getFullYear()
//   : "Present";

// <a
//   href={link}
//   target="_blank"
//   rel="noopener noreferrer"
//   className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-all duration-200 ease-in-out"
// >
//   <img src={LinkDark} alt="Project Link" className="w-6 h-6" />
// </a>
