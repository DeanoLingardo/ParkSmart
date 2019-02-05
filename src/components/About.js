// Info.js

import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  Badge,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Jumbotron,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button } from 'reactstrap';

class About extends Component {
  render() {
    return (
      <div>
      <Jumbotron fluid>
        <Container fluid>
       <h1 className="display-3">About ParkSmart</h1>
       <p className="lead">This is the about page.</p>
     </Container>
   </Jumbotron>
 </div>
    );
  }
}

export default About;
