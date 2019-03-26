import React, { Component } from 'react';
import '../../Styles/App.css';
import {
  Container,
  Form,
  FormGroup,
  Col,
  Label,
  Input,
  Button,
  Row,
  InputGroupAddon,
  InputGroup,
 } from 'reactstrap';

export default class Login extends Component {
  render() {
    return (
      <div>
      <Container className="App" fluid>
        <Form className="form" align="center" >
          <Row>
            <Col></Col>
            <Col sm-3>
              <img src="logo.png" height="300" alt="logo"></img>

                <FormGroup>
                  <Label></Label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                  <Input
                    type="email"
                    name="email"
                    id="Email"
                    placeholder="Email"
                  />
              </InputGroup>
              <Label></Label>

              <InputGroup>
                <InputGroupAddon addonType="prepend">*</InputGroupAddon>
                  <Label></Label>
                  <Input
                    type="password"
                    name="password"
                    id="Password"
                    placeholder="Password"
                  />
              </InputGroup>
                  <Label></Label>
                <Button color="secondary" size="m" block href="/">Login</Button>
                </FormGroup>
          </Col>
            <Col></Col>
        </Row>
        </Form>
      </Container>
      </div>
         );
       }
     }
