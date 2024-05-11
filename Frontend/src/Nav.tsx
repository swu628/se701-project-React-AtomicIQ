import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/">Levels</NavLink>
        </li>
        <li>
          <NavLink to="/">Wiki</NavLink>
        </li>
      </ul>
      <div className="right">
        <NavLink to="/">User</NavLink>
      </div>
    </div>
  );
}
