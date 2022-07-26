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
import { postComment, fetchComments, fetchDishes, fetchPromos, fetchLeaders, postFeedback } from '../redux/ActionCreaters';
import { actions } from 'react-redux-form';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  }
}
 
const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  postFeedback: (firstname, lastname, telnum, email, agree, contactType, message) => dispatch(postFeedback(firstname, lastname, telnum, email, agree, contactType, message)),
  fetchDishes: () => {dispatch(fetchDishes())},
  resetFeedbackForm: () => {dispatch(actions.reset('feedback'))},
  fetchComments: () => {dispatch(fetchComments())},
  fetchPromos: () => {dispatch(fetchPromos())},
  fetchLeaders: () => {dispatch(fetchLeaders())},
})

class Main extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }

  render() {
    const HomePage = () => {
        return (
            <Home 
            dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
            dishesLoading={this.props.dishes.isLoading}
            dishErrMess={this.props.dishes.errMess}
            promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
            promosLoading={this.props.promotions.isLoading}
            promosErrMess={this.props.promotions.errMess}
            leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
            leadersLoading={this.props.leaders.isLoading}
            leadersErrMess={this.props.leaders.errMess}
           
            />
        )
    }

    const  DishWithId = () => {
      let { dishId } = useParams();
      return (
          <DishDetail 
          dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(dishId, 10))[0]} 
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(dishId, 10))}
          commentserrMess={this.props.comments.errMess}
          postComment={this.props.postComment}
          />
      )
  }


    return (
        <div>
            <Header/>
                <Routes>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route exact path="/menu"  element={<Menu dishes={this.props.dishes}/>}/>
                    <Route path="/menu/:dishId" element={<DishWithId />}/>
                    <Route exact path="/contactus" element={<Contact postFeedback={this.props.postFeedback} />}/>
                    <Route exact path="/aboutus" element={<About leaders={this.props.leaders.leaders}/>}/>
                    <Route path="/" element={<Navigate to ="/home" />}/>
                </Routes>
            <Footer/> 
        </div>
    );
  }
 
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
