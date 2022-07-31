import clsx from "clsx";
import React from "react";
import { OutlinedButtonType } from "../types";

const OutlinedButton: React.FC<OutlinedButtonType> = ({
  text,
  color,
  Icon,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        `border-2 flex flex-row items-center border-white rounded-full py-2 px-8 text-sm transition-all ${className}`,
        "hover:scale-105"
      )}
      {...props}
    >
      <p className="mr-4">{text}</p>
      {!!Icon && <Icon />}
    </button>
  );
};

export default OutlinedButton;
