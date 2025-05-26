import React from "react";
import LinkedInLight from "../Assets/Icons/linkedin-light.png";
import GithubLight from "../Assets/Icons/github-light.png";
import InstagramLight from "../Assets/Icons/instagram-light.png";

function Footer() {
  return (
    <footer className="text-white py-6">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
        <div className="flex flex-col items-start space-y-2">
          <p className="text-sm">
            Designed by Elven Li. {new Date().getFullYear()}.
          </p>
          <p className="text-sm">
            Built with <u>ReactJS</u>. Hosted on <u>Firebase</u>.
          </p>
        </div>

        <div className="flex space-x-6">
          <a
            href="https://github.com/elvli"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-gray-700"
          >
            <img
              src={GithubLight}
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
              src={LinkedInLight}
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
              src={InstagramLight}
              alt="Instagram"
              className="h-6 w-6 hover:opacity-50"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
