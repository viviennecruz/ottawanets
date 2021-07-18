import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Carousel, Button, Container } from 'react-bootstrap';

import style from "./landing.css";

import img1 from '../../assests/bballpic1.jpg';
import img2 from '../../assests/bballpic2.jpg';
import img3 from '../../assests/bballpic3.jpg';
import icon1 from '../../assests/muscle.png';
import icon2 from '../../assests/speech-bubble.png';
import icon3 from '../../assests/support.png';
import icon4 from '../../assests/thinking.png';
import icon5 from '../../assests/basketball-2.png';


export class Landing extends Component {
    render() {
      return (
          <div>
             <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={ img1 }
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={ img2 }
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={ img3 }
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            <div className="content">
            <Row>
                <Col>
                    <h1>Our Mission</h1>
                    <Row className="justify-content-md-center">
                        <Col>
                            <img src= { icon5 } alt="" id="bball"/>
                        </Col>
                        <Col>
                            {/* <Container className="my-auto"> */}
                                <h3 id="mission">"To build an enriching setting for youth, using basketball
                                    as a vehicle to inspire them to fulfill their academic, 
                                    physical, and personal potential."
                                </h3>
                            {/* </Container> */}
                        </Col>
                    </Row> 
                </Col>
            </Row>

            <Row id="values">
                <Col>
                    <h2>Our Values</h2>
                    <Row>
                        <Col>
                            <h3>Teamwork</h3>
                            <Row>
                                <Col>
                                    <img src= { icon3 } alt="icon" id="icon"/>
                                </Col>
                                <Col>
                                    <p>
                                        Teamwork is essential to acheiving victory as it requires the effort
                                        of every member on the team.
                                    </p>
                                </Col>
                            </Row>
                        </Col>

                        <Col>
                            <h3>Critical thinking</h3>
                            <Row>
                                <Col>
                                    <img src= { icon4 } alt="icon" id="icon" />
                                </Col>
                                <Col>
                                    <p>
                                        Critical thinking can help athletes perform at their best when they
                                        are under high pressure and stress.
                                    </p>
                                </Col>
                            </Row>
                        </Col> 

                        <Col>
                            <h3>Physical fitness</h3>
                            <Row>
                                <Col>
                                    <img src= { icon1 } alt="icon" id="icon" />
                                </Col>
                                <Col>
                                    <p>
                                        Athletes with good physical fitness can increase the efficiency of learning
                                        sports skills.
                                    </p>
                                </Col>
                            </Row>
                        </Col>

                        <Col>
                            <h3>Communication</h3>
                            <Row>
                                <Col>
                                    <img src= { icon2 } alt="icon" id="icon" />
                                </Col>
                                <Col>
                                    <p>
                                        Communication is integral to successful sports organizations and can help
                                        influence players' performance.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h2>Interested in becoming an Ottawa Net?</h2>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        >  <Button className="button" variant="outline-dark">Learn more</Button>
                    </div>
                   
                </Col>
            </Row>
            </div>
            
          </div>
      );
    }
  }
  
export default Landing;