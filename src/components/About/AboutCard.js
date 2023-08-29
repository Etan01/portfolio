import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Eng Teck Tan </span>
            from <span className="purple"> Kuala Lumpur</span>
            <br /> I am a fresh graduate student with a Bachelor of Computer Science
            in Data Science.
            <br />
            Additionally, I am currently employed as a web developer at
            180DCKL.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "You are better than you think you are"{" "}
          </p>
          <footer className="blockquote-footer">Ethan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
