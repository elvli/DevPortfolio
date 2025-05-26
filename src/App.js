import "font-awesome/css/font-awesome.min.css";

import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App font-questrial relative text-gray-200">
      <div
        className="fixed inset-0 -z-10 h-full w-full"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)",
        }}
      />
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

<div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>;
