import React, { Component } from "react";
import { BiCloudDownload } from "react-icons/bi";
import "./ResumeStylesSheet.scss";
import Table from 'react-bootstrap/Table'
let downloadicon=require("../Images/download.gif")
class Resume extends Component {
  render() {
    return (
      <div className="ResumeBackground">
        <div>
          <p id="resume" className="ResumeHeader">
            DOWNLOAD RESUME
          </p>
        </div>
        {/* <div> */}
        <Table striped size="sm">
          <thead>
            <tr>
              <th>Attributes</th>
              <th >Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Utkarsh Singh</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>21</td>
            </tr>
            <tr>
              <td>College</td>
              <td>University of Petroleum and Energy Studies</td>
            </tr>
            <tr>
              <td>CGPA</td>
              <td>8.2</td>
            </tr>
            <tr>
              <td>12th Percentage</td>
              <td>88%</td>
            </tr>
            <tr>
              <td>Phone Number</td>
              <td>9140964984</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>Utkarshsinghclash@gmail.com</td>
            </tr>
            <tr>
              <td>Graduating Year</td>
              <td>2019-2023</td>
            </tr>

          </tbody>
        </Table>
        {/* </div> */}
        <h1 className="HeadingResumeDownload">You can download my Resume</h1>
        <div>
          {/* <a href="/AbhishekResume.pdf" download>
            <BiCloudDownload className=" DownloadIcon" />
          </a> */}
          <br></br>
          <a href="https://drive.google.com/file/d/1hrczE7AN1nkpG2PosQ9Le546ZWZrsmdZ/view?usp=sharing" target="_blank">
          <img className="DownloadImg"src={downloadicon} alt="donwload-icon" />
          </a>
        </div>
      </div>
    );
  }
}

export default Resume;
