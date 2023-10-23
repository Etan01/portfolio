import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import diagnosis from "../../Assets/Projects/diagnosis.png";
import bitsOfCode from "../../Assets/Projects/blog.png"
import electricity from "../../Assets/Projects/electricity.png";
import retail from "../../Assets/Projects/retail.png"
import climate from "../../Assets/Projects/Climate.png"
import coffee from "../../Assets/Projects/coffee.png"
import NLP from "../../Assets/Projects/NLP.png"
import sales from "../../Assets/Projects/sales.png"
import vending from "../../Assets/Projects/Vending_machine.png"

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
              imgPath={coffee}
              isBlog={false}
              title="Coffee Planner App"
              description="A mobile application built using XCode that assists users to discover cafes nearby and track the users’ financial spendings on beverages."
              ghLink="https://github.com/Etan01/Coffee_Planner_App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={climate}
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={retail}
              isBlog={false}
              title="Data Engineering Retail ETL"
              description="A project that perform ETL process, feature engineering and machine learning to forecast monthly sales of certain product"
              ghLink="https://github.com/Etan01/data-engineering-retail-etl"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NLP}
              isBlog={false}
              title="NLP Analysis"
              description="A project that perform simple Natural Language Processing (NLP) and utilise one of the powerful libraries such as NLTK to perform tokenization"
              ghLink="https://github.com/Etan01/NLP-Analysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vending}
              isBlog={false}
              title="Vending Machine"
              description="A project that creates simple vending machine algorithm and perform dynamic programming such as coin change problem"
              ghLink="https://github.com/Etan01/vending_machine/tree/main"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sales}
              isBlog={false}
              title="Shopping Trend Analysis"
              description="A data analytic project that perform EDA (Exploration Data Analysis) and create various data visualisation to get insights from customer shopping trend"
              ghLink="https://github.com/Etan01/shopping-trends-analysis"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
