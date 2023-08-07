import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Breast Cancer Diagnosis"
              description="Trained a VGG19 model using mammogram images with Keras and tensorflor backended. It is used to predict the various types of breast cancer "
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Global Energy Consumption"
              description="A dashboard that shows the world's total electricity generation"
              ghLink="https://github.com/Etan01/Global_Electricity_Consumption_Visualisation"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Coffee Planner App"
              description="A mobile application built using XCode that assists users to discover cafes nearby and track the users’ financial spendings on beverages."
              ghLink="https://github.com/Etan01/Coffee_Planner_App"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
