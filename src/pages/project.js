import React from 'react';
import { graphql } from 'gatsby';
import { Row } from 'react-bootstrap';
import { ProjectList } from '../components/ProjectList';
import SEO from '../components/SEO';

export default function ProjectPage({ data }) {
	const projects = data.projects.nodes;

	return (
		<>
		<SEO title={`Page about my projects I've done`} />	
		<main className='container py-5'>
			<Row className='flex-column justify-content-center'>
				<h2 className='text-center mb-5'>Projects</h2>

				<ProjectList projects={projects} />
			</Row>
			</main>
			</>
	);
}

export const query = graphql`
	query {
		projects: allSanityProject {
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
