import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"contact"}>Contato</Link>
      <Outlet />
    </div>
  );
};
