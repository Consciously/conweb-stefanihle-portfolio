import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Button, Card, Col, Row } from 'react-bootstrap';
import SEO from '../components/SEO';

export default function SingleProjectPage({ data: { projectItem } }) {
	return (
		<>
			<SEO title={projectItem.project} image={projectItem.image?.asset?.fluid?.src} />
			<main className='container py-5'>
				<Row>
					<Col>
						<Card>
							<Card.Body className='bg-primary text-light'>
								<Card.Title className='text-center'>
									<h2>{projectItem.project}</h2>
								</Card.Title>
								<Card.Text className='text-center'>
									{projectItem.description}
								</Card.Text>
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
		</>
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
