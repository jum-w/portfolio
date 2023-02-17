import Main from "./components/Main";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="font-ubuntu">
      <Navbar />
      <Main />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
