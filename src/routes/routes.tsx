import {
  CultureFit,
  Home,
  InterviewSimulation,
  Landing,
  Profile,
} from "../components";
import { MainLayout } from "../components/layouts/main-layout/main-layout";

export const AppRouter = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/interviews",
        element: <InterviewSimulation />,
      },
      {
        path: "/company-culture",
        element: <CultureFit />,
      },
    ],
  },
];
