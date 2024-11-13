import React from "react";
import Slider from "react-slick";
import menuItem1 from "../../../assets/images/menu-item-01.jpg";
import menuItem2 from "../../../assets/images/menu-item-02.jpg";
import menuItem3 from "../../../assets/images/menu-item-03.jpg";
import menuItem4 from "../../../assets/images/menu-item-04.jpg";
import menuItem5 from "../../../assets/images/menu-item-05.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Menu = () => {
  const settings = {
    dots: true, // Menambahkan navigasi titik di bawah slider
    infinite: true, // Slider looping
    speed: 500,
    slidesToShow: 3, // Menampilkan 3 item per slide
    slidesToScroll: 1, // Bergeser 1 item setiap kali
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="section" id="menu">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="section-heading">
              <h6>Our Menu</h6>
              <h2>Our selection of cakes with quality taste</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-item-carousel">
        <div className="col-lg-12">
          <Slider {...settings}>
            <div className="item">
              <div className="card">
                <img src={menuItem1} alt="Chocolate Cake" />
                <div className="price">
                  <h6>$14</h6>
                </div>
                <div className="info">
                  <h1 className="title">Chocolate Cake</h1>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sedii do eiusmod teme.
                  </p>
                  <div className="main-text-button">
                    <a href="#reservation">
                      Make Reservation <i className="fa fa-angle-down" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img src={menuItem2} alt="Klassy Pancake" />
                <div className="price">
                  <h6>$22</h6>
                </div>
                <div className="info">
                  <h1 className="title">Klassy Pancake</h1>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sedii do eiusmod teme.
                  </p>
                  <div className="main-text-button">
                    <a href="#reservation">
                      Make Reservation <i className="fa fa-angle-down" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img src={menuItem3} alt="Tall Klassy Bread" />
                <div className="price">
                  <h6>$18</h6>
                </div>
                <div className="info">
                  <h1 className="title">Tall Klassy Bread</h1>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sedii do eiusmod teme.
                  </p>
                  <div className="main-text-button">
                    <a href="#reservation">
                      Make Reservation <i className="fa fa-angle-down" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="item">
              <div className="card">
                <img src={menuItem5} alt="Klassy Cup Cake" />
                <div className="price">
                  <h6>$8.50</h6>
                </div>
                <div className="info">
                  <h1 className="title">Klassy Cup Cake</h1>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sedii do eiusmod teme.
                  </p>
                  <div className="main-text-button">
                    <a href="#reservation">
                      Make Reservation <i className="fa fa-angle-down" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Menu;
