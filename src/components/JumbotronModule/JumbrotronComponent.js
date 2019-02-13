// IMPORTS
import './../components/JumbotronModule/Jumbotron.css';
import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

//HOME PAGE
export default class JumbotronComponent extends Component
{
  render()
  {
    return
    (
      <Jumbotron fluid  className="Jumbotron" />
    );
  }
}
