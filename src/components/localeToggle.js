import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useAlternatePageUtils } from '@docusaurus/theme-common/internal';
import { useLocation } from '@docusaurus/router';

import styles from './localeToggle.module.css';

// Short labels for the navbar. Falls back to the locale code itself.
const SHORT_LABELS = {
	en: 'EN',
	'pt-BR': 'PT'
};

/**
 * A compact "EN | PT" switch for the navbar, registered as the
 * `custom-localeToggle` navbar item type.
 *
 * Locale switching cannot be a client-side route change: each locale is a
 * separate build with its own JS bundle. Hence `pathname://` + `_self`, which
 * is how the built-in locale dropdown forces a full page load too.
 */
export default function LocaleToggle({ mobile }) {
	const {
		i18n: { currentLocale, locales, localeConfigs }
	} = useDocusaurusContext();
	const alternatePageUtils = useAlternatePageUtils();
	const { search, hash } = useLocation();

	if (locales.length < 2) {
		return null;
	}

	return (
		<div className={mobile ? styles.toggleMobile : styles.toggle}>
			{locales.map((locale) => {
				const isCurrent = locale === currentLocale;
				const url = alternatePageUtils.createUrl({
					locale,
					fullyQualified: false
				});

				return (
					<Link
						key={locale}
						// Preserve any ?search#hash suffix across the switch.
						to={`pathname://${url}${search}${hash}`}
						target='_self'
						autoAddBaseUrl={false}
						lang={localeConfigs[locale].htmlLang}
						title={localeConfigs[locale].label}
						aria-current={isCurrent ? 'true' : undefined}
						className={`${styles.option} ${
							isCurrent ? styles.optionActive : ''
						}`}
					>
						{SHORT_LABELS[locale] ?? locale}
					</Link>
				);
			})}
		</div>
	);
}
