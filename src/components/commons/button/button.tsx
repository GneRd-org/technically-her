import { FC } from "react";
import { ChildrenProps } from "../../../types";
interface ButtonProps extends ChildrenProps {
  buttonType: "stop" | "submit" | "common";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: (arg0: any) => any;
  icon?: JSX.Element;
}
export const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  icon,
  ...rest
}) => {
  let style = "";
  switch (buttonType) {
    case "submit":
      style += "bg-[#76FA55]";
      break;
    case "stop":
      style += "bg-[#DD5159]";
      break;
    default:
      style += "bg-[#90CDF4]";
  }
  return (
    <button {...rest} className={style + " rounded-lg py-3 px-3 w-full"}>
      <section className="flex items-center gap-2">
        {icon ? icon : <></>}
        {children}
      </section>
    </button>
  );
};
