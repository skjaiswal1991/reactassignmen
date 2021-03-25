import React, { Component } from 'react';
import { Navbar,Container,Row,Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './header.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <div className="top-bar">
                    <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6 d-md-block d-none">
                        <p>React Assignment</p>
                        </div>
                        <div className="col-md-6">
                        <div className="d-flex justify-content-md-end justify-content-between">
                            <ul className="list-inline contact-info d-block d-md-none">
                            <li className="list-inline-item"><a href="#"><i className="fa fa-phone"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fa fa-envelope"></i></a></li>
                            </ul>
                            <div className="login">
                                <Link to={'/invoice'} className="login-btn">
                                    Invoice
                                </Link>
                                <Link to={'/'} className="signup-btn">
                                    Users
                                </Link>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
           

            </>

            
         );
    }
}
 
export default Header;