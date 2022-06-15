// import React from "react";
// import logo from './logo.svg';
import "./App.css";
import AboutButton from "./components/AboutSection/AboutSection";
import UIproject from "./components/UIproject";
import React, { PureComponent } from "react";
import Resume from "./components/Resume/Resume";
function App() {
  return (
    <div className="App">
      <div className="background" id="home">
        <UIproject />
      </div>
      <div id="aabout">
        <AboutButton />
      </div>

      <div id="resume">
        <Resume />
      </div>

      {/* <div id="skill">
        <Skills />
      </div>
      <div id="project">
        <Project />
      </div>
      <div id="contact">
        <Contact/Footer />
      </div> */}
    </div>
  );
}

export default App;
