import React, { Fragment, Component } from 'react';
//import {withRouter} from 'react-router-dom';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import Details from './components/Details';
import NotFound from './components/NotFound';
import ProductList from './components/ProductList';
import Modal from './components/Modal'

//Import routes


class App extends Component {
  render() {
    return (
      <Fragment>
          <Navbar />
          <Switch>
          <Route exact path="/" component={ProductList} />
            <Route  path="/details" component={Details} />
            <Route  path="/cart" component={Cart} />
            
            
          </Switch>
          <Modal/>
      </Fragment>
    );
  }
}

export default App;
//<Route component={NotFound} />