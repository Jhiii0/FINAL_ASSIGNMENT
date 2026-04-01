import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import type { Theme } from "../context/ThemeContext";
import "./Navbar.css";

export default function Navbar() {
  const themeCtx = useContext(ThemeContext);

  if (!themeCtx) return null;
  const { theme, setTheme } = themeCtx;

  const themes: Theme[] = ["light", "dark", "ocean", "forest"];

  const cycleTheme = () => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <div className="navbar__logo">{"<Jhiro Dev />"}</div>
        <ul className="navbar__links">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="theme-switcher">
          {themes.map((t) => (
            <button
              key={t}
              className={`theme-btn theme-btn--${t} ${theme === t ? "active" : ""}`}
              onClick={() => setTheme(t)}
              title={`Switch to ${t} theme`}
            />
          ))}
          <button onClick={cycleTheme} className="btn btn--outline" style={{ padding: "0.4rem 0.8rem", fontSize: "0.8rem", marginLeft: "0.5rem" }}>
            Cycle
          </button>
        </div>
      </div>
    </nav>
  );
}
