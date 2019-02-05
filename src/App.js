import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Visitor from './components/Visitor';
import Permit from './components/Permit';
import './App.css';
import {
  Collapse,
  Navbar,
  Badge,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button } from 'reactstrap';

  export default class App extends React.Component {
    constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
      <Router>
          <div>
            <Navbar color="dark" dark expand="md">
            <img src="fav.png" class="nav-image" alt="logo"></img>
            <NavbarBrand href="" >ParkSmart</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
              <Link to={'/'} className="nav-link">Home</Link>
              </NavItem>
              <NavItem>
              <Link to={'/permit'} className="nav-link">Permit</Link>
              </NavItem>
              <NavItem>
              <Link to={'/about'} className="nav-link">Visitor</Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Account
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Options
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            </Collapse>
            </Navbar>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/permit' component={Permit} />
                <Route path='/about' component={Visitor} />
            </Switch>
          </div>
        </Router>
      );
    }
  }
