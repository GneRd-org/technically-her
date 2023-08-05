import { Outlet } from "react-router-dom";
import { OptionalChildrenProps } from "../../../types";
import { Nav } from "../..";

export const MainLayout = ({ children }: OptionalChildrenProps) => {
  return (
    <div className="flex text-white">
      <Nav>{children || <Outlet />}</Nav>
    </div>
  );
};
