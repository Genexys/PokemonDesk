import React from 'react';

interface PropsHeading {
  tag?: keyof JSX.IntrinsicElements;
  sizeTitle?: string;
}

const Heading: React.FC<PropsHeading> = ({ children, tag: Wrapper = 'h2' }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Heading;
