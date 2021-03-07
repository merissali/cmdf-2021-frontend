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
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import NavBar from "../components/Navbars/NavBar.js";
import "../assets/vendor/nucleo/css/nucleo.css";
import "../assets/vendor/font-awesome/css/font-awesome.min.css";
import "../assets/css/argon-design-system-react.css";
import checkBox from "../"

// index page sections

function Home(props) {
  const { habits } = props;
  // const [habits, setHabits] = React.useState([]);


  // function createHabit(habit) {
  //   return (
  //     // <button><i class="fa fa-square-o" aria-hidden="true"></i> onClick={this.checkHabit(habit.id)}</button>
  //   );
  // }

  function createProgressBar(userHabit) {
    return (
      <Row>
        <Col lg="12">
        <div className="progress-wrapper">
        <div className="progress-info">
        <span className="display-5 text-primary">{userHabit.name}</span>
          <div className="progress-percentage">
            <span>35%</span>
          </div>
        </div>
        <Progress max="100" value="35"/>
      </div>
        </Col>
      </Row>
    );
  }

  // const handleCheckHabit = e => {
  //   handleCheckHabit(e.target.value);
  // }
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
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        TODAY{" "}
                        <span>Here are your habits for today.</span>
                      </h1>
                      <ul class="fa-ul">
                         {/* {habits.map((habit) => createHabit(habit))} */}
                       <li><span class="fa-li"></span><i class="far fa-square"></i>
                            <span className="display-6 text-white"> Physical Activity</span></li>
                        <li><span class="fa-li"></span><i class="far fa-square"></i>
                            <span className="display-6 text-white"> Sleep early</span></li>
                        <li><span class="fa-li"></span><i class="far fa-square"></i>
                            <span className="display-6 text-white"> Study</span></li>
                        <li><span class="fa-li"></span><i class="far fa-square"></i>
                            <span className="display-6 text-white"> Drink Water</span></li>
                      </ul>
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

                  {/* <Row>
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
                  </Row> */}


            </Container>
          </section>
        </main>
      </>
    );
  }
export default Home;
