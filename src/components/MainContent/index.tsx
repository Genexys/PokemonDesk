import React from 'react';
import cn from 'classnames';

import s from './MainContent.module.scss';
import global from '../../App.module.scss';

const MainContent = ({ children }: any) => {
  return <div className={cn([global.container, s.mainContent])}>{children}</div>;
};

export default MainContent;
