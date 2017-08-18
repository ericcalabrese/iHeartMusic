import React, { Component } from 'react';
import './App.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const nav = {
	background: 'transparent',
	border: 'none'
};

export default class NavBar extends Component{

	render() {
		return (
			<Navbar style={nav} fixedTop collapseOnSelect>
	          <Navbar.Header>
	            <Navbar.Brand>
	              <a className="text" href="#">
	                <span>i<span className="red">Heart</span> Music</span></a>
	            </Navbar.Brand>
	            <Navbar.Toggle />
	          </Navbar.Header>
	          <Navbar.Collapse>
	            <Nav pullRight>
	              <NavItem eventKey={1} href="#"><span>Contact</span></NavItem>
	            </Nav>
	          </Navbar.Collapse>
	        </Navbar>
		);
	}
}