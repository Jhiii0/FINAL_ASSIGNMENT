import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__logo">{"<Jhiro Dev />"}</p>
        <p className="footer__tagline">Building digital experiences with passion &amp; precision.</p>

        {/* Footer Navigation */}
        <ul className="footer__links">
          <li><Link to="/" id="footer-home">Home</Link></li>
          <li><Link to="/about" id="footer-about">About</Link></li>
          <li><Link to="/contact" id="footer-contact">Contact</Link></li>
        </ul>

        {/* Social Icons */}
        <div className="footer__social">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            id="social-github"
            aria-label="GitHub"
            title="GitHub"
          >
            ⌨️
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            id="social-linkedin"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            💼
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            id="social-twitter"
            aria-label="Twitter"
            title="Twitter"
          >
            🐦
          </a>
        </div>

        <p className="footer__copy">
          &copy; {year} Jhiro Dela Cruz. Built with React + TypeScript + Vite.
        </p>
      </div>
    </footer>
  );
}
