import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Impot the components
import Cart from './components/Cart/Cart';
import Details from './components/Details';
import NotFound from './components/NotFound';
import ProductList from './components/ProductList';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={ProductList} />
                <Route exact path="/details" component={Details} />
                <Route exact path="/cart" component={Cart} />

                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default Routes;