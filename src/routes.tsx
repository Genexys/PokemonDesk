import React from 'react';
import HomePage from './pages/HomePage';
import PokedexPage from './pages/PokedexPage';

interface IMainMenu {
  title: string;
  link: Link;
  component: () => JSX.Element;
}

export enum Link {
  HOME = '/',
  POKEDEX = '/pokedex',
}

export const MAIN_MENU: IMainMenu[] = [
  {
    title: 'Home',
    link: Link.HOME,
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: Link.POKEDEX,
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
