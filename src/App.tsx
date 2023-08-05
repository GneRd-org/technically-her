import { Toaster } from "react-hot-toast";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./routes";
import ErrorPage from "./components/pages/error-404/error-400";
import { Profile } from "./components";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root>{<Outlet />}</Root>,
      errorElement: <ErrorPage />,
    },
    { path: "/profile", element: <Profile /> },
    { path: "*", element: <ErrorPage /> },
  ]);
  return (
    <>
      <Toaster position="top-center" />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
