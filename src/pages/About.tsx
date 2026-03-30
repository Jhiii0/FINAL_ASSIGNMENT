import Header from "../components/Header.tsx";
import BioContent from "../components/BioContent.tsx";
import Footer from "../components/Footer.tsx";

export default function About() {
  return (
    <div className="page-container fade-in">
      <Header title="About Me" />
      <main className="content-wrap">
        <BioContent />
      </main>
      <Footer />
    </div>
  );
}
