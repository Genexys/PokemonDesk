import React from 'react';
import cn from 'classnames';
import Heading from '../Heading';

import s from './Card.module.scss';

interface IPokemonsData {
  data: {
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
    id: number;
    ['is_default']: boolean;
    order: number;
    weight: number;
  };
}

const Card: React.FC<IPokemonsData> = ({ data }) => {
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
      <div className={cn(s.pictureWrap, s[data.types[0]])}>
        <img src={data.img} alt={data.name} />
      </div>
    </div>
  );
};
export default Card;
