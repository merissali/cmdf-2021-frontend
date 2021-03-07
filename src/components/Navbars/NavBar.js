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
import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
import "../../assets/vendor/nucleo/css/nucleo.css";
import "../../assets/vendor/font-awesome/css/font-awesome.min.css";
import "../../assets/css/argon-design-system-react.css";
import calendarIcon from "../../assets/img/icons/common/calendar.png";

// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";


class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                      <img
                          src={calendarIcon}
                        />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          src={require("../../assets/img/icons/common/calendar.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                {/* <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Profile</span>
                    </DropdownToggle>
                    <DropdownMenu>
                    <DropdownItem to="/profile" tag={Link}>
                        My Profile
                      </DropdownItem>
                      <DropdownItem to="/dashboard" tag={Link}>
                        Dashboard
                      </DropdownItem>
                      <DropdownItem to="/statistics" tag={Link}>
                        Statistics
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown> */}


                <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-ui-04 d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Profile</span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-xl">
                      <div className="dropdown-menu-inner">
                        <Media
                          className="d-flex align-items-center"
                          to="/profile" tag={Link}
                        >
                          <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                            <i className="fa fa-user-circle" />
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-primary mb-md-1">
                              My Profile
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              View your profile and all of your habits.
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          to="/dashboard" tag={Link}
                        >
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="fa fa-bar-chart" />
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-primary mb-md-1">
                              Dashboard
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              See how you have been doing this past week.
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          to="/current-habits" tag={Link}
                        >
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="fa fa-tasks" />
                          </div>
                          <Media body className="ml-3">
                            <h5 className="heading text-warning mb-md-1">
                              Current habits
                            </h5>
                            <p className="description d-none d-md-inline-block mb-0">
                              Check out your progress on current habits.
                            </p>
                          </Media>
                        </Media>
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav to="/explore" tag={Link}>
                      <i className="ni ni-ui-04 d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Explore</span>
                    </DropdownToggle>
                    </UncontrolledDropdown>

                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      id="tooltip333589074"
                      target="_blank"
                    >
                      <i className="fa fa-cog" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Settings
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589074">
                      Configure your settings
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      id="tooltip356693867"
                      target="_blank"
                    >
                      <i className="fa fa-bell" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Notifications
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip356693867">
                      View your notifications
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      id="tooltip184698705"
                      target="_blank"
                    >
                      <i className="fa fa-sign-out-alt" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Logout
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip184698705">
                      Logout
                    </UncontrolledTooltip>
                  </NavItem>
                
                
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
