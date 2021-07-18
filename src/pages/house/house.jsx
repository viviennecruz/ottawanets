import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Carousel, Button, Form } from 'react-bootstrap';
import "react-datetime/css/react-datetime.css";
import Datetime from 'react-datetime';

import style from "./house.css";

import img7 from '../../assests/bballpic7.jpg';
import img8 from '../../assests/bballpic8.jpg';
import img9 from '../../assests/bballpic9.png';
import team from '../../assests/basketball-player.png';

export class House extends Component {
    render() {
        return (
            <div>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ img7 }
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ img8 }
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ img9 }
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>

                <Row id="main">
                    <Col>
                        <h2>Ottawa Nets House League</h2>
                        <Row>
                            <Col>
                                <h3 id="hl">House league teams work on skill improvement and compete in games
                                on a friendly basis. Our emphasis is on skills development and 
                                team play.
                                </h3>
                            </Col>
                            <Col>
                                <img src= { team } alt="" id="team"/>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row id="main">
                    <Col>
                        <h2>Sign up for house league</h2>
                    </Col>
                </Row>

                <Row id="main">
                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>First name</Form.Label>
                            <Form.Control type="text" placeholder="First name" />
                         </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Birthday</Form.Label>
                            <Datetime />
                        </Form.Group>                    
                    </Col>
                </Row>

                <Row id="main">
                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control type="text" placeholder="Last name" />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Grade</Form.Label>
                            <Form.Control type="text" placeholder="Grade" />
                            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                <Row id="main">
                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="text" placeholder="Age" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Preferred positions</Form.Label>
                            <Form.Check
                                type="checkbox"
                                label="Point guard"
                                name="pointguard"
                                id="pointguard"
                            />

                            <Form.Check
                                type="checkbox"
                                label="Shooting guard"
                                name="shootingguard"
                                id="shootingguard"
                            />

                            <Form.Check
                                type="checkbox"
                                label="Small forward"
                                name="smallforward"
                                id="smallforward"
                            />

                            <Form.Check
                                type="checkbox"
                                label="Power forward"
                                name="powerforward"
                                id="powerforward"
                            />

                            <Form.Check
                                type="checkbox"
                                label="Center"
                                name="center"
                                id="center"
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row id="main">
                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control type="phone" placeholder="Phone number" />
                        </Form.Group>
                    </Col>

                    <Col>
                    </Col>
                </Row>

                <Row id="main">
                    <Col>
                        <Button variant="outline-dark" type="submit">Submit</Button>
                    </Col>
                </Row>
            </div> 
        );
    }
}

export default House;