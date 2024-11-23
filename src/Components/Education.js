import React from "react";
import SBULogo from "../Assets/SBU-logo.png";
import NPowerLogo from "../Assets/npower-logo.png";

function Education() {
  return (
    <section id="education" className="py-16 pb-6 mb-10 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-8">My Education</h2>
      <div className="max-w-7xl mx-4 lg:mx-auto flex flex-col mb-4 md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-6 flex justify-center">
          <img
            src={SBULogo}
            alt="Portrait"
            className="max-w-[300px] max-h-[200px] object-cover"
          />
        </div>
        <div className="text-left md:w-1/2 mb-8 md:mb-0">
          <p className="text-3xl font-semibold text-gray-800 ml-0">
            Stony Brook University
          </p>
          <p className="text-xl text-gray-800 ml-0">B.S. in Computer Science</p>
          <p className="italic text-gray-700">2020 - 2024</p>
          <p className="text-gray-700">GPA: 3.3/4.0</p>
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
          <p className="text-3xl font-semibold text-gray-800 ml-0">NPower</p>
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
