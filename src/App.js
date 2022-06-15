// import React from "react";
// import logo from './logo.svg';
import "./App.scss";
import AboutButton from "./components/AboutSection/AboutSection";
import UIproject from "./components/UIproject";
import React, { PureComponent } from "react";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer"
import "./components/AboutSection/AboutSection.scss"
function App() {
  return (
    <div className="App">
      <div className="background">
      <UIproject />

      <div id="aabout">
        <AboutButton />
      </div>
      </div>

      <div id="resume">
        <Resume />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
