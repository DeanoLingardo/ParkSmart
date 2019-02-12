import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../../Pages/Home.js';
import Visitor from '../..//Pages/Visitor.js';
import Permit from '../..//Pages/Permit.js';
import '../../Styles/App.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
 } from 'reactstrap';

export default class NavbarComponent extends React.Component {
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
            <Link to={'/about'} className="nav-link">Requests</Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Account
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="https://cloud.openalpr.com/">
                  Administrator
                </DropdownItem>
                <DropdownItem>
                  Settings
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
