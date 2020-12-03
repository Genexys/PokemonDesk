import React, { PropsWithChildren } from 'react';
import HomePage from './pages/HomePage';
import PokedexPage from './pages/PokedexPage';
import PokemonPage, { PokemonProps } from './pages/PokemonPage/PokemonPage';

interface IMainMenu {
  title: string;
  link: Link;
  component: (props: PropsWithChildren<any>) => JSX.Element;
}

export enum Link {
  HOME = '/',
  POKEDEX = '/pokedex',
  POKEMON = '/pokedex/:id',
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

const SECOND_ROUTES: IMainMenu[] = [
  {
    title: 'Pokemon',
    link: Link.POKEMON,
    component: ({ id }: PokemonProps) => <PokemonPage id={id} />,
  },
];

interface IAccMenu {
  [n: string]: (props: PropsWithChildren<any>) => JSX.Element;
}

const routes = [...MAIN_MENU, ...SECOND_ROUTES].reduce((acc: IAccMenu, item: IMainMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
