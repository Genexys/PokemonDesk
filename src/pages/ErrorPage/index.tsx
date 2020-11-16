import React from 'react';
import cn from 'classnames';
import { navigate } from 'hookrouter';

import Button from '../../components/Button';

import { Link } from '../../routes';

import s from './ErrorPage.module.scss';
import global from '../../App.module.scss';

const ErrorPage = () => {
  return (
    <div className={cn(s.root)}>
      <div className={cn(global.container)}>
        <span className={cn(s.textError)}>404</span>

        <Button onClick={(e) => navigate(Link.HOME)} color="yellow">
          Return
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
