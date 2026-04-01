import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./Navbar.css";

export default function Navbar() {
  const themeCtx = useContext(ThemeContext);

  if (!themeCtx) return null; // Safe guard
  const { theme, setTheme } = themeCtx;

  const cycleTheme = () => {
    if (theme === "midnight") setTheme("emerald");
    else if (theme === "emerald") setTheme("solarized");
    else setTheme("midnight");
  };

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
      <button onClick={cycleTheme} className="theme-toggle">
        Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}
      </button>
    </nav>
  );
}
