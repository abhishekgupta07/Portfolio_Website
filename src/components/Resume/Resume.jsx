import React, { Component } from "react";
import { BiCloudDownload } from "react-icons/bi";
import "./ResumeStylesSheet.scss";
import Table from 'react-bootstrap/Table'

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
            {/* <tr>
      <th>First Name</th>
      <th >Last Name</th>
    </tr> */}
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Name</td>
              <td>Utkarsh Singh</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Age</td>
              <td>21</td>
            </tr>
            <tr>
              <td>3</td>
              <td>College</td>
              <td>University of Petroleum and Energy Studies</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Age</td>
              <td>21</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Age</td>
              <td>21</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Age</td>
              <td>21</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Age</td>
              <td>21</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Age</td>
              <td>21</td>
            </tr>

          </tbody>
        </Table>
        {/* </div> */}

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
