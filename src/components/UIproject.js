import React, { Component } from "react";
import "./MainProject.scss";
import avatar from "./Images/Avatar.jpg";
import { GoHome } from "react-icons/go";
import { ImAttachment, ImLinkedin } from "react-icons/im";
import { BsPen, BsTwitter, BsPerson } from "react-icons/bs";
import { IoMdPaper } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { RiInstagramLine } from "react-icons/ri";
import Water from "./Images/Water.jpg";
import Typical from "react-typical";
import { Link } from "react-scroll";
import Switch from "react-switch";
class UIproject extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.ToggleChange = this.ToggleChange.bind(this);
  }

  ToggleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <div>
        <div className="parentProfileDiv ">
          <div className="profileNameHandleDiv ">
            <img src={avatar} className="profileImage" alt="Profile" />
            <h1> NAME </h1>
            <div className="handleIcons">
              <BsTwitter className="handleIconsBorder" title="Twitter" />

              <span> </span>
              <RiInstagramLine
                className="handleIconsBorder"
                Tooltip
                title="Instagram"
              />
              <span> </span>
              <ImLinkedin
                className="handleIconsBorder"
                Tooltip
                title="LinkedIn"
              />
              <br />
              <br />
            </div>
          </div>
          <div className="buttonAlignment text">
            <span className="MUI">
              <GoHome />
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
              <br />
              <br />
            </span>
            <span className="MUI">
              <BsPerson />
              <Link
                to="aabout"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
              <br />
              <br />
            </span>
            <span className="MUI">
              <ImAttachment />
              <Link
                to="resume"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                delay={1000}
              >
                Resume
              </Link>
              <br />
              <br />
            </span>
            <span className="MUI">
              <BsPen />
              <Link
                to="skill"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Skills
              </Link>
              <br />
              <br />
            </span>
            <span className="MUI">
              <IoMdPaper />
              <Link
                to="project"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </Link>
              <br />
              <br />
            </span>
            <span className="MUI">
              <VscAccount />
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>{" "}
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
