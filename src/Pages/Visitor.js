// Info.js
import React, { Component } from 'react';
import {
  Badge,
  Jumbotron,
  Container,
 } from 'reactstrap';
 import ChatBot from 'react-simple-chatbot';

class About extends Component {
  render() {
    return (
      <div>
      <Jumbotron fluid  className="Jumbotron">
        <Container fluid>
       <h1><Badge className="display-3" color="dark">Visitor Requests</Badge></h1>
     </Container>
   </Jumbotron>
   <ChatBot
  steps={[
    {
      id: 'hello-world',
      message: 'Hello World!',
      end: true,
    },
  ]}
/>
 </div>
    );
  }
}

export default About;
