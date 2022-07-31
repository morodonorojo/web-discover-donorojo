import React from "react";

export type OutlinedButtonType = {
  text: string;
  color?: string;
  Icon?: React.ElementType;
} & JSX.IntrinsicElements["button"];
