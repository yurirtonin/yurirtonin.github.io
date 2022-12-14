
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
    component: ComponentCreator('/blog','978'),
    exact: true
  },
  {
    path: '/blog/2022/09/26/introduction',
    component: ComponentCreator('/blog/2022/09/26/introduction','3c6'),
    exact: true
  },
  {
    path: '/blog/2022/11/17/when_monologue_gets_to_you',
    component: ComponentCreator('/blog/2022/11/17/when_monologue_gets_to_you','360'),
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
    path: '/blog/tags/andor',
    component: ComponentCreator('/blog/tags/andor','135'),
    exact: true
  },
  {
    path: '/blog/tags/monologue',
    component: ComponentCreator('/blog/tags/monologue','79c'),
    exact: true
  },
  {
    path: '/blog/tags/skaasgard',
    component: ComponentCreator('/blog/tags/skaasgard','230'),
    exact: true
  },
  {
    path: '/blog/tags/star-wars',
    component: ComponentCreator('/blog/tags/star-wars','04e'),
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
    path: '/teaching/tags',
    component: ComponentCreator('/teaching/tags','5d6'),
    exact: true
  },
  {
    path: '/teaching/tags/welcome',
    component: ComponentCreator('/teaching/tags/welcome','507'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','82f'),
    routes: [
      {
        path: '/docs/Introduction for everyone/intro',
        component: ComponentCreator('/docs/Introduction for everyone/intro','41f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Introduction for everyone/xrayimaging',
        component: ComponentCreator('/docs/Introduction for everyone/xrayimaging','b93'),
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
