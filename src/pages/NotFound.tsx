import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="notfound-page">
        <section className="not-found" aria-label="404 page not found">
          <div className="container" style={{ textAlign: "center" }}>
            <div className="not-found__code" aria-label="Error 404">404</div>
            <h1 className="not-found__title">Page Not Found</h1>
            <p className="not-found__subtitle">
              Oops! The page you're looking for doesn't exist or has been moved.
              <br />
              Let's get you back on track.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/" className="btn btn--primary" id="notfound-home-btn">
                🏠 Back to Home
              </Link>
              <Link to="/contact" className="btn btn--outline" id="notfound-contact-btn">
                📬 Contact Me
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
