import React from "react";
import portraitImg from "../Assets/round-portrait.png";

function About() {
  return (
    <div>
      <section className="bg-gray-100 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="text-left md:w-1/2 mb-8 md:mb-0">
            {/* Small text for intro */}
            <h3 className="text-2xl text-gray-600 mb-2">Hi, my name is</h3>

            {/* Large text for name */}
            <h3 className="text-6xl font-semibold text-gray-800 mb-8 ml-0">
              Elven Li
            </h3>

            {/* Rest of the description */}
            <p className="text-lg text-gray-700 mb-8">
              I'm a passionate software engineer with a love for solving complex
              problems and building intuitive, user-friendly applications. I
              specialize in web development using React, JavaScript, and CSS
              frameworks like Tailwind CSS. In my free time, I enjoy learning
              new technologies, contributing to open-source projects, and
              improving my skills as a developer.
            </p>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/elvenli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/elvli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-700"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src={portraitImg}
              alt="Portrait"
              className="rounded-full shadow-lg w-60 h-60 object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
