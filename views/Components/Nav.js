import React from "react";
import {Link} from 'react-router';

const Nav = (props) => {
    let navList = props.auth ?
    (
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/">Home</Link></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/#portfolio">Portfolio</a></li>
          <li><a href="/#contact">Contact</a></li>
          <li><a href="/new">New</a></li>
          <li><a href="/update">Update</a></li>
          <li><a href="/delete">Delete</a></li>
        </ul>
    ):(
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/">Home</Link></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
    );
    let authButton = props.auth ? 
      (<a href="/logout" className="btn btn-danger navbar-btn"><span className="fa fa-eject"/> Logout</a>):
      (<a href="/auth/github" className="btn btn-custom-darken"><span className="fa fa-github" alt="github logo"></span> Github</a>);
    let nav = props.showAuth ?
      (
        <ul className="nav navbar-nav navbar-right">
          <li>{authButton}</li>
        </ul> 
      ): navList;
    return (
        <nav className="navbar navbar-default navbar-fixed-top navbar-collapse">
            <div className="container-fluid">
                <div className="row">
                    <div className="navbar-header">
                        <button
                            type="button"
                            className="navbar-toggle collapsed"
                            data-toggle="collapse"
                            data-target="#right-nav"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar ib-top" />
                            <span className="icon-bar ib-mid" />
                            <span className="icon-bar ib-bot" />
                        </button>
                        <span className="navbar-brand">Jeremy L. Shepherd</span>
                    </div>
                    <div className="collapse navbar-collapse" id="right-nav">
                        <ul className="nav navbar-nav navbar-right">
                            {nav}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

module.exports = Nav;