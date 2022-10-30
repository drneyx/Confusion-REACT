import React, { Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import  Menu  from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent';
import Home from './HomeComponent';
import {Routes, Route, Navigate, useParams, useLocation} from 'react-router-dom';
import Contact from './ContantComponent';
import About from './AboutComponent';
import { connect } from 'react-redux';
import withRouter from '../util/withRouter';


const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leader: state.leader,
  }
}

class Main extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const HomePage = () => {
        return (
            <Home 
            dish={this.props.state.dishes.filter((dish) => dish.featured)[0]}
            promotion={this.props.state.promotions.filter((promo) => promo.featured)[0]}
            leader={this.props.state.leaders.filter((leader) => leader.featured)[0]}
            comment={this.props.state.comments.filter((comm) => comm.featured)[0]}
            />
        )
    }

    const  DishWithId = () => {
      let { dishId } = useParams();
      return (
          <DishDetail 
          dish={this.props.state.dishes.filter((dish) => dish.id === parseInt(dishId, 10))[0]} 
          comments={this.props.state.comments.filter((comment) => comment.dishId === parseInt(dishId, 10))}
          />
      )
  }


    return (
        <div>
            <Header/>
                <Routes>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route exact path="/menu"  element={<Menu dishes={this.props.state.dishes}/>}/>
                    <Route path="/menu/:dishId" element={<DishWithId />}/>
                    <Route exact path="/contactus" element={<Contact/>}/>
                    <Route exact path="/aboutus" element={<About leaders={this.props.state.leaders}/>}/>
                    <Route path="/" element={<Navigate to ="/home" />}/>
                </Routes>
            <Footer/>
        </div>
    );
  }
 
}

export default withRouter(connect(mapStateToProps)(Main));
