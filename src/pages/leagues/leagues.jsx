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


export class Leagues extends Component {
    render() {
        return (
            <div>
                <Carousel fade>
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

                <Container>
                <Row>
                    <Col>
                        <h2>House league</h2>
                        <h4>Friendly competition</h4>
                        <p>Practice frequency: 1-2 practices/week</p>
                        <p>Game frequency: 1 game/week</p>
                        <p>Tournament frequency: 1-2/tournaments per season</p>
                        <Link to="/house">
                            <Button variant="outline-dark">Learn more</Button>
                        </Link>
                        
                    </Col>

                    <Col>
                        <h2>Rep league</h2>
                        <h4>Regional and provincial competition</h4>
                        <p>Practice frequency: 2-3 practices/week</p>
                        <p>Game frequency: 1 game/week</p>
                        <p>Tournament frequency: 4-8/tournaments per season</p>
                        <Link to="/rep">
                            <Button variant="outline-dark">Learn more</Button>
                        </Link>
                        
                    </Col>
                </Row>

                <Row>
                    <Col><h2>Why join the Ottawa Nets?</h2></Col>
                    <Row>
                        <Col>
                            <h4>We strive for excellence in basketball, teamwork, and sportsmanship.</h4>
                        </Col>
                        <Col>
                            <h4>Provincial titles</h4>
                            <p>U18 Girls Gold 2020</p>
                            <p>U16 Boys Silver 2020</p>
                            <p>U17 Boys Gold 2020</p>
                        </Col>
                    </Row>
                </Row>

                <Row>
                    <Col><h2>What are people saying about the nets?</h2></Col>
                </Row>
                </Container>

                
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ review1 }
                        alt="First slide"
                        />

                        {/* <Carousel.Caption>  
                            <h4>"The nets have helped me improve my basketball skills!" - Marco Cen</h4>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ review2 }
                        alt="Second slide"
                        />

                        {/* <Carousel.Caption>
                            <h4>"The nets have helped me improve my basketball skills!" - Vivianne Yee</h4>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ review3 }
                        alt="Third slide"
                        />

                        {/* <Carousel.Caption>
                            <h4>"The nets have helped me improve my basketball skills!" - Taj Loodu</h4>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}
export default Leagues;