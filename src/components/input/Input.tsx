import { TextField as MUIInput } from '@material-ui/core';
import React, { HTMLInputTypeAttribute } from 'react';

type Props = {
  type?: HTMLInputTypeAttribute;
  onChange?: (value: string) => void;
  placeholder?: string;
  dataTestid?: string;
  id?: string;
  value?: string | number | readonly string[];
  error?: string;
};

const Input: React.FC<Props> = ({
  type,
  onChange,
  placeholder,
  dataTestid,
  id,
  value,
  error,
}) => {
  return (
    <MUIInput
      type={type}
      data-testid={dataTestid}
      placeholder={placeholder}
      onChange={(event) => {
        if (typeof onChange === 'function') onChange(event.target.value);
      }}
      id={id}
      value={value}
      error={!!error}
      helperText={error}
    />
  );
};

export default Input;
