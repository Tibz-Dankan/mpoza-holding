import React, { Fragment, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  label: ReactNode;
  type: "submit" | "reset" | "button";
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <Fragment>
      <button
        className={twMerge(
          `flex items-center justify-center bg-yellow-700
           py-[10px] px-4 rounded text-gray-200 disabled:opacity-80
           disabled:cursor-not-allowed`,
          props.className
        )}
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.label}
      </button>
    </Fragment>
  );
};

export default Button;
