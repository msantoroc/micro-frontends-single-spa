import { Contact, Home } from "../pages";
import { Layout } from "../Layout";

export const appRoutes = {
  element: <Layout />,
  children: [
    { path: "/", element: <Home /> },
    { path: "/contact", element: <Contact /> },
  ],
};
