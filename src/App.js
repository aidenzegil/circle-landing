import "./App.css";
import Nav from "./components/nav/Nav"
import About from "./components/about/About";
import Bots from "./components/bots/Bots";
import Feedback from "./components/feedback/Feedback";
import Contact from "./components/contact/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Nav />
        <About />
        <Bots />
        <Feedback />
        <Contact />
      <footer className="Footer">Version: 0.0.1</footer>
      </div>
    </div>
  );
}

export default App;
