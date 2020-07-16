import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";

import App from "./App";
import EachRecipe from "./EachRecipe";
import History from './History';

//Router use to route to EachRecipe.js page (show detail of selected recipe) and History.js page (show search history table)

const Router = () => (
    <BrowserRouter>
        <Switch>
        <Route path="/" component={App} exact/>
        <Route path="/eachrecipe/:id" component={EachRecipe} />
        <Route path="/history" component={History}/> 
        </Switch>
    </BrowserRouter>
);

export default Router;