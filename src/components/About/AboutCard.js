import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sophanith Dim </span>
            from <span className="purple">Bangkok, Thailand.</span>
            <br />
            I am currently employed as a civil engineer.
            <br />
            I graduated in Civil Engineering from Thammasat University SIIT,
            where I achieved the second-highest GPA in my second year and
            received a fully-funded scholarship.
            <br />
            <br />
            Besides my engineering expertise, here are a few other things I love
            to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 3D Modeling and Design
            </li>
            <li className="about-activity">
              <ImPointRight /> Structural Analysis and CAD Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> Web and App development
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build solutions that make an impact!"{" "}
          </p>
          <footer className="blockquote-footer">Sophanith Dim</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
