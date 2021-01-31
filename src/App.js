import React, {Component} from 'react';
// import { Counter } from './features/counter/Counter';

import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Overview from './Components/Overview';
import Meals from './Components/Meals';
import Category from './Components/Category';
import Extras from './Components/Extras';
import User from './Components/User';
import Orders from './Components/Orders';
import Wallet from './Components/Wallet';
import Dispatch from './Components/Dispatch';
import Login from './Components/Login';
import PublicRoute from './route/publicRoute';
import firebase from "./Components/firebase"
import { connect } from 'react-redux';
import PrivateRoute from './route/privateRoute';
// import Login from './Components/Login';


class App extends Component{
  componentDidMount(){
    
    firebase.auth.onAuthStateChanged(async(user)=>{
        try{
            await firebase.getUserDetails(user.uid)
            .then(userData=>{
                this.props.dispatch({type:'GET_PHOTO', payload:{photoURL:user.photoURL}})
                
                if(userData.role === 3)
                this.props.dispatch({type:'RETRIVE_USER', payload:{user,userData}})

                this.props.dispatch({type:'SET_STATE', payload:{initializing:false}})
                firebase.getCategories().onSnapshot(data=>{
                  const categories = []
                  data.forEach(doc=>categories.push({...doc.data(), id:doc.id}))
                  this.props.dispatch({type:'GET_CATEGORIES', payload:{categories}})
              })
              firebase.getMeals().onSnapshot(data=>{
                const meals = []
                data.forEach(doc=>meals.push({...doc.data(), id:doc.id}))
                this.props.dispatch({type:'GET_MEALS', payload:{meals}})
              })
              firebase.geExtras().onSnapshot(data=>{
                const extras = []
                data.forEach(doc=>extras.push({...doc.data(), id:doc.id}))
                this.props.dispatch({type:'GET_EXTRAS', payload:{extras}})
              })
              firebase.getUsers().onSnapshot(data=>{
                const users = []
                data.forEach(doc=>users.push({...doc.data(), id:doc.id}))
                this.props.dispatch({type:'GET_USERS', payload:{users}})
              })
              firebase.getOrders().onSnapshot(data=>{
                const orders = []
                let sales = 0;
                let deli = 0
                let vat = 0
                data.forEach(doc=>{
                  sales += (doc.data().totalAmount)
                  deli +=doc.data().delivery
                  vat +=doc.data().vat
                  orders.push({...doc.data(), id:doc.id})
                })
                this.props.dispatch({type:'GET_ORDERS', payload:{orders,sales,deli,vat}})
              })
              firebase.getDispatchers().onSnapshot(data=>{
                const dispatchers = []
                data.forEach(doc=>dispatchers.push({...doc.data(), id:doc.id}))
                this.props.dispatch({type:'GET_DISPATCHERS', payload:{dispatchers}})
              })
                
            })
        }
        catch(e){
          this.props.dispatch({type:'RETRIVE_USER', payload:{user:null, userData:null}})
          this.props.dispatch({type:'SET_STATE', payload:{initializing:false}})
        }
        // if(user){


        //     dispatch({type:'RETRIVE_USER', payload:{user}})
        // }
        // else{
        //     dispatch({type:'RETRIVE_USER', payload:{user:null, userData:null}})
        // }
    })
}
render(){
  return (
    
    <Router>
      <Switch>

        <PrivateRoute exact path='/overview' component={Overview}/>
        <PrivateRoute exact path='/meals' component={Meals}/>
        <PrivateRoute exact path='/category' component={Category}/>
        <PrivateRoute exact path='/extras' component={Extras}/>
        <PrivateRoute exact path='/user' component={User}/>
        <PrivateRoute exact path='/orders' component={Orders}/>
        <PrivateRoute exact path='/wallet' component={Wallet}/>
        <PrivateRoute exact path='/dispatch' component={Dispatch}/>

        <PublicRoute exact component={Login} path='/' />
      </Switch>
    </Router>
    
  )
}
}

export default connect()(App);
