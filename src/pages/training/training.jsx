import React, { Component, useState, variant } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Carousel, Button, Form, Container } from 'react-bootstrap';
import { withTranslation } from "react-i18next";

import style from "./training.css";

import img13 from '../../assests/bballpic13.jpg';
import img14 from '../../assests/bballpic14.jpg';
import img15 from '../../assests/bballpic15.jpg';
import exercise from '../../assests/exercise.png';

// const Training = () => {
export class Training extends Component {
    render() {
        const [validated, setValidated] = React.useState([false]);

        const handleSubmit = (event) => {
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            }
        }

        setValidated(true);
        const { t } = this.props;
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

                <Row id="main">
                    <Col>
                        <h2>{t('title1')}</h2>
                        <Row>
                            <Col>
                                <h3 id="train">{t('desc')}</h3>
                            </Col>
                            <Col>
                                <img src={ exercise } alt="" id="girl"/>
                            </Col>
                        </Row>
                        
                    </Col>
                </Row>

                <Row id="main">
                    <Col>
                        <h2>{t('title2')}</h2>
                    </Col>
                </Row>
                
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row id="main">
                        <Form.Group as={Col}>
                            <Form.Label>{t('fname')}</Form.Label>
                            <Form.Control required type="text" placeholder={t('fname')} />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                         </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>{t('lname')}</Form.Label>
                            <Form.Control required type="text" placeholder={t('lname')} />
                        </Form.Group>
                    </Row>

                    <Row id="main">
                        <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>{t('email')}</Form.Label>
                            <Form.Control required type="email" placeholder="Email" />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>{t('phone')}</Form.Label>
                            <Form.Control required type="phone" placeholder={t('phone')} />
                        </Form.Group>
                    </Row>

                    <Row id="main">
                        <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>{t('q1')}</Form.Label>
                            <Form.Check
                                type="checkbox"
                                label={t('opt1')}
                                name="houseleague"
                                id="houseleague"
                            />

                            <Form.Check
                                type="checkbox"
                                label={t('opt2')}
                                name="repleague"
                                id="repleague"
                            />

                            <Form.Check
                                type="checkbox"
                                label={t('opt3')}
                                name="no"
                                id="no"
                            />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>{t('q2')}</Form.Label>
                            <Form.Check
                                type="checkbox"
                                label={t('option1')}
                                name="one"
                                id="one"
                            />

                            <Form.Check
                                type="checkbox"
                                label= {t('option2')}
                                name="group"
                                id="group"
                            />
                        </Form.Group>
                    </Row>

                    <Row id="main">
                        <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>{t('q3')}</Form.Label>
                            <Form.Control required as="textarea" placeholder={t('type')}/>
                        </Form.Group>
                    </Row>

                    <Row id="main">
                        <Col>
                            <Button variant="outline-dark" type="submit">{t('submit')}</Button>
                        </Col>
                    </Row>
                </Form>
                
               
            </div>
        );
    }
};

export default withTranslation(["training"])(Training);