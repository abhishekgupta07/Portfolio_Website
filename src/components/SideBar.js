import React, { Component } from "react";
import "./MainProject.scss";
import avatar from "./Images/Avatar.jpg";
import { GoHome } from "react-icons/go";
import { ImAttachment, ImLinkedin } from "react-icons/im";
import { BsPen, BsTwitter, BsPerson } from "react-icons/bs";
import { IoMdPaper } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { RiInstagramLine } from "react-icons/ri";
// import { Link } from "react-scroll";
import Switch from "react-switch";
import { Link } from "react-router-dom";
class SideBar extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.ToggleChange = this.ToggleChange.bind(this);
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

  abtfunc = () => {
    return (
      <div className="MUI">
        <Link to="/about" className=" MUI">
          About
        </Link>
      </div>
    );
  };

  resumefunc = () => {
    return (
      <div>
        <Link to="/resume" className=" MUI">
          Resume
        </Link>
      </div>
    );
  };

  homefunc = () => {
    return (
      <div>
        <Link to="/" className=" MUI">
          Home
        </Link>
      </div>
    );
  };

  skillsfunc = () => {
    return (
      <div>
        <Link to="/skills" className=" MUI">
          Skills
        </Link>
      </div>
    );
  };
  projectsfunc = () => {
    return (
      <div>
        <Link to="/my-projects" className=" MUI">
          Projects
        </Link>
      </div>
    );
  };
  contactfunc = () => {
    return (
      <div>
        <Link to="/contact" className=" MUI">
          Contact
        </Link>
      </div>
    );
  };

  render() {
    return (
      <div>
        <div className="parentProfileDiv ">
          <div className="profileNameHandleDiv ">
            <img src={avatar} className="profileImage" alt="Profile" />
            <br />
            <h1 className="nameSect"> NAME </h1>

            <div className="handleIcons">
              <a href={"https://twitter.com"}>
                <BsTwitter className="handleIconsBorder" title="Twitter" />
              </a>
              <span> </span>
              <a href={"https://instagram.com/"}>
                <RiInstagramLine
                  className="handleIconsBorder"
                  Tooltip
                  title="Instagram"
                />
              </a>
              <span> </span>
              <a href={"https://linkedin.com/in/abhishekkguptaa "}>
                <ImLinkedin
                  className="handleIconsBorder"
                  Tooltip
                  title="LinkedIn"
                />
              </a>

              <br />
              <br />
            </div>
          </div>
          <div className="buttonAlignment text">
            <span className="MUI">
              <GoHome />
              {this.homefunc()}
              <br />
            </span>
            <span className="MUI">
              <BsPerson />

              {this.abtfunc()}
              <br />
            </span>
            <span className="MUI">
              <ImAttachment />
              {this.resumefunc()}

              <br />
            </span>
            <span className="MUI">
              <BsPen />
              {this.skillsfunc()}

              <br />
            </span>
            <span className="MUI">
              <IoMdPaper />
              {this.projectsfunc()}

              <br />
            </span>
            <span className="MUI">
              <VscAccount />
              {this.contactfunc()}
            </span>
          </div>
          <br />

          {/* toggle button */}
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
    );
  }
}

export default SideBar;
