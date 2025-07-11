import SectionTitle from "./SectionTitle";

import SBULogo from "../Assets/SBU-logo.png";
import NPowerLogo from "../Assets/npower-logo.png";

function Education() {
  return (
    <section id="education" className="py-16 pb-6 mb-10 md:px-12">
      <SectionTitle title={"Education"} />

      <div className="max-w-7xl mt-10 mb-4 mx-4 lg:mx-auto flex flex-col md:flex-row items-center justify-between">
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
            className="text-3xl font-semibold text-gray-300 ml-0 hover:text-blue-700"
          >
            Stony Brook University
          </a>
          <p className="text-xl text-gray-300 ml-0">B.S. in Computer Science</p>
          <p className="italic text-gray-400">2020 - 2024</p>
          <p className="text-gray-500">
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
            className="text-3xl font-semibold text-gray-300 ml-0 hover:text-blue-700"
          >
            NPower
          </a>
          <p className="text-xl text-gray-300 ml-0">
            Network and Systems Administration Course
          </p>

          <p className="italic text-gray-400">2024 - Present</p>
          <p className="text-gray-500">
            Linux Systems Administration - Computer Networking - Azure Cloud
            Computing - AI Fundamentals
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
