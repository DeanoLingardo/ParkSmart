// Info.js
import React, { Component } from 'react';
import './../../Styles/App.css';
import ChatBot from 'react-simple-chatbot';
import '../../Styles/App.css';
import JumbotronComponent from './../JumbotronModule/JumbrotronComponent.js';
import ModalExample from './../ModalModule/ModalComponent.js';






class About extends Component {
  render() {
    return (
      <div className="loginstyle">
        <JumbotronComponent headerProp="Vistor Requests"/>
   <div>
   <chatbotComponent />

   </div>
 </div>
    );
  }
}

export default About;
