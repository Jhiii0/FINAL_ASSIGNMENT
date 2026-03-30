import { NavLink } from "react-router-dom";
import "./Navbar.css"; // We'll add some specific styling for the active state here

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "link")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "link")}>
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "link")}>
            Contact Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
