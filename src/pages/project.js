import React from 'react';
import { Row } from 'react-bootstrap';
import { ProjectList } from '../components/ProjectList';

export default function ProjectPage({ data }) {
	const projects = data.projects.nodes;

	return (
		<main className='container'>
			<Row className='flex-column justify-content-center'>
				<h2 className='text-center'>Projects</h2>

				<ProjectList projects={projects} />
			</Row>
		</main>
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
