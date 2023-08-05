import { FC } from "react";
import { Link } from "react-router-dom";
interface SideNavProps {
  children: React.ReactNode;
}
export const Root: FC<SideNavProps> = ({ children }) => {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-1/8 bg-gray-300 p-4">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="w-3/4 p-4">{children}</div>
      </div>
    </>
  );
};
