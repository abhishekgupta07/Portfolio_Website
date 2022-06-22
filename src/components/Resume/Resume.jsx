import React, { Component } from "react";
import "./ResumeStylesSheet.scss";
import Table from 'react-bootstrap/Table'
let downloadicon = require("../Images/download.gif")
class Resume extends Component {

  render() {
    if (this.props.clickstate) {
      // console.log(this.props.clickstate);
      document.documentElement.style.setProperty('--boolresultforaboutbg', "black");
      document.documentElement.style.setProperty('--boolresultforabouttext', "white");
      document.documentElement.style.setProperty('--boolresultforaboutcardbg', "black");
    }
    else if (this.props.clickstate === false) {
      // console.log(this.props.clickstate);
      document.documentElement.style.setProperty('--boolresultforaboutbg', "gray");
      document.documentElement.style.setProperty('--boolresultforaboutcardbg', "white");
      document.documentElement.style.setProperty('--boolresultforabouttext', "black");
    }
    return (
      <div className="ResumeBackground">
        <div>
          <h1 id="resume" className="ResumeHeader">
            RESUME
          </h1>
        </div>
        {/* <div> */}
        <Table id="tablebackground" striped size="sm">
          <thead>
            <tr>
              <th>Attributes</th>
              <th >Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Abhishek Gupta</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>20 Years</td>
            </tr>
            <tr>
              <td>College</td>
              <td>Lovely Professional University</td>
            </tr>
            <tr>
              <td>CGPA</td>
              <td>8.0</td>
            </tr>
            <tr>
              <td>12th Percentage</td>
              <td>89%</td>
            </tr>
            <tr>
              <td>Phone Number</td>
              <td>8744000125</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>ambitiousabhishek7@gmail.com</td>
            </tr>
            <tr>
              <td>Graduating Year</td>
              <td>2019-2023</td>
            </tr>

          </tbody>
        </Table>
        {/* </div> */}
        <h3 className="HeadingResumeDownload">You can download my Resume</h3>
        <div>
          {/* <a href="/AbhishekResume.pdf" download>
            <BiCloudDownload className=" DownloadIcon" />
          </a> */}
          <br></br>
          <a rel="noopener" href="https://drive.google.com/file/d/1ZbSEUxC3PpQ40BRFmedeDBtHBkdqy2qE/view" >
            <img className="DownloadImg" src={downloadicon} alt="donwload-icon" />
          </a>
        </div>
      </div>
    );
  }
}

export default Resume;
