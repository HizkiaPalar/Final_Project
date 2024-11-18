import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
const Chefs = () => {
  const [chef, setChef] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const chefRef = ref(db, "chef");
    onValue(chefRef, (snapshot) => {
      const data = snapshot.val();
      setChef(data);
    });
  }, []);
  return (
    <section className="section" id="chefs">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 offset-lg-4 text-center">
            <div className="section-heading">
              <h6>{chef.chefs}</h6>
              <h2>{chef.heading}</h2>
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
                <img src={`data:image/jpg;base64,${chef.image1}`}/>
              </div>
              <div className="down-content">
                <h4>{chef.chef1}</h4>
                <span>{chef.job1}</span>
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
                <img src={`data:image/jpg;base64,${chef.image2}`} />
              </div>
              <div className="down-content">
                <h4>{chef.chef2}</h4>
                <span>{chef.job2}</span>
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
                <img src={`data:image/jpg;base64,${chef.image3}`} />
              </div>
              <div className="down-content">
                <h4>{chef.chef3}</h4>
                <span>{chef.job3}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chefs;
