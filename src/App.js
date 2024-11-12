import "./App.css";
import Banner from "./components/banner";
import Header from "./components/header";
import About from "./components/section/about";
import Footer from "./components/section/footer";
function App() {
  return (
    <div>
      <div className="jumper">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Header />
      {/* ***** Header Area End ***** */}
      {/* ***** Main Banner Area Start ***** */}
      <Banner />
      {/* ***** Main Banner Area End ***** */}
      {/* ***** About Area Starts ***** */}
      <About />
      {/* ***** About Area Ends ***** */}
      {/* ***** Menu Area Starts ***** */}
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
            <div className="owl-menu-item owl-carousel">
              <div className="item">
                <div className="card card1">
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
                      <div className="scroll-to-section">
                        <a href="#reservation">
                          Make Reservation <i className="fa fa-angle-down" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card card2">
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
                      <div className="scroll-to-section">
                        <a href="#reservation">
                          Make Reservation <i className="fa fa-angle-down" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card card3">
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
                      <div className="scroll-to-section">
                        <a href="#reservation">
                          Make Reservation <i className="fa fa-angle-down" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card card4">
                  <div className="price">
                    <h6>$10</h6>
                  </div>
                  <div className="info">
                    <h1 className="title">Blueberry CheeseCake</h1>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sedii do eiusmod teme.
                    </p>
                    <div className="main-text-button">
                      <div className="scroll-to-section">
                        <a href="#reservation">
                          Make Reservation <i className="fa fa-angle-down" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card card5">
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
                      <div className="scroll-to-section">
                        <a href="#reservation">
                          Make Reservation <i className="fa fa-angle-down" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card card3">
                  <div className="price">
                    <h6>$7.25</h6>
                  </div>
                  <div className="info">
                    <h1 className="title">Klassic Cake</h1>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sedii do eiusmod teme.
                    </p>
                    <div className="main-text-button">
                      <div className="scroll-to-section">
                        <a href="#reservation">
                          Make Reservation <i className="fa fa-angle-down" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ***** Menu Area Ends ***** */}
      {/* ***** Chefs Area Starts ***** */}
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
                  <img src="assets/images/chefs-01.jpg" alt="Chef #1" />
                </div>
                <div className="down-content">
                  <h4>Randy Walker</h4>
                  <span>Pastry Chef</span>
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
                  <img src="assets/images/chefs-02.jpg" alt="Chef #2" />
                </div>
                <div className="down-content">
                  <h4>David Martin</h4>
                  <span>Cookie Chef</span>
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
                  <img src="assets/images/chefs-03.jpg" alt="Chef #3" />
                </div>
                <div className="down-content">
                  <h4>Peter Perkson</h4>
                  <span>Pancake Chef</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ***** Chefs Area Ends ***** */}
      {/* ***** Reservation Us Area Starts ***** */}
      <section className="section" id="reservation">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="left-text-content">
                <div className="section-heading">
                  <h6>Contact Us</h6>
                  <h2>
                    Here You Can Make A Reservation Or Just walkin to our cafe
                  </h2>
                </div>
                <p>
                  Donec pretium est orci, non vulputate arcu hendrerit a. Fusce
                  a eleifend riqsie, namei sollicitudin urna diam, sed commodo
                  purus porta ut.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="phone">
                      <i className="fa fa-phone" />
                      <h4>Phone Numbers</h4>
                      <span>
                        <a href="#">080-090-0990</a>
                        <br />
                        <a href="#">080-090-0880</a>
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="message">
                      <i className="fa fa-envelope" />
                      <h4>Emails</h4>
                      <span>
                        <a href="#">hello@company.com</a>
                        <br />
                        <a href="#">info@company.com</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ***** Reservation Area Ends ***** */}
      {/* ***** Menu Area Starts ***** */}
      <section className="section" id="offers">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4 text-center">
              <div className="section-heading">
                <h6>Klassy Week</h6>
                <h2>This Week’s Special Meal Offers</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="row" id="tabs">
                <div className="col-lg-12">
                  <div className="heading-tabs">
                    <div className="row">
                      <div className="col-lg-6 offset-lg-3">
                        <ul>
                          <li>
                            <a href="#tabs-1">
                              <img src="assets/images/tab-icon-01.png" alt />
                              Breakfast
                            </a>
                          </li>
                          <li>
                            <a href="#tabs-2">
                              <img src="assets/images/tab-icon-02.png" alt />
                              Lunch
                            </a>
                          </li>
                          <li>
                            <a href="#tabs-3">
                              <img src="assets/images/tab-icon-03.png" alt />
                              Dinner
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <section className="tabs-content">
                    <article id="tabs-1">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="row">
                            <div className="left-list">
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img
                                    src="assets/images/tab-item-01.png"
                                    alt
                                  />
                                  <h4>Fresh Chicken Salad</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div className="price">
                                    <h6>$10.50</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img
                                    src="assets/images/tab-item-02.png"
                                    alt
                                  />
                                  <h4>Orange Juice</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div className="price">
                                    <h6>$8.50</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img
                                    src="assets/images/tab-item-03.png"
                                    alt
                                  />
                                  <h4>Fruit Salad</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div className="price">
                                    <h6>$9.90</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="row">
                            <div className="right-list">
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img
                                    src="assets/images/tab-item-04.png"
                                    alt
                                  />
                                  <h4>Eggs Omelette</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div className="price">
                                    <h6>$6.50</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img
                                    src="assets/images/tab-item-05.png"
                                    alt
                                  />
                                  <h4>Dollma Pire</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div className="price">
                                    <h6>$5.00</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img
                                    src="assets/images/tab-item-06.png"
                                    alt
                                  />
                                  <h4>Omelette &amp; Cheese</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div className="price">
                                    <h6>$4.10</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article id="tabs-2">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="row">
                            <div className="left-list">
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img
                                    src="assets/images/tab-item-04.png"
                                    alt
                                  />
                                  <h4>Eggs Omelette</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div className="price">
                                    <h6>$14</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img
                                    src="assets/images/tab-item-05.png"
                                    alt
                                  />
                                  <h4>Dollma Pire</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div className="price">
                                    <h6>$18</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img
                                    src="assets/images/tab-item-06.png"
                                    alt
                                  />
                                  <h4>Omelette &amp; Cheese</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div className="price">
                                    <h6>$22</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="row">
                            <div className="right-list">
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img
                                    src="assets/images/tab-item-01.png"
                                    alt
                                  />
                                  <h4>Fresh Chicken Salad</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div className="price">
                                    <h6>$10</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img
                                    src="assets/images/tab-item-02.png"
                                    alt
                                  />
                                  <h4>Orange Juice</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div className="price">
                                    <h6>$20</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img
                                    src="assets/images/tab-item-03.png"
                                    alt
                                  />
                                  <h4>Fruit Salad</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div className="price">
                                    <h6>$30</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article id="tabs-3">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="row">
                            <div className="left-list">
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img
                                    src="assets/images/tab-item-05.png"
                                    alt
                                  />
                                  <h4>Eggs Omelette</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div className="price">
                                    <h6>$14</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img
                                    src="assets/images/tab-item-03.png"
                                    alt
                                  />
                                  <h4>Orange Juice</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div className="price">
                                    <h6>$18</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img
                                    src="assets/images/tab-item-02.png"
                                    alt
                                  />
                                  <h4>Fruit Salad</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div className="price">
                                    <h6>$10</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="row">
                            <div className="right-list">
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img
                                    src="assets/images/tab-item-06.png"
                                    alt
                                  />
                                  <h4>Fresh Chicken Salad</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div className="price">
                                    <h6>$8.50</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img
                                    src="assets/images/tab-item-01.png"
                                    alt
                                  />
                                  <h4>Dollma Pire</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div className="price">
                                    <h6>$9</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img
                                    src="assets/images/tab-item-04.png"
                                    alt
                                  />
                                  <h4>Omelette &amp; Cheese</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div className="price">
                                    <h6>$11</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ***** Chefs Area Ends ***** */}
      {/* ***** Footer Start ***** */}
      <Footer />
    </div>
  );
}

export default App;
