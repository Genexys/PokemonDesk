import React, { CSSProperties } from 'react';
import cn from 'classnames';
import Heading from '../Heading';

import s from './Card.module.scss';

type BGTypes = {
  [n: string]: string;
};

const BG: BGTypes = {
  poison: '#a974bc',
  psychic: '#a974bc',
  fairy: '#a974bc',
  ghost: '#a974bc',
  grass: '#73d677',
  bug: '#73d677',
  ground: '#9b897b',
  electric: '#f7c545',
  gosth: '#76aadb',
  normal: '#76aadb',
  fire: '#f76545',
  fighting: '#f76545',
  dragon: '#f76545',
  ice: '#a2cff0',
  water: '#a2cff0',
  stile: '#a1a1a1',
  dark: '#a1a1a1',
  rock: '#a1a1a1',
  flying: '#A890F0',
  steel: '#B7B7CE',
};

const Card = ({ data }) => {
  const bgStyle: CSSProperties = {
    background:
      data.types.length > 1
        ? `linear-gradient(270deg, ${BG[data.types[0]]} 0.15%, ${BG[data.types[1]]} 100%)`
        : `background: ${BG[data.types[0]]}`,
  };

  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <div className={s.titleName}>
          <Heading sizeTitle="h3" className="h3">
            {data.name}
          </Heading>
        </div>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{data.stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{data.stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {data.types.map((el) => (
            <span key={el} className={cn(s.label, s[el])}>
              {el}
            </span>
          ))}
        </div>
      </div>
      <div className={cn(s.pictureWrap, s[data.types[0]])} style={bgStyle}>
        <img src={data.img} alt={data.name} />
      </div>
    </div>
  );
};
export default Card;
