import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { translate } from '@docusaurus/Translate';

import styles from './styles.module.css';
import HomePage from '../components/homepage';

function Home() {
	const context = useDocusaurusContext();
	let { siteConfig = {} } = context;

	siteConfig.title = translate({
		id: 'global.title',
		message: siteConfig.title,
		description: 'The website title',
	});
	siteConfig.tagline = translate({
		id: 'global.tagline',
		message: siteConfig.tagline,
		description: 'The website tagline',
	});
	siteConfig.customFields.description = translate({
		id: 'global.description',
		message: siteConfig.customFields.description,
		description: 'The website description',
	});
	const lines = [
		translate({
			id: 'homepage.description.descriptionLine_1',
			message: 'B. Sc. Engineering Physics',
			description: 'The first line of description',
		}),
		translate({
			id: 'homepage.description.descriptionLine_2',
			message: ' M. Sc. Applied Physics',
			description: 'The second line of description',
		}),
		translate({
			id: 'homepage.description.descriptionLine_3',
			message: 'Scientific and High Performance Computing',
			description: 'The third line of description',
		}),
		translate({
			id: 'homepage.description.descriptionLine_4',
			message: 'Brazilian Synchrotron Light Laboratory',
			description: 'The fourth line of description',
		}),
	];

	return (
		<Layout
			title={siteConfig.title}
			description={siteConfig.customFields.description}
			permalink='/'
		>
			<main className={styles.heroContainer}>
				<HomePage {...siteConfig} descriptionLines={lines} />
			</main>
		</Layout>
	);
}

export default Home;
