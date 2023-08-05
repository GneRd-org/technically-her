import { useRoutes } from "react-router-dom";
import { AppRouter } from "../../../routes";

const Router = () => {
  return useRoutes(AppRouter);
};

export const RootRouter = () => {
  return (
    <>
      <Router />
    </>
  );
};
