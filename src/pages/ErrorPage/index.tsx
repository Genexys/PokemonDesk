import React from 'react';
import cn from 'classnames';

import Button from '../../components/Button';

import s from './ErrorPage.module.scss';
import global from '../../App.module.scss';

const ErrorPage = ({ history }) => {
  return (
    <div className={cn(s.root)}>
      <div className={cn(global.container)}>
        <span className={cn(s.textError)}>404</span>

        <Button onClick={(e) => history.push('/')} color="yellow">
          Return
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;