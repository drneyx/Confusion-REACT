import React, { Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{

    componentDidMount(){
        // console.log('Did mount renderd');
    }

    componentDidUpdate(){
        // console.log('Did update renderd');
    }


    renderDish(dish){
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
    renderComments(comment){
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


    render() {
        if(this.props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish.comments)}
                </div>
            </div>
        )
        }else{
            <div></div>
        }
    }
}

export default DishDetail;

