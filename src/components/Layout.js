import React from 'react';
import { Footer } from './Footer';
import { HeaderHome } from './Header-home';
import { HeaderNormal } from './Header-normal';
import 'typeface-montserrat';

const Layout = ({ children, location }) => (
	<div>
		{location.pathname === '/' ? <HeaderHome /> : <HeaderNormal />}
		{children}
		<Footer />
	</div>
);

export default Layout;
