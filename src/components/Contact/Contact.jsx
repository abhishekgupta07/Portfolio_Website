import React, { Component } from "react";
import Typical from "react-typical";
import {  BsTwitter, BsGithub } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";

import "./Contacts.scss";
import "../Contact/ContactsStyleSheet.scss";

class Contact extends Component {
  render() {
    return (
      <>
        <div className="ContactsBackground">
          <p className="ContactsPara">Contact</p>
        </div>
        <div className="body">
          <h1 className="contactHeader">Contact Me</h1>
          <br />
          <br />
          <br />
          <br />
          <div>
            <a href={"https://twitter.com"}>
              <BsTwitter className="contactIcon" title="Twitter" />
            </a>
            <span> </span>
            <a href={"https://linkedin.com/in/abhishekkguptaa "}>
              <ImLinkedin title="LinkedIn" className="contactIcon" />
            </a>
            <span> </span>
            <a href="mailto:abhishe.gupta@synapsica.com">
              <HiOutlineMail title="Email" className="contactIcon" />
            </a>
            <span> </span>

            <a href={"https://github.com/abhishekgupta07"}>
              <BsGithub title="Github" className="contactIcon" />
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
            <div>
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

      // <section class="coffeewithme" id="coffeewithme">
      //     <div class="row alignCenter">
      //       <h1>Coffee with me.</h1>
      //       <p>
      //         I am always excited to work on some awesome projects, message me and let's discuss over coffee.
      //       </p>
      //       <form id="theForm" class="simform" autocomplete="off">
      //         <div class="simform-inner">
      //           <ol class="questions">
      //             <li class="current">
      //               <span><label for="q1">Write a message for me below</label></span>
      //               <input id="q1" name="q1" type="text"/>
      //             </li>
      //             <li>
      //               <span><label for="q2">Your name</label></span>
      //               <input id="q2" name="q2" type="text"/>
      //             </li>
      //             <li>
      //               <span><label for="q3">Your email or phone number</label></span>
      //               <input id="q3" name="q3" type="text"/>
      //             </li>
      //           </ol>
      //           <button class="submit" type="submit">Send answers</button>
      //           <div class="controls">
      //             <button class="next"><i class="fa fa-arrow-right"></i></button>
      //             <div class="progress">
      //             </div>
      //             <span class="number">
      //               <span class="number-current">1</span>
      //               <span class="number-total">3</span>
      //             </span>
      //             <span class="error-message"></span>
      //           </div>
      //         </div>
      //         <span class="final-message"></span>
      //       </form>
      //     </div>
      //   </section>
    );
  }
}

export default Contact;
