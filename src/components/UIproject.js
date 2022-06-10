import React, { Component } from "react";
import "./styledButton.css";
import avatar from "./Avatar.jpg";
// import HomeButton from './HomeButton'
import { GoHome } from "react-icons/go";
import { ImAttachment, ImLinkedin } from "react-icons/im";
import { BsPen, BsTwitter, BsPerson } from "react-icons/bs";
import { IoMdPaper } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { RiInstagramLine } from "react-icons/ri";
// import Elon from "./ElonMusk.jpg";
import Water from "./Water.jpg";

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
              <button> About</button>
              <br />
              <br />
            </span>
            <span className="MUI">
              <ImAttachment />
              <button> Resume</button>
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
          <img src={Water} className="Heroimage" />
        </div>
      </div>
    );
  }
}

export default UIproject;
