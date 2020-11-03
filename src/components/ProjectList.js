import React from "react";
import {Link} from 'gatsby'
import Img from "gatsby-image";
import { Card, Col, Row } from "react-bootstrap";

const ProjectItem = ({ projectItem}) => (
  <Col lg={3} md={6}>
    <Link to={`/project/${projectItem.slug.current}`}>
      <Card style={{ width: "12rem" }} className="mx-auto">
        <Img fluid={projectItem.image.asset.fluid} className="card-img-top" />
        <Card.Body>
          <Card.Title className="text-center">{projectItem.project}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  </Col>
);

export const ProjectList = ({ projects }) => {
  return (
    <Row>
      {projects.map(project => {
        return (
          <ProjectItem key={project.id} projectItem={project} />
        )
      })}
    </Row>
  );
};