import 'font-awesome/css/font-awesome.min.css';

import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
