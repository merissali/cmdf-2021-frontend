import React, { useRef, useEffect, useState } from 'react'
import NavBar from "../components/Navbars/NavBar.js";
import VerticalBar from '../components/VerticalBar'
import checkBox from "../"
import {
    Button,
    Card,
    CardHeader,
    CardBody,
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

import "../assets/css/argon-design-system-react.css";

const Dashboard = props => {
    const main = useRef()
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
                        <span />
                    </div>
                </section>
                <VerticalBar />
                <div class='row' style={{ justifyContent: 'space-around' }}>
                    <div class='col-xl-4'>
                        <div class='card-header'>
                            <h5 class='h3 mb-0'>Today's Habits</h5>
                        </div>
                        <div class='card-body'>
                            <ul class='list my--3 list-group list-group-flush'>
                                <li class='px-0 list-group-item'>
                                    <div class='align-items-center row'>
                                        <div class='col-auto col'>
                                            Health
                                        </div>
                                        <div class='col ml--2'>
                                            Sleep early
                                        </div>
                                        <div class='col-auto col'>
                                            In progress
                                        </div>
                                    </div>
                                </li>
                                <li class='px-0 list-group-item'>
                                <div class='align-items-center row'>
                                        <div class='col-auto col'>
                                            Health
                                        </div>
                                        <div class='col ml--2'>
                                            Sport
                                        </div>
                                        <div class='col-auto col'>
                                            In progress
                                        </div>
                                    </div>
                                </li>
                                <li class='px-0 list-group-item'>
                                <div class='align-items-center row'>
                                        <div class='col-auto col'>
                                            Growth
                                        </div>
                                        <div class='col ml--2'>
                                            Study
                                        </div>
                                        <div class='col-auto col'>
                                            In progress
                                        </div>
                                    </div>
                                </li>
                                <li class='px-0 list-group-item'>
                                <div class='align-items-center row'>
                                        <div class='col-auto col'>
                                            Health
                                        </div>
                                        <div class='col ml--2'>
                                            Drink water
                                        </div>
                                        <div class='col-auto col'>
                                            Completed
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class='col-xl-4'>
                        <div class='card-header'>
                            <h5 class='h3 mb-0'>Past Habits</h5>
                        </div>
                        <div class='card-body'>
                            <ul class='list my--3 list-group list-group-flush'>
                                <li class='px-0 list-group-item'>
                                    <div class='align-items-center row'>
                                        <div class='col-auto col'>
                                            Mental care
                                        </div>
                                        <div class='col ml--2'>
                                            Meditate
                                        </div>
                                        <div class='col-auto col'>
                                            July 2020 - Sept 2020
                                        </div>
                                    </div>
                                </li>
                                <li class='px-0 list-group-item'>
                                <div class='align-items-center row'>
                                        <div class='col-auto col'>
                                            Growth
                                        </div>
                                        <div class='col ml--2'>
                                            Read
                                        </div>
                                        <div class='col-auto col'>
                                            Oct 2020 - Dec 2020
                                        </div>
                                    </div>
                                </li>
                                <li class='px-0 list-group-item'>
                                <div class='align-items-center row'>
                                        <div class='col-auto col'>
                                            Sport
                                        </div>
                                        <div class='col ml--2'>
                                            Cycle
                                        </div>
                                        <div class='col-auto col'>
                                            March 2020 - Aug 2020
                                        </div>
                                    </div>
                                </li>
                                <li class='px-0 list-group-item'>
                                <div class='align-items-center row'>
                                        <div class='col-auto col'>
                                            Health
                                        </div>
                                        <div class='col ml--2'>
                                            Sleep early
                                        </div>
                                        <div class='col-auto col'>
                                            March 2020 - May 2020
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}

export default Dashboard