import React, { Component } from 'react';
import { Control, Errors, LocalForm } from 'react-redux-form';
import { Link } from 'react-router-dom';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Label, Row, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class  CommentForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleSubmit(values){
       this.toggleModal();
       this.props.postComment(this.props.dishId, values.rating, values.name, values.comment);
    }

    render() {
        return (
            <div>
            <Button outline onClick={this.toggleModal}>
                <span className="fa fa-pencil fa-lg"></span> Submit Comment
            </Button>

            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody className="mx-2">
                    <LocalForm onSubmit={this.handleSubmit}>
                        <Row className="form-group">
                            <Label htmlFor="rating">Rating</Label>
                            <Control.select model=".rating" id="rating" name="rating"
                                className='form-control'>
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                </Control.select>
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="name">Your Name</Label>
                            <Control.text model=".name" id="name" name="name"
                                className="form-control"
                                validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                />

                                <Errors
                                    className="text-danger"
                                    model=".name"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 numbers',
                                        maxLength: 'Must be 15 numbers or less',
                                    }}
                                    />
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="name">Comment</Label>
                            <Control.textarea rows={6} model=".comment" id="comment" name="comment"
                                className="form-control"
                                />
                        </Row>
                        <Button type="submit" value="submit" color='primary'>Submit</Button>
                    </LocalForm>
                </ModalBody>
            </Modal>
            </div>
        )
    }
}

   function  RenderDish({dish}){
   
        return (
        <div className="col-12 col-md-5 m-1">
             <FadeTransform in 
            transformProps={{
                exitTransform: 'scale(0.5) translateY(-50%)'
            }}>
                <Card>
                    <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        </div>
        )
    }

   function RenderComments({comment, postComment, dishId}){
        const mystyle = {
            paddingLeft: 0,
            listStyle: 'none'
          };

        if(comment != null){
            const listItems = comment.map(comm =>
                <Fade in>
                    <li key={comm.id}>
                    <p>{comm.comment}</p>
                    <p>--{comm.author}, {comment.date}</p>
                    {/* {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} */}

                    </li>
                </Fade>
              );
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments here</h4>
                    <ul style ={mystyle}>{listItems}</ul>
                    <Stagger in>
                        <CommentForm dishId={dishId} postComment={postComment}/>
                    </Stagger>
                </div>
            );
        }
        else {
            return (
                <div></div>
            )
        }
    }


    const DishDetail = (props) => {
        if(props.isLoading){
            return(
                <div className="container">
                    <div className="row">
                        <Loading/>
                    </div>
                </div>
               
            )
        }
        else if (props.errMess){
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
               
            )
        }
        else if(props.dish != null) 
            // console.log(props.dish);
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb> 
                        <BreadcrumbItem><Link to="/home">Home</Link> </BreadcrumbItem>
                        <BreadcrumbItem><Link to="/menu">Menu</Link> </BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name} </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} /> 
                    <RenderComments  comment={props.comments}
                    postComment={props.postComment}
                    dishId={props.dish.id} />
                </div>
            </div>
        );
        else 
            return(
                <div></div>
            )
          
    }


export default DishDetail;

