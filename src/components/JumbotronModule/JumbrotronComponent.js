// IMPORTS
import '../../components/JumbotronModule/Jumbotron.css';
import React, { Component } from 'react';
import { Jumbotron, Container, Badge} from 'reactstrap';

export default class JumbotronComponent extends Component
{
  render() {
    return (
      <div>
      <Jumbotron fluid  className="Jumbotron">
        <Container fluid>
       <h1><Badge className="display-3" color="dark">{this.props.headerProp}</Badge></h1>
      </Container>
      </Jumbotron>
    </div>);
  }
}
