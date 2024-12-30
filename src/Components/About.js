import React from "react";
import portraitImg from "../Assets/round-portrait.png";
import LinkedInDark from "../Assets/Icons/linkedin-dark.png";
import GithubDark from "../Assets/Icons/github-dark.png";
import InstagramDark from "../Assets/Icons/instagram-dark.png";

function About() {
  return (
    <div>
      <section id="about" className="bg-gray-100 py-12 pt-32 pb-6 md:px-12">
        <div className="max-w-7xl md:mx-auto mx-6 flex flex-col md:flex-row items-center justify-between">
          <div className="text-left md:w-1/2 mb-8 md:mb-0 md:mx-5">
            <h3 className="text-2xl text-gray-600 mb-2">Hi, my name is</h3>
            <h3 className="text-6xl font-semibold text-gray-800 mb-4 ml-0">
              Elven Li
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              I'm a passionate software engineer with a love for solving complex
              problems and building intuitive, user-friendly applications. I
              specialize in web development using React, JavaScript, and CSS
              frameworks like Tailwind CSS and BootStrap.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Outside of software engineering, I enjoy building PCs and playing
              competitive esports titles. I've been into motorsports for a
              while, especially Formula One, and have just started getting into
              baseball.
            </p>
            {/* <p className="text-lg text-gray-700 mb-8">
              You can find my resume{" "}
              <a
                href="../Assets/resume.pdf"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </p> */}
          </div>

          <div className="md:w-1/2 flex flex-col items-center">
            <img
              src={portraitImg}
              alt="Portrait"
              className="rounded-full shadow-lg w-64 h-64 object-cover mb-6 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out"
            />

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
                  className="h-6 w-6 hover:opacity-50"
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
                  className="h-6 w-6 hover:opacity-50"
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
                  className="h-6 w-6 hover:opacity-50"
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
