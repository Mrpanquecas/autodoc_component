import React from "react";

export interface ButtonProps {
  label: string;
  classname?: string;
  onClick?: () => void;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  label,
  classname,
  onClick,
}): JSX.Element => {
  return (
    <button className={`p-2 bg-red-400 ${classname}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
