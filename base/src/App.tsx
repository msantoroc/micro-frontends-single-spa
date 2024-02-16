import { BrowserRouter, Link } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <section>
        <p>Base layout is mounted!</p>
        <Link to="/">dashboard</Link>
        <br />
        <Link to="/react-project">react-project</Link>
      </section>
    </BrowserRouter>
  );
};
