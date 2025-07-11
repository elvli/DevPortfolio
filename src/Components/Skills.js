import SkillCard from "./SkillCard";
import SectionTitle from "./SectionTitle";

import JSLogo from "../Assets/Skills/js-logo.png";
import PythonLogo from "../Assets/Skills/python-logo.png";
import JavaLogo from "../Assets/Skills/java-logo.png";
import CLogo from "../Assets/Skills/c-logo.png";
import ReactLogo from "../Assets/Skills/react-logo.png";
import ReduxLogo from "../Assets/Skills/redux-logo.png";
import CSSLogo from "../Assets/Skills/css-logo.png";
import HTMLLogo from "../Assets/Skills/html-logo.png";
import MongoDBLogo from "../Assets/Skills/mongodb-logo.png";
import PostgreSQL from "../Assets/Skills/postgresql-logo.png";
import ExpressJSLogo from "../Assets/Skills/expressjs-logo.png";
import NodeJSLogo from "../Assets/Skills/nodejs-logo.png";
import TailwindCSSLogo from "../Assets/Skills/tailwind-logo.png";
import BootStrapLogo from "../Assets/Skills/bootstrap-logo.png";
import MUILogo from "../Assets/Skills/mui-logo.png";
import GithubLogo from "../Assets/Skills/github-logo.png";
import GithubActionsLogo from "../Assets/Skills/github-actions-logo.png";
import CICDLogo from "../Assets/Skills/CICD-logo.png";
import JestLogo from "../Assets/Skills/jest-logo.png";
import CypressLogo from "../Assets/Skills/cypress-logo.png";
import AzureLogo from "../Assets/Skills/azure-logo.png";
import FirebaseLogo from "../Assets/Skills/firebase-logo.png";
import StripeLogo from "../Assets/Skills/stripe-logo.png";
import LinuxLogo from "../Assets/Skills/linux-logo.png";
import VSCodeLogo from "../Assets/Skills/vscode-logo.png";
import IvantiLogo from "../Assets/Skills/ivanti-logo.png";
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
      title: "Reux",
      img: ReduxLogo,
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
      title: "PostgreSQL",
      img: PostgreSQL,
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
      title: "Actions",
      img: GithubActionsLogo,
    },
    {
      title: "CI/CD",
      img: CICDLogo,
    },
    {
      title: "Jest",
      img: JestLogo,
    },
    {
      title: "Cypress",
      img: CypressLogo,
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
      title: "Stripe",
      img: StripeLogo,
    },
    {
      title: "Linux",
      img: LinuxLogo,
    },
    {
      title: "VSCode",
      img: VSCodeLogo,
    },
    {
      title: "Ivanti ITSM",
      img: IvantiLogo,
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
    // <div className="text-4xl text-indigo-200 text-center font-bold px-[2px] py-[1px] mb-8 rounded-full tracking-wider bg-neutral-600/15 backdrop-blur-lg border-t-2 border-b-2 border-indigo-700/50 border-t-neutral-400/25 hover:bg-neutral-400/15 transition-colors duration-300 ease-in-out max-w-xl mx-auto">
    //   <div className=" p-4 rounded-[999px] border-t border-t-indigo-300/50 border-b border-b-gray-200/25 border-l-2 border-l-gray-200/25 border-r-2 border-r-indigo-100/45">
    //     Skills
    //   </div>
    // </div>

    <section id="skills" className="py-12">
      <SectionTitle title={"Skills"} />

      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 md:gap-6 items-stretch">
          {skillData.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
