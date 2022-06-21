import React, { Component } from "react";
import Coverflow from "react-coverflow";
import { Card } from "react-bootstrap";
import "./SkillsStyleSheets.scss";
import logo from "../../logo.svg";
import ProgressBar from "./progressBar";
import android from "../Images/android.png";
import cp from "../Images/cp.png";
import htmlcssjs from "../Images/HTMLCSSJS.png";
import ml from "../Images/ml.jpg";
import Typical from "react-typical";


let SkillsData = [
  {
    title: "T1",
    Subtitle: "ST1",
    Body: "B1",
  },
  {
    title: "T2",
    Subtitle: "ST2",
    Body: "B2",
  },
  {
    title: "T3",
    Subtitle: "ST3",
    Body: "B3",
  },
];

class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0,
    };
  }

  render() {
    return (
      <div className="maindiv">
        <h1 className="heading">SKILLS</h1>

        <div className="skillsCard">
          <Coverflow
            width={960}
            height={480}
            displayQuantityOfSide={2}
            navigation={false}
            enableHeading={false}
            active={this.state.active}
            currentFigureScale={1.2}
            otherFigureScale={0.5}
          >
            <div role="menuitem" tabIndex="0">
              <Card>
                <Card.Body>
                  <Card.Title>HTML/CSS</Card.Title>
                  <img src={htmlcssjs} alt="html" className="htmlcss" />

                  <Card.Text>
                    Proficiency
                    <ProgressBar bgcolor="blue" progress="85" height={9} />
                  </Card.Text>
                </Card.Body>
              </Card>{" "}
            </div>

            {/* {SkillsData.forEach((data) => {
            return (
              <Card>
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <p>{data.Body}</p>
                </Card.Body>
              </Card>
            );
          })} */}

            <Card>
              <Card.Body>
                <Card.Title>Competitive Programming</Card.Title>

                <Card.Text>
                  <img src={cp} alt="CP" className="cpClass" />
                  Proficiency
                  <ProgressBar bgcolor="orange" progress="70" height={10} />
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>ReactJS</Card.Title>

                <Card.Text>
                  <img src={logo} alt="logo" />
                  Proficiency
                  <ProgressBar bgcolor="#99ccff" progress="90" height={9} />
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Android</Card.Title>

                <Card.Text>
                  <img src={android} alt="android" className="androidLogo" />
                  <br />
                  Proficiency
                  <ProgressBar bgcolor="#99ff66" progress="60" height={9} />
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Machine Learning</Card.Title>

                <Card.Text>
                  <img src={ml} alt="machinelearning" className="ml" />
                  Proficiency
                  <ProgressBar bgcolor="#ADD8E6" progress="60" height={9} />

                </Card.Text>
              </Card.Body>
            </Card>
          </Coverflow>
        </div>
        <Typical
            className="animatedText"
            loop={Infinity}
            wrapper="b"
            steps={[" ", 1000, "<", 1000, "</", 1000, "</>", 1000]}
          />
      </div>
    );
  }
}

export default Container;
