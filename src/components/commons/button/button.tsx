import { FC } from "react";
import { ChildrenProps } from "../../../types";
interface ButtonProps extends ChildrenProps {
  buttonType: "clear" | "secondary";
}
export const Button: FC<ButtonProps> = ({ children, buttonType }) => {
  console.log(buttonType);

  return (
    <button className={`${"bg-blue-400"} rounded-lg px-6 py-2`}>
      {children}
    </button>
  );
};
