import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturedSection from "../components/FeaturedSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="home-page">
        <HeroSection />
        <div className="divider" />
        <FeaturedSection />
      </main>
      <Footer />
    </>
  );
}
