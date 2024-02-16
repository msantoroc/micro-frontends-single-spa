import { RouterProvider } from "react-router-dom";
import { router } from "./navigation";

export const App = () => {
  return (
    <>
      <p>Add providers here</p>
      <RouterProvider router={router} />
    </>
  );
};
