import "./App.css";
import Projects from "./components/projects/Project";
import Notes from "./components/notes/Notes";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <header className="Header">AidenZegil.com</header>
      <div className="Container">
        <Projects />
        <Notes />
        <Resume />
        <Contact />
      </div>
      <footer className="Footer">Version: 0.0.1</footer>
    </div>
  );
}

export default App;
