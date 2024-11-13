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
                Donec pretium est orci, non vulputate arcu hendrerit a. Fusce a
                eleifend riqsie, namei sollicitudin urna diam, sed commodo purus
                porta ut.
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
  );
};

export default Reservation;
