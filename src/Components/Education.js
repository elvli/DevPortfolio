import React from "react";
import SBULogo from "../Assets/SBU-logo.png";
import NPowerLogo from "../Assets/npower-logo.png";

function Education() {
  return (
    <section id="education" className="py-16 pb-6 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
      <div className="max-w-7xl mx-auto flex flex-col mb-4 md:flex-row items-center justify-between">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={SBULogo}
            alt="Portrait"
            className="max-w-[300px] max-h-[200px] object-cover"
          />
        </div>
        <div className="text-left md:w-1/2 mb-8 md:mb-0">
          <h3 className="text-4xl font-semibold text-gray-800 ml-0">
            Stony Brook University
          </h3>
          <h4 className="text-2xl text-gray-800 ml-0">
            B.S. in Computer Science
          </h4>

          <p className="text-lg text-gray-700">2020 - 2024</p>
          <p className="text-lg text-gray-700">GPA: 3.3/4.0</p>
          <p className="text-lg text-gray-700">
            Data Structures - Analysis of Algorithms - Computer Network - Data Science
          </p>
          <p className="text-lg text-gray-700">
            Machine Learning - Linear Algebra - Probability and Statistics
          </p>
        </div>
      </div>

      <hr className="my-8 border-t-2 border-gray-300 w-1/2 mx-auto" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={NPowerLogo}
            alt="Portrait"
            className="max-w-[300px] max-h-[200px] object-cover"
          />
        </div>
        <div className="text-left md:w-1/2 mb-8 md:mb-0">
          <h3 className="text-4xl font-semibold text-gray-800 ml-0">NPower</h3>
          <h4 className="text-2xl text-gray-800 ml-0">
            Network and Systems Administration Course
          </h4>

          <p className="text-lg text-gray-700">2024 - Present</p>
          <p className="text-lg text-gray-700">
            Linux Systems Administration - Computer Networking
          </p>
          <p className="text-lg text-gray-700">
            Azure Cloud Computing - AI Fundamentals
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
