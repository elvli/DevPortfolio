import React from "react";
import SBULogo from "../Assets/SBU-logo.png";
import NPowerLogo from "../Assets/npower-logo.png";

function Education() {
  return (
    <section id="education" className="py-16 pb-6 mb-10 md:px-12">
      <div className="text-4xl text-indigo-200 text-center font-bold px-[2px] py-[1px] mb-8 rounded-full tracking-wider bg-neutral-600/15 backdrop-blur-lg border-t-2 border-b-2 border-indigo-700/50 border-t-neutral-400/25 hover:bg-neutral-400/15 transition-colors duration-300 ease-in-out max-w-xl mx-auto">
        <div className=" p-4 rounded-[999px] border-t border-t-indigo-300/50 border-b border-b-gray-200/25 border-l-2 border-l-gray-200/25 border-r-2 border-r-indigo-100/45">
          Education
        </div>
      </div>

      <div className="max-w-7xl mt-10 mb-4 lg:mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-6 flex justify-center">
          <img
            src={SBULogo}
            alt="Portrait"
            className="max-w-[300px] max-h-[200px] object-cover"
          />
        </div>
        <div className="text-left md:w-1/2 mb-8 md:mb-0">
          <a
            href={"https://www.stonybrook.edu/"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl font-semibold text-gray-800 ml-0 hover:text-blue-700"
          >
            Stony Brook University
          </a>
          <p className="text-xl text-gray-800 ml-0">B.S. in Computer Science</p>
          <p className="italic text-gray-700">2020 - 2024</p>
          <p className="text-gray-700">
            Data Structures - Computer Algorithms - Computer Network - Full
            Stack Web Development - Data Science - Machine Learning - Linear
            Algebra - Probability and Statistics
          </p>
        </div>
      </div>

      <hr className="mx-auto mb-12 border-t-2 border-gray-300 w-1/2" />

      <div className="max-w-7xl mx-4 lg:mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-6 flex justify-center">
          <img
            src={NPowerLogo}
            alt="Portrait"
            className="max-w-[300px] max-h-[200px] object-cover"
          />
        </div>
        <div className="text-left md:w-1/2 mb-8 md:mb-0">
          <a
            href={"https://www.npower.org/"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl font-semibold text-gray-800 ml-0 hover:text-blue-700"
          >
            NPower
          </a>
          <p className="text-xl text-gray-800 ml-0">
            Network and Systems Administration Course
          </p>

          <p className="italic text-gray-700">2024 - Present</p>
          <p className="text-gray-700">
            Linux Systems Administration - Computer Networking - Azure Cloud
            Computing - AI Fundamentals
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
