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
import { Link } from "react-router-dom";


// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  ControlledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  CardImg,
  Collapse,
  FormGroup,
  Form,
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



function CreateHabit() {

  useEffect(() => {
  });
  const main = useRef();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
      <>
        <NavBar />
        <main ref={main}>
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-primary">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="pt-lg-7">
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="display-5 mb-4">
                      <span>What habit do you want to create?</span>
                      </div>
                      <Form role="form">
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Enter new habit here" type="text" />
                          </InputGroup>
                        </FormGroup>
                        <div className="custom-control custom-control-alternative custom-checkbox">
                          <input
                            className="custom-control-input"
                            id=" customCheckLogin"
                            type="checkbox"
                          />
                        </div>
                        <div className="text-center">
                          <Button
                            color="primary"
                            type="button"
                            to="/current-habits" tag={Link}
                          >
                            Create
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        </>
    );
  }
export default CreateHabit;
