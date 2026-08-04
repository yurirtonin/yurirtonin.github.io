import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { translate } from '@docusaurus/Translate';
import { useAlternatePageUtils } from '@docusaurus/theme-common/internal';

import styles from './styles.module.css';
import HomePage from '../components/homepage';

const PT_LOCALE = 'pt-BR';

/**
 * Invitation to the Portuguese home page, deliberately written in Portuguese
 * and shown only on the English one. Like the navbar toggle, switching locale
 * needs a full page load, hence `pathname://` + `_self`.
 */
function PortugueseInvite() {
	const alternatePageUtils = useAlternatePageUtils();
	const url = alternatePageUtils.createUrl({
		locale: PT_LOCALE,
		fullyQualified: false
	});

	return (
		<Link
			className={`button button--outline button--primary ${styles.localeInvite}`}
			to={`pathname://${url}`}
			target='_self'
			autoAddBaseUrl={false}
			lang='pt-BR'
		>
			Clique aqui para Português
		</Link>
	);
}

function Home() {
	const { siteConfig, i18n } = useDocusaurusContext();

	const showPortugueseInvite =
		i18n.currentLocale === i18n.defaultLocale &&
		i18n.locales.includes(PT_LOCALE);

	const tagline = translate({
		id: 'global.tagline',
		message: 'Computational Scientist from Brazil',
		description: 'The website tagline, shown under the name on the home page'
	});
	const description = translate({
		id: 'global.description',
		message: 'Personal website of Yuri R. Tonin!',
		description: 'The website description, used as meta description'
	});
	const descriptionLines = [
		translate({
			id: 'homepage.description.line_1',
			message: 'B. Sc. Engineering Physics',
			description: 'First line of the home page description'
		}),
		translate({
			id: 'homepage.description.line_2',
			message: 'M. Sc. Applied Physics',
			description: 'Second line of the home page description'
		}),
		translate({
			id: 'homepage.description.line_3',
			message: 'PhD Candidate on Coherent X-ray Imaging',
			description: 'Third line of the home page description'
		}),
		translate({
			id: 'homepage.description.line_4',
			message: 'Georg-August-Universität Göttingen',
			description: 'Fourth line of the home page description'
		})
	];

	return (
		<Layout title={siteConfig.title} description={description} permalink='/'>
			<main className={styles.heroContainer}>
				<HomePage
					title={siteConfig.title}
					tagline={tagline}
					descriptionLines={descriptionLines}
				>
					{showPortugueseInvite && <PortugueseInvite />}
				</HomePage>
			</main>
		</Layout>
	);
}

export default Home;
