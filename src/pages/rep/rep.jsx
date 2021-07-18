import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Carousel, Button } from 'react-bootstrap';

import style from "./rep.css";

import img10 from '../../assests/bballpic10.jpg';
import img11 from '../../assests/bballpic11.jpg';
import img12 from '../../assests/bballpic12.jpg';
import pg from '../../assests/basketball-3.png';

export class Rep extends Component {
    render() {
        return (
            <div>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ img10 }
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ img11 }
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ img12 }
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>

                <Row id="main">
                    <Col>
                        <h2>
                            Ottawa Nets Rep Basketball
                        </h2>
                        <Row>
                            <Col>
                                <h3 id="rl">
                                Competitive teams compete against teams across the province.
                                Our emphasis is on skill improvement and performance on the court.
                                </h3>
                            </Col>
                            <Col>
                                <img src= { pg } alt="" id="guy"/>
                            </Col>
                        </Row>
                        
                    </Col>
                </Row>

                <Row id="main">
                    <Col>
                        <h2>2020-21 Rep teams tryout schedule</h2>
                        <h3>All players must attend all tryout dates for their age group.</h3>
                    </Col>
                </Row>

                <Row id="main">
                    <Col>
                        <h2>Girls basketball</h2>
                    </Col>
                </Row>

                <Row id="main">
                    <Col>
                        <h4>U11 Atom</h4>
                        <p>September 3rd, 7-9pm</p>
                        <p>September 4th, 7-9pm</p>
                        <p>Glashan Public School</p>
                    </Col>

                    <Col>
                        <h4>U13 Bantam</h4>
                        <p>September 5th, 5-7pm</p>
                        <p>September 6th, 5-7pm</p>
                        <p>Glashan Public School</p>
                    </Col>

                    <Col>
                        <h4>U15 Midget</h4>
                        <p>September 12th, 7-9pm</p>
                        <p>September 13th, 7-9pm</p>
                        <p>Glashan Public School</p>
                    </Col>
                </Row>

                <Row id="main">
                    <Col>
                        <h4>U12 Major Atom</h4>
                        <p>September 10th, 5-7pm</p>
                        <p>September 11th, 5-7pm</p>
                        <p>Glashan Public School</p>
                    </Col>

                    <Col>
                        <h4>U14 Major Bantam</h4>
                        <p>September 8th, 7-9pm</p>
                        <p>September 9th, 7-9pm</p>
                        <p>Glashan Public School</p>
                    </Col>

                    <Col>
                        <h4>U15 Midget</h4>
                        <p>September 14th, 7-9pm</p>
                        <p>September 15th, 7-9pm</p>
                        <p>Glashan Public School</p>
                    </Col>
                </Row>

                <Row id="main">
                    <Col>
                        <h2>Boys basketball</h2>
                    </Col>
                </Row>

                <Row id="main">
                    <Col>
                        <h4>U11 Atom</h4>
                        <p>September 1st, 5-7pm</p>
                        <p>September 2nd, 5-7pm</p>
                        <p>Glashan Public School</p>
                    </Col>

                    <Col>
                        <h4>U13 Bantam</h4>
                        <p>September 7th, 5-7pm</p>
                        <p>September 8th, 5-7pm</p>
                        <p>Glashan Public School</p>
                    </Col>

                    <Col>
                        <h4>U15 Midget</h4>
                        <p>September 12th, 5-7pm</p>
                        <p>September 13th, 5-7pm</p>
                        <p>Glashan Public School</p>
                    </Col>
                </Row>

                <Row id="main">
                    <Col>
                        <h4>U12 Major Atom</h4>
                        <p>September 15th, 5-7pm</p>
                        <p>September 16th, 5-7pm</p>
                        <p>Glashan Public School</p>
                    </Col>

                    <Col>
                        <h4>U14 Major Bantam</h4>
                        <p>September 17th, 5-7pm</p>
                        <p>September 18th, 5-7pm</p>
                        <p>Glashan Public School</p>
                    </Col>

                    <Col>
                        <h4>U15 Midget</h4>
                        <p>September 19th, 7-9pm</p>
                        <p>September 20th, 7-9pm</p>
                        <p>Glashan Public School</p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Rep;