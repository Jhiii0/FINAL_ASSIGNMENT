import Header from "../components/Header.tsx";
import HeroSection from "../components/HeroSection.tsx";
import Footer from "../components/Footer.tsx";

export default function Home() {
  return (
    <div className="page-container fade-in">
      <Header title="Home" />
      <main className="content-wrap">
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}
