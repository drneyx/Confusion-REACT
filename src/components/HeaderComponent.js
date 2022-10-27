import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Collapse, NavbarToggler } from 'reactstrap';

class Header extends Component {


    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render() {
        return (
            <>
                <Navbar dark expand="md">
                    <div className="container d-flex">
                        <NavbarToggler onClick={this.toggleNav}/>
                        <NavbarBrand className="mr-auto" href='/'>
                            <img src="assets/images/logo.png" height="30" width="41"alt="Nice Restaurant"/>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <Link className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg ">  Home</span>
                                    </Link>
                                </NavItem>

                                <NavItem>
                                    <Link className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg">  About Us</span>
                                    </Link>
                                </NavItem>

                                <NavItem>
                                    <Link className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg">  Menu</span>
                                    </Link>
                                </NavItem>

                                <NavItem>
                                    <Link className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg">  Contant Us</span>
                                    </Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
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