import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./componets/Landing";
import Home from "./componets/Home";
import About from "./componets/About";
import Contact from "./componets/Contact";
import Projects from "./componets/Projects";
import Skills from "./componets/Skills";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/skills" element={<Skills />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
