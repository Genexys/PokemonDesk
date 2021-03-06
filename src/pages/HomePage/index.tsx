import React from 'react';
import cn from 'classnames';
import { navigate } from 'hookrouter';

import Button from '../../components/Button';
import Parallax from '../../components/Parallax';
import Heading from '../../components/Heading';

import { Link } from '../../routes';

import s from './MainScreen.module.scss';

const HomePage = () => {
  return (
    <div className={cn(s.mainScreen)}>
      <div className={cn(s.description)}>
        <div className={cn(s.title)}>
          <Heading tag="h1">
            <span>Find</span> all your favorite <span>Pokemon</span>
          </Heading>
        </div>
        <h2 className={cn(s.secondTitle)}>
          You can know the type of Pokemon, its strengths, disadvantages and abilities
        </h2>

        <Button onClick={(e) => navigate(Link.POKEDEX)}>See pokemons</Button>
      </div>

      <div className={cn(s.parallaxContent)}>
        <Parallax />
      </div>
    </div>
  );
};

export default HomePage;
