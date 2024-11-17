import React from "react";

const Reservation = () => {
  return (
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
                Need a comfortable and inspiring space for your activities?
                Klabat Space is here for you! For reservations, inquiries, or
                further assistance, feel free to reach out to us
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <div className="phone">
                    <i className="fa fa-phone" />
                    <h4>Phone Numbers</h4>
                    <span>
                      <a href="https://api.whatsapp.com/send/?phone=628114333323&text&type=phone_number&app_absent=0">
                        0811-4333-323
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="message">
                    <i className="fa fa-instagram" />
                    <h4>Instagram</h4>
                    <span>
                      <a href="https://www.instagram.com/klab.atspace/">
                        klab.atspace
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
