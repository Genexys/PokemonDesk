import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import Card from '../../components/Card/Card';
import PokeballLoader from '../../components/PokeballLoader';
import Search from '../../components/Search/Search';

import useDebounce from '../../config/useDebounce';
import useData from '../../hook/getData';
import IData, { PokemonsRequest } from '../../interface/pokemons';

import s from './PokedexPage.module.scss';

interface IQuery {
  name?: string;
}

const PokedexPage = () => {
  const [value, setValue] = useState('');
  const [query, setQuery] = useState<IQuery>({});
  const debouncedValue = useDebounce(value, 500);
  const { data, isLoading, isError } = useData<IData>('getPokemons', query, [debouncedValue]);

  useEffect(() => {}, [debouncedValue]);

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
        {!isLoading && data && data.pokemons.map((el: PokemonsRequest) => <Card key={el.id} data={el} />)}
      </ul>
    </div>
  );
};

export default PokedexPage;
