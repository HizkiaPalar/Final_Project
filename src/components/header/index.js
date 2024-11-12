import React, { useEffect, useState } from "react";
import KlassyLogo from "../../assets/images/klassy-logo.png";

const Header = () => {
  const [activeSection, setActiveSection] = useState("top");
  const [isScrolled, setIsScrolled] = useState(false);

  // Add fade-in effect on mount
  useEffect(() => {
    const headerElement = document.querySelector(".header-area");
    if (headerElement) {
      headerElement.classList.add("fade-in");
    }
  }, []);

  // Scroll event listener for active section and navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["top", "about", "menu", "chefs", "reservation"];
      const offsets = sections.map(
        (section) => document.getElementById(section)?.offsetTop || 0
      );
      const scrollPosition = window.scrollY + 200;

      const currentSection = sections.reduce((acc, section, index) => {
        return scrollPosition >= offsets[index] ? section : acc;
      }, "top");

      setActiveSection(currentSection);

      // Check if scrolled down and toggle transparency
      setIsScrolled(window.scrollY > 50); // Adjust scroll value as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header-area header-sticky ${
        isScrolled ? "scrolled" : "transparent"
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* ***** Logo Start ***** */}
              <a href="#top" className="logo">
                <img src={KlassyLogo} alt="klassy cafe html template" />
              </a>
              {/* ***** Logo End ***** */}
              {/* ***** Menu Start ***** */}
              <ul className="nav">
                <li className="scroll-to-section">
                  <a
                    href="#top"
                    className={activeSection === "top" ? "active" : ""}
                  >
                    Home
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a
                    href="#about"
                    className={activeSection === "about" ? "active" : ""}
                  >
                    About
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a
                    href="#menu"
                    className={activeSection === "menu" ? "active" : ""}
                  >
                    Menu
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a
                    href="#chefs"
                    className={activeSection === "chefs" ? "active" : ""}
                  >
                    Chefs
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a
                    href="#reservation"
                    className={activeSection === "reservation" ? "active" : ""}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
              {/* ***** Menu End ***** */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
