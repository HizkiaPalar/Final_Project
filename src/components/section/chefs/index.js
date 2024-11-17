import React from "react";
import Chefs1 from "../../../assets/images/Barista.jpg";
import Chefs2 from "../../../assets/images/Kitchen.jpg";
import Chefs3 from "../../../assets/images/Pastry.jpg";

const Chefs = () => {
  return (
    <section className="section" id="chefs">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 offset-lg-4 text-center">
            <div className="section-heading">
              <h6>Our Chefs</h6>
              <h2>We offer the best ingredients for you</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="chef-item">
              <div className="thumb">
                <div className="overlay" />
                <ul className="social-icons">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
                <img src={Chefs1} />
              </div>
              <div className="down-content">
                <h4>Randy Immanuel</h4>
                <span>Baristas</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="chef-item">
              <div className="thumb">
                <div className="overlay" />
                <ul className="social-icons">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-behance" />
                    </a>
                  </li>
                </ul>
                <img src={Chefs2} />
              </div>
              <div className="down-content">
                <h4>David Timothy</h4>
                <span>Kitchen Chef</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="chef-item">
              <div className="thumb">
                <div className="overlay" />
                <ul className="social-icons">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google" />
                    </a>
                  </li>
                </ul>
                <img src={Chefs3} />
              </div>
              <div className="down-content">
                <h4>Kevin Rafael</h4>
                <span>Pastry Chef</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chefs;
