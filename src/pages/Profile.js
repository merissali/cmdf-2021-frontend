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
import { Button, Badge, Card, Container, Row, Col } from "reactstrap";

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
                        {/* <Button
                          className="mr-4"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Connect
                        </Button>
                        <Button
                          className="float-right"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Message
                        </Button> */}
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">8</span>
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
                      <span className="font-weight-light">, 24</span>
                    </h3>
                    <div className="h6 font-weight-800">
                      <i className="ni location_pin mr-2" />
                      Vancouver, BC
                    </div>
                 
                    <div className="h6 mt-3">
                      <i className="ni business_briefcase-24 mr-2" />
                      Living my life one day at a time!
                    </div>
                  </div>
                  <div className="mt-3 py-5 border-top text-center">
                    <Row className="justify-content-center">
                        <Col>
                      <Badge color="primary" px-2>Physical Activity </Badge>
                      </Col>
                      <Col>
                      <Badge color="success" px-2>Mental Wellness </Badge>  
                      </Col> 
                      <Col>
                      <Badge color="warning" px-2>Productivity </Badge>  
                      </Col>   
                      <Col>
                      <Badge color="info" px-2> {""} Hobbies{""} </Badge>  
                      </Col>              
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
          {/* <section className="section pb-0 bg-gradient-warning">

          </section> */}
        </main>
      </>
    );
  }

export default Profile;
