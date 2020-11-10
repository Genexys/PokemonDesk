import React from 'react';
import cn from 'classnames';
import { A, usePath } from 'hookrouter';

import { MAIN_MENU } from '../../routes';

import s from './Menu.module.scss';

const Menu = () => {
  const path = usePath();

  return (
    <ul className={cn(s.listMenu)}>
      {MAIN_MENU.map(({ title, link }) => (
        <li key={title} className={cn(s.itemMenu)}>
          <A href={link} className={cn(s.itemLink, { [s.selected]: link === path })}>
            {title}
          </A>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
