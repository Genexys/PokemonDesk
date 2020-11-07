import React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  color?: string | undefined;
  size?: 'small' | 'middle' | 'large' | undefined;
  fullWidth?: boolean | undefined;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, color, size, fullWidth }) => {
  return (
    <button type="button" className={cn(s.button, s[`${color}`], s[`${size}`], fullWidth && s.full)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
