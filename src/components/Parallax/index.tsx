import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import s from './Parallax.module.scss';

import { ReactComponent as Smallpokeball } from './assets/smallPokeball.svg';
import { ReactComponent as BigPokeball } from './assets/bigPokeball.svg';
import { ReactComponent as Pikachu } from './assets/Pikachu.svg';
import { ReactComponent as SmallCloud } from './assets/smallCloud.svg';
import { ReactComponent as BigCloud } from './assets/bigCloud.svg';

const Parallax = () => {
  const [screenX, setScreenX] = useState(0);
  const [screenY, setScreenY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setScreenX(event.screenX);
      setScreenY(event.screenY);
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [screenX, screenX]);

  return (
    <div className={cn(s.parallaxContainer)}>
      <div
        className={cn(s.smallPokeball)}
        style={{
          transform: `translate(-${screenY * 0.04}px, ${screenY * 0.04}px)`,
        }}>
        <Smallpokeball />
      </div>

      <div
        className={cn(s.cloud)}
        style={{
          transform: `translateX(${screenX * 0.06}px)`,
        }}>
        <SmallCloud />
      </div>

      <div
        className={cn(s.cloudBig)}
        style={{
          transform: `translateX(${screenX * 0.04}px)`,
        }}>
        <BigCloud />
      </div>

      <div
        className={cn(s.pikachu)}
        style={{
          transform: `translate(${screenY * 0.03}px, ${screenY * 0.03}px)`,
        }}>
        <Pikachu />
      </div>

      <div
        className={cn(s.pokeBall)}
        style={{
          transform: `translate(${screenY * 0.01}px, ${screenY * 0.01}px)`,
        }}>
        <BigPokeball />
      </div>
    </div>
  );
};

export default Parallax;
