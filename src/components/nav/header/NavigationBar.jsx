import React, { Component } from "react";
import { Navbar, Container, Nav, NavDropdown, Form } from 'react-bootstrap';
import logo from '../../../assests/ottawanetslogo.png';
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";

export class NavigationBar extends Component {
  // state = {
  //   current: 'about',
  // };

  constructor(props) {
    super(props);
    this.state = {
      lang: this.props.i18n.language,
    };
  }

  handleChange = (newlang) => {
    this.setState({ lang: newlang });
    //console.log("state value is", newlang);
    this.props.i18n.changeLanguage(newlang);
  };

// handleClick = e => {
//     console.log('click ', e);
//     this.setState({ current: e.key });
//   };
  render() {
    const { t } = this.props;
    // const { current } = this.state;
    return (
      <Navbar bg="light" expand="lg">
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
          <Nav.Link><Link to="/">About us</Link></Nav.Link>
         
          <NavDropdown title="Leagues" id="basic-nav-dropdown">
            <Link to="/leagues">
              <NavDropdown.Item href="#action/3.4">Leagues</NavDropdown.Item>
            </Link>
            
            <NavDropdown.Divider />

            <Link to="/house">
              <NavDropdown.Item href="#action/3.1">House league</NavDropdown.Item>
            </Link>

            <Link to="/rep">
              <NavDropdown.Item href="#action/3.2">Rep league</NavDropdown.Item>
            </Link>
            
          </NavDropdown>
          <Nav.Link><Link to="/training">Training</Link></Nav.Link>
          <Nav.Link href="#contact">Contact us</Nav.Link>
          <NavDropdown title="English" id="basic-nav-dropdown" value={this.state.lang} onChange={this.handleChange}>
            {/* <Link to="/leagues">
              <NavDropdown.Item href="#action/3.4">Leagues</NavDropdown.Item>
            </Link>
            
            <NavDropdown.Divider /> */}

            {/* <Link to="/house"> */}
              <NavDropdown.Item value="en">English</NavDropdown.Item>
            {/* </Link> */}

            {/* <Link to="/rep"> */}
              <NavDropdown.Item value="ph">Tagalog</NavDropdown.Item>
            {/* </Link> */}
            
          </NavDropdown>
          <Nav.Link>
            <Form.Control 
            as="select"
            value={this.state.lang} 
            onChange={this.handleChange.bind(this)}>
              <option value={"en"}>
                <span>{t('language.english')}</span>
              </option>
              <option value={"ph"}>
                <span>{t('language.tagalog')}</span>
              </option>
            </Form.Control>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
      </Navbar>
    );
  }
}
 
export default  withTranslation()(NavigationBar);