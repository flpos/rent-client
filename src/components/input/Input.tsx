import React from 'react';

type Props = {
  onChange?: (value: string) => void;
  placeholder?: string;
  dataTestid?: string;
};

const Input: React.FC<Props> = ({ onChange, placeholder, dataTestid }) => {
  return (
    <input
      data-testid={dataTestid}
      placeholder={placeholder}
      onChange={(event) => {
        if (typeof onChange === 'function') onChange(event.target.value);
      }}
    />
  );
};

export default Input;
