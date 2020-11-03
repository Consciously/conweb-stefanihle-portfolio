import React from 'react';

export const SiteTitle = () => {
	const myFirstName = 'stefan';
	const myLastName = 'ihle';
	// const myName = ['s', 't', 'e', 'f', 'a', 'n', 'i', 'h', 'l', 'e'];
	const myName =
		myFirstName.charAt(0).toUpperCase() +
		myFirstName.substring(1) +
		' ' +
		myLastName.charAt(0).toUpperCase() +
		myLastName.substring(1);

	return (
		<h1>
			{myName.split('').map((name, i) => {
				const random = Math.floor(Math.random() * 45);
				
				const randomStyle = {
					transform: `rotate(${random}deg)`
				}
								
				return name === ' ' ? ' ' : <span key={i} style={randomStyle}>{ name}</span>;
			})}
			
		
			{/* <span>S</span>
			<span>t</span>
			<span>e</span>
			<span>f</span>
			<span>a</span>
			<span>n</span>
			<span>I</span>
			<span>h</span>
			<span>l</span>
			<span>e</span> */}
		</h1>
	);
};
