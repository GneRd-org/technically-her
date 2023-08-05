import React, { FC } from "react";
import { Link } from "react-router-dom";

interface SideNavProps {
  children: React.ReactNode;
}

export const SideNav: FC<SideNavProps> = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-300 p-4">
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-3/4 p-4">{children}</div>
    </div>
  );
};
