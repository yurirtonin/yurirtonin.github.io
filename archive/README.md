# Archive

Content that is kept in the repository but **not** part of the built site.

Nothing in this folder is compiled or deployed — Docusaurus only reads the paths
declared in `docusaurus.config.js` (`src/pages`, `static` and `teaching`).

| Folder        | What it is                                                              |
| ------------- | ----------------------------------------------------------------------- |
| `blog/`       | The old personal blog (`/blog`): 2 posts plus the post template.         |
| `docs/`       | The old docs section (`/docs`): "What is microscopy?".                   |
| `sidebars.js` | Sidebar config, only used by the docs section.                           |

## Restoring the blog

1. `git mv archive/blog blog`
2. In `docusaurus.config.js`, replace `blog: false` in the preset with:

   ```js
   blog: {
       showReadingTime: true,
       postsPerPage: 3,
       remarkPlugins: [remarkMath],
       rehypePlugins: [rehypeKatex],
       feedOptions: {
           type: 'all',
           copyright: `Copyright ©2022-present Yuri Rossi Tonin.`
       }
   },
   ```

3. Add the navbar entry back:

   ```js
   { label: 'Blog', position: 'left', to: '/blog' }
   ```

## Restoring the docs section

1. `git mv archive/docs docs && git mv archive/sidebars.js sidebars.js`
2. In `docusaurus.config.js`, add to the preset:

   ```js
   docs: {
       path: 'docs',
       sidebarPath: require.resolve('./sidebars.js'),
       remarkPlugins: [remarkMath],
       rehypePlugins: [rehypeKatex]
   },
   ```

3. Add the navbar entry back:

   ```js
   { type: 'doc', docId: 'Introduction for everyone/intro', label: 'Docs', position: 'left' }
   ```

The `.mdx` files import shared components with paths relative to the repository
root (e.g. `../src/components/figure`), so they only resolve once the folder is
moved back out of `archive/`.
