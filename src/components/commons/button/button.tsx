import React, { FC } from "react";
import { ChildrenProps } from "../../../types";

export const Button: FC<ChildrenProps> = ({ children }) => {
  return (
    <button className="bg-blue-400 rounded-lg px-6 py-2">{children}</button>
  );
};
