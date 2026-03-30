import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page-container fade-in">
      <Header title="Error 404" />
      <main className="content-wrap not-found-layout">
        <h2>Oops! Page Not Found</h2>
        <p>The page you're looking for doesn't exist.</p>
        <Link to="/" className="cta-button">Go Back Home</Link>
      </main>
      <Footer />
    </div>
  );
}
