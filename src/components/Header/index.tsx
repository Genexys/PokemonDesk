import React from 'react';
import cn from 'classnames';

import s from './Header.module.scss';
import global from '../../App.module.scss';

import { ReactComponent as Logo } from './assets/Logo.svg';

const Header = ({ children }) => {
  return (
    <header className={cn(s.header)}>
      <div className={cn(global.container, s.container)}>
        <div className={cn(s.logo)}>
          <Logo />
        </div>

        <nav className={cn()}>{children}</nav>
      </div>
    </header>
  );
};

export default React.memo(Header);
