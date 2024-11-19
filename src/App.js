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
  const sectionsRef = useRef([]);
  const [activeSection, setActiveSection] = useState("");
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
              setVisibleSections(prev => new Set([...prev, entry.target.id]));
            }
          });
        },
        { 
          threshold: 0.2,  // Reduced threshold to trigger animation earlier
          rootMargin: "0px 0px -100px 0px" // Triggers slightly before element comes into view
        }
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

  // Common section style with animation
  const getSectionStyle = (id) => ({
    opacity: visibleSections.has(id) ? 1 : 0,
    transform: visibleSections.has(id) ? 'translateY(0)' : 'translateY(50px)',
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
  });

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

      <div 
        id="about" 
        ref={(el) => (sectionsRef.current[1] = el)}
        style={getSectionStyle("about")}
      >
        <About />
      </div>

      <div 
        id="menu" 
        ref={(el) => (sectionsRef.current[2] = el)}
        style={getSectionStyle("menu")}
      >
        <Menu />
      </div>

      <div 
        id="chefs" 
        ref={(el) => (sectionsRef.current[3] = el)}
        style={getSectionStyle("chefs")}
      >
        <Chefs />
      </div>

      <div 
        id="reservation" 
        ref={(el) => (sectionsRef.current[4] = el)}
        style={getSectionStyle("reservation")}
      >
        <Reservation />
      </div>

      <div 
        id="offers" 
        ref={(el) => (sectionsRef.current[5] = el)}
        style={getSectionStyle("offers")}
      >
        <Offers />
      </div>

      <div 
        id="footer" 
        ref={(el) => (sectionsRef.current[6] = el)}
        style={getSectionStyle("footer")}
      >
        <Footer />
      </div>
    </div>
  );
}

export default App;