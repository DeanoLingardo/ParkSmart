// Home.js
import './../components/JumbotronModule/Jumbotron.css';
import React, { Component } from 'react';
import Linedemo from './../components/ChartsModule/Linedemo.js';
import {
    Badge,
    Jumbotron,
    Container,
    Card,
    CardBody,
    CardTitle, CardSubtitle,Row, Col
   } from 'reactstrap';

export default class Home extends Component {
  render() {
    return (
      <div>
      <Jumbotron fluid  className="Jumbotron">
        <Container fluid >
       <h1><Badge className="display-3" color="dark">Home</Badge></h1>
     </Container>
   </Jumbotron>
   <Container>
   <Row>
   <Col>
   <Card>
           <Linedemo/>
           <CardBody>
             <CardTitle>Chart 1</CardTitle>
             <CardSubtitle>Here's how many times you've parked</CardSubtitle>
           </CardBody>
           </Card>

   </Col>
   <Col>
   <Card>
           <Linedemo/>
           <CardBody>
             <CardTitle>Chart 2</CardTitle>
             <CardSubtitle>Here's how busy certain times are</CardSubtitle>
           </CardBody>
           </Card>


   </Col>
        </Row>
        </Container>
 </div>
    );
  }
}
