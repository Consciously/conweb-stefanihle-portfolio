import { graphql } from 'gatsby';
import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { ProjectList } from '../components/ProjectList';
import { SkillImages } from '../components/SkillImages';

export default function Home({ data }) {
	const projects = data.projects.nodes;

	return (
		<main>
			<section className='skills pt-5 bg-light'>
				<Container>
					<Row className='flex-column'>
						<h2 className='text-center mb-5'>My Skills</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Repudiandae possimus est ad. Voluptatem error repellendus veniam
							voluptate fugiat quod ut a, temporibus similique molestias eius
							pariatur! Quibusdam ipsam sit culpa?
						</p>
						<Row>
							<SkillImages />
						</Row>
					</Row>
				</Container>
			</section>
			<section className='projects pt-5 bg-light' id='projects'>
				<Container>
					<Row className='flex-column justify-content-center'>
						<h2 className='text-center mb-5'>Projects</h2>

						<ProjectList projects={projects} />
					</Row>
				</Container>
			</section>
			<section className='contact py-5 bg-light'>
				<Container>
					<Row className='flex-column justify-content-center mx-auto'>
						<h2 className='text-center mb-5'>Get in touch</h2>
						<Col>
							<Form className='text-center'>
								<Form.Group controlId='formBasicEmail'>
									<Form.Label>Email address</Form.Label>
									<Form.Control type='email' />
								</Form.Group>
								<Form.Group controlId='formBasicTextarea'>
									<Form.Label>Your Message</Form.Label>
									<Form.Control as='textarea' rows={3} />
								</Form.Group>
								<Button variant='primary' type='submit' block>
									Submit
								</Button>
							</Form>
						</Col>
					</Row>
				</Container>
			</section>
		</main>
	);
}

export const query = graphql`
	query {
		projects: allSanityProject(filter: { isHighlight: { eq: true } }) {
			nodes {
				project
				id
				slug {
					current
				}
				image {
					asset {
						fluid(maxWidth: 400, maxHeight: 400) {
							...GatsbySanityImageFluid
						}
					}
				}
			}
		}
	}
`;
