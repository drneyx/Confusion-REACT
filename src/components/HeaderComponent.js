import React, { Component} from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href='/'>Nice Con Fusion</NavbarBrand>
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