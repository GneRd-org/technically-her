import { useRoutes } from "react-router-dom";
import { AppRouter } from ".";

const Router = () => {
  return useRoutes([...AppRouter]);
};

export const IndexRoute = () => (
  <>
    <Router />
  </>
);
