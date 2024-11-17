import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import WhiteLogo from "../../../assets/images/logoklabatspace.jpg";
const Footer = () => {
  const [footer, setFooter] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const footerRef = ref(db, "footer");
    onValue(footerRef, (snapshot) => {
      const data = snapshot.val();
      setFooter(data);
    });
  }, []);
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-xs-12">
            <div className="right-text-content">
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
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="logo">
              <a href="index.html">
                <img
                  src={WhiteLogo}
                  className="footer-logo"
                  alt="Klabat Space Logo"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-xs-12">
            <div className="left-text-content">
              <p>
                {footer.name}
                <br />
                {footer.design}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
