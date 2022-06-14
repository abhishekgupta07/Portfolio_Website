import React, { Component } from "react";
import { BiCloudDownload } from "react-icons/bi";
import "./ResumeStylesSheet.css";

class Resume extends Component {
  render() {
    return (
      <div className="ResumeBackground">
        <p id="resume" className="ResumeHeader">
          DOWNLOAD RESUME
        </p>

        <div>
          <a href="/AbhishekResume.pdf" download>
            <BiCloudDownload className=" DownloadIcon" />
          </a>
        </div>
      </div>
    );
  }
}

export default Resume;
