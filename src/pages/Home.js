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
import React, { useState, useRef, useEffect } from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import { Progress } from "reactstrap";
import useSound from 'use-sound';

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import NavBar from "../components/Navbars/NavBar.js";
import "../assets/vendor/nucleo/css/nucleo.css";
import "../assets/vendor/font-awesome/css/font-awesome.min.css";
import "../assets/css/argon-design-system-react.css";
import checkBoxSound from "../assets/checkBoxSound.mp3"

// index page sections

function Home() {
    const [play] = useSound(checkBoxSound);
  
  const main = useRef();

    return (
      <>
        <NavBar />
        <main ref={main}>
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-30">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="8">
                      <h1 className="display-3 text-white">
                        TODAY{" "}
                        <span>Here are your habits for today.</span>
                      </h1>
                      <div className="custom-control custom-checkbox mt-3 mb-3">
                        <input className="custom-control-input" id="customCheck1" type="checkbox" onClick={play}/>
                        <label className="custom-control-label" for="customCheck1"><span className="display-6 text-white pt-1 ml-4"> Get 10,000 steps per day </span></label>
                      </div>
                      
                      <div class="custom-control custom-checkbox mb-3">
                        <input className="custom-control-input" id="customCheck2" type="checkbox" onClick={play}/>
                        <label className="custom-control-label" for="customCheck2"><span className="display-6 text-white pt-1 ml-4"> Sleep before 11PM each night</span></label>
                      </div>
                      <div class="custom-control custom-checkbox">
                        <input className="custom-control-input" id="customCheck3" type="checkbox" onClick={play}/>
                        <label className="custom-control-label" for="customCheck3"><span className="display-6 text-white pt-1 ml-4"> Finish 3 rounds of Pomodoro each day</span></label>
                      </div>
                    </Col>
                  </Row>
                  
                </div>
              </Container>
            </section>

            {/* Community Progress */}
          </div>
          <section className="section section-sm">
            <Container>

            <Row>
              <Col lg="6">
              <h1 className="display-3 text-primary">
                  COMMUNITY PROGRESS{" "}
                </h1>
              </Col>
            </Row>

                  <Row>
                    <Col lg="12">
                    <div className="progress-wrapper">
                    <div className="progress-info">
                    <span className="display-5 text-primary">Physical Activity</span>
                      <div className="progress-percentage">
                        <span>35%</span>
                      </div>
                    </div>
                    <Progress max="100" value="35"/>
                  </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg="12">
                    <div className="progress-wrapper">
                    <div className="progress-info">
                    <span className="display-5 text-primary">Sleep</span>
                      <div className="progress-percentage">
                        <span>77%</span>
                      </div>
                    </div>
                    <Progress max="100" value="77"/>
                  </div>
                    </Col>
                  </Row>

                  <Row>
                  <Col lg="12">
                    <div className="progress-wrapper">
                    <div className="progress-info">
                    <span className="display-5 text-primary">Productivity</span>
                      <div className="progress-percentage">
                        <span>60%</span>
                      </div>
                    </div>
                    <Progress max="100" value="60"/>
                  </div>
                    </Col>
                  </Row>


            </Container>
          </section>
        </main>
      </>
    );
  }
export default Home;
