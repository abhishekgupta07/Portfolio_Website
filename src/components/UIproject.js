import React, { Component } from "react";
import "./styledButton.css";
import avatar from "./Images/Avatar.jpg";
import { GoHome } from "react-icons/go";
import { ImAttachment, ImLinkedin } from "react-icons/im";
import { BsPen, BsTwitter, BsPerson } from "react-icons/bs";
import { IoMdPaper } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { RiInstagramLine } from "react-icons/ri";
import Water from "./Images/Water.jpg";
import Typical from "react-typical";
import { Link, animateScroll as scroll } from "react-scroll";
import AboutButton from "./AboutSection/AboutSection";

class UIproject extends Component {
  render() {
    return (
      <div>
        <div className="parentProfileDiv">
          <div className="profileNameHandleDiv sidebar-wrapper">
            <img src={avatar} className="profileImage" alt="Profile" />
            <h1> NAME </h1>
            <div className="handleIcons">
              <BsTwitter className="handleIconsBorder" />
              <span> </span>
              <RiInstagramLine className="handleIconsBorder" />
              <span> </span>
              <ImLinkedin className="handleIconsBorder" />
              <br />
              <br />
            </div>
          </div>

          <div className="buttonAlignment">
            <span className="MUI">
              <GoHome />
              <button> Home </button>
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
              <button> Skills</button>
              <br />
              <br />
            </span>
            <span className="MUI">
              <IoMdPaper />
              <button> Projects</button>
              <br />
              <br />
            </span>
            <span className="MUI">
              <VscAccount />
              <button> Contact</button>
            </span>
          </div>
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
