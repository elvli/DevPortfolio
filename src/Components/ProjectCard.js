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
  return (
    <div className="relative shadow-xl rounded-lg overflow-hidden flex flex-col bg-neutral-600/15 backdrop-blur-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 ease-in-out">
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

      <div className="p-4 flex-grow">
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
              className="inline-block bg-gray-800/35 text-gray-200 tracking-wide hover:bg-gray-300 text-sm font-medium rounded-full px-3 py-1 transition-all duration-100 ease-in-out"
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
