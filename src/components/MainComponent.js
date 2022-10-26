import React, { Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import  Menu  from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import Home from './HomeComponent';
import {Routes, Route, Navigate } from 'react-router-dom';


class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
    };    
  }

  render() {
    const HomePage = () => {
        return (
            <Home/>
        )
    }

    return (
      <div>
        <Header/>
            <Routes>
                <Route path="/home" element={<HomePage/>}/>
                <Route exact path="/dishes"  element={<Menu dishes={this.state.dishes}/>}/>
                <Route path="/" element={<Navigate to ="/home" />}/>
            </Routes>
       <Footer/>
      </div>
    );
  }
 
}

export default Main;
