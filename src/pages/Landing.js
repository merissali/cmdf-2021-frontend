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
import tempIcon from "../assets/img/ill/ill-2.svg";
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
import DemoNavbar from "../components/Navbars/NavBar.js";
import CardsFooter from "../components/Footers/CardsFooter.js";
import "../assets/vendor/nucleo/css/nucleo.css";
import "../assets/vendor/font-awesome/css/font-awesome.min.css";
import "../assets/css/argon-design-system-react.css";


// index page sections

function Landing() {
  // const [habits, setHabits] = React.useState([]);

  useEffect(() => {
    // document.documentElement.scrollTop = 0;
    // document.scrollingElement.scrollTop = 0;
    // this.refs.main.scrollTop = 0;
    // setHabits([]);
  });

  // TODO
  // const handleCheckHabit = e => {
  //   handleCheckHabit(e.target.value);
  // }
  const main = useRef();

    return (
      <>
        <DemoNavbar />
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
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        TODAY{" "}
                        <span>Here are your habits for today.</span>
                      </h1>
                      <ul class="fa-ul">
                       <li><span class="fa-li"></span><i class="far fa-square"></i>
                            <span className="display-4 text-white"> Physical Activity</span></li>
                        <li><span class="fa-li"></span><i class="far fa-square"></i>
                            <span className="display-4 text-white"> Sleep early</span></li>
                        <li><span class="fa-li"></span><i class="far fa-square"></i>
                            <span className="display-4 text-white"> Study</span></li>
                        <li><span class="fa-li"></span><i class="far fa-square"></i>
                            <span className="display-4 text-white"> Drink Water</span></li>
                      </ul>
                        {/* <Row>
                          <Col lg="6">
                          <i className="far fa-square" />
                          </Col>
                      </Row>
                      <Row>
                          <Col lg="6">
                          <i className="far fa-square" />
                          </Col>
                      </Row>
                      <Row>
                          <Col lg="6">
                          <i className="far fa-square" />
                          </Col>
                      </Row> */}
                      <div className="btn-wrapper">
                        
                        {/* <Button
                          className="btn-icon btn-2"
                          color="primary"
                          type="button"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="far fa-square" />
                          </span>
                        </Button> */}
                        
                      </div>
                    </Col>
                  </Row>
                  
                </div>
              </Container>
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



            {/* Community Progress */}
          </div>
          <section className="section section-lg">
            <Container>

            <Row>
                    <Col lg="6">
                    <h1 className="display-3 text-primary">
                        COMMUNITY PROGRESS{" "}
                      </h1>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg="6">
                    <span className="display-5 text-primary">Physical Activity</span>
                    <Progress value="35"></Progress>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg="6">
                    <span className="display-5 text-primary">Sleep</span>
                    <Progress value="80"></Progress>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg="6">
                    <span className="display-5 text-primary">Productivity</span>
                    <Progress value="55"></Progress>
                    </Col>
                  </Row>


            </Container>
          </section>
        </main>
      </>
    );
  }
export default Landing;
