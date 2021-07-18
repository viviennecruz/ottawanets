import React, { Component } from "react";
import { Navbar, Container, Nav, NavDropdown , Row, Col, Form, Button } from 'react-bootstrap';
import { withTranslation, Trans } from "react-i18next";

import twitter from '../../../assests/twitter.png';
import instagram from '../../../assests/instagram.png';
import facebook from '../../../assests/facebook.png';
import bball from '../../../assests/basketball.png';

import style from "./footer.css";


export class Footer extends Component {
    render () {
        const { t } = this.props;
        return (
            <div id="contact">
                <Row>       
                    <Col>
                        <h3>{t('footer:title1')}</h3>
                        <Row>
                            <Col>
                                <img src= { bball } alt="" id="bballnet"/>
                            </Col>
                            <Col>
                                <p>80 George St.</p>
                                <p>Ottawa, ON K1N 5W1</p>
                                <p>admin@ottawanets.com</p>
                                <p>(289)-681-1448</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col>
                        <h3>{t('footer:title2')}</h3>
                        <Row>
                            <Col>
                                <p id="handle"> <img src= { instagram } alt="" class="icon"/> @ottawanets</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p id="handle"> <img src= { twitter } alt="" class="icon"/> @ottawa_nets</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p id="handle"> <img src= { facebook } alt="" class="icon"/> Ottawa Nets Basketball</p>
                            </Col>
                        </Row>
                        {/* <p> <img src= { instagram } alt=""/> @ottawanets</p>
                        <p> <img src= { twitter } alt=""/>  @ottawa_nets</p>
                        <p> <img src= { facebook } alt=""/> Ottawa Nets Basketball</p> */}
                    </Col>

                    <Col>
                        <h3>{t('footer:title3')}</h3>
                        <Form>
                            <Row>
                            <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>{t('footer:name')}</Form.Label>
                                    <Form.Control type="text" placeholder={t('footer:fullname')} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                    <Form.Label>{t('footer:email')}</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                            </Col>
                            </Row>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>{t('footer:type')}</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                                <Button variant="outline-dark">{t('footer:submit')}</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </div>            
        );
    }
}
export default withTranslation(["footer"])(Footer);