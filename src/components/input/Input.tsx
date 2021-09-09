import React, { HTMLProps } from "react";

type Props = {
  onChange?: (value: string) => void;
};

const Input: React.FC<Props & HTMLProps<HTMLInputElement>> = (props) => {
  return (
    <input
      {...props}
      onChange={(event) => {
        if (typeof props.onChange === "function")
          props.onChange(event.target.value);
      }}
    />
  );
};

export default Input;
