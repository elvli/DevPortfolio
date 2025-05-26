import { useState, useEffect, useRef } from "react";
import portraitImg from "../Assets/round-portrait.png";
import NavMenu from "./NavMenu";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleScroll = (id, offset = 0) => {
    const section = document.getElementById(id);
    if (section) {
      const topPosition = section.offsetTop - offset;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed text-indigo-100 top-0 left-0 w-full bg-black/50 backdrop-blur-sm rounded-b-2xl border-b-2 border-b-indigo-700/50 shadow z-50">
      <div className="flex items-center mx-[2px] mb-[2px] justify-between rounded-b-2xl border-b border-b-gray-200/25 border-l-2 border-l-gray-200/25 border-r-2 border-r-indigo-100/45">
        <div className="flex items-center space-x-3 rtl:space-x-reverse m-4">
          <img src={portraitImg} className="h-8" alt="Portrait Icon" />
          <a
            href="about"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("about", 60);
            }}
            className="self-center text-2xl font-semibold whitespace-nowrap"
          >
            Elven Li
          </a>
        </div>

        {/* Menu toggle button (mobile only) */}
        <button
          ref={buttonRef} // assign ref here
          type="button"
          className="inline-flex items-center p-2 m-4 w-10 h-10 justify-center text-sm text-indigo-100 md:hidden"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Desktop menu (hidden on mobile) */}
        <div className="hidden md:block">
          <NavMenu onLinkClick={handleScroll} />
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 w-full bg-black/50 backdrop-blur-sm rounded-b-2xl border-b-2 border-b-indigo-700/50 shadow-md"
        >
          <NavMenu onLinkClick={handleScroll} />
        </div>
      )}
    </nav>
  );
}

export default NavBar;
