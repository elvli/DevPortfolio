import "font-awesome/css/font-awesome.min.css";
import { useState, useEffect } from "react";

import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";

function getRandomPercent() {
  return Math.floor(Math.random() * 100);
}

function getRandomColor() {
  const hue = Math.floor(Math.random() * 60) + 240; // 240–299 = purple to blue-violet
  return `hsl(${hue}, 70%, 60%)`;
}

function App() {
  const [bgGradient, setBgGradient] = useState("");

  useEffect(() => {
    const pos1 = `${getRandomPercent()}% ${getRandomPercent()}%`;
    const pos2 = `${getRandomPercent()}% ${getRandomPercent()}%`;
    const pos3 = `${getRandomPercent()}% ${getRandomPercent()}%`;

    const color1 = getRandomColor();
    const color2 = getRandomColor();
    // const color3 = getRandomColor();

    // radial-gradient(125% 125% at ${pos3}, ${color3} 40%, #63e 100%)

    const gradientString = `
      radial-gradient(circle 400px at ${pos1}, ${color1}, transparent),
      radial-gradient(circle 800px at ${pos2}, ${color2}, transparent),
      radial-gradient(125% 125% at ${pos3}, #000 40%, #63e 100%)
    `;

    setBgGradient(gradientString);
  }, []);

  return (
    <div
      className="App font-questrial relative text-gray-200"
      style={{
        background: bgGradient,
      }}
    >
      {/* <div
        className="fixed inset-0 -z-10 h-full w-full"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)",
        }}
      /> */}
      {/* 
      <div
        className="fixed inset-0 -z-10 h-full w-full"
        style={{
          background: `
      radial-gradient(circle 800px at 100% 200px, #a082ed, transparent),
      radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)
    `,
        }}
      /> */}

      {/* <div
        className="fixed inset-0 -z-10 h-full w-full"
        style={{
          background: `
      radial-gradient(circle 400px at 10% 10%, #7646f2, transparent),
      radial-gradient(circle 800px at 100% 200px, #a082ed, transparent),
      radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)
    `,
        }}
      /> */}

      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"> */}
      <NavBar />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
