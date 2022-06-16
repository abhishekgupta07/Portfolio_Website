import React from "react";
import "./App.css";
import AboutButton from "./components/AboutSection/AboutSection";
import UIproject from "./components/UIproject";
import Resume from "./components/Resume/Resume";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Skills from "./components/Skills/Skills";
import Project from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <SideBar />

        <div className="background" id="home">
          <Routes>
            <Route path="/" element={<UIproject />} />
            <Route path="/about" exact element={<AboutButton />} />
            <Route path="/resume" exact element={<Resume />} />
            <Route path="/skills" exact element={<Skills />} />
            <Route path="/my-projects" exact element={<Project />} />
            <Route path="/contact" exact element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
