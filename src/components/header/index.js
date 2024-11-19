import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Header = () => {
  const [activeSection, setActiveSection] = useState("top");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [header, setHeader] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const headerRef = ref(db, "header");
    onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      setHeader(data);
    });
  }, []);
  useEffect(() => {
    const headerElement = document.querySelector(".header-area");
    if (headerElement) {
      headerElement.classList.add("fade-in");
    }
  }, []);

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
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (section, e) => {
    e.preventDefault();
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

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
              <a href="#top" className="logo">
                <img src={`data:image/jpg;base64,${header.logo}`} />
              </a>
              <ul className={`nav ${isMenuOpen ? "open" : ""}`}>
                <li className="scroll-to-section">
                  <a
                    href="#top"
                    className={activeSection === "top" ? "active" : ""}
                    onClick={(e) => handleMenuClick("top", e)}
                  >
                    {header.nav1}
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a
                    href="#about"
                    className={activeSection === "about" ? "active" : ""}
                    onClick={(e) => handleMenuClick("about", e)}
                  >
                    {header.nav2}
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a
                    href="#menu"
                    className={activeSection === "menu" ? "active" : ""}
                    onClick={(e) => handleMenuClick("menu", e)}
                  >
                    {header.nav3}
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a
                    href="#chefs"
                    className={activeSection === "chefs" ? "active" : ""}
                    onClick={(e) => handleMenuClick("chefs", e)}
                  >
                    {header.nav4}
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a
                    href="#reservation"
                    className={activeSection === "reservation" ? "active" : ""}
                    onClick={(e) => handleMenuClick("reservation", e)}
                  >
                    {header.nav5}
                  </a>
                </li>
              </ul>
              <a className="menu-trigger" onClick={toggleMenu}>
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
