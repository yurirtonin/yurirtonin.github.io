import React from 'react';
import Translate from '@docusaurus/Translate';

export default function Reminder() {
	return (
		<div className='center'>
			<span className='italic'>
				<Translate
					id='reminder'
					description='Disclaimer stating that the opinions on this website are my own'
				>
					The opinions expressed here are stricly my own. They do not
					represent the opinions or views of my current employer nor any
					of my previous ones.
				</Translate>
			</span>
		</div>
	);
}
