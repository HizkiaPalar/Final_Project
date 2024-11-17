import React, { useEffect, useRef, useState } from "react";
import Banner from "./components/banner";
import Header from "./components/header";
import About from "./components/section/about";
import Chefs from "./components/section/chefs";
import Offers from "./components/section/offers";
import Footer from "./components/section/footer";
import Reservation from "./components/section/reservation";
import Menu from "./components/section/menu";

function App() {
  const sectionsRef = useRef([]); // Array untuk menyimpan referensi elemen
  const [activeSection, setActiveSection] = useState(""); // Lacak bagian aktif

  useEffect(() => {
    const handleScroll = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Ubah state aktif berdasarkan elemen terlihat
              setActiveSection(entry.target.id);
            }
          });
        },
        { threshold: 0.6 } // 60% dari elemen terlihat
      );

      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.observe(section);
        }
      });

      return () => {
        sectionsRef.current.forEach((section) => {
          if (section) {
            observer.unobserve(section);
          }
        });
      };
    };

    handleScroll();
  }, []);

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <Header activeSection={activeSection} onNavClick={handleNavClick} />
      <div
        id="banner"
        ref={(el) => (sectionsRef.current[0] = el)}
        style={{ paddingTop: "60px" }}
      >
        <Banner />
      </div>

      <div id="about" ref={(el) => (sectionsRef.current[1] = el)}>
        <About />
      </div>

      <div id="menu" ref={(el) => (sectionsRef.current[2] = el)}>
        <Menu />
      </div>

      <div id="chefs" ref={(el) => (sectionsRef.current[3] = el)}>
        <Chefs />
      </div>

      <div id="reservation" ref={(el) => (sectionsRef.current[4] = el)}>
        <Reservation />
      </div>

      <div id="offers" ref={(el) => (sectionsRef.current[5] = el)}>
        <Offers />
      </div>

      <div id="footer" ref={(el) => (sectionsRef.current[6] = el)}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
