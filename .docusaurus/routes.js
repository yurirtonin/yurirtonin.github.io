
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/pt-BR/404',
    component: ComponentCreator('/pt-BR/404','dc3'),
    exact: true
  },
  {
    path: '/pt-BR/aboutwebsite',
    component: ComponentCreator('/pt-BR/aboutwebsite','819'),
    exact: true
  },
  {
    path: '/pt-BR/blog',
    component: ComponentCreator('/pt-BR/blog','a31'),
    exact: true
  },
  {
    path: '/pt-BR/blog/2022/09/26/introduction',
    component: ComponentCreator('/pt-BR/blog/2022/09/26/introduction','a40'),
    exact: true
  },
  {
    path: '/pt-BR/blog/archive',
    component: ComponentCreator('/pt-BR/blog/archive','7fd'),
    exact: true
  },
  {
    path: '/pt-BR/blog/tags',
    component: ComponentCreator('/pt-BR/blog/tags','1b2'),
    exact: true
  },
  {
    path: '/pt-BR/blog/tags/blog',
    component: ComponentCreator('/pt-BR/blog/tags/blog','9da'),
    exact: true
  },
  {
    path: '/pt-BR/blog/tags/welcome',
    component: ComponentCreator('/pt-BR/blog/tags/welcome','0bb'),
    exact: true
  },
  {
    path: '/pt-BR/curriculum',
    component: ComponentCreator('/pt-BR/curriculum','37d'),
    exact: true
  },
  {
    path: '/pt-BR/teaching',
    component: ComponentCreator('/pt-BR/teaching','c67'),
    exact: true
  },
  {
    path: '/pt-BR/teaching/2022/09/26/introduction',
    component: ComponentCreator('/pt-BR/teaching/2022/09/26/introduction','661'),
    exact: true
  },
  {
    path: '/pt-BR/teaching/archive',
    component: ComponentCreator('/pt-BR/teaching/archive','640'),
    exact: true
  },
  {
    path: '/pt-BR/docs',
    component: ComponentCreator('/pt-BR/docs','d27'),
    routes: [
      {
        path: '/pt-BR/docs/Introduction/introfordummies',
        component: ComponentCreator('/pt-BR/docs/Introduction/introfordummies','72c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/pt-BR/',
    component: ComponentCreator('/pt-BR/','d72'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
