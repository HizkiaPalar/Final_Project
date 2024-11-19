import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
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
      <div className="container" style={{ marginTop: "-130px" }}>
        <div className="row">
          <div className="col-lg-4 offset-lg-4 text-center">
            <div className="section-heading">
              <h6>{offers.title}</h6>
              <h2>{offers.subtitle}</h2>
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
                            <img
                              src={`data:image/jpg;base64,${offers.image1}`}
                            />
                            {offers.food}
                          </a>
                        </li>
                        <li>
                          <a href="#tabs-2">
                            <img
                              src={`data:image/jpg;base64,${offers.image2}`}
                            />
                            {offers.drink}
                          </a>
                        </li>
                        <li>
                          <a href="#tabs-3">
                            <img
                              src={`data:image/jpg;base64,${offers.image3}`}
                            />
                            {offers.dessert}
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
                                  src={`data:image/jpg;base64,${offers.image4}`}
                                />
                                <h4>{offers.menu1}</h4>
                                <p>{offers.desc}</p>
                                <div className="price">
                                  <h6>{offers.price1}</h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="tab-item">
                                <img
                                  src={`data:image/jpg;base64,${offers.image6}`}
                                />
                                <h4>{offers.menu2}</h4>
                                <p>{offers.desc}</p>
                                <div className="price">
                                  <h6>{offers.price1}</h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="tab-item">
                                <img
                                  src={`data:image/jpg;base64,${offers.image7}`}
                                />
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
                                <img
                                  src={`data:image/jpg;base64,${offers.image8}`}
                                />
                                <h4>{offers.menu4}</h4>
                                <p>{offers.desc}</p>
                                <div className="price">
                                  <h6>{offers.price3}</h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="tab-item">
                                <img
                                  src={`data:image/jpg;base64,${offers.image9}`}
                                />
                                <h4>{offers.menu5}</h4>
                                <p>{offers.desc}</p>
                                <div className="price">
                                  <h6>{offers.price1}</h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="tab-item">
                                <img
                                  src={`data:image/jpg;base64,${offers.image10}`}
                                />
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
                                <img
                                  src={`data:image/jpg;base64,${offers.image11}`}
                                />
                                <h4>{offers.menu7}</h4>
                                <p>{offers.desc}</p>
                                <div className="price">
                                  <h6>{offers.price3}</h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="tab-item">
                                <img
                                  src={`data:image/jpg;base64,${offers.image12}`}
                                />
                                <h4>{offers.menu8}</h4>
                                <p>{offers.desc}</p>
                                <div className="price">
                                  <h6>{offers.price5}</h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="tab-item">
                                <img
                                  src={`data:image/jpg;base64,${offers.image13}`}
                                />
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
                                <img
                                  src={`data:image/jpg;base64,${offers.image13}`}
                                />
                                <h4>{offers.menu10}</h4>
                                <p>{offers.desc}</p>
                                <div className="price">
                                  <h6>{offers.price6}</h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="tab-item">
                                <img
                                  src={`data:image/jpg;base64,${offers.image14}`}
                                />
                                <h4>{offers.menu11}</h4>
                                <p>{offers.desc}</p>
                                <div className="price">
                                  <h6>{offers.price7}</h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="tab-item">
                                <img
                                  src={`data:image/jpg;base64,${offers.image15}`}
                                />
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
                                <img
                                  src={`data:image/jpg;base64,${offers.image16}`}
                                />
                                <h4>{offers.menu13}</h4>
                                <p>{offers.desc}</p>
                                <div className="price">
                                  <h6>{offers.price1}</h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="tab-item">
                                <img
                                  src={`data:image/jpg;base64,${offers.image7}`}
                                />
                                <h4>{offers.menu14}</h4>
                                <p>{offers.desc}</p>
                                <div className="price">
                                  <h6>{offers.price3}</h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="tab-item">
                                <img
                                  src={`data:image/jpg;base64,${offers.image9}`}
                                />
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
                                <img
                                  src={`data:image/jpg;base64,${offers.image16}`}
                                />
                                <h4>{offers.menu16}</h4>
                                <p>{offers.desc}</p>
                                <div className="price">
                                  <h6>{offers.price1}</h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="tab-item">
                                <img
                                  src={`data:image/jpg;base64,${offers.image17}`}
                                />
                                <h4>{offers.menu17}</h4>
                                <p>{offers.desc}</p>
                                <div className="price">
                                  <h6>{offers.price6}</h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="tab-item">
                                <img
                                  src={`data:image/jpg;base64,${offers.image18}`}
                                />
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
