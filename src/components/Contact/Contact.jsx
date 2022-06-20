import React, { Component } from "react";
import Typical from "react-typical";
import { BsPhone, BsTwitter, BsGithub } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import "./Contacts.scss";
class Contact extends Component {
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
      <>
        <div className="body">
          <h1 className="contactHeader">Contact Me</h1>
          <br />
          <br />
          <br />
          <br />
          <div>
            <a href={"https://twitter.com"}>
              <BsTwitter className="contactIcon" title="Twitter" color="white" />
            </a>
            <span> </span>
            <a href={"https://linkedin.com/in/abhishekkguptaa "}>
              <ImLinkedin title="LinkedIn" className="contactIcon" color="white" />
            </a>
            <span> </span>
            <a href="mailto:abhishe.gupta@synapsica.com">
              <HiOutlineMail title="Email" className="contactIcon" color="white"/>
            </a>
            <span> </span>

            <a href={"https://github.com/abhishekgupta07"}>
              <BsGithub title="Github" className="contactIcon" color="white" />
            </a>
            <span> </span>
          </div>

          <div className="div">
            <p className="para">
              Interested in working together? Fill out the form below with some
              info about your project
              <br />
              and I will get back to you as soon as I can. Please allow a couple
              of days for me to respond.
            </p>
            <div className="">
              <br />
              *Name{" "}
              <input
                type="text"
                id="Name"
                name="name"
                className="input"
              ></input>{" "}
              <span> </span>
              *Email{" "}
              <input
                type="email"
                id="mailid"
                name="email"
                className="input"
              ></input>
              <br />
              <br />
              <br />
              Subject{" "}
              <input
                type="text"
                id="projdesc"
                name="project"
                className="input"
              ></input>
              <sppan> </sppan>
              Mobile{" "}
              <input
                type="text"
                id="link"
                name="link"
                className="input"
              ></input>{" "}
              <br />
              <br />
              Your Message
              <br />
              <input
                type="text"
                id="message"
                name="message"
                className="messageField"
              ></input>
              <br />
              <br />
              <button className="submitButton">Message</button>
            </div>
          </div>
          <Typical
            className="animatedText"
            loop={Infinity}
            wrapper="b"
            steps={[" ", 1000, "<", 1000, "</", 1000, "</>", 1000]}
          />
        </div>
      </>
    );
  }
}

export default Contact;
