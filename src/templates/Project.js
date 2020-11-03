import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Button, Card, Col, Row } from 'react-bootstrap';

export default function SingleProjectPage({ data: { projectItem } }) {
	return (
		<main className='container'>
			<Row>
				<Col>
					<Card>
						<Card.Body>
							<Card.Title>{projectItem.project}</Card.Title>
							<Card.Text>{projectItem.description}</Card.Text>
						</Card.Body>
						<Img fluid={projectItem.image.asset.fluid} />
						<Button variant='primary' href={projectItem.githubUrl}>
							Github
						</Button>
						<Button variant='secondary' href={projectItem.liveUrl}>
							Live Demo
						</Button>
					</Card>
				</Col>
			</Row>
		</main>
	);
}

// This needs to be dynamic based on the slug passed in via context in gatsby-node.js
export const query = graphql`
	query($slug: String!) {
		projectItem: sanityProject(slug: { current: { eq: $slug } }) {
			project
			id
			description
			githubUrl
			liveUrl
			image {
				asset {
					fluid(maxWidth: 800) {
						...GatsbySanityImageFluid
					}
				}
			}
		}
	}
`;
