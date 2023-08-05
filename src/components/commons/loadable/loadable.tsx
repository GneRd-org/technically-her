import { Suspense } from "react";
import { Loader } from "..";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
