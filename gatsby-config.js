const path = require('path');

const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

module.exports = {
	/* Your site config here */
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `bgImage`,
				path: path.join(__dirname, `src`, `images`, `bg`),
				name: `bgImageFolder`
			}
		},
		{
			resolve: `gatsby-source-sanity`,
			options: {
				projectId: 'v0l0pwfg',
				dataset: 'production',
				watchmode: true,
				token: process.env.SANITY_TOKEN
			}
		},
		{
			resolve: `gatsby-source-gravatar`,
			options: {
				emails: [{ email: 'stefanihle@gmx.net', query: '?size=498' }]
			}
		},
		{
			resolve: `gatsby-plugin-remote-images`,
			options: {
				nodeType: 'gravatar',
				imagePath: 'url'
			}
		},
		`gatsby-plugin-sass`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-react-helmet`
	]
};
