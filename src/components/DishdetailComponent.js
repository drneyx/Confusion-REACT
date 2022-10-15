import React, { Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{

    componentDidMount(){
        console.log('Did mount renderd');
    }

    renderComments(comment){
        const mystyle = {
            paddingLeft: 0,
            listStyle: 'none'
          };

        if(comment != null){
            const listItems = comment.map(comm =>
                <li>
                   <p>{comm.comment}</p>
                   <p>--{comm.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day:'2-digit'}).format(new Date.parse(comm.date))}</p>

                </li>
              );
            return <ul style ={mystyle}>{listItems}</ul>;
        }
        else {
            return (
                <div></div>
            )
        }
    }


    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name}/>
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>

                <div className="col-12 col-md-5 m-1">
                    <h4>Comments here</h4>
                    {this.renderComments(this.props.dish.comments)}
                </div>
            </div>
            
        )
    }
}

export default DishDetail;

