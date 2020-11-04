import React from 'react';
import styled, { keyframes } from 'styled-components';

export const SiteTitle = () => {
	const createName = (firstName, lastName) => {
		const myName =
			firstName.charAt(0).toUpperCase() +
			firstName.substring(1) +
			' ' +
			lastName.charAt(0).toUpperCase() +
			lastName.substring(1);

		return createArrayFromName(myName);
	};

	const createArrayFromName = nameArr => {
		const arrayName = nameArr.split('').map((name, i) => {
			const random = Math.floor(Math.random() * 90);

			const RandomRotateAnimation = keyframes`
					from {
						transform: rotate(0deg);
						background-color: #1C2C30;
						color: #F3F3F3;
					}

					to {
						transform: rotate(${random}deg);
						background-color: #F3F3F3;
						color: #1C2C30;
					}
			`;

			const RotateStyledSpan = styled.span`
				border: 3px solid #f3f3f3;
				color: #f3f3f3;
				padding: 5px 0;
				margin-right: 10px;
				box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
				display: inline-block;
				width: clamp(25px, 4.5vw, 44px);
				text-align: center;
				border-radius: 5px;
				font-size: clamp(0.5rem, 2.5vw, 40px);
				font-weight: 700;
				animation: ${RandomRotateAnimation} 4s ease-in-out 0.5s infinite
					alternate forwards;
			`;

			if (name === ' ') {
				return ' ';
			}

			return (
				<RotateStyledSpan key={i} className='normal'>
					{name}
				</RotateStyledSpan>
			);
		});

		return arrayName;
	};

	return <h1>{createName('stefan', 'ihle')}</h1>;
};
