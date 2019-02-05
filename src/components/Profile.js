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

class Profile extends Component {
  render() {
    return (
      <div>
      <Jumbotron fluid>
        <Container fluid>
       <h1 className="display-3">Your Profile</h1>
       <p className="lead">This is the profile page.</p>
     </Container>
   </Jumbotron>
 </div>
    );
  }
}

export default Profile;
