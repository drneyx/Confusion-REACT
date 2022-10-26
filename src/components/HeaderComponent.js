import React, { Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href='/'>
                            <img src="assets/images/logo.png" height="30" width="41"alt="Nice Restaurant"/>
                        </NavbarBrand>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg">Home</span>
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <span className="fa fa-info fa-lg">About Us</span>
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    <span className="fa fa-list fa-lg">Menu</span>
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <span className="fa fa-address-card fa-lg">Contant Us</span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </Navbar>
                <div className="jumbotron">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Nice Samwel Restaurant</h1>
                                <p>We give you the best test in the world. Come and try</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default Header;