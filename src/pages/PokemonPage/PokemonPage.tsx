import React from 'react';
import s from './PokemonPage.module.scss';
import useData from '../../hook/getData';
import { PokemonsRequest } from '../../interface/pokemons';
import PokeballLoader from '../../components/PokeballLoader';
import Card from '../../components/Card/Card';

export interface PokemonProps {
  id: string | number;
}

const PokemonPage: React.FC<PokemonProps> = ({ id }) => {
  const { data, isLoading } = useData<PokemonsRequest>('getPokemon', { id });

  if (isLoading) {
    return <PokeballLoader />;
  }

  return (
    <div className={s.PokemonPage}>
      <Card data={data} />
    </div>
  );
};
export default PokemonPage;
