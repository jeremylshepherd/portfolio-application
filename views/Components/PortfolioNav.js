import React from "react";

var PortfolioNav = React.createClass({
  render: function() {
    let navList = this.props.auth ?
    (
        <ul className="nav navbar-nav navbar-right">
          <li><a href="/">Home</a></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/#portfolio">Portfolio</a></li>
          <li><a href="/#contact">Contact</a></li>
          <li><a href="/new">New</a></li>
          <li><a href="/delete">Delete</a></li>
        </ul>
    ):(
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
    );
    let authButton = this.props.auth ? 
      (<a href="/logout" className="btn btn-danger navbar-btn"><span className="fa fa-eject"/> Logout</a>):
      (<a href="/auth/github" className="btn btn-custom-darken"><span className="fa fa-github" alt="github logo"></span> Github</a>);
    let nav = this.props.showAuth ?
      (
        <ul className="nav navbar-nav navbar-right">
          <li>{authButton}</li>
        </ul> 
      ): navList;
    return(
      <nav className="navbar navbar-default navbar-fixed-top navbar-collapse">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              <h1 id="brand">Jeremy L. Shepherd</h1>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              {nav}
            </div>
          </div>
        </div>
      </nav>
    )
  }
});

module.exports = PortfolioNav;