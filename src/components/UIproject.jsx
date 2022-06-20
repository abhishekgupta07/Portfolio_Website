import React, { Component } from "react";
import "./MainProject.scss";
import Water from "./Images/Water.jpg";
import Typical from "react-typical";
import { Link } from "react-scroll";
import Switch from "react-switch";
import "./styledButton.scss"
class UIproject extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.ToggleChange = this.ToggleChange.bind(this);
  }
  componentDidMount() {
    document.documentElement.style.setProperty('--boolresult', "#273143");
  }
  ToggleChange(checked) {
    this.setState({ checked });
    if (this.state.checked === true) {
      console.log(this.state.checked);
      document.documentElement.style.setProperty('--boolresult', "#273143");
    }
    else if (this.state.checked === false) {
      console.log(this.state.checked);
      document.documentElement.style.setProperty('--boolresult', "black");
    }
  }
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
