import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
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
              <Link to={'/profile'} className="nav-link">Profile</Link>
              </NavItem>
              <NavItem>
              <Link to={'/about'} className="nav-link">About</Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            </Collapse>
            </Navbar>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/profile' component={Profile} />
                <Route path='/about' component={About} />
            </Switch>
          </div>
        </Router>
      );
    }
  }
