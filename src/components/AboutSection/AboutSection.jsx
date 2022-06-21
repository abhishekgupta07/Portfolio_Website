import React, { Component } from "react";
import { Card, CardGroup } from "react-bootstrap";
import logo from "../../logo.svg";
import ML from "../Images/Machine.jpg";
import DS from "../Images/DS.jpg";
// import "./AboutSection.css"
import "../../App.scss"

class AboutButton extends Component {
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
      <div className="AboutSection background">
        <h1 className="AboutSectionHeading">About</h1>
        <p className="AboutPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className="AboutSectionCards ">
          <CardGroup>
            <Card>
              <Card.Img style={{ "height": "283px" ,border:"1px solid black"}} id="firstphoto" variant="top" src={logo} />
              <Card.Body id="cardbg">
                <Card.Title id="cardtext">React</Card.Title>
                <Card.Text id="cardtext">
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer id="cardbg">
                <small id="cardtext">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img style={{border:"1px solid black"}} variant="top" src={ML} />
              <Card.Body id="cardbg">
                <Card.Title id="cardtext">Machine Learning</Card.Title>
                <Card.Text id="cardtext">
                  This card has supporting text below as a natural lead-in to additional
                  content.{' '}
                </Card.Text>
              </Card.Body>
              <Card.Footer id="cardbg">
                <small id="cardtext">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card className="wholecard">
              <Card.Img variant="top" src={DS} style={{border:"1px solid black"}} />
              <Card.Body id="cardbg">
                <Card.Title id="cardtext">Data Structures and Algorithms</Card.Title>
                <Card.Text id="cardtext">
                  This is a wider card with support
                  ing text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer id="cardbg">
                <small id="cardtext">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </div>
      </div>


    );
  }
}

export default AboutButton;