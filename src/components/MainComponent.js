import React, { Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import  Menu  from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import Home from './HomeComponent';
import {Routes, Route, Navigate, useParams, useLocation } from 'react-router-dom';
import Contact from './ContantComponent';
import { LEADERS } from '../shared/leaders';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import About from './AboutComponent';


class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      leaders: LEADERS,
      comments: COMMENTS,
      promotions: PROMOTIONS,
    };    
  }

  render() {
    const HomePage = () => {
        return (
            <Home 
            dish={this.state.dishes.filter((dish) => dish.featured)[0]}
            promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
            leader={this.state.leaders.filter((leader) => leader.featured)[0]}
            comment={this.state.comments.filter((comm) => comm.featured)[0]}
            />
        )
    }

    const  DishWithId = () => {
      let { dishId } = useParams();
      return (
          <DishDetail 
          dish={this.state.dishes.filter((dish) => dish.id === parseInt(dishId, 10))[0]} 
          comments={this.state.comments.filter((comment) => comment.dishId === parseInt(dishId, 10))}
          />
      )
  }


    return (
      <div>
        <Header/>
            <Routes>
                <Route path="/home" element={<HomePage/>}/>
                <Route exact path="/menu"  element={<Menu dishes={this.state.dishes}/>}/>
                <Route path="/menu/:dishId" element={<DishWithId />}/>
                <Route exact path="/contactus" element={<Contact/>}/>
                <Route exact path="/aboutus" element={<About leaders={this.state.leaders}/>}/>
                <Route path="/" element={<Navigate to ="/home" />}/>
            </Routes>
       <Footer/>
      </div>
    );
  }
 
}

export default Main;
