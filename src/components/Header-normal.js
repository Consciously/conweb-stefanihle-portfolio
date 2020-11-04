import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Navbar, Nav } from 'react-bootstrap';
import { SiteTitle } from './SiteTitle';

export const HeaderNormal = () => {
	return (
		<header className='main-header bg-primary pb-5'>
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
				<Row className='justify-content-center'>
					<div className='headline normal mt-5'>
						<SiteTitle />
					</div>
				</Row>
			</Container>
		</header>
	);
};
