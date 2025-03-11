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
    <div className="App">
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
