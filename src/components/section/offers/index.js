import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import Offers1 from "../../../assets/images/tab-icon-01.png";
import Offers2 from "../../../assets/images/tab-icon-02.png";
import Offers3 from "../../../assets/images/tab-icon-03.png";
import Offers4 from "../../../assets/images/Nasi.jpg";
import Offers5 from "../../../assets/images/Nasi.jpg";
import Offers6 from "../../../assets/images/steak.jpg";
import Offers7 from "../../../assets/images/dimsum.jpg";
import Offers8 from "../../../assets/images/tori.jpg";
import Offers9 from "../../../assets/images/Kentang.jpg";
import Offers10 from "../../../assets/images/Nasi.jpg";
import Offers11 from "../../../assets/images/Cofee.jpg";
import Offers12 from "../../../assets/images/Love_Burst.jpg";
import Offers13 from "../../../assets/images/Matcha.jpg";
import Offers14 from "../../../assets/images/Orange.jpg";
import Offers15 from "../../../assets/images/Pink_Lover.jpg";
import Offers16 from "../../../assets/images/Sea_Salt.jpg";
import Offers17 from "../../../assets/images/dimsum.jpg";
import Offers18 from "../../../assets/images/Kentang.jpg";
import Offers19 from "../../../assets/images/Cofee.jpg";
import Offers20 from "../../../assets/images/churos.jpg";
import Offers21 from "../../../assets/images/Beef_Kebab.jpg";
const Offers = () => {
  const [offers, setOffers] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const offersRef = ref(db, "offers");
    onValue(offersRef, (snapshot) => {
      const data = snapshot.val();
      setOffers(data);
    });
  }, []);
  return (
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
                            <img src={Offers1} />
                            Food
                          </a>
                        </li>
                        <li>
                          <a href="#tabs-2">
                            <img src={Offers2} />
                            Drink
                          </a>
                        </li>
                        <li>
                          <a href="#tabs-3">
                            <img src={Offers3} />
                            Dessert
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
                                <img src={Offers4} />
                                <h4>{offers.menu1}</h4>
                                <p>{offers.desc}</p>
                                <div className="price">
                                  <h6>{offers.price1}</h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="tab-item">
                                <img src={Offers5} />
                                <h4>{offers.menu2}</h4>
                                <p>{offers.desc}</p>
                                <div className="price">
                                  <h6>{offers.price1}</h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="tab-item">
                                <img src={Offers6} />
                                <h4>{offers.menu3}</h4>
                                <p>{offers.desc}</p>
                                <div className="price">
                                  <h6>{offers.price2}</h6>
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
                                <img src={Offers7} />
                                <h4>{offers.menu4}</h4>
                                <p>{offers.desc}</p>
                                <div className="price">
                                  <h6>{offers.price3}</h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="tab-item">
                                <img src={Offers8} />
                                <h4>{offers.menu5}</h4>
                                <p>{offers.desc}</p>
                                <div className="price">
                                  <h6>{offers.price1}</h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="tab-item">
                                <img src={Offers9} />
                                <h4>{offers.menu6}</h4>
                                <p>{offers.desc}</p>
                                <div className="price">
                                  <h6>{offers.price4}</h6>
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
                                <img src={Offers10} />
                                <h4>{offers.menu7}</h4>
                                <p>{offers.desc}</p>
                                <div className="price">
                                  <h6>{offers.price3}</h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="tab-item">
                                <img src={Offers11} />
                                <h4>{offers.menu8}</h4>
                                <p>{offers.desc}</p>
                                <div className="price">
                                  <h6>{offers.price5}</h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="tab-item">
                                <img src={Offers12} />
                                <h4>{offers.menu9}</h4>
                                <p>{offers.desc}</p>
                                <div className="price">
                                  <h6>{offers.price3}</h6>
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
                                <img src={Offers13} />
                                <h4>{offers.menu10}</h4>
                                <p>{offers.desc}</p>
                                <div className="price">
                                  <h6>{offers.price6}</h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="tab-item">
                                <img src={Offers14} />
                                <h4>{offers.menu11}</h4>
                                <p>{offers.desc}</p>
                                <div className="price">
                                  <h6>{offers.price7}</h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="tab-item">
                                <img src={Offers15} />
                                <h4>{offers.menu12}</h4>
                                <p>{offers.desc}</p>
                                <div className="price">
                                  <h6>{offers.price6}</h6>
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
                                <img src={Offers16} />
                                <h4>{offers.menu13}</h4>
                                <p>{offers.desc}</p>
                                <div className="price">
                                  <h6>{offers.price1}</h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="tab-item">
                                <img src={Offers17} />
                                <h4>{offers.menu14}</h4>
                                <p>{offers.desc}</p>
                                <div className="price">
                                  <h6>{offers.price3}</h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="tab-item">
                                <img src={Offers18} />
                                <h4>{offers.menu15}</h4>
                                <p>{offers.desc}</p>
                                <div className="price">
                                  <h6>{offers.price7}</h6>
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
                                <img src={Offers19} />
                                <h4>{offers.menu16}</h4>
                                <p>{offers.desc}</p>
                                <div className="price">
                                  <h6>{offers.price1}</h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="tab-item">
                                <img src={Offers20} />
                                <h4>{offers.menu17}</h4>
                                <p>{offers.desc}</p>
                                <div className="price">
                                  <h6>{offers.price6}</h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="tab-item">
                                <img src={Offers21} />
                                <h4>{offers.menu18}</h4>
                                <p>{offers.desc}</p>
                                <div className="price">
                                  <h6>{offers.price8}</h6>
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
  );
};

export default Offers;
