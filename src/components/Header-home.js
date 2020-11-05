import React from 'react';
import { Link } from 'gatsby';
import ReactRotatingText from 'react-rotating-text';

import { Container, Row, Navbar, Nav } from 'react-bootstrap';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

export const HeaderHome = () => {
	const data = useStaticQuery(graphql`
		query {
			headerBg: file(relativePath: { eq: "bg02.jpg" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`);

	const imageData = data.headerBg.childImageSharp.fluid;

	return (
		<>
			<BackgroundImage
				Tag='header'
				fluid={imageData}
				backgroundColor={`#1C2C30`}
				className='main-header'
			>
				<div className='overlay'></div>
				<Navbar
					collapseOnSelect
					expand='md'
					bg='transparent'
					variant='dark'
					sticky='top'
				>
					<Navbar.Toggle aria-controls='basic-navbar-nav' className='ml-auto' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							<Link to='/' className='nav-link'>
								Home
							</Link>
							<Link to='/service' className='nav-link'>
								Service
							</Link>
							<Link to='/project' className='nav-link'>
								Project
							</Link>
							<Link to='/about' className='nav-link'>
								About me
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<Container>
					<Row className='flex-column justify-content-center align-items-center fill'>
						<div className='headline home text-light text-center'>
							<h1>Stefan Ihle</h1>

							<p className='lead text-capitalize'>
								Hi! I’m a thrived and passionated{' '}
								<span className="text-secondary">
									<ReactRotatingText items={["web", "javasScript", "gatsbyjs", "reactjs"]} pause="3000" emptyPause="1500" typingInterval="150" deletingInterval="75" />
								</span>{' '}
								developer
							</p>
							<Link to='/project' className='btn btn-secondary mt-5'>
								Look at my projects I've done
							</Link>
						</div>
					</Row>
				</Container>
			</BackgroundImage>
		</>
	);
};
