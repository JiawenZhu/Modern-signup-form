import React, { Component } from "react";
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import {Link} from 'react-router-dom';

function getBack(){
   return window.location.href = "/home";
}

class Navigation extends Component {
    render() {
        return (
            <Navbar
                style={{
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                    fontWeight: "bold",
                    paddingTop: "25px"
                }}
            >
                <Navbar.Header>
                    <Navbar.Brand>
                        <img onClick={getBack} src="./logo.png" width="250px" style={{height: "auto", marginTop: "-22px"}} />
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem eventKey={1} href="/pricing">
                        Pricing
                    </NavItem>
                    <NavItem eventKey={2} href="/how-it-works">
                        How it works
                    </NavItem>
                    <NavItem eventKey={3} href="https://www.logiwork.com/contactus">
                        Contract
                    </NavItem>
                    <NavItem eventKey={1} href="/pricing">
                        <div
                            style={{
                                borderRadius: "4px",
                                border: "2px solid red",
                                padding: "10px",
                                marginTop: "-10px"
                            }}
                        >
                            Get started
                        </div>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Navigation;
