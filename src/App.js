import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Order from './containers/Orders/Orders';



class App extends Component {
  render() {
    return (
      
        <Layout>
          <Switch>

            <Route path="/" exact component={BurgerBuilder}/>
            <Route path="/orders" component={Order} />
            <Route path="/checkout" component={Checkout}/>
          </Switch>
          
        </Layout>
      
      
      
    );
  }
}

export default App;
