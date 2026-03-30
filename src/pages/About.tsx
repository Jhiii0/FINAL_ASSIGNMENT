import Navbar from "../components/Navbar";
import BioContent from "../components/BioContent";
import SkillsSection from "../components/SkillsSection";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <main id="about-page" className="page-wrapper">
        {/* Page Header */}
        <section className="section" style={{ paddingBottom: "0" }} aria-label="About page header">
          <div className="container">
            <span className="section-label">Who I Am</span>
            <h1 className="fade-up" style={{ color: "var(--text-primary)" }}>
              About <span style={{ background: "var(--gradient-accent)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Me
              </span>
            </h1>
          </div>
        </section>

        <div className="divider" style={{ marginTop: "2rem" }} />

        <BioContent />

        <div className="divider" />

        <SkillsSection />
      </main>
      <Footer />
    </>
  );
}
