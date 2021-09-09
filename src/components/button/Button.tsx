import React, { HTMLProps, PropsWithChildren } from 'react';

const Button: React.FC<
  PropsWithChildren<Props & HTMLProps<HTMLButtonElement>>
> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
