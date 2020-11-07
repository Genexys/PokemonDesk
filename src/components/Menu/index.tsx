import React from 'react';
import cn from 'classnames';

import { NavLink } from 'react-router-dom';

import s from './Menu.module.scss';

const Menu = () => {
  return (
    <ul className={cn(s.listMenu)}>
      <li className={cn(s.itemMenu)}>
        <NavLink
          to="/"
          exact
          activeStyle={{
            fontWeight: 'bold',
          }}
          className={cn(s.itemLink)}>
          Home
        </NavLink>
      </li>

      <li className={cn(s.itemMenu)}>
        <NavLink
          to="/pokedex"
          activeStyle={{
            fontWeight: 'bold',
          }}
          className={cn(s.itemLink)}>
          Pokédex
        </NavLink>
      </li>
    </ul>
  );
};

export default Menu;
