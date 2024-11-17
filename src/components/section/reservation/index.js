import { getDatabase, ref, onValue } from "firebase/database";
import React, { useEffect, useState } from "react";
const Reservation = () => {
  const [contact, setContact] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const contactRef = ref(db, "contact");
    onValue(contactRef, (snapshot) => {
      const data = snapshot.val();
      setContact(data);
    });
  }, []);
  return (
    <section className="section" id="reservation">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="left-text-content">
              <div className="section-heading">
                <h6>{contact.contactus}</h6>
                <h2>
                  {contact.heading}
                </h2>
              </div>
              <p>
                {contact.desc}
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <div className="phone">
                    <i className="fa fa-phone" />
                    <h4>{contact.phone}</h4>
                    <span>
                      <a href="https://api.whatsapp.com/send/?phone=628114333323&text&type=phone_number&app_absent=0">
                        {contact.number}
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="message">
                    <i className="fa fa-instagram" />
                    <h4>{contact.ig}</h4>
                    <span>
                      <a href="https://www.instagram.com/klab.atspace/">
                        {contact.klabat}
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
