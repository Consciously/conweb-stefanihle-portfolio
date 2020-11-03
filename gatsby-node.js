// import path, { resolve } from 'path';
const path = require('path');

const turnProjectsIntoPages = async ({ graphql, actions }) => {
	// 1. Get Template for this page
	const projectTemplate = path.resolve('./src/templates/Project.js');
	// 2. Query all projects
	const { data } = await graphql(`
		query {
			projects: allSanityProject {
				nodes {
					project
					slug {
						current
					}
				}
			}
		}
	`);
	// 3. Loop over all projects and create a page for that project
	data.projects.nodes.forEach(project => {
		actions.createPage({
			// What is the URL for this new page?
			path: `project/${project.slug.current}`,
			component: projectTemplate,
			context: {
				slug: project.slug.current
			}
		});
	});
};
exports.createPages = async params => {
	// Create pages dynamically
	// Wait for all promises to be resolved before finishing this function
	await Promise.all([turnProjectsIntoPages(params)]);
};
