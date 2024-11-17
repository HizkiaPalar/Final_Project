import React from "react";
import Nasi from "../../../assets/images/Nasi.jpg";
import Kentang from "../../../assets/images/Kentang.jpg";
import Steak from "../../../assets/images/steak.jpg";
import Bg from "../../../assets/images/logoklabatspace.jpg";

const About = () => {
  return (
    <section className="section mt-5 mb-5" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-xs-12">
            <div className="left-text-content">
              <div className="section-heading">
                <h6>About Us</h6>
                <h2>Crafting Moments, One Cup at a Time</h2>
              </div>
              <p>
                At Klabat Space, we believe every cup tells a story. Our mission
                is to craft unforgettable moments, one cup at a time, by
                blending the finest coffee with a warm and inviting space.
                Whether you're savoring a quiet moment alone or sharing laughter
                with friends, Klabat Space is where connections are brewed and
                memories are made. Let us make your next coffee experience truly
                extraordinary.
              </p>
              <div className="row">
                <div className="col-4">
                  <img src={Nasi} alt="About Image 1" />
                </div>
                <div className="col-4">
                  <img src={Kentang} alt="About Image 2" />
                </div>
                <div className="col-4">
                  <img src={Steak} alt="About Image 3" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12">
            <div className="right-content">
              <div className="thumb">
                <a rel="nofollow" href="https://www.youtube.com/@Klab.atSpace">
                  <i className="fa fa-play" />
                </a>
                <img src={Bg} alt="About Video" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
