import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { SocialLinks } from './SocialLinks';

export const Footer = () => {
	const data = useStaticQuery(graphql`
		query {
			socialIcons: allSanitySocialIcons {
				nodes {
					id
					socialIconName
					socialUrl
					image {
						asset {
							fixed(toFormat: PNG height: 50, width: 50) {
								...GatsbySanityImageFixed
							}
						}
					}
				}
			}
		}
	`);

	const date = new Date();

	return (
		<footer className='py-5 bg-primary'>
			<Container>
				<Row className='justify-content-center text-center'>
					<Col lg={6}>
						<SocialLinks socialIcons={data.socialIcons} />
						<p>&copy; Stefan Ihle 2020 - {date.getFullYear()}</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};
