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
  Col,
  Card,
  CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,
  Row,
  Button } from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <div>
      <Jumbotron fluid  className="Jumbotron">
        <Container fluid>
       <h1><Badge className="display-3" color="dark">Home</Badge></h1>
     </Container>
   </Jumbotron>
   <Container>
   <Row>
   <Col>
   <Card>
           <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
           <CardBody>
             <CardTitle>Chart 1</CardTitle>
             <CardSubtitle>Here's how many times you've parked</CardSubtitle>
           </CardBody>
           </Card>

   </Col>
   <Col>
   <Card>
           <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
           <CardBody>
             <CardTitle>Chart 2</CardTitle>
             <CardSubtitle>Here's info on the best times to find a parking spot</CardSubtitle>
           </CardBody>
           </Card>

   </Col>
        </Row>
        </Container>
 </div>
    );
  }
}
export default Home;
