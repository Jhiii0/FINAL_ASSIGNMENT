import Header from "../components/Header.tsx";
import ContactForm from "../components/ContactForm.tsx";
import Footer from "../components/Footer.tsx";

export default function Contact() {
  return (
    <div className="page-container fade-in">
      <Header title="Contact Me" />
      <main className="content-wrap">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
