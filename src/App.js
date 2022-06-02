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
      <footer className="Footer"><i>Made by Aiden Zegil</i></footer>
      </div>
    </div>
  );
}

export default App;
