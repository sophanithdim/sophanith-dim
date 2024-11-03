import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm passionate about technology and have a diverse set of skills,
              from
              <i>
                <b className="purple">
                  {" "}
                  CAD Drawing, 3D Modeling, Structural Analysis{" "}
                </b>
              </i>
              to advanced web and software development.
              <br />
              <br />I am proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, HTML, CSS, JavaScript, React, React Native, Next.js,
                  Node.js, and Web3 development.{" "}
                </b>
              </i>
              <br />
              <br />
              My areas of interest include building
              <i>
                <b className="purple"> Web Technologies and Applications, </b>
              </i>
              and I have experience in using modern JavaScript libraries and
              frameworks like
              <i>
                <b className="purple"> React.js and Next.js. </b>
              </i>
              <br />
              <br />
              Some of my achievements include:
              <ul>
                <li>19th place in the national math competition (2019)</li>
                <li>100% funded scholarship at Thammasat SIIT</li>
                <li>Graduated with a degree in Civil Engineering (2022)</li>
                <li>Currently employed as a civil engineer</li>
              </ul>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sophanithdim"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/SophanithD3237"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sophanith-dim-813967316/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/your-instagram-handle"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
