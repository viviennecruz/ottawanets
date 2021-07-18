import React, { Component } from "react";
import { Navbar, Container, Nav, NavDropdown , Row, Col, Form, Button } from 'react-bootstrap';

import twitter from '../../../assests/twitter.png';
import instagram from '../../../assests/instagram.png';
import facebook from '../../../assests/facebook.png';

export class Footer extends Component {
    render () {
        return (
            <Container id="contact">
                <Row>
                    <Col>
                        <h3>Come hoop with us @</h3>
                        <p>80 George St.</p>
                        <p>Ottawa, ON K1N 5W1</p>
                        <p>admin@ottawanets.com</p>
                        <p>(289)-681-1448</p>
                    </Col>
                        
                    <Col>
                        <h3>Socials</h3>
                        <Row>
                            <Col>
                                <img src= { instagram } alt="" class="icon"/>
                            </Col>
                            <Col>
                                <p>@ottawanets</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <img src= { twitter } alt="" class="icon"/>
                            </Col>
                            <Col>
                                <p>@ottawa_nets</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <img src= { facebook } alt="" class="icon"/>
                            </Col>
                            <Col>
                                <p>Ottawa Nets Basketball</p>
                            </Col>
                        </Row>
                        {/* <p> <img src= { instagram } alt=""/> @ottawanets</p>
                        <p> <img src= { twitter } alt=""/>  @ottawa_nets</p>
                        <p> <img src= { facebook } alt=""/> Ottawa Nets Basketball</p> */}
                    </Col>

                    <Col>
                        <h3>Questions?</h3>
                        <Form>
                            <Row>
                            <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Full Name" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                            </Col>
                            </Row>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Type here</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                                <Button variant="outline-dark">Submit</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>            
        );
    }
}
export default Footer;