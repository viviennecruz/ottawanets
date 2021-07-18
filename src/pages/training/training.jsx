import React, { Component, useState, variant } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Carousel, Button, Form, Container } from 'react-bootstrap';

import style from "./training.css";

import img13 from '../../assests/bballpic13.jpg';
import img14 from '../../assests/bballpic14.jpg';
import img15 from '../../assests/bballpic15.jpg';

const Training = () => {
    // render() {
        // const [validated, setValidated] = useState(Boolean(variant));

        // const handleSubmit = (event) => {
        //     const form = event.currentTarget;
        //     if (form.checkValidity() === false) {
        //     event.preventDefault();
        //     event.stopPropagation();
        //     }
        // }

        // setValidated(true);
        return (
            <div>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ img13 }
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ img14 }
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ img15 }
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>

                <Container>
                <Row>
                    <Col>
                        <h2>Ottawa Nets Basketball Training</h2>
                        <p>We offer specialized 1-on-1 and group training for players looking to improve their basketball skills.</p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h2>Sign up for training</h2>
                    </Col>
                </Row>
                
                <Form noValidate>
                    <Row>
                        <Form.Group as={Col}>
                            <Form.Label>First name</Form.Label>
                            <Form.Control required type="text" placeholder="First name" />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                         </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Last name</Form.Label>
                            <Form.Control required type="text" placeholder="Last name" />
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control required type="email" placeholder="Email" />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control required type="phone" placeholder="Phone number" />
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Do you currently play for the Nets?</Form.Label>
                            <Form.Check
                                type="checkbox"
                                label="House league"
                                name="houseleague"
                                id="houseleague"
                            />

                            <Form.Check
                                type="checkbox"
                                label="Rep league"
                                name="repleague"
                                id="repleague"
                            />

                            <Form.Check
                                type="checkbox"
                                label="No"
                                name="no"
                                id="no"
                            />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Are you interested in 1-on-1 or group training?</Form.Label>
                            <Form.Check
                                type="checkbox"
                                label="1-on-1 training"
                                name="one"
                                id="one"
                            />

                            <Form.Check
                                type="checkbox"
                                label="Group training"
                                name="group"
                                id="group"
                            />
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>What are you looking to improve on?</Form.Label>
                            <Form.Control required as="textarea" placeholder="Type here" />
                        </Form.Group>
                    </Row>

                    <Row>
                        <Col>
                            <Button variant="outline-dark">Submit</Button>
                        </Col>
                    </Row>
                </Form>
                </Container>
                
               
            </div>
        );
    // }
};

export default Training;