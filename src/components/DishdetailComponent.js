import React, { Component } from 'react';
import { Control, LocalForm } from 'react-redux-form';
import { Link } from 'react-router-dom';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Label, Row, Modal, ModalHeader, ModalBody } from 'reactstrap';



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

    handleSubmit(event){
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value + " Remember: " + this.remember.checked);
        event.preventDefault();
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
                            <Label htmlFor="username">Rating</Label>
                            <Control.select model=".rating" id="rating" name="rating"
                                className='form-control'
                                />
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="name">Your Name</Label>
                            <Control.text model=".name" id="name" name="name"
                                className="form-control"
                                />
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="name">Comment</Label>
                            <Control.textarea model=".comment" id="comment" name="comment"
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
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
        )
    }

   function RenderComments({comment}){
        const mystyle = {
            paddingLeft: 0,
            listStyle: 'none'
          };

        if(comment != null){
            const listItems = comment.map(comm =>
                <li key={comm.id}>
                   <p>{comm.comment}</p>
                   <p>--{comm.author}, {comment.date}</p>
                   {/* {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} */}

                </li>
              );
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments here</h4>
                    <ul style ={mystyle}>{listItems}</ul>
                    <CommentForm/>
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
        if(props.dish != null) {
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
                    <RenderComments  comment={props.comments} />
                </div>
            </div>
        )
        }else{
            <div></div>
        }
    }


export default DishDetail;

