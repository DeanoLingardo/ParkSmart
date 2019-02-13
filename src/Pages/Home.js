// IMPORTS
import React, { Component } from 'react';
import Linedemo from './../components/ChartsModule/Linedemo.js';
import { Badge, Container, Row, Col, Jumbotron } from 'reactstrap';
import './../components/JumbotronModule/Jumbotron.css';


//HOME PAGE
export default class Home extends Component {
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
          <Col class="xs-3" align="center">
          <Linedemo/>
          </Col>
          <Col class="xs-3" align="center">
          <Linedemo/>
          </Col>
        </Row>
        </Container>

 </div>
    );
  }
}
