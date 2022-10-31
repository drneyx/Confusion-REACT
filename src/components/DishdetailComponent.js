import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';



class  CommentForm extends Component{

    constructor(props){
        super(props);
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

