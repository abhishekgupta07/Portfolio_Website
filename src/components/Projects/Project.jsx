import React, { Component } from "react";
import "../Projects/ProjectsStyleSheets.scss"
import { Card, CardGroup, Button } from "react-bootstrap";
let cardvalues = [
  {
    project_title: 'Minor-2',
    project_name: 'Semantic Search Engine',
    project_info: 'It is a more personalised search engine which is implemeneted with the help of Natural Language Processing which basically captures the users intent and semantic meaning of searching and get more personlised results'
  },
  {
    project_title: 'Minor-1',
    project_name: 'Linux Shell Scripting',
    project_info: 'Developed a Scripted Shell which in which all the commands of Linux shell are implemented in C++ language along with the custom commands of in which text files are Encrypted and Decrypted using commonly used Cryptographic Algorithms like AES ,DES and RSA Algorithm'

  },
  {
    project_title: 'Personal Project',
    project_name: 'Real Time Chat Application',
    project_info: 'Developed a chat application with the front-end build using React.js, Developed the Backend of the App using Express.js and using socketing of messages is being done by Pusher Developed the Backend of the App using Express.js and using socketing of messages is being done by Pusher'
  }
];
export class Project extends Component {
  render() {
    return (
      <div className="ProjectsBackground">
        <div>
          <h2 className="ProjectsPara"> Projects</h2>
        </div>
          {
            cardvalues.map((card) => {
              return (
                <div className="ProjectCards">
                  <br/>
                <Card>
                  <Card.Header className="cardheader"as="h5">{card.project_title}</Card.Header>
                  <Card.Body>
                    <Card.Title>{card.project_name}</Card.Title>
                    <p>{card.project_info}</p>
                    <Button id="ButtonBackgroundColor" variant="dark" active>Github</Button>
                  </Card.Body>
                </Card>
                 </div>
              );
            })
          }
       
      </div>
    );
  }
}

export default Project;
