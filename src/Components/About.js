import portraitImg from "../Assets/round-portrait.png";
import LinkedInLight from "../Assets/Icons/linkedin-light.png";
import GithubLight from "../Assets/Icons/github-light.png";
import InstagramLight from "../Assets/Icons/instagram-light.png";

// import ResumeViewer from "./ResumeViewer";
import resumePDF from "../Assets/Elven-Li-Resume.pdf";

function About() {
  return (
    <div>
      <section id="about" className="py-12 pt-32 pb-6 md:px-12">
        <div className="max-w-7xl md:mx-auto mx-6 flex flex-col md:flex-row items-center justify-between">
          {/* Portrait Section */}
          <div className="md:w-1/2 flex flex-col items-center order-1 md:order-2 mb-8 md:mb-0">
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

          {/* Text Section */}
          <div className="text-left md:w-1/2 order-2 md:order-1 md:mx-5">
            <h3 className="text-6xl font-semibold text-gray-300 mb-4 ml-0">
              Hi, I'm Elven.
            </h3>
            <p className="text-lg text-gray-400 mb-4">
              I am a Full-stack Software engineer based in Queens, NY. I have a
              love for solving complex problems and building intuitive,
              user-friendly applications.
            </p>
            {/* <p className="text-lg text-gray-400 mb-4">
              Outside of software engineering, I enjoy building PCs and playing
              competitive esports titles. I've been into motorsports for a
              while, especially Formula One, and have just started getting into
              baseball.
            </p> */}
            <p className="text-lg text-gray-700 mb-8">
              You can view my resume{" "}
              <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                here
              </a>
              .
            </p>
          </div>
        </div>
        {/* <ResumeViewer /> */}
      </section>
    </div>
  );
}

export default About;
