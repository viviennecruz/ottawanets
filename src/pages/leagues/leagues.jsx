import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Carousel, Button, Container } from 'react-bootstrap';

import style from "./leagues.css";

import img4 from '../../assests/bballpic4.jpg';
import img5 from '../../assests/bballpic5.jpg';
import img6 from '../../assests/bballpic6.jpg';
import white from '../../assests/white.jpg';
import review1 from '../../assests/review1.png';
import review2 from '../../assests/review2.png';
import review3 from '../../assests/review3.png';
import bball1 from '../../assests/basketball-player.png';
import bball2 from '../../assests/basketball-3.png';
import medal from '../../assests/medal.png';

export class Leagues extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ img4 }
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ img5 }
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ img6 }
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>

                <Row id="contain">
                    <Col>
                        <h2>House league</h2>
                        <Row>
                            <Col>
                                <img src={ bball1 } alt="" id="player"/>
                            </Col>
                            <Col>
                                <h3>Friendly competition</h3>
                                <p>Practice frequency: 1-2 practices/week</p>
                                <p>Game frequency: 1 game/week</p>
                                <p>Tournament frequency: 1-2/tournaments per season</p>
                            </Col>
                        </Row>
                        
                        <Link to="/house">
                            <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            >  <Button className="button" variant="outline-dark">Learn more</Button>
                            </div>
                        </Link>
                        
                    </Col>

                    <Col>
                        <h2>Rep league</h2>
                        <Row>
                            <Col>
                                <img src={ bball2 } alt="" id="player"/>
                            </Col>
                            <Col>
                                <h3>Regional and provincial competition</h3>
                                <p>Practice frequency: 2-3 practices/week</p>
                                <p>Game frequency: 1 game/week</p>
                                <p>Tournament frequency: 4-8/tournaments per season</p>
                            </Col>
                        </Row>
                       
                        <Link to="/rep">
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            >  <Button className="button" variant="outline-dark">Learn more</Button>
                            </div>
                        </Link>
                        
                    </Col>
                </Row>

                <Row id="contain">
                    <Col><h2>Why join the Ottawa Nets?</h2></Col>
                    <Row>
                        <Col>
                            <h4>We strive for excellence in basketball, teamwork, and sportsmanship.</h4>
                            <img src={ medal } alt="" id="medal"/>
                        </Col>
                        <Col>
                            <h3>Provincial titles</h3>
                            <Row>
                                <Col>
                                    <p>U18 Girls Gold 2020</p>
                                    <p>U16 Boys Silver 2020</p>
                                    <p>U17 Boys Gold 2020</p>
                                </Col>
                                <Col>
                                    <p>U18 Boys Gold 2019</p>
                                    <p>U14 Girls Silver 2019</p>
                                    <p>U17 Boys Silver 2019</p>
                                </Col>
                                <Col>
                                    <p>U12 Boys Gold 2018</p>
                                    <p>U14 Girls Silver 2018</p>
                                    <p>U15 Girls Gold 2018</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Row>

                <Row id="contain">
                    <Col><h2>What are people saying about the nets?</h2></Col>
                </Row>
              
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ review1 }
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ review2 }
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ review3 }
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}
export default Leagues;