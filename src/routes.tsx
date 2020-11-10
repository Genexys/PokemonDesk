import React from 'react';
import HomePage from './pages/HomePage';
import PokedexPage from './pages/PokedexPage';

interface IMainMenu {
  title: string;
  link: string;
  component: () => JSX.Element;
}

export const MAIN_MENU: IMainMenu[] = [
  {
    title: 'Home',
    link: '/',
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: '/pokedex',
    component: () => <PokedexPage />,
  },
];

interface IAccMenu {
  [n: string]: () => JSX.Element;
}

const routes = MAIN_MENU.reduce((acc: IAccMenu, item: IMainMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
