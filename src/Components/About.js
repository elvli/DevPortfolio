import React from "react";
import portraitImg from "../Assets/round-portrait.png";
import LinkedInDark from "../Assets/Icons/linkedin-dark.png";
import GithubDark from "../Assets/Icons/github-dark.png";
import InstagramDark from "../Assets/Icons/instagram-dark.png";

function About() {
  return (
    <div>
      <section id="about" className="bg-gray-100 py-16 pt-32 pb-6 md:px-12">
        <div className="max-w-7xl md:mx-auto mx-4 flex flex-col md:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="text-left md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl text-gray-600 mb-2">Hi, my name is</h3>
            <h3 className="text-6xl font-semibold text-gray-800 mb-8 ml-0">
              Elven Li
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              I'm a passionate software engineer with a love for solving complex
              problems and building intuitive, user-friendly applications. I
              specialize in web development using React, JavaScript, and CSS
              frameworks like Tailwind CSS. In my free time, I enjoy learning
              new technologies, contributing to open-source projects, and
              improving my skills as a developer.
            </p>
          </div>

          {/* Portrait and Social Media Section */}
          <div className="md:w-1/2 flex flex-col items-center">
            {/* Portrait */}
            <img
              src={portraitImg}
              alt="Portrait"
              className="rounded-full shadow-lg w-60 h-60 object-cover mb-6"
            />

            {/* Social Media Links */}
            <div className="flex space-x-6">
              <a
                href="https://github.com/elvli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-700"
              >
                <img
                  src={GithubDark}
                  alt="Github"
                  className="h-6 w-6 hover:opacity-80"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/elvenli"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src={LinkedInDark}
                  alt="LinkedIn"
                  className="h-6 w-6 hover:opacity-80"
                />
              </a>
              <a
                href="https://www.instagram.com/elven.li/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-700"
              >
                <img
                  src={InstagramDark}
                  alt="Instagram"
                  className="h-6 w-6 hover:opacity-80"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
