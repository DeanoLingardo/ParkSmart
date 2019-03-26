import React, { Component } from 'react';
import JumbotronComponent from './../JumbotronModule/JumbrotronComponent.js';
import {
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
      <div className="loginstyle">
        <JumbotronComponent headerProp="Permit"/>
   <Container fluid>
   <Row>
             <Col xs="2">
             <Nav vertical>
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
