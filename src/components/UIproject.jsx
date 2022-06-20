import React, { Component } from "react";
import "./MainProject.scss";
import Water from "./Images/Water.jpg";
import Typical from "react-typical";
import { Link } from "react-scroll";
import Switch from "react-switch";
import "./styledButton.scss"
class UIproject extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={Water} className="Heroimage" alt="BackgroundImage" />
          <Typical
            className="animatedText"
            loop={Infinity}
            wrapper="b"
            steps={[" ", 1000, "<", 1000, "</", 1000, "</>", 1000]}
          />
        </div>
      </div>
    );
  }
}

export default UIproject;
