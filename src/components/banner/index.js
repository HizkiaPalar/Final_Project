import React, { useState, useEffect } from "react";
import Slide1 from "../../assets/images/banner2.jpg";
import Slide2 from "../../assets/images/banner3.jpg";
import Slide3 from "../../assets/images/banner1.jpg";
import { getDatabase, ref, onValue } from "firebase/database";
const Banner = () => {
  const slides = [Slide1, Slide2, Slide3];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [banner, setBanner] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const bannerRef = ref(db, "banner");
    onValue(bannerRef, (snapshot) => {
      const data = snapshot.val();
      setBanner(data);
    });
  }, []);
  // Automatically change slides every 3 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(slideInterval); // Cleanup on component unmount
  }, [slides.length]);

  return (
    <div id="top">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <div className="left-content">
              <div className="inner-content">
                <h4>{banner.banner1}</h4>
                <h6>{banner.banner2}</h6>
                <div className="main-white-button scroll-to-section">
                  <a href="#reservation">{banner.banner3}</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="main-banner header-text">
              <div className="Modern-Slider">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`item ${index === currentSlide ? "active" : ""}`}
                  >
                    <div className="img-fill">
                      <img src={slide} alt={`Slide ${index + 1}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
