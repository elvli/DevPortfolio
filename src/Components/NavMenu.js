export default function NavMenu({ onLinkClick }) {
  const links = [
    { id: "about", label: "about" },
    { id: "projects", label: "projects" },
    { id: "experience", label: "experience" },
    { id: "education", label: "education" },
    { id: "skills", label: "skills" },
  ];

  return (
    <ul className="font-md flex flex-col p-4 mt-2 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 rtl:space-x-reverse">
      {links.map(({ id, label }) => (
        <li key={id}>
          <a
            href={`#${id}`}
            onClick={(e) => {
              e.preventDefault();
              onLinkClick(id);
            }}
            className="block py-2 px-3 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
