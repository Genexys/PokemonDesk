import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import axios from 'axios';

import Card from '../../components/Card/Card';
import PokebolLoader from '../../components/PokebolLoader';

import s from './PokedexPage.module.scss';

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

interface IUsePokemons {
  data: IData;
  isLoading: boolean;
  isError: boolean;
}

const usePokemons = (): IUsePokemons => {
  const [data, setData] = useState<IData>({ total: 0, pokemons: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`http://zar.hosthot.ru/api/v1/pokemons?limit=100`);
        const dataRes = await res;

        if (dataRes.status === 200) {
          setData(dataRes.data);
          setIsLoading(false);
        }
      } catch (err) {
        setIsError(true);
      } finally {
        setIsError(false);
      }
    })();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const PokedexPage = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <PokebolLoader />;
  }

  if (isError) {
    return <div>Error!</div>;
  }

  return (
    <div className={cn(s.PokedexPage)}>
      <span className={cn(s.pokedexTitle)}>
        {data.total} <span>Pokemons</span> for you to choose your favorite
      </span>

      <ul className={cn(s.pokemonsList)}>
        {data.pokemons.map((el) => (
          <Card key={el.id} data={el} />
        ))}
      </ul>
    </div>
  );
};

export default PokedexPage;
