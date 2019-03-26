import React from 'react';
import ChatBot from 'react-simple-chatbot';
import '../../Styles/App.css';


export default class chatbotComponent {
  render() {
    return (
      <div>
        <ChatBot
          steps={[
            {
              id: '1',
              message: 'I can help you get around ParkSmart, whats your name?',
              trigger: '2',
            },
            {
              id: '2',
              user: true,
              trigger: '3',
            },
            {
              id: '3',
              message: 'Hi {previousValue}, nice to meet you! What do you need help with today?',
              end: true,
            },
          ]}
        />
      </div>
    );
  }
}
