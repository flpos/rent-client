import React from 'react';

type Props = {
  onClick?: () => void;
  role?: string;
  type?: 'submit' | 'button' | 'reset';
};

const Button: React.FC<Props> = ({ children, onClick, role, type }) => {
  return (
    <button onClick={onClick} role={role} type={type}>
      {children}
    </button>
  );
};

export default Button;
