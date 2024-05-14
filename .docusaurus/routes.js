import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/404',
    component: ComponentCreator('/404', '5c5'),
    exact: true
  },
  {
    path: '/aboutwebsite',
    component: ComponentCreator('/aboutwebsite', 'df1'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b8e'),
    exact: true
  },
  {
    path: '/blog/2022/09/26/introduction',
    component: ComponentCreator('/blog/2022/09/26/introduction', '8cf'),
    exact: true
  },
  {
    path: '/blog/2022/11/17/when_monologue_gets_to_you',
    component: ComponentCreator('/blog/2022/11/17/when_monologue_gets_to_you', '298'),
    exact: true
  },
  {
    path: '/blog/2024-02-we_need_science_communicators',
    component: ComponentCreator('/blog/2024-02-we_need_science_communicators', '28d'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '245'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '4c4'),
    exact: true
  },
  {
    path: '/blog/tags/andor',
    component: ComponentCreator('/blog/tags/andor', '232'),
    exact: true
  },
  {
    path: '/blog/tags/monologue',
    component: ComponentCreator('/blog/tags/monologue', 'b21'),
    exact: true
  },
  {
    path: '/blog/tags/skaasgard',
    component: ComponentCreator('/blog/tags/skaasgard', '849'),
    exact: true
  },
  {
    path: '/blog/tags/star-wars',
    component: ComponentCreator('/blog/tags/star-wars', 'b58'),
    exact: true
  },
  {
    path: '/blog/tags/welcome',
    component: ComponentCreator('/blog/tags/welcome', 'be4'),
    exact: true
  },
  {
    path: '/curriculum',
    component: ComponentCreator('/curriculum', 'd82'),
    exact: true
  },
  {
    path: '/teaching',
    component: ComponentCreator('/teaching', '03f'),
    exact: true
  },
  {
    path: '/teaching/2022/09/26/introduction',
    component: ComponentCreator('/teaching/2022/09/26/introduction', 'ab2'),
    exact: true
  },
  {
    path: '/teaching/2024/05/09/propagators',
    component: ComponentCreator('/teaching/2024/05/09/propagators', '7d5'),
    exact: true
  },
  {
    path: '/teaching/archive',
    component: ComponentCreator('/teaching/archive', '710'),
    exact: true
  },
  {
    path: '/teaching/tags',
    component: ComponentCreator('/teaching/tags', 'fea'),
    exact: true
  },
  {
    path: '/teaching/tags/fresnel',
    component: ComponentCreator('/teaching/tags/fresnel', '72c'),
    exact: true
  },
  {
    path: '/teaching/tags/nearfield',
    component: ComponentCreator('/teaching/tags/nearfield', '430'),
    exact: true
  },
  {
    path: '/teaching/tags/propagation',
    component: ComponentCreator('/teaching/tags/propagation', 'efa'),
    exact: true
  },
  {
    path: '/teaching/tags/welcome',
    component: ComponentCreator('/teaching/tags/welcome', '4b0'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '4f5'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'c17'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '456'),
            routes: [
              {
                path: '/docs/Introduction for everyone/intro',
                component: ComponentCreator('/docs/Introduction for everyone/intro', 'aff'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
