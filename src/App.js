import React from 'react';
import Layout from './Components/Layout';
// import { Counter } from './features/counter/Counter';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Overview from './Components/Overview';
import Meals from './Components/Meals';
import Category from './Components/Category';
import Extras from './Components/Extras';
import User from './Components/User';
import Orders from './Components/Orders';
import Wallet from './Components/Wallet';
import Dispatch from './Components/Dispatch';


const App = () => {
  return (
    // <Layout>
    //   <Overview />      
    // </Layout>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Layout>
            <Overview />
          </Layout>
        </Route>
        <Route path='/meals'>
          <Layout>
              <Meals/>
          </Layout>
        </Route>
        <Route path='/category'>
          <Layout>
              <Category/>
          </Layout>
        </Route>
        <Route path='/extras'>
          <Layout>
              <Extras/>
          </Layout>
        </Route>
        <Route path='/user'>
          <Layout>
              <User/>
          </Layout>
        </Route>
        <Route path='/orders'>
          <Layout>
              <Orders />
          </Layout>
        </Route>
        <Route path='/wallet'>
          <Layout>
              <Wallet />
          </Layout>
        </Route>
        <Route path='/dispatch'>
          <Layout>
              <Dispatch />
          </Layout>
        </Route>
      </Switch>
    </Router>
    
  )
}

export default App;
