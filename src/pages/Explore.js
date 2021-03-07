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
import CardsFooter from "../components/Footers/CardsFooter.js";
import "../assets/vendor/nucleo/css/nucleo.css";
import "../assets/vendor/font-awesome/css/font-awesome.min.css";
import "../assets/css/argon-design-system-react.css";


function Explore() {
  const [habits, setHabits] = React.useState([]);

  useEffect(() => {
  });

  // TODO
//   const handleCheckOffHabit = e => {
//     handleCheckOffHabit(e.target.value);
//   }
  const main = useRef();

    return (
      <>
        <NavBar />
        <main ref={main}>
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-xl section-shaped pb-400">
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
                        Discover more habits{" "}
                      </h1>
                      <p className="lead text-white">
                        Join others who are working towards habits in these categories!
                      </p>
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
            {/* </section> */}
            {/* 1st Hero Variation */}
          {/* </div> */}
          {/* <section className="section section-lg pt-lg-0 mt--200"> */}
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="fa fa-heart" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            MENTAL WELLNESS
                          </h6>
                          <p className="description mt-3">
                            Prioritize your mental health, whether through meditation, journalling, or more.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              44 participants
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            JOIN
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="fa fa-star" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            HOBBIES
                          </h6>
                          <p className="description mt-3">
                            Looking to start and stick to a new hobby? Make it a habit.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              23 participants
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            JOIN
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="fa fa-book" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            GROWTH
                          </h6>
                          <p className="description mt-3">
                            Podcasts, writing, reading, and more. Grow your skills and your mind.
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              36 participants
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            JOIN
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="justify-content-center pt-100">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="fa fa-users" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            SOCIAL CONNECTION
                          </h6>
                          <p className="description mt-3">
                            Make it a habit to stay connected to others. A little each day goes a long way.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              19 participants
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            JOIN
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="fa fa-tint" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            WATER
                          </h6>
                          <p className="description mt-3">
                            Up your health game by committing to drink a gallon of water each day.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              39 participants
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            JOIN
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="fa fa-futbol-o" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            PHYSICAL ACTIVITY
                          </h6>
                          <p className="description mt-3">
                            Staying active is crucial for your health. Choose your activity and commit to it.
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              18 participants
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            JOIN
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          </div>
        </main>
      </>
    );
  }
export default Explore;
