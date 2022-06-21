import React from "react";
import "./App.scss";
import Switch from "react-switch";
import AboutButton from "./components/AboutSection/AboutSection";
import UIproject from "./components/UIproject";
import Resume from "./components/Resume/Resume";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Skills from "./components/Skills/Skills";
import Project from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";
export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: false
    };
    this.ToggleChange = this.ToggleChange.bind(this);
  }

  ToggleChange(checked) {
    this.setState({ checked });
    if (this.state.checked === true) {
      document.documentElement.style.setProperty('--boolresult', "white");
    }
    else if (this.state.checked === false) {
      document.documentElement.style.setProperty('--boolresult', "red");
    }
  }
  componentDidMount() {
    document.documentElement.style.setProperty('--boolresult', "white");
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <div className="parentProfileDiv ">
              <SideBar />
              <label>
                <Switch
                  checked={this.state.checked}
                  onChange={this.ToggleChange}
                  onColor="#86d3ff"
                  onHandleColor="#2693e6"
                  handleDiameter={16}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                  height={10}
                  width={30}
                  className="react-switch"
                  id="material-switch"
                />
              </label>
            </div>
          </div>


          <div className="background" id="home">
            <Routes>
              <Route path="/" element={<UIproject />} />
              <Route path="/about" exact element={<AboutButton clickstate={this.state.checked} />} />
              <Route path="/resume" exact element={<Resume clickstate={this.state.checked} />} />
              <Route path="/skills" exact element={<Skills clickstate={this.state.checked} />} />
              <Route path="/my-projects" exact element={<Project clickstate={this.state.checked} />} />
              <Route path="/contact" exact element={<Contact clickstate={this.state.checked} />} />
            </Routes>
          </div>
        </div>
      </Router>

    )
  }
}

export default App;
