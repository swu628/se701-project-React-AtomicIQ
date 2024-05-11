import AccountCircleIcon from "@mui/icons-material/AccountCircle";
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
        <li style={{ marginLeft: "60vw" }}>
          <NavLink to="/profile" className="profile-section">
            <AccountCircleIcon className="profile-icon" />
            User
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
