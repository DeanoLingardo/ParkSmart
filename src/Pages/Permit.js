import React, { Component } from 'react';
import {
  Badge,
  Jumbotron,
  Container,
 } from 'reactstrap';

class Profile extends Component {
  render() {
    return (
      <div>
      <Jumbotron fluid  className="Jumbotron">
        <Container fluid>
       <h1><Badge className="display-3" color="dark">Permit</Badge></h1>
     </Container>
   </Jumbotron>
 </div>
    );
  }
}

export default Profile;
