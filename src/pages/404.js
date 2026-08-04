import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate, { translate } from '@docusaurus/Translate';

import styles from './styles.module.css';

function NotFound() {
	const { siteConfig } = useDocusaurusContext();

	const goBack = () => window.history.back();
	const refresh = () => window.location.reload();

	return (
		<Layout
			title={siteConfig.title}
			description={translate({
				id: 'global.description',
				message: 'Personal website of Yuri R. Tonin!',
				description: 'The website description, used as meta description'
			})}
			permalink='/'
		>
			<main className={styles.heroContainer}>
				<h1>
					<Translate
						id='notfound.title'
						description='The title of the Not Found page'
					>
						Oops! Page Not Found.
					</Translate>
				</h1>
				<p>
					<Translate
						id='notfound.description'
						description='The description of the Not Found page'
					>
						Sorry, we lost ourselves on the path. Maybe we should...
					</Translate>
					<button onClick={goBack}>
						<Translate
							id='notfound.buttons.goback'
							description='The go-back button of the Not Found page'
						>
							Go back
						</Translate>
					</button>
					<button onClick={refresh}>
						<Translate
							id='notfound.buttons.reload'
							description='The reload button of the Not Found page'
						>
							Try again
						</Translate>
					</button>
				</p>
			</main>
		</Layout>
	);
}

export default NotFound;
