import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const About = () => {
  const [about, setAbout] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const aboutRef = ref(db, "about");
    onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      setAbout(data);
    });
  }, []);
  return (
    <section className="section mt-5 mb-5" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-xs-12">
            <div className="left-text-content">
              <div className="section-heading">
                <h6>{about.about1}</h6>
                <h2>{about.about2}</h2>
              </div>
              <p>{about.desc}</p>
              <div className="row">
                <div className="col-4">
                  <img src={`data:image/jpg;base64,${about.image1}`} />
                </div>
                <div className="col-4">
                  <img src={`data:image/jpg;base64,${about.image2}`} />
                </div>
                <div className="col-4">
                  <img src={`data:image/jpg;base64,${about.image3}`} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12">
            <div className="right-content">
              <div className="thumb">
                <a rel="nofollow" href="https://www.youtube.com/@Klab.atSpace">
                  <i className="fa fa-play" />
                </a>
                <img src={`data:image/jpg;base64,${about.image4}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
