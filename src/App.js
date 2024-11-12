import "./App.css";
import Banner from "./components/banner";
import Header from "./components/header";
import About from "./components/section/about";
import Chefs from "./components/section/chefs";
import Offers from "./components/section/offers";
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
      <Chefs />
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
      <Offers />
      {/* ***** Chefs Area Ends ***** */}
      {/* ***** Footer Start ***** */}
      <Footer />
    </div>
  );
}

export default App;
