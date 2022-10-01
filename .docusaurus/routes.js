
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/404',
    component: ComponentCreator('/404','728'),
    exact: true
  },
  {
    path: '/aboutwebsite',
    component: ComponentCreator('/aboutwebsite','a8b'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','03a'),
    exact: true
  },
  {
    path: '/blog/2022/09/26/introduction',
    component: ComponentCreator('/blog/2022/09/26/introduction','3c6'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/blog',
    component: ComponentCreator('/blog/tags/blog','6a4'),
    exact: true
  },
  {
    path: '/blog/tags/welcome',
    component: ComponentCreator('/blog/tags/welcome','418'),
    exact: true
  },
  {
    path: '/curriculum',
    component: ComponentCreator('/curriculum','154'),
    exact: true
  },
  {
    path: '/teaching',
    component: ComponentCreator('/teaching','2a5'),
    exact: true
  },
  {
    path: '/teaching/2022/09/26/introduction',
    component: ComponentCreator('/teaching/2022/09/26/introduction','b9d'),
    exact: true
  },
  {
    path: '/teaching/archive',
    component: ComponentCreator('/teaching/archive','435'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','f1e'),
    routes: [
      {
        path: '/docs/Introduction/introfordummies',
        component: ComponentCreator('/docs/Introduction/introfordummies','45e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
