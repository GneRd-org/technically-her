import { Home, Profile } from "../components";
import { MainLayout } from "../components/layouts/main-layout/main-layout";

export const AppRouter = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
];
