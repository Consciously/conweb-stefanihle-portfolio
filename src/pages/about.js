import { graphql } from 'gatsby';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Img from 'gatsby-image';

export default function AboutPage({ data }) {
	const { myImg } = data;

	return (
		<main className='container'>
			<Row className='flex-column'>
				<h2 className='text-center'>About me</h2>
				<Row>
					<Col lg={2} md={3}>
						<Card>
							<Card.Body>
								<Img
									fluid={myImg.localImage.childImageSharp.fluid}
									alt={myImg.url}
								/>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={{ span: 8, offset: 2 }} md={{ sapn: 6, offset: 3 }}>
						<Card>
							<Card.Body>
								<Card.Title>Hey!</Card.Title>
								<Card.Text>
									Ich bin ein ambitionierter Web Developer und Programmierer mit
									Ursprung in der IT-Branche und habe im laufe meiner
									beruflichen Zeit die Faszination von Web-Technologien und
									deren Möglichkeiten entdeckt.
								</Card.Text>
								<Card.Text>
									Speziell habe ich ein sehr starkes Interesse und Leidenschaft
									in Technologien wie Reactjs und Gatsbyjs bekommen, um dadurch
									komplexe Weblösungen (Webshops, Blogs, dynamische
									Webapplikationen etc.) entwickeln zu können.
								</Card.Text>
								<Card.Text>
									Da ich noch relativ neu in der Web Branche bin, aber ich mich
									ständig weiterentwickeln möchte, um dadurch immer bessere und
									interessantere Web-Lösungen anbieten zu können, freue ich mich
									mit meinen Ideen Ihnen helfen zu können.
								</Card.Text>
								<Card.Text>
									Wenn Sie Interesse haben, zögern Sie nicht mich unter dieser
									E-mail Adresse [email] zu kontaktieren. Ich stehe Ihnen
									jederzeit zur Verfügung.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Row>
		</main>
	);
}

export const query = graphql`
	query {
		myImg: gravatar(email: { eq: "stefanihle@gmx.net" }) {
			url
			localImage {
				childImageSharp {
					fluid(quality: 100 maxWidth: 498) {
						...GatsbyImageSharpFluid_withWebp_tracedSVG
					}
				}
			}
		}
	}
`;
