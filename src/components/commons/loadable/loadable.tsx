import { FC, Suspense } from "react";
import { Loader } from "..";
import { ChildrenProps } from "../../../types";

export const Loadable: FC<ChildrenProps> = ({ children }) => (
  <Suspense fallback={<Loader />}>{children}</Suspense>
);
