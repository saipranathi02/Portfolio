import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div id="home">
        <Intro/>
      </div>
      <div id="about">
        <About/>
      </div>
      <div id="skills">
        <Skills/>
      </div>
      <div id="portfolio">
        <Projects/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
    </div>
  );
}

export default App;
