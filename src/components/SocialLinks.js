import React from 'react';
import Img from 'gatsby-image';

export const SocialLinks = ({ socialIcons }) => {
	return (
		<>
			{socialIcons.nodes.map(socialIcon => {
				return (
					<a href={socialIcon.socialUrl} key={socialIcon.id} className='pr-3'>
						<Img
							fixed={socialIcon.image.asset.fixed}
							alt={socialIcon.socialIconName}
						/>
					</a>
				);
			})}
		</>
	);
};
