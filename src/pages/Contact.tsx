import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main id="contact-page" className="page-wrapper">
        <section className="section" style={{ paddingBottom: "0" }} aria-label="Contact page header">
          <div className="container">
            <span className="section-label">Say Hello</span>
            <h1 className="fade-up" style={{ color: "var(--text-primary)" }}>
              Contact{" "}
              <span style={{ background: "var(--gradient-accent)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Me
              </span>
            </h1>
          </div>
        </section>

        <div className="divider" style={{ marginTop: "2rem" }} />

        <section className="section" aria-label="Contact details and form">
          <div className="container">
            <div className="grid-2">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
