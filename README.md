# yurirtonin.github.io

My personal webpage, built with [Docusaurus](https://docusaurus.io).
Published in English (default) and Brazilian Portuguese.

## Commands

```bash
npm install                  # install dependencies
npm start                    # dev server, English
npm start -- --locale pt-BR  # dev server, Portuguese
npm run build                # production build of both locales into build/
npm run serve                # serve the production build locally
npm run deploy               # build and push to the gh-pages branch (GitHub Pages)
npm run write-translations   # refresh i18n/pt-BR/*.json with any new UI strings
```

`npm start` only ever serves one locale at a time — that is a Docusaurus
limitation, and the language toggle will 404 in dev. Use `npm run build && npm
run serve` to exercise the switch.

## Layout

| Path                  | What it is                                                        |
| --------------------- | ----------------------------------------------------------------- |
| `src/pages/`          | Standalone pages: home, curriculum, about, 404.                   |
| `src/components/`     | Shared components (`Figure`, `Reminder`, `Comments`, the language toggle). |
| `src/theme/`          | Theme overrides — registers the `custom-localeToggle` navbar item. |
| `teaching/`           | The Research section (`/teaching`), a blog-style plugin instance. |
| `i18n/pt-BR/`         | Everything Portuguese — see below.                                |
| `static/`             | Files served as-is: images, PDFs.                                 |
| `website_config.json` | Personal handles used in the footer links.                        |
| `archive/`            | Content kept but not built — see `archive/README.md`.             |

New posts go in `teaching/` as `yyyy-mm-dd-name.mdx`; start from
`teaching/yyyy-mm-dd-name.mdx.template`. Authors are declared once in
`teaching/authors.yml` and referenced by key.

## Translations

English is the source of truth. Portuguese lives entirely under `i18n/pt-BR/`:

| Path                                            | What it translates                        |
| ----------------------------------------------- | ----------------------------------------- |
| `code.json`                                     | Strings from `.js` files (home, 404, disclaimer). Theme strings ship pre-translated. |
| `docusaurus-theme-classic/navbar.json`          | Navbar labels.                            |
| `docusaurus-theme-classic/footer.json`          | Footer copyright.                         |
| `docusaurus-plugin-content-pages/*.md`          | Full copies of the pages in `src/pages/`. |
| `docusaurus-plugin-content-blog-teaching-blog/` | Full copies of the posts in `teaching/`, plus `authors.yml` and the section's SEO strings. |

Anything without a Portuguese counterpart falls back to English, so partial
translations are fine — a new post is live in both languages the moment it is
written, and can be translated later by dropping a copy with the **same
filename** into `i18n/pt-BR/docusaurus-plugin-content-blog-teaching-blog/`.

Two rules keep this working:

- Strings inside `.js` files must be wrapped in `<Translate>` / `translate()`
  with a **literal** message — the extractor cannot read `siteConfig.tagline`.
  Run `npm run write-translations` after adding one, then fill in the message in
  `code.json`.
- MDX files must import components via `@site/src/components/...`, not relative
  paths, because translated copies sit at a different depth.

Adding a third language means adding it to `i18n.locales` in
`docusaurus.config.js`, adding a short label to `SHORT_LABELS` in
`src/components/localeToggle.js`, and running
`docusaurus write-translations --locale <code>`.
