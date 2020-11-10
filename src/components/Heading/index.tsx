import React from 'react';
import cn from 'classnames';

import s from './Heading.module.scss';

interface PropsHeading {
  tag?: keyof JSX.IntrinsicElements;
  sizeTitle?: string;
  className?: string;
}

const Heading: React.FC<PropsHeading> = ({ children, tag: Wrapper = 'h2', className }) => {
  return <Wrapper className={cn(s.title, s[`${className}`])}>{children}</Wrapper>;
};

export default Heading;
