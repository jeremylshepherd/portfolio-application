import React from 'react';
import ReactDOM from "react-dom";
import PortfolioApp from "../views/Components/PortfolioApp.js";
import Main from "../views/Components/Main.js";
import ProjectPage from "../views/Components/ProjectPage.js";
import ProjectsUpdate from "../views/Components/ProjectsUpdate.js";
import ProjectUpdatePage from "../views/Components/ProjectUpdatePage.js";
import ProjectDeletePage from "../views/Components/ProjectDeletePage.js";
import { Router, Route, Link, browserHistory, hashHistory, IndexRoute } from 'react-router';
import $ from 'jquery';
import boostrap$ from 'bootstrap-jquery';

let app = document.getElementById('app');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={PortfolioApp} >
            <IndexRoute component={Main}/>
            <Route path='new' component={ProjectPage} />
            <Route path='delete' component={ProjectDeletePage} />
            <Route path='update' component={ProjectsUpdate} />
            <Route path=':id' component={ProjectUpdatePage} />
        </Route>
    </Router>, 
    app
);