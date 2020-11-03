import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Card, Col } from "react-bootstrap";

export const SkillImages = () => {
  const data = useStaticQuery(graphql`
    query {
      skillImages: allFile(
        filter: { sourceInstanceName: { eq: "skillImageFolder" } }
      ) {
        edges {
          node {
            id
            publicURL
            name
            ext
          }
        }
      }
    }
  `);

  const skillImages = data.skillImages.edges;

  return (
    <>
      {skillImages.map(({ node }) => (
        <Col key={node.id}>
          <Card style={{ width: "12rem" }} className="mx-auto">
            <Card.Img
              variant="top"
              src={node.publicURL}
              alt={`${node.name}${node.ext}`}
              width="190"
              height="190"
            />
          </Card>
        </Col>
      ))}
    </>
  );
};
