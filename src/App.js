import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Education from "./Components/Education";

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Projects />
      <Experience />
      <Education />
    </div>
  );
}

export default App;
