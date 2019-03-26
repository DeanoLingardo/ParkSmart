// IMPORTS
import React, { Component } from 'react';
import Linedemo from './../ChartsModule/Linedemo.js';
import '../../Styles/App.css';
//import chatbotComponent from './../chatbotModule/chatbotComponent.js';
import JumbotronComponent from './../JumbotronModule/JumbrotronComponent.js';
import cardComponent from './../cardModule/cardComponent.js';
import { Container, Row, Col } from 'reactstrap';
import './../JumbotronModule/Jumbotron.css';
import { Card, Button, CardTitle, CardText, CardImg, CardBody, CardSubtitle, CardImgOverlay, CardHeader, Badge } from 'reactstrap';




//HOME PAGE
export default class Home extends Component {
  render() {
    return (
<div className="loginstyle">
 <JumbotronComponent headerProp="Home"/>
   <Container>
    <Row>
      <Col sm="4">
        <div>
          <Card className="card text-center" fluid>
          <CardImg width="100%" className="special-card" src="https://images.pexels.com/photos/1727004/pexels-photo-1727004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image cap" />
          <CardImgOverlay>
            <CardHeader><b>Traffic Conditions</b></CardHeader>
            <CardText>Need to know the traffic around your usual car park?</CardText>
                <Badge pill color="success">Traffic should be clear around Headingley Campus</Badge>
            <CardText>
              <small className="text-muted"><Badge>Last updated 3 mins ago</Badge></small>
            </CardText>
          </CardImgOverlay>
        </Card>
        </div>
        </Col>
        <Col sm="4" >
          <Card className="card text-center">
          <CardImg width="100%" className="special-card" src="https://images.pexels.com/photos/2996/parking-parking-lot-underground-garage.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image cap" />
          <CardImgOverlay>
            <CardHeader><b>Available Spaces</b></CardHeader>
            <CardText>Vistor parking spaces are limited, check here before travelling</CardText>
            <Badge pill color="warning">53 Available Spaces at Headingley Campus</Badge>
            <CardText>
              <small className="text-muted"><Badge>Last updated 3 mins ago</Badge></small>
            </CardText>
          </CardImgOverlay>
        </Card>
        </Col>
        <Col sm="4">
          <Card className="card text-center">
          <CardImg width="100%" className="special-card" src="https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image cap" />
          <CardImgOverlay>
            <CardHeader><b>Permit Status</b></CardHeader>
            <CardText>All staff require a permit to park on campus</CardText>
                <Badge pill color="success">Status: Verified <br /> Valid Until: 23rd July</Badge>
            <CardText>
              <small className="text-muted"><Badge>Last updated 7 mins ago</Badge></small>
            </CardText>
          </CardImgOverlay>
        </Card>
        </Col>
    </Row>
    </Container>
  <div id="mybutton">
   <button class="feedback">Help</button>
</div>
   </div>
    );
  }
}
