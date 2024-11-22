import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
        <div className="flex flex-col items-start space-y-2">
          <p className="text-sm">
            Designed by Elven Li. {new Date().getFullYear()}.
          </p>
          <p className="text-sm">Built with ReactJS. Hosted on Firebase.</p>
        </div>

        <div className="flex space-x-6">
          <a
            href="https://github.com/elvli"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/elvenli"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
