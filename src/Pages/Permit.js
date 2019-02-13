import React, { Component } from 'react';
import './../components/JumbotronModule/Jumbotron.css';

import {
  Badge,
  Jumbotron,
  Container,
  Nav,
  NavLink,
  NavItem,
  Row,
  Col
 } from 'reactstrap';

export default class Profile extends Component {
  render() {
    return (
      <div>
      <Jumbotron fluid  className="Jumbotron">
        <Container fluid>
       <h1><Badge className="display-3" color="dark">Your Permit</Badge></h1>
     </Container>
   </Jumbotron>

   <Container fluid>
   <Row>
             <Col xs="2">
             <Nav style={{backgroundColor: '#f1f1f1'}} vertical>
             <NavItem>
               <NavLink active href="#">Status</NavLink>
             </NavItem>
               <NavItem>
                 <NavLink active href="#">Details</NavLink>
               </NavItem>
               <NavItem>
                 <NavLink href="#">Verification</NavLink>
               </NavItem>
               <NavItem>
                 <NavLink href="#">Help</NavLink>
               </NavItem>
             </Nav>
             </Col>
             <Col>Column to be populated</Col>
           </Row>
           </Container>
     </div>


    );
  }
}
