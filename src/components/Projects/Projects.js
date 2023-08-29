import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import diagnosis from "../../Assets/Projects/diagnosis.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png"
import electricity from "../../Assets/Projects/electricity.png";

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
              imgPath={diagnosis}
              isBlog={false}
              title="Breast Cancer Diagnosis"
              description="Trained a VGG19 model using mammogram images with Keras and tensorflor backended. It is used to predict the various types of breast cancer "
              ghLink="https://github.com/Etan01/breast-cancer-diagnosis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={electricity}
              isBlog={false}
              title="Global Energy Consumption"
              description="A dashboard that shows the world's total electricity generation"
              ghLink="https://github.com/Etan01/Global_Electricity_Consumption_Visualisation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Coffee Planner App"
              description="A mobile application built using XCode that assists users to discover cafes nearby and track the users’ financial spendings on beverages."
              ghLink="https://github.com/Etan01/Coffee_Planner_App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Kafka Climate Data Pipeline"
              description="A streaming data pipeline that uses Apache Kafka to process climate data and visualise the data using Matplotlib"
              ghLink="https://github.com/Etan01/climate-kafka"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="SEIR Model Extension"
              description="A model that extends the SEIR model to include the effects of quarantine and vaccination with the risk averse of human behaviour"
              ghLink="https://github.com/Etan01/SEIR_model_extension"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
