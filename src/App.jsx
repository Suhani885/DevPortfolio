import { useState, useEffect } from "react";
import About from "./components/About";
import Background from "./components/Background";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navigation from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Preloader from "./components/Preloader";
import Marquee from "./components/Marquee";

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-transparent dark:bg-black text-gray-900 dark:text-white overflow-hidden relative">
      <Preloader />
      <Background mousePosition={mousePosition} />
      <Navigation />
      <HeroSection isVisible={isVisible} />
      <Marquee text="AVAILABLE FOR WORK • CREATIVE DEVELOPER • FRONTEND ENGINEER " />
      <About isVisible={isVisible} />
      <Experience isVisible={isVisible} />
      <Projects isVisible={isVisible} />
      <Skills isVisible={isVisible} />
      <Contact isVisible={isVisible} />
      <Footer />
    </div>
  );
};

export default Portfolio;
