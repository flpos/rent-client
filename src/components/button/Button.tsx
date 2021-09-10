import React from 'react';
import { Button as MUIButton } from '@material-ui/core';

type Props = {
  onClick?: () => void;
  role?: string;
  type?: 'submit' | 'button' | 'reset';
  color?: 'default' | 'inherit' | 'primary' | 'secondary';
};

const Button: React.FC<Props> = ({
  children,
  onClick,
  role,
  type,
  color = 'default',
}) => {
  return (
    <MUIButton
      color={color}
      variant='contained'
      onClick={onClick}
      role={role}
      type={type}
    >
      {children}
    </MUIButton>
  );
};

export default Button;
