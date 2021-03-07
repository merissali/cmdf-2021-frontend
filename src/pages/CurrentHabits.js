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

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import NavBar from "../components/Navbars/NavBar.js";
import "../assets/vendor/nucleo/css/nucleo.css";
import "../assets/vendor/font-awesome/css/font-awesome.min.css";
import "../assets/css/argon-design-system-react.css";


function CurrentHabits() {

  useEffect(() => {
  });

  const main = useRef();

    return (
      <>
        <NavBar />
        <main ref={main}>
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-sm section-shaped pt-100">
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
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        CURRENT HABITS{" "}
                        <span>One day at a time!</span>
                      </h1>
                    </Col>
                  </Row>
                  
                </div>
              </Container>
              {/* SVG separator */}
              <div height='20px' className="separator separator-bottom separator-skew">
                {/* <svg
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
                </svg> */}
              </div>
            </section>

            {/* Community Progress */}
          </div>
          <section className="section section-sm">
            <Container>
                  <Row>
                    <Col lg="12">
                    <div className="progress-wrapper">
                    <div className="progress-info">
                    <span className="display-5 text-primary">Physical Activity</span>
                    <div className="progress-left-data">
                        <span>Get 10,000 steps per day</span>
                      </div>
                      <div className="progress-percentage">
                        <span>Goal: 30 days</span>
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
                    <div className="progress-left-data">
                        <span>Sleep before 11PM each night</span>
                      </div>
                      <div className="progress-percentage">
                        <span>Goal: 14 days</span>
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
                    <div className="progress-left-data">
                        <span>Finish 3 rounds of Pomodoro each day</span>
                      </div>
                      <div className="progress-percentage">
                        <span>Goal: 21 days</span>
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
export default CurrentHabits;
