// Home.js
import './Jumbotron.css';
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

class Home extends Component {
  render() {
    return (
      <div >
      <Jumbotron fluid>
        <Container fluid>
       <h1 className="display-3">Home</h1>
       <p className="lead">This is the Home page.</p>
     </Container>
   </Jumbotron>
 </div>
    );
  }
}
export default Home;
