import { Link } from 'gatsby';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export const Navigation = () => {
	
	return (
	<Navbar expand='md' bg='transparent'variant="dark" sticky='top'>
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
)};
