import React from 'react';
import ReactDOM from "react-dom";
import PortfolioApp from "../views/Components/PortfolioApp.js";
import PortfolioMain from "../views/Components/PortfolioMain.js";
import ProjectPage from "../views/Components/ProjectPage.js";
import ProjectDeletePage from "../views/Components/ProjectDeletePage.js";
import { Router, Route, Link, browserHistory, hashHistory, IndexRoute } from 'react-router';
import $ from 'jquery';
import boostrap$ from 'bootstrap-jquery';

let app = document.getElementById('app');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={PortfolioApp} >
            <IndexRoute component={PortfolioMain}/>
            <Route path='new' component={ProjectPage} />
            <Route path='delete' component={ProjectDeletePage} />
        </Route>
    </Router>, 
    app
);