/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect, useRef } from "react";
import profilePhoto from "../assets/img/theme/team-4-800x800.jpg";

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

// core components
import NavBar from "../components/Navbars/NavBar.js";

function Profile() {
useEffect(() => {
});

const main = useRef();

    return (
      <>
        <NavBar />
        <main className="profile-page" ref={main}>
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={profilePhoto}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Habits</span>
                        </div>
                        <div>
                          <span className="heading">22</span>
                          <span className="description">Likes</span>
                        </div>
                        {/* <div>
                          <span className="heading">89</span>
                          <span className="description">Comments</span>
                        </div> */}
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                      Jessica Jones{""}
                      <span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Bucharest, Romania
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    
                  </div>
                </div>
              </Card>
            </Container>
          </section>
          <section className="section pb-0 bg-gradient-warning">

          </section>
        </main>
      </>
    );
  }

export default Profile;
