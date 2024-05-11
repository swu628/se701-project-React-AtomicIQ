import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/levels">Levels</NavLink>
        </li>
        <li>
          <NavLink to="/wiki">Wiki</NavLink>
        </li>
      </ul>
      <div className="profile">
        <NavLink to="/profile">User</NavLink>
      </div>
    </div>
  );
}
