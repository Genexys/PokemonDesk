import React, { useState } from 'react';
import cn from 'classnames';

import Card from '../../components/Card/Card';
import PokeballLoader from '../../components/PokeballLoader';
import Search from '../../components/Search/Search';

import s from './PokedexPage.module.scss';
import useData from '../../hook/getData';

interface IPokemonsData {
  ['name_clean']: string;
  abilities: string[];
  stats: {
    [n: string]: number;
  };
  types: string[];
  img: string;
  name: string;
  ['base_experience']: number;
  height: number;
  id: number | null;
  ['is_default']: boolean;
  order: number;
  weight: number;
}

interface IData {
  total: number;
  pokemons: IPokemonsData[];
}

const PokedexPage = () => {
  const [value, setValue] = useState('');
  const [query, setQuery] = useState({});

  const { data, isLoading, isError } = useData<IData>('getPokemons', query, [value]);

  if (isLoading) {
    return <PokeballLoader />;
  }

  if (isError) {
    return <div>Error!</div>;
  }

  return (
    <div className={cn(s.PokedexPage)}>
      <span className={cn(s.pokedexTitle)}>
        {!isLoading && data && data.total} <span>Pokemons</span> for you to choose your favorite
      </span>

      <Search valueSearch={setValue} valueQuery={setQuery} />

      <ul className={cn(s.pokemonsList)}>
        {!isLoading && data && data.pokemons.map((el) => <Card key={el.id} data={el} />)}
      </ul>
    </div>
  );
};

export default PokedexPage;
