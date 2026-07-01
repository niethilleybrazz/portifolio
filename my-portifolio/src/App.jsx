import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Projects from "./components/Projects";
import DividerCarousel from "./components/ui/DividerCarousel";
import Contact from "./components/Contact";
import { BGPattern } from "./components/ui/bg-pattern";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ui/ScrollProgress";
import Lenis from "lenis";
import { useEffect } from "react";

function App() {
  useEffect(() => {
  const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return () => lenis.destroy();
}, []);
  return (
    <div className="padding-body">
      <BGPattern
        variant="dots"
        mask="fade-center"
        fill="#3D3D3D"
        size={30}
        className="fixed inset-0 pointer-events-none opacity-40"
      />
      {/* <ScrollProgress/> */}
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <Carousel />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
