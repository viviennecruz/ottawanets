import React, { Component } from "react";
import { Navbar, Container, Nav, NavDropdown, Form } from 'react-bootstrap';
import logo from '../../../assests/ottawanetslogo.png';
import { Link, NavLink } from "react-router-dom";
import { withTranslation, useTranslation, Trans } from "react-i18next";

// export class NavigationBar extends Component {
  function NavigationBar() {

  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    localStorage.setItem("language", lng);
    i18n.changeLanguage(lng);
  };

    return (
      <Navbar bg="light" expand="lg" variant="light">
      <Container>
        <Link to="/">
        <Navbar.Brand href="#home">
          <img
            src={ logo }
            width="150"
            height="130"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        </Link>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Trans>
          <Nav.Link><NavLink
              exact to="/"
              activeStyle={{
                fontWeight: "bold",
                color: "black",
                'text-decoration': 'none'
              }}
              style={{
                color: "grey",
                'text-decoration': 'none'
              }}
            >{t('nav:tab1')}</NavLink></Nav.Link>
          </Trans>
          
         
          <NavDropdown title={t('nav:tab2')} id="basic-nav-dropdown">
          <NavLink
              exact to="/leagues"
              activeStyle={{
                fontWeight: "bold",
                color: "black",
                'text-decoration': 'none'
              }}
              style={{
                color: "grey",
                'text-decoration': 'none'
              }}
            >
              <NavDropdown.Item href="#action/3.4">{t('nav:tab2')}</NavDropdown.Item>
            </NavLink>
            
            <NavDropdown.Divider />

            <NavLink
              exact to="/house"
              activeStyle={{
                fontWeight: "bold",
                color: "black",
                'text-decoration': 'none'
              }}
              style={{
                color: "grey",
                'text-decoration': 'none'
              }}
            >
              <NavDropdown.Item href="#action/3.1">{t('nav:tab3')}</NavDropdown.Item>
            </NavLink>

            <NavLink
              exact to="/rep"
              activeStyle={{
                fontWeight: "bold",
                color: "black",
                'text-decoration': 'none'
              }}
              style={{
                color: "grey",
                'text-decoration': 'none'
              }}
            >
              <NavDropdown.Item href="#action/3.2">{t('nav:tab4')}</NavDropdown.Item>
            </NavLink>
            
          </NavDropdown>
          <Nav.Link><NavLink
              exact to="/training"
              activeStyle={{
                fontWeight: "bold",
                color: "black",
                'text-decoration': 'none'
              }}
              style={{
                color: "grey",
                'text-decoration': 'none'
              }}
            >{t('nav:tab5')}</NavLink></Nav.Link>
          <Nav.Link href="#contact">{t('nav:tab6')}</Nav.Link>

          <NavDropdown title={t('nav:tab7')} id="basic-nav-dropdown">
            <NavDropdown.Item onClick={() => changeLanguage("en")}>
              {t('nav:tab8')}
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => changeLanguage("ph")}>
            {t('nav:tab9')}
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      </Container>
      </Navbar>
    );
  // }
}
 
export default withTranslation(["nav"])(NavigationBar);