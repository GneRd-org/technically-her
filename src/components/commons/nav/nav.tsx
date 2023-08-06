import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../../assets";
import { ChildrenProps } from "../../../types";
import { FiMenu } from "react-icons/fi";
import { MdLightMode } from "react-icons/md";
import { AuthService } from "../../../service";
import toast from "react-hot-toast";

export const Nav = ({ children }: ChildrenProps) => {
  const navigate = useNavigate();
  const path = window.location.pathname;
  console.log(path);
  const signOut = () => {
    AuthService.signOut().then(() => {
      toast.success("Signing out....");
    });
    navigate("/");
  };

  const goToProfile = () => {
    navigate("/profile");
  };

  const DropdownMenu = () => (
    <div className="flex min-h-[64px] items-center justify-end px-3 text-white">
      <MdLightMode size="25px" />
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <FiMenu size="25px" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-50 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-secondaryDark shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="button"
                    className={`${
                      active ? "text-teal-400" : "text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={goToProfile}
                  >
                    Profile
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="button"
                    className={`${
                      active ? "text-teal-400" : "text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => navigate("/interviews")}
                  >
                    Interviews
                  </button>
                )}
              </Menu.Item>
            </div>
            {path !== "/" ? (
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="button"
                      className={`${
                        active ? "text-teal-400" : "text-white"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={signOut}
                    >
                      Sign Out
                    </button>
                  )}
                </Menu.Item>
              </div>
            ) : (
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="button"
                      className={`${
                        active ? "text-teal-400" : "text-white"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={signOut}
                    >
                      Sign In
                    </button>
                  )}
                </Menu.Item>
              </div>
            )}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );

  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="flex items-center justify-between w-screen bg-primaryDark px-2">
        <div className="hidden w-1/5 items-center justify-between sm:visible sm:flex">
          <img src={Logo} alt="logo" className="w-30" />
        </div>
        <div className="w-2/5 bg-primaryDark">
          <DropdownMenu />
        </div>
      </div>

      <div className="bg-secondaryDark h-full px-12 overflow-auto">
        {children}
      </div>
    </div>
  );
};
