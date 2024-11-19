import React, { useEffect, useRef, useState } from "react";
import Banner from "./components/banner";
import Header from "./components/header";
import About from "./components/section/about";
import Chefs from "./components/section/chefs";
import Offers from "./components/section/offers";
import Footer from "./components/section/footer";
import Reservation from "./components/section/reservation";
import Menu from "./components/section/menu";
import Preloader from "./components/Preloader";

function App() {
  const sectionsRef = useRef([]);
  const [activeSection, setActiveSection] = useState("");
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const fadeInStyle = (id) => ({
    opacity: visibleSections.has(id) ? 1 : 0,
    transform: visibleSections.has(id) ? "translateY(0)" : "translateY(50px)",
    transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
  });

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  return (
    <>
      {isLoading && <Preloader />}
      <div
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.5s ease-out",
        }}
      >
        <Header activeSection={activeSection} onNavClick={scrollToSection} />

        <div
          id="banner"
          ref={(el) => (sectionsRef.current[0] = el)}
          style={{ marginTop: "-50px" }}
        >
          <Banner />
        </div>

        <div
          id="about"
          ref={(el) => (sectionsRef.current[1] = el)}
          style={fadeInStyle("about")}
        >
          <About />
        </div>

        <div
          id="menu"
          ref={(el) => (sectionsRef.current[2] = el)}
          style={fadeInStyle("menu")}
        >
          <Menu />
        </div>

        <div
          id="chefs"
          ref={(el) => (sectionsRef.current[3] = el)}
          style={fadeInStyle("chefs")}
        >
          <Chefs />
        </div>

        <div
          id="reservation"
          ref={(el) => (sectionsRef.current[4] = el)}
          style={fadeInStyle("reservation")}
        >
          <Reservation />
        </div>

        <div
          id="offers"
          ref={(el) => (sectionsRef.current[5] = el)}
          style={fadeInStyle("offers")}
        >
          <Offers />
        </div>

        <div
          id="footer"
          ref={(el) => (sectionsRef.current[6] = el)}
          style={fadeInStyle("footer")}
        >
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;