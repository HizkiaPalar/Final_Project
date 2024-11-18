import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Menu = () => {
  const [menu, setMenu] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const menuRef = ref(db, "menu");
    onValue(menuRef, (snapshot) => {
      const data = snapshot.val();
      setMenu(data);
    });
  }, []);
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
              <h6>{menu.our}</h6>
              <h2>{menu.heading}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-item-carousel">
        <div className="col-lg-12">
          <Slider {...settings}>
            <div className="item">
              <div className="card">
                <img src={`data:image/jpg;base64,${menu.image1}`} />
                <div className="price">
                  <h6>{menu.price1}</h6>
                </div>
                <div className="info">
                  <h1 className="title">{menu.menu1}</h1>
                  <p className="description">{menu.desc1}</p>
                  <div className="main-text-button">
                    <a href="#reservation">
                      {menu.contact} <i className="fa fa-angle-down" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img src={`data:image/jpg;base64,${menu.image2}`} />
                <div className="price">
                  <h6>{menu.price2}</h6>
                </div>
                <div className="info">
                  <h1 className="title">{menu.menu2}</h1>
                  <p className="description">{menu.desc2}</p>
                  <div className="main-text-button">
                    <a href="#reservation">
                      {menu.contact} <i className="fa fa-angle-down" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img src={`data:image/jpg;base64,${menu.image3}`} />
                <div className="price">
                  <h6>{menu.price3}</h6>
                </div>
                <div className="info">
                  <h1 className="title">{menu.menu3}</h1>
                  <p className="description">{menu.desc3}</p>
                  <div className="main-text-button">
                    <a href="#reservation">
                      {menu.contact} <i className="fa fa-angle-down" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="card">
                <img src={`data:image/jpg;base64,${menu.image4}`} />
                <div className="price">
                  <h6>{menu.price4}</h6>
                </div>
                <div className="info">
                  <h1 className="title">{menu.menu4}</h1>
                  <p className="description">{menu.desc4}</p>
                  <div className="main-text-button">
                    <a href="#reservation">
                      {menu.contact} <i className="fa fa-angle-down" />
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
