import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button, Col, Form, FormFeedback, FormGroup, Input, Label, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

class  Contact extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        console.log("Current state is: " + JSON.stringify(this.state))
        alert("Current state is: " + JSON.stringify(this.state))
        event.preventDefault();

    }



    render(){
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link> </BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us </BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact Us</h3>
                     <hr/>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>

            <div className="row row-content">
                <div className="col-12">
                    <h3>Send us Your Feedback</h3>
                </div>

                <div className="col-12 col-md-9">
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="firstName" md={2}>First Name</Label>
                            <Col md={10}>
                                <Input type="text" id="firstName" name="firstName" placeholder='First Name' 
                                       value={this.state.firstName} 
                                       valid={errors.firstName === ''}
                                       invalid={errors.firstName !== ''}
                                       onChange={this.handleInputChange} 
                                       onBlur={this.handleBlur('firstName')}/>
                                <FormFeedback>{errors.firstName}</FormFeedback>
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="lastName" md={2}>Last Name</Label>
                            <Col md={10}>
                                <Input type="text" id="lastName" name="lastName" placeholder='Last Name' 
                                       value={this.state.lastName} 
                                       valid={errors.lastName === ''}
                                       invalid={errors.lastName !== ''}
                                       onChange={this.handleInputChange} 
                                       onBlur={this.handleBlur('lastName')}/>
                                <FormFeedback>{errors.lastName}</FormFeedback>
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                            <Col md={10}>
                                <Input type="tel" id="telnum" name="telnum" placeholder='Tel. Number' 
                                       value={this.state.telnum} 
                                       valid={errors.telnum === ''}
                                       invalid={errors.telnum !== ''}
                                       onChange={this.handleInputChange} 
                                       onBlur={this.handleBlur('telnum')}/>
                                <FormFeedback>{errors.telnum}</FormFeedback>
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={10}>
                                <Input type="email" id="email" name="email" placeholder='Email'
                                       value={this.state.email} 
                                       valid={errors.email === ''}
                                       invalid={errors.email !== ''}
                                       onChange={this.handleInputChange} 
                                       onBlur={this.handleBlur('email')}/>
                                <FormFeedback>{errors.email}</FormFeedback>
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Col md={{size: 6, offset: 2}} >
                                <FormGroup check>
                                    <Label check></Label>
                                    <Input type="checkbox" name="agree" checked={this.state.agree} onChange={this.handleInputChange}/> {' '}
                                    <strong>May we contact you?</strong>
                                </FormGroup>
                            </Col>
                            <Col md={{size: 3, offset: 1}} >
                                <Input type="select" name="contactType" value={this.state.contactType} onChange={this.handleInputChange}>
                                    <option>Tel.</option>
                                    <option>Email</option>
                                </Input> 
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="message" md={2}>Your Feedback</Label>
                            <Col md={10}>
                                <Input type="textarea" id="message" name="message"  rows="12" value={this.state.message} onChange={this.handleInputChange}/>
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Col md={{size:10, offset:2}}>
                                <Button type="submit" color="primary">Send Feedback</Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </div>
            </div>
        </div>
    );}}

export default Contact;