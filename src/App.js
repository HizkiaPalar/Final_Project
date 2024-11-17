import React, { useEffect, useRef } from "react";
import "./App.css";
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

  useEffect(() => {
    const handleScroll = () => {
      // Buat observer
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.1 } // 10% dari elemen terlihat
      );

      // Observe setiap elemen
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.observe(section);
        }
      });

      return () => {
        // Cleanup observer saat unmount
        sectionsRef.current.forEach((section) => {
          if (section) {
            observer.unobserve(section);
          }
        });
      };
    };

    handleScroll();
  }, []);

  return (
    <div>
      <Header />

      {/* Tambahkan elemen ke sectionsRef untuk diobservasi */}
      <div
        className="fade-in-section"
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        <Banner />
      </div>

      <div
        className="fade-in-section"
        ref={(el) => (sectionsRef.current[1] = el)}
      >
        <About />
      </div>

      <div
        className="fade-in-section"
        ref={(el) => (sectionsRef.current[2] = el)}
      >
        <Menu />
      </div>

      <div
        className="fade-in-section"
        ref={(el) => (sectionsRef.current[3] = el)}
      >
        <Chefs />
      </div>

      <div
        className="fade-in-section"
        ref={(el) => (sectionsRef.current[4] = el)}
      >
        <Reservation />
      </div>

      <div
        className="fade-in-section"
        ref={(el) => (sectionsRef.current[5] = el)}
      >
        <Offers />
      </div>

      <div
        className="fade-in-section"
        ref={(el) => (sectionsRef.current[6] = el)}
      >
        <Footer />
      </div>
    </div>
  );
}

export default App;
