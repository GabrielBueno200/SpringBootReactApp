import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from "../Pages/Home";
import Customer from '../Pages/Customer';
import Pet from '../Pages/Pet';

const Routes:React.FC = () => 
    <Router>
        <Switch>
            <Route path="/customer/edit" component={Customer}/>
            <Route path="/customer/pet" component={Pet}/>
            <Route exact path="/" component={Home}/>
        </Switch>
    </Router>

export default Routes;