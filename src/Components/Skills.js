import React from "react";
import JSLogo from "../Assets/Skills/js-logo.png";
import PythonLogo from "../Assets/Skills/python-logo.png";
import JavaLogo from "../Assets/Skills/java-logo.png";
import CLogo from "../Assets/Skills/c-logo.png";
import ReactLogo from "../Assets/Skills/react-logo.png";
import CSSLogo from "../Assets/Skills/css-logo.png";
import HTMLLogo from "../Assets/Skills/html-logo.png";
import MongoDBLogo from "../Assets/Skills/mongodb-logo.png";
import SQLLogo from "../Assets/Skills/sql-logo.png";
import ExpressJSLogo from "../Assets/Skills/expressjs-logo.png";
import NodeJSLogo from "../Assets/Skills/nodejs-logo.png";
import TailwindCSSLogo from "../Assets/Skills/tailwind-logo.png";
import BootStrapLogo from "../Assets/Skills/bootstrap-logo.png";
import MUILogo from "../Assets/Skills/mui-logo.png";
import GithubLogo from "../Assets/Skills/github-logo.png";
import AzureLogo from "../Assets/Skills/azure-logo.png";
import FirebaseLogo from "../Assets/Skills/firebase-logo.png";
import VSCodeLogo from "../Assets/Skills/vscode-logo.png";
import IvanitiLogo from "../Assets/Skills/ivanti-logo.png";
import OktaLogo from "../Assets/Skills/okta-logo.png";
import NetSpotLogo from "../Assets/Skills/netspot-logo.png";

function Skills() {
  const skillData = [
    {
      title: "Javascript",
      img: JSLogo,
    },
    {
      title: "Python",
      img: PythonLogo,
    },
    {
      title: "Java",
      img: JavaLogo,
    },
    {
      title: "C",
      img: CLogo,
    },
    {
      title: "ReactJS",
      img: ReactLogo,
    },
    {
      title: "CSS",
      img: CSSLogo,
    },
    {
      title: "HTML",
      img: HTMLLogo,
    },
    {
      title: "MongoDB",
      img: MongoDBLogo,
    },
    {
      title: "SQL",
      img: SQLLogo,
    },
    {
      title: "ExpressJS",
      img: ExpressJSLogo,
    },
    {
      title: "NodeJS",
      img: NodeJSLogo,
    },
    {
      title: "Tailwind CSS",
      img: TailwindCSSLogo,
    },
    {
      title: "BootStrap",
      img: BootStrapLogo,
    },
    {
      title: "Material UI",
      img: MUILogo,
    },
    {
      title: "Github",
      img: GithubLogo,
    },
    {
      title: "Azure",
      img: AzureLogo,
    },
    {
      title: "Firebase",
      img: FirebaseLogo,
    },
    {
      title: "VSCode",
      img: VSCodeLogo,
    },
    {
      title: "Ivaniti ITSM",
      img: IvanitiLogo,
    },
    {
      title: "Okta",
      img: OktaLogo,
    },
    {
      title: "NetSpot",
      img: NetSpotLogo,
    },
  ];

  return (
    <section id="skills" className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6">
          {skillData.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md max-w-52 max-h-44 ml-3 lg:ml-0 hover:scale-105 hover:shadow-xl transition-all duration-100 ease-in-out"
            >
              <h3 className="text-lg font-semibold mb-4 text-center">{skill.title}</h3>
              <img
                src={skill.img}
                alt={`${skill.title} logo`}
                className="w-16 h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
